const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const ShopList = sequelize.define('ShopList', {
    
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    payment_method: {
        type: DataTypes.STRING
    }

}, {
    // timestamps: false
});

ShopList.associate = function(models) {
    ShopList.belongsTo(models.User);
    ShopList.belongsToMany(models.Product, {through: models.Product_ShopList});
    ShopList.hasMany(models.Sale);
}

module.exports = ShopList;