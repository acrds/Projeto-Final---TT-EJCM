const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Review = sequelize.define('Review', {
    score: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    comment: {
        type: DataTypes.STRING
    }

}, {
    // timestamps: false
});

Review.associate = function(models) {
    Review.belongsTo(models.User);
    Review.belongsTo(models.Product);
}

module.exports = Review;