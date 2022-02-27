const Auth = require("../models/auth"),
response = require("../restapi"),
bcrypt = require('bcrypt'),
jwt = require('jsonwebtoken'),
jwtSecret = "secret01234567890"

const login = async (req, res) => {
    try {
        const value = req.body
        Auth.getIdentificationByEmail(value.email, (err, user) => {
            if (err) {
                if (err.kind == "not_found") {
                    response.notFound({}, res)
                }else{
                    response.error(err.message, res)
                }
            }else{
                if (user.password) {
                    const compared = bcrypt.compareSync(value.password, user.password)
                    if (compared) {
                        response.ok("SELAMAT ANDA SUDAH LOGIN", res)
                    }else{
                        response.notFound({}, res)
                    }
                }else{
                    response.notFound({}, res)
                }
            }
        })
    }
    catch (error){
        console.error(error);
        response.error(error.message, res)
    }
}

const logout = async (req, res) => {
    try {
        console.log(req.body);
    }
    catch (error){
        console.error(error);
        response.error(error.message, res)
    }
}

const register = async (req, res) => {
    try {
        console.log(req.body);
    }
    catch (error){
        console.error(error);
        response.error(error.message, res)
    }
}

module.exports = {
    login,
    logout,
    register
}