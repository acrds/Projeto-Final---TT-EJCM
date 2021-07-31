const {response} = require ('express');
const Category = require('../models/Category');

const create = async(req,res) => {
    try{
          const category = await Category.create(req.body);
          return res.status(201).json({message: "Categoria cadastrada com sucesso!", Category: category});
      }catch(err){
          res.status(500).json({error: err, message: "Erro ao criar nova Categoria."});
      }
};

const index = async(req,res) => {
    try {
        const categories = await Category.findAll();
        return res.status(200).json({message: "Categorias encontradas.", categories});
    }catch(err){
        return res.status(500).json({err, message: "Categorias não encontradas."});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const category = await Category.findByPk(id);
        return res.status(200).json({message: "Categoria encontrada.", category});
    }catch(err){
        return res.status(500).json({err, message: "Categoria não encontrada."});
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await Category.update(req.body, {where: {id: id}});
        if(updated) {
            const category = await Category.findByPk(id);
            return res.status(200).send(category);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Erro ao tentar atualizar informações de uma Categoria.");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Category.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Categoria deletada com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Categoria não encontrada.");
    }
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy
};