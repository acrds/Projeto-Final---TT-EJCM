require('../../config/dotenv')();
require('../../config/sequelize');

const seedUser = require('./UserSeeder');
const seedPartyType = require('./PartyTypeSeeder');
const seedProduct = require('./ProductSeeder');
const seedReview = require('./ReviewSeeder');
const sequelize = require('../../config/sequelize');
const seedSale = require('./SaleSeeder');
const seedShoplist = require('./ShopListSeeder');

(async () => {
  try {
    await sequelize.sync({ force: true });

    await seedUser();
    await seedPartyType();
    await seedProduct();
    await seedReview();
    await seedShoplist();
    await seedSale();

  } catch(err) { console.log(err) }
})();