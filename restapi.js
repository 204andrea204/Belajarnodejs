module.exports = {
    ok: (values, res, message = "Request was successfully processed and returned") => {
      let status_code = 200
      let data = {
        "code": status_code,
        "message": message,
        "result": values
      }
      return res.status(status_code).json(data)
    },
    created: (values, res, message = "Request was successfully processed and returned") => {
      let status_code = 201
      let data = {
        "code": status_code,
        "message": message,
        "result": values
      }
      return res.status(status_code).json(data)
    },
    notFound: (values, res, message = "Ops... Not Found") => {
      let status_code = 404
      let data = {
        "code": status_code,
        "message": message,
        "result": values
      }
      return res.status(status_code).send(data)
    },
    error: (values, res, message = "Ops... Internal server error, please contact support") => {
      let status_code = 500
      let data = {
        "code": status_code,
        "message": message,
        "result": values
      }
      return res.status(status_code).send(data)
    },
  }