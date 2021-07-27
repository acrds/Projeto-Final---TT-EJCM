const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Product_ShopList = sequelize.define('Product_ShopList', {
    quantity: {
        type: DataTypes.INTEGER
    }

}, {
    // timestamps: false
});

// Product_ShopList.associate = function(models) {
// }

module.exports = Product_ShopList;
