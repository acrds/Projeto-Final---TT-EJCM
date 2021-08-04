require('../../config/dotenv')();
require('../../config/sequelize');

const seedUser = require('./UserSeeder');
const seedPartyType = require('./PartyTypeSeeder');
const seedProduct = require('./ProductSeeder');
const seedReview = require('./ReviewSeeder');

(async () => {
  try {
    await seedUser();
    await seedPartyType();
    await seedProduct();
    await seedReview();

  } catch(err) { console.log(err) }
})();
