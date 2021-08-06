const { body } = require("express-validator");


const validationUser = (method) =>{
    switch(method){
        case 'create': {
            return [
                body('email').exists().withMessage("This Field mustn't be null").isLength({min: 1}).withMessage('Por favor, preencha o campo').isEmail().withMessage('Precisa ser exemplo@exemplo'),
            ]
        }
    }
}

const validationReview = (method) =>{
    switch(method){
        case 'create': {
            return [
                body('comment').exists().withMessage("This Field mustn't be null").isLength({min: 1}).withMessage('Por favor, preencha o campo').max(255).withMessage('Precisa ter no máximo 255 caracteres'),
            ]
        }
    }
}

module.exports = {
    validationUser,
    validationReview
}
