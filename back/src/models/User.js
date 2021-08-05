const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
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
        type: DataTypes.STRING,
        unique: true
    },

    phone: {
        type: DataTypes.STRING
    },

    address: {
        type: DataTypes.STRING
    },

    CPF_CNPJ: {
        type: DataTypes.STRING,
        unique: true
    },

    moderator: {
        type: DataTypes.BOOLEAN
    },

    /*inicio alteração*/
    passwordResetToken: {
        type: DataTypes.STRING,
        required: true,
        select: false
    },

    passwordResetExpires: {
        type: DataTypes.DATE,
        select: false
    }

    /* fim alteração */

}, {
    // timestamps: false
});

User.associate = function(models) {
    User.hasMany(models.Review);  
    User.hasOne(models.ShopList); 
    User.hasOne(models.Photo);
    User.belongsToMany(models.Product, {through: 'favorite_list', as: 'favorite_product', foreignKey: 'userId'}) 
}

module.exports = User;
