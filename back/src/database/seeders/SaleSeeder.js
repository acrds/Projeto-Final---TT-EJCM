const Sale = require("../../models/Sale");
const ShopList = require("../../models/ShopList");
const faker = require('faker-br');

 const seedSale = async function () {
   try {
     for (let i=0; i<10; i++) {
       let sale = await Sale.create({
         payment_method: faker.lorem.text(),
         shipping: faker.random.float({min: 0, max: 10, precision: 0.01}),
         createdAt: new Date(),
         updatedAt: new Date()
       });
       let shoplist = await ShopList.findByPk(i);
       sale.setShopList(shoplist);
     }

  } catch (err) { console.log(err); }
}

module.exports = seedSale;