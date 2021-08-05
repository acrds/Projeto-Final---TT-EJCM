const ShopList = require("../../models/ShopList");
const Product = require("../../models/Product");
const faker = require('faker-br');

 const seedShopList = async function () {
   try {
     for (let i = 0; i < 10; i++) {
       let shopList = await ShopList.create({
         price: faker.random.float({min: 0, max: 10, precision: 0.01}),
         createdAt: new Date(),
         updatedAt: new Date()
       });
       let product = await Product.findByPk(i);
       shopList.addProduct(product);
     }

  } catch (err) { console.log(err); }
}

module.exports = seedShopList;

