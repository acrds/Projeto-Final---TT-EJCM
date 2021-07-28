const {response} = require ('express');
const Question = require('../models/Question');

const create = async(req,res) => {
    try{
          const question = await Question.create(req.body);
          return res.status(201).json({message: "Question cadastrada com sucesso!", Question: question});
      }catch(err){
          res.status(500).json({error: err, message: "Erro ao criar Question."});
      }
};

const index = async(req,res) => {
    try {
        const questions = await Question.findAll();
        return res.status(200).json({message: "Questions encontradas.", questions});
    }catch(err){
        return res.status(500).json({err, message: "Questions não encontradas."});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const question = await Question.findByPk(id);
        return res.status(200).json({message: "Question encontrada.", question});
    }catch(err){
        return res.status(500).json({err, message: "Question não encontrada."});
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await Question.update(req.body, {where: {id: id}});
        if(updated) {
            const question = await Question.findByPk(id);
            return res.status(200).send(question);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Erro ao tentar atualizar informações de uma Question.");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Question.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Question deletada com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Question não encontrada.");
    }
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy
};
