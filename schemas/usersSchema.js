const Joi = require("@hapi/joi")

module.exports = {
    query: Joi.object().keys({
        name: Joi.string().min(3).max(255)
    }),
    param: Joi.object().keys({
        id: Joi.string().required()
    }),
    body: Joi.object().keys({
        name: Joi.string().required().min(3).max(255),
        email: Joi.string().min(3).required().email(),
        phone: Joi.number().min(8),
        address: Joi.string()
    })
}