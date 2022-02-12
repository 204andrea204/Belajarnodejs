const Joi = require("@hapi/joi")
 
module.exports = {
  query: Joi.object().keys({
    search: Joi.string()
  }),
  param: Joi.object().keys({
    id: Joi.string().required()
  }),
  body: Joi.object().keys({
    name: Joi.string().required()
  })
}