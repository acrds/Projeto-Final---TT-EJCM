const {response} = require ('express');
const Product_ShopList = require('../models/Product_ShopList');
const Sale = require('../models/Sale');
const ShopList = require('../models/ShopList');
const User = require('../models/User');
const mailer = require('../config/mail').mailer;
const readHtml = require("../config/mail").readHTMLFile;
const path = require('path');
const hbs = require("handlebars");

const create = async(req,res) => {
    try{
          const shopList = await ShopList.create(req.body);
          const user = await User.findByPk(req.body.userId);
          await shopList.setUser(user);
          await user.setShopList(shopList);
          return res.status(201).json({message: "Carrinho cadastrado com sucesso!", ShopList: shopList});
      }catch(err){
          res.status(500).json({error: err + "!", message: "Erro ao criar novo Carrinho."});
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

const concludeSale = async(req,res) => {
    const {id} = req.params;
    try {
        const shopList = await ShopList.findByPk(id);
        const product_ShopLists = await Product_ShopList.findAll({where: {shopListId: id}});
        const price = await shopList.price;
        const sale = await Sale.create(
            {payment_method: req.body.payment_method, 
            shipping: req.body.shipping
        });
        await sale.setShopList(shopList);
		const user = await User.findByPk(shopList.UserId);
        const newShopList = await ShopList.create();
        await user.setShopList(newShopList);
        const pathTemplate = path.resolve(__dirname, '..', '..', 'templates');
		readHtml(path.join(pathTemplate, "concludedSale.html"), (err,html)=>{
			const template = hbs.compile(html);
			const replacements = {
				username: user.nickname,
                subtotal: price,
                shipping: sale.shipping,
                price: parseFloat(shopList.price) + parseFloat(sale.shipping)
			};
			const htmlToSend = template(replacements);
			const message = {
				from: "testeejcm21@gmail.com",
				to: user.email,
				subject: "Comprovante do pedido n°" + sale.id,
				html: htmlToSend
			}
			mailer.sendMail(message, (err) => {
				console.log(err + "!");
			});
		});
        return res.status(200).json(sale);
    }catch(err){
        return res.status(500).json(err + "!");
    }
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
    concludeSale
};