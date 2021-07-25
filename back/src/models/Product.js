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
        type: DataTypes.FLOAT,
        allowNull: false
    },

    photo: {
        type: DataTypes.STRING
    }

}, {
    // timestamps: false
});

Product.associate = function(models) {
    // Product.hasMany(models.Review);
    // Product.belongsToMany(models.Media, {through: 'watched', as: 'seen_list', foreignKey: 'productId'})
}

module.exports = Product;