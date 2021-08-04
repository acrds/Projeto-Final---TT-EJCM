const PartyType = require("../../models/PartyType");
const faker = require('faker-br');

 const seedPartyType = async function () {
   try {
     await PartyType.sync({ force: true });

     for (let i = 0; i < 10; i++) {

      let partyType = await PartyType.create({
        name: faker.lorem.words(2),
        createdAt: new Date(),
        updatedAt: new Date()
      });

    }

  } catch (err) { console.log(err +'!'); }
}

module.exports = seedPartyType;