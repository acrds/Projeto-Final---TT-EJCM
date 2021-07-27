const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Category = sequelize.define('Category', {
    name: {
        type: DataTypes.STRING
    }

}, {
    // timestamps: false
});

Category.associate = function(models) {
    Category.hasMany(models.Product);
}

module.exports = Category;