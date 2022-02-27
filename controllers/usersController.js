const Users = require("../models/users"),
response = require("../restapi"),
bcrypt =  require('bcrypt')

const index = async (req, res) => {
    try {
        const name = req.query.name
        Users.getAll(name, (err, users) => {
            if(err){
                response.error(err.message, res)
            }else{
                console.log(users);
                response.ok(users, res)
            }
        })
    }
    catch (error){
        console.error(error);
        response.error(error.message, res)
    }
}

const show = async (req, res) => {
    try{
        const id = req.params.id
        Users.findById(id, (err, user) => {
            if(err) {
                if (err.kind == "not_found") {
                    response.notFound({}, res)
                }else{
                    response.error(err.message, res)
                }
            }else{
                response.ok(user, res)
            }
        })
    }
    catch (error){
        console.error(error);
        response.error(error.message, res)
    }
}

const post = async (req, res) => {
    try{
        const value = req.body

        const salt = bcrypt.genSaltSync(10)
        const salted = bcrypt.hashSync(value.password, salt)

        const user = new Users({
            name: value.name,
            email: value.email,
            phone: value.phone,
            address: value.address,
            password: salted
        })

        Users.create(user, (err, user) => {
            if (err) {
                response.error(err.message, res)
            }else{
                response.created(user, res)
            }
        })
    }
    catch (error){
        console.error(error);
        response.error(error.message, res)
    }
}

const update = async (req, res) => {
    try {
        const id = req.params.id
        const value = req.body

        if (value.password) {
            const salt = bcrypt.genSaltSync(10)
            const salted = bcrypt.hashSync(value.password, salt)
            value.password = salted
        }
        
        Users.update(id, value, (err, user) => {
            if (err) {
                if (err.kind == "not_found") {
                    response.notFound({}, res)
                }else{
                    response.error(err.message, res)
                }
            }else{
                response.created(user, res)
            }
        })
    }
    catch (error){
        console.error(error);
        response.error(error.message, res)
    }
}

const destroy = async (req, res) => {
    try {
        const id = req.params.id
        Users.delete(id, (err, user) => {
            if (err) {
                if (err.kind == "not_found") {
                    response.notFound({}, res)
                }else{
                    response.error(err.message, res)
                }
            }else{
                response.created(user, res)
            }
        })
    }
    catch (error){
        console.error(error);
        response.error(error.message, res)
    }
}
module.exports = {
    index,
    show,
    post,
    update,
    destroy
}