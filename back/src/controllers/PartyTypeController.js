const {response} = require ('express');
const PartyType = require('../models/PartyType');

const create = async(req,res) => {
    try{
          const partyType = await PartyType.create(req.body);
          return res.status(201).json({message: "Party Type cadastrada com sucesso!", PartyType: partyType});
      }catch(err){
          res.status(500).json({error: err, message: "Erro ao criar nova Party Type."});
      }
};

const index = async(req,res) => {
    try {
        const partyTypes = await PartyType.findAll();
        return res.status(200).json({message: "Party Types encontradas.", partyTypes});
    }catch(err){
        return res.status(500).json({err, message: "Party Types não encontradas."});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const partyType = await PartyType.findByPk(id);
        return res.status(200).json({message: "Party Type encontrada.", partyType});
    }catch(err){
        return res.status(500).json({err, message: "Party Type não encontrada."});
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await PartyType.update(req.body, {where: {id: id}});
        if(updated) {
            const partyType = await PartyType.findByPk(id);
            return res.status(200).send(partyType);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Erro ao tentar atualizar informações de uma Party Type.");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await PartyType.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Party Type deletada com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Party Type não encontrada.");
    }
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy
};
