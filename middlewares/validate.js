const Joi = require("@hapi/joi"),
response = require("../restapi")

const privateConnect = (req, res, next) => {
  return next();
}

const body = (schema) => {
  return (req, res, next) => {
      const { value, error } = schema.validate(req.body)
      const valid = error == null

      if(valid) {
          return next()
      }
      const { details } = error
      console.error(details)
      // console.log(req.body);
      return response.error({}, res, details[0].message)
  }
}

const query = (schemaParam) => {
  return (req, res, next) => {
      var { value, error } = schemaParam.validate(req.query)
      const valid = error == null
      if(valid) {
          if(req.query.sort_by) {
              if(req.query.sort_by.indexOf('.') > -1) {
                  let [ prop, sort ] = req.query.sort_by.split('.')
                  if( sort == 'asc' || sort == 'desc') {
                      return next()
                  }
              }
              return response.error({}, res)
          }
          return next()
      }
      const { details } = error
      console.error(details)
      return response.error({}, res, details[0].message)
  }
}

const param = (schemaParam) => {
  return (req, res, next) => {
      const { value, error } = schemaParam.validate(req.params)
      const valid = error == null
      
      if(valid) {
          return next()
      }
      const { details } = error
      console.error(details)
      return response.error({}, res, details[0].message)
  }
}

module.exports = {
  privateConnect,
  body,
  query,
  param
}