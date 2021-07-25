const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false
        //unique: true
    },

	hash: {
		type: DataTypes.STRING
	},

	salt: {
		type: DataTypes.STRING
	},

    name: {
        type: DataTypes.STRING
    },

    nickname: {
        type: DataTypes.STRING
    },

    phone: {
        type: DataTypes.STRING
    },

    address: {
        type: DataTypes.STRING
    },

    CPF_CNPJ: {
        type: DataTypes.STRING
        //unique: true
    },

    photo: {
        type: DataTypes.STRING
    },

    moderator: {
        type: DataTypes.BOOLEAN
    }

}, {
    // timestamps: false
});

User.associate = function(models) {
    // User.hasMany(models.Review);
    // User.belongsToMany(models.Media, {through: 'watched', as: 'seen_list', foreignKey: 'userId'})
}

module.exports = User;