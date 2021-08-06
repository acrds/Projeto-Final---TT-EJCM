const { response } = require('express');
const Product = require('../models/Product');
const Photo = require('../models/Photo');
require('../config/dotenv')();
const fsPromise = require('fs').promises;
const path = require('path');
const Review = require('../models/Review');


const index = async(req,res) => {
    try {
        const products = await Product.findAll();
        return res.status(200).json(products);
    }catch(err){
        return res.status(500).json({err});
    }
};


const show = async(req,res) => {
    const {id} = req.params;
    try {
        const product = await Product.findByPk(id);
        return res.status(200).json(product);
    }catch(err){
        return res.status(500).json({err});
    }
};

const create = async(req,res) => {
    try{
          const product = await Product.create(req.body);
          return res.status(201).json(product);
      }catch(err){
          res.status(500).json({error: err});
      }
};

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await Product.update(req.body, {where: {id: id}});
        if(updated) {
            const product = await Product.findByPk(id);
            return res.status(200).send(product);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Produto não encontrado");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Product.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Produto deletado com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Produto não encontrado.");
    }
};

const findByType = async(req,res) => {
    const {typeId} = req.params;
    try {
        const products = await Product.findAll({where: {partyTypeId: typeId}});
        return res.status(200).json(products);
    }catch(err){
        return res.status(500).json({err, message: "Produtos não encontrados."});
    }
};

const addRelationPartyType = async(req,res) => {
    const {id} = req.params;
    try {
        const product = await Product.findByPk(id);
        const partyType = await PartyType.findByPk(req.body.partyTypeId);
        await product.addPartyType(partyType);
        return res.status(200).json(product);
    }catch(err){
        return res.status(500).json({err});
    }
};

const removeRelationPartyType = async(req,res) => {
    const {id} = req.params;
    try {
        const product = await Product.findByPk(id);
        await product.setPartyType(null);
        return res.status(200).json(product);
    }catch(err){
        return res.status(500).json({err});
    }
};

const addPhotoProduct = async(req, res) => {
	try {
		const {id} = req.params;
		const product = await Product.findByPk(id, {include:{model: Photo}});
		if(req.file){
			const path = process.env.APP_URL + "/uploads/" + req.file.filename;
			console.log("path");

			const photo = await Photo.create({
				path: path,
			});
			await product.setPhoto(photo);
		}
		await product.reload();
		return res.status(200).json(product);
	} catch (e) {
		return res.status(500).json(e + "!");
	}
};

const removePhoto = async(req, res) => {
	try {
		const {id} = req.params;
        const product = await Product.findByPk(id);
		const photo  = await product.getPhoto();
		const pathDb = photo.path.split("/").slice(-1)[0];
		await fsPromise.unlink(path.join(__dirname, "..", "..", "uploads", pathDb));
		await photo.destroy();
		return res.status(200).json("Foto deletada com sucesso");
	} catch (e) {
		return res.status(500).json(e + "!");
	}
};

const getPhotoProduct = async(req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByPk(id);
		const photo  = await product.getPhoto();
        return res.status(200).json(photo.path);
    } catch (err){
        return res.status(500).json(e + "!");
    }
};

const getProductPoster = async(req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByPk(id);
		const user  = await product.getUser();
        return res.status(200).json(user);
    } catch (err){
        return res.status(500).json(e + "!");
    }
};

const getComments = async(req,res) => {
    try{
        const {id} = req.params;
		const comments  = await Review.findAll({where: {productId: id}});
        return res.status(200).json(comments);
    } catch (err){
        return res.status(500).json(e + "!");
    }
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
    addRelationPartyType,
    removeRelationPartyType,
    findByType,
    addPhotoProduct,
    removePhoto,
    getPhotoProduct,
    getProductPoster,
    getComments
};
