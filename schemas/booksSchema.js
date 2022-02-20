const Joi = require("@hapi/joi")
 
module.exports = {
  query: Joi.object().keys({
    title: Joi.string().min(3).max(255)
  }),
  param: Joi.object().keys({
    id: Joi.string().required()
  }),
  body: Joi.object().keys({
    title: Joi.string().required().min(3).max(255),
    description: Joi.string(),
    cover_url: Joi.string().required().max(255),
    book_url: Joi.string().required().max(255)
  })
}