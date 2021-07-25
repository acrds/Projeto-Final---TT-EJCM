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
    // ShopList.belongsTo(models.User);
    // ShopList.belongsTo(models.Product);
}

module.exports = ShopList;