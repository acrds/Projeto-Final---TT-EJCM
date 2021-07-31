const {response} = require ('express');
const Review = require('../models/Review');

const create = async(req,res) => {
    try{
          validationResult(req).throw();     
          if(req.body.userId && req.body.productId){
            const review = await Review.create(req.body);
            console.log(req.body); 
            return res.status(201).json({message: "Review cadastrada com sucesso!", Review: review});
          }   
          throw new Error();
      }catch(err){
          res.status(500).json({error: err, message: "Erro ao criar Review."});
      } 
};

const index = async(req,res) => {
    try {
        const reviews = await Review.findAll();
        return res.status(200).json({message: "Reviews encontradas.", reviews});
    }catch(err){
        return res.status(500).json({err, message: "Reviews não encontradas."});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const review = await Review.findByPk(id);
        return res.status(200).json({message: "Review encontrada.", review});
    }catch(err){
        return res.status(500).json({err, message: "Review não encontrada."});
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await Review.update(req.body, {where: {id: id}});
        if(updated) {
            const review = await Review.findByPk(id);
            return res.status(200).send(review);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Erro ao tentar atualizar informações de uma Review.");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Review.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Review deletada com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Review não encontrada.");
    }
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy
};
