const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Question = sequelize.define('Question', {
    question: {
        type: DataTypes.STRING,
        allowNull: false
    },

    answer: {
        type: DataTypes.STRING
    }

}, {
    // timestamps: false
});

Question.associate = function(models) {
    Question.belongsTo(models.User, {as: 'userAnswersQuestion'});
    Question.belongsTo(models.User, {as: 'userMakesQuestion'});
    Question.belongsTo(models.Product)
}

module.exports = Question;