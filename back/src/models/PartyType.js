const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const PartyType = sequelize.define('PartyType', {
    name: {
        type: DataTypes.STRING
    }

}, {
    // timestamps: false
});

PartyType.associate = function(models) {
    PartyType.belongsToMany(models.Product, {through: 'product_partytype', foreignKey: 'partyTypeID'})
}

module.exports = PartyType;