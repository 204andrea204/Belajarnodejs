const Joi = require("@hapi/joi")

module.exports = {
    login: Joi.object().keys({
        email: Joi.string().min(3).required().email(),
        password: Joi.string().min(3).required()
    }),
    logout: Joi.object().keys({
        token: Joi.string().required()
    }),
    register: Joi.object().keys({
        name: Joi.string().required().min(3).max(255),
        email: Joi.string().min(3).required().email(),
        phone: Joi.number().min(8),
        address: Joi.string(),
        password: Joi.string().required().min(3)
    }),
}