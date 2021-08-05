const { response } = require('express');
require('../config/dotenv')();

const ShopList = require('../models/ShopList');
const User = require('../models/User');
const Product = require('../models/Product');
const Auth = require("../config/auth");
const Product_ShopList = require('../models/Product_Shoplist');
const {validationResult} = require('express-validator');
const Photo = require('../models/Photo');
const fsPromise = require('fs').promises;
const path = require('path');
const mailer = require('../config/mail').mailer;
const readHtml = require("../config/mail").readHTMLFile;
const hbs = require("handlebars");


const create = async(req,res) => {
    try {
        const pathTemplate = path.resolve(__dirname, '..', '..', 'templates');
        console.log(pathTemplate);
        validationResult(req).throw(); 
        const { password } = req.body;
        const hashAndSalt = Auth.generatePassword(password);
        const salt = hashAndSalt.salt;
        const hash = hashAndSalt.hash;
        const newUserData = {
            email: req.body.email,
            hash: hash,
            salt: salt
        }
        const user = await User.create(newUserData);
        readHtml(path.join(pathTemplate, "cadastro.html"), (err,html)=>{
            const template = hbs.compile(html);
            const replacements = {
                email: user.email
            };
            const htmlToSend = template(replacements);
            const message = {
                from: "testeejcm21@gmail.com",
                to: user.email,
                subject: "Confirmação de Cadastro - Party's Place",
                html: htmlToSend
            }
            mailer.sendMail(message, (err) => {
                console.log(err + "!");
            });
        });
        return res.status(201).json(user);
    } catch (err) {
        return res.status(500).json(err + "!");
    }
};

const index = async(req,res) => {
    try {
        const users = await User.findAll();
        return res.status(200).json({message: "Usuários foram encontrados!", users});
    }catch(err){
        return res.status(500).json(err);
    }
};


const show = async(req,res) => {
    const {id} = req.params;
    try {
        const user = await User.findByPk(id);
        return res.status(200).json({message: "Usuário foi encontrado!", user});
    }catch(err){
        return res.status(500).json(err);
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    try {
        if (req.body.password){
            const { password } = req.body;
            const hashAndSalt = Auth.generatePassword(password);
            const salt = hashAndSalt.salt;
            const hash = hashAndSalt.hash;
            const updateUserData = {
                hash: hash,
                salt: salt,
                nickname: req.body.nickname,
                phone: req.body.phone,
                address: req.body.address,
                name: req.body.name,
                CPF_CNPJ: req.body.cpf_cnpj
            }
        
            const [updated] = await User.update(updateUserData, {where: {id: id}});
            if(updated) {
                const user = await User.findByPk(id);
                return res.status(200).send(user);
            } 
            throw new Error();
        }

        const [updated] = await User.update(req.body, {where: {id: id}});
        if(updated) {
            const user = await User.findByPk(id);
            return res.status(200).send(user);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Usuário não encontrado");
    }
};



const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await User.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Usuário deletado com sucesso!");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Usuario não encontrado.");
    }
};

const putOn = async(req,res) => {
    const {id} = req.params;
    try{
        const user = await User.findByPk(id);
        const product = await Product.findByPk(req.body.ProductId);
        const shopList = await user.getShopList();
        if(shopList) {
            shopList.addProduct(product);
            Product_ShopList.update({quantity: req.body.quantity},{where: {productId: product.id, shopListId: shopList.id}});
            await shopList.update({price: parseFloat(shopList.price) + (parseFloat(product.price) * parseFloat(req.body.quantity))});
            return res.status(200).json(shopList);
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Erro");
    }
};

const unputOn = async(req,res) => {
    const {id} = req.params;
    try{
        const product = await Product.findByPk(req.body.ProductId);
        const shopList = await ShopList.findOne({where: {userId: id} });
        const product_in_shopList = await Product_ShopList.findOne({where: {productId: product.id, shopListId: shopList.id}});
        if(shopList) {
           await shopList.update({price: parseFloat(shopList.price) - (parseFloat(product.price) * parseFloat(product_in_shopList.quantity))});
            Product_ShopList.destroy({where: {productId: product.id, shopListId: shopList.id}});
            return res.status(200).json(shopList);
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Erro");
    }
};



const updateQtdProduct = async(req,res) =>{
    const {id} = req.params;
    try {
        const product = await Product.findByPk(req.body.ProductId);
        const shopList = await ShopList.findOne({where: {userId: id} });
        const product_in_shopList = await Product_ShopList.findOne({where: {productId: product.id, shopListId: shopList.id}});
        if (shopList){
            Product_ShopList.update({quantity: req.body.quantity},{where: {productId: product.id, shopListId: shopList.id}});
            await shopList.update({price: parseFloat(shopList.price) + (parseFloat(product.price) * parseFloat(product_in_shopList.quantity - req.body.quantity))})
            return res.status(200).json(shopList);
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json(err + "!");
    }

};

const listedShop = async(req,res) => { 
    const {id} = req.params;
    try{
        const user = await User.findByPk(id);
        const putOn = await user.getShopList(); 
        return res.status(200).json(putOn);
    }catch(err){
        return res.status(500),json("Erro");
    }
};


const postProduct = async(req,res) => {
    const {id} = req.params;
    try{
        const user = await User.findByPk(id);
        const product = await Product.findByPk(req.body.ProductId);
        if(product) {
            await user.addProduct(product); 
            return res.status(200).json(user);
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Erro");
    }
};

const unpostProduct = async(req,res) => {
    const {id} = req.params;
    try{
        const user = await User.findByPk(id);
        const Product = await Product.findByPk(req.body.ProductId);
        if(product) {
            await user.removeProduct(product); 
            return res.status(200).json(user);
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Erro");
    }
};

const listPostedProducts = async(req,res) => { //listar produtos anunciados
    const {id} = req.params;
    try{
        const user = await User.findByPk(id);
        const postProduct = await user.getProducts(); 
        return res.status(200).json(postProduct);
    }catch(err){
        return res.status(500),json("Erro");
    }
};

const makeReview = async(req,res) => {
    const {id} = req.params;
    try{
        const user = await User.findByPk(id);
        const review = await User.findByPk(req.body.ReviewId);
        if(review) {
            await user.addReview(review); 
            return res.status(200).json(user);
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Erro");
    }
};

const unmakeReview = async(req,res) => {
    const {id} = req.params;
    try{
        const user = await User.findByPk(id);
        const review = await Review.findByPk(req.body.ReviewId); 
        if(review) {
            await user.removeReview(review); 
            return res.status(200).json(user);
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Erro");
    }
};

const listMadeReviews = async(req,res) => {
    const {id} = req.params;
    try{
        const user = await User.findByPk(id);
        const makeReview = await user.getReviews(); 
        return res.status(200).json(makeReview);
    }catch(err){
        return res.status(500),json("Erro");
    }
};

const favorite = async(req,res) => {
    const {id} = req.params;
    try{
        const user = await User.findByPk(id);
        const productFavorited = await Product.findByPk(req.body.productId);
        await user.addFavorite_product(productFavorited);
        return res.status(200).json(user);
    }catch(err){
        return res.status(500).json(err);
    }
};

const disfavor = async(req,res) => {
    const {id} = req.params;
    try{
        const user = await User.findByPk(id);
        const productFavorited = await Product.findByPk(req.body.productId);
        await user.removeFavorite_product(productFavorited);
        return res.status(200).json(user);
    }catch(err){
        return res.status(500).json(err);
    }
};

const listFavorited = async(req,res) => {
    const {id} = req.params;
    try{
        const user = await User.findByPk(id);
        const listFavoriteds = await user.getFavorite_product();
        return res.status(200).json(listFavoriteds);
    }catch(err){
        return res.status(500).json(err);
    }
};


const addPhotoUser = async(req, res) => {
	try {
		const {id} = req.params;
		const photoUser = await User.findByPk(id, {include:{model: Photo}});
		if(req.file){
			const path = process.env.APP_URL + "/uploads/" + req.file.filename;
			console.log("path");

			const photo = await Photo.create({
				path: path,
			});
			await photoUser.setPhoto(photo);
		}
		await photoUser.reload();
		return res.status(200).json(photoUser);
	} catch (e) {
		return res.status(500).json(e + "!");
	}
};


const removePhoto = async(req, res) => {
	try {
		const {id} = req.params;
		const photo  = await Photo.findByPk(id);
		const pathDb = photo.path.split("/").slice(-1)[0];
		await fsPromise.unlink(path.join(__dirname, "..", "..", "uploads", pathDb));
		await photo.destroy();
		return res.status(200).json("Foto deletada com sucesso");
	} catch (e) {
		return res.status(500).json(e + "!");
	}
};

const getPhotoUser = async(req,res) =>{

    try {
        const {id} =req.params;
        const user = await User.findByPk(id);
        const photo = await user.getPhoto();
        return res.status(200).json(photo.path);
    }catch (e) {
		return res.status(500).json(e + "!");
	}
};

module.exports = {
    create,
    index,
    show,
    update,
    destroy,
    putOn,
    unputOn,
    listedShop,
    postProduct,
    unpostProduct,
    listPostedProducts,
    makeReview,
    unmakeReview,
    listMadeReviews,
    favorite,
    disfavor, 
    listFavorited,
    updateQtdProduct,
    addPhotoUser,
    removePhoto,
    getPhotoUser
   
   
};
