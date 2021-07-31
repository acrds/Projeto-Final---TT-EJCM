const {response} = require ('express');
const ShopList = require('../models/ShopList');

const create = async(req,res) => {
    try{
          const list = await ShopList.create(req.body);
          return res.status(201).json({message: "Carrinho cadastrado com sucesso!", ShopList: list});
      }catch(err){
          res.status(500).json({error: err, message: "Erro ao criar novo Carrinho."});
      }
};

const index = async(req,res) => {
    try {
        const list = await ShopList.findAll();
        return res.status(200).json({message: "Carrinhos encontrados.", list});
    }catch(err){
        return res.status(500).json({err, message: "Carrinhos não encontrados."});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const list = await ShopList.findByPk(id);
        return res.status(200).json({message: "Carrinho encontrado.", list});
    }catch(err){
        return res.status(500).json({err, message: "Carrinho não encontrado."});
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await ShopList.update(req.body, {where: {id: id}});
        if(updated) {
            const list = await ShopList.findByPk(id);
            return res.status(200).send(list);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Erro ao tentar atualizar informações de um Carrinho.");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await ShopList.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Carrinho deletado com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Carrinho não encontrado.");
    }
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy
};