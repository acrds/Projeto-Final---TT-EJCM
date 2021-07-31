const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const ShopList = sequelize.define('ShopList', {
    
    price: {
        type: DataTypes.FLOAT,
        defaultValue: 0.00
    }
    

}, {
    // timestamps: false
});

ShopList.associate = function(models) {
    ShopList.belongsTo(models.User);
    ShopList.belongsToMany(models.Product, {through: models.Product_ShopList, foreignKey: 'shopListId', otherKey: 'productId'});
    ShopList.hasOne(models.Sale);
}

module.exports = ShopList;