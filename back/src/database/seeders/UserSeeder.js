const User = require("../../models/User");
const Auth = require("../../config/auth");
const faker = require('faker-br');

 const seedUser = async function () {
   try {
     await User.sync({ force: true });

     for (let i = 0; i < 10; i++) {

      const hashAndSalt = Auth.generatePassword('password'+i);
      const salt = hashAndSalt.salt;
      const hash = hashAndSalt.hash;

      let user = await User.create({
        email: faker.internet.email(),
        hash: hash,
        salt: salt,
        createdAt: new Date(),
        updatedAt: new Date()
      });

      await user.update({
          name: faker.name.firstName(),
          nickname: faker.internet.userName(),
          phone: faker.phone.phoneNumber(),
          address: faker.address.streetAddress(),
          CPF_CNPJ: faker.br.cpf()
      });

    }

  } catch (err) { console.log(err +'!'); }
}

module.exports = seedUser;