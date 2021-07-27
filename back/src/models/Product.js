const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    description: {
        type: DataTypes.STRING
    },

    score: {
        type: DataTypes.FLOAT
    },

    photo: {
        type: DataTypes.STRING
    }

}, {
    // timestamps: false
});

Product.associate = function(models) {
    Product.hasMany(models.Review);
    Product.belongsToMany(models.User, {through: 'favorite_list', foreignKey: 'productId', otherKey: 'userId'})
    Product.hasMany(models.Question);
    Product.belongsToMany(models.PartyType, {through: 'product_partytype', foreignKey: 'productId'});
    Product.belongsTo(models.Category);
    Product.belongsToMany(models.ShopList, {through: models.Product_ShopList, foreignKey: 'productId', otherKey: 'shopListId'});
    Product.belongsTo(models.User)
}

module.exports = Product;