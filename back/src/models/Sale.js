const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Sale = sequelize.define('Sale', {

}, {
    // timestamps: false
});

Sale.associate = function(models) {
    // Sale.belongsTo(models.User);
    // Sale.belongsTo(models.Product);
}

module.exports = Sale;