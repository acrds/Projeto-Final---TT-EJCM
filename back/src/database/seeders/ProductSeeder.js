const Product = require("../../models/Product");
const faker = require('faker-br');
const PartyType = require("../../models/PartyType");

 const seedProduct = async function () {
   try {
     await Product.sync({ force: true });

     for (let i = 0; i < 10; i++) {

      let product = await Product.create({
        name: faker.lorem.words(),
        price: faker.random.float({min: 0.00, max: 99.9, precision: 0.01}),
        description: faker.lorem.paragraph(),
        UserId: i+1,
        createdAt: new Date(),
        updatedAt: new Date()
      });

      const partyType = await PartyType.findByPk(i+1);

      product.addPartyType(partyType);

    }

  } catch (err) { console.log(err +'!'); }
}

module.exports = seedProduct;