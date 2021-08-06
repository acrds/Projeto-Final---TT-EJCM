const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Review = sequelize.define('Review', {
    comment: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    // timestamps: false
});

Review.associate = function(models) {
    Review.belongsTo(models.User);
    Review.belongsTo(models.Product);
}

module.exports = Review;