const {response} = require ('express');
const Sale = require('../models/Sale');

const create = async(req,res) => {
    try{
          const sale = await Sale.create(req.body);
          return res.status(201).json({message: "Venda cadastrada com sucesso!", Sale: sale});
      }catch(err){
          res.status(500).json({error: err, message: "Erro ao criar nova Venda."});
      }
};

const index = async(req,res) => {
    try {
        const sale = await Sale.findAll();
        return res.status(200).json({message: "Vendas encontradas.", sale});
    }catch(err){
        return res.status(500).json({err, message: "Vendas não encontradas."});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const sale = await Sale.findByPk(id);
        return res.status(200).json({message: "Venda encontrada.", sale});
    }catch(err){
        return res.status(500).json({err, message: "Venda não encontrada."});
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await Sale.update(req.body, {where: {id: id}});
        if(updated) {
            const sale = await Sale.findByPk(id);
            return res.status(200).send(sale);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Erro ao tentar atualizar informações de uma Venda.");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Sale.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Venda deletada com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Venda não encontrada.");
    }
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy
};