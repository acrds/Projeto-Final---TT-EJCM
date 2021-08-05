require('../../config/dotenv')();
require('../../config/sequelize');

const sequelize = require('../../config/sequelize');
const seedSale = require('./SaleSeeder');
const seedShoplist = require('./ShopListSeeder');

(async () => {
  try {
    await sequelize.sync({ force: true });
    await seedShoplist();
    await seedSale();

  } catch(err) { console.log(err) }
})();