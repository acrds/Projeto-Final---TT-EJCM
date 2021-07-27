const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Sale = sequelize.define('Sale', {
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    payment_method: {
        type: DataTypes.STRING
    },

    userID: {
        type: DataTypes.INTEGER
    },

    products: {
        type: DataTypes.STRING
    },

    payment_method: {
        type: DataTypes.STRING
    }

}, {
    // timestamps: false
});

Sale.associate = function(models) {
    Sale.belongsTo(models.ShopList);
}

module.exports = Sale;