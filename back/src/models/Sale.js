const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");


//Adicionar método de pagamento e remover da shoplist
//Criação da sale implica no esvaziamento do carrinho
const Sale = sequelize.define('Sale', {
    payment_method: {
        type: DataTypes.STRING
    },

    shipping: {
        type: DataTypes.FLOAT,
        defaultValue: 0.00
    }
}, {
    // timestamps: false
});

Sale.associate = function(models) {
    Sale.belongsTo(models.ShopList);
}

module.exports = Sale;