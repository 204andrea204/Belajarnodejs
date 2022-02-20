const Books = require("../models/books"),
response = require("../restapi");

const index = async (req, res) => {
    try {
        const title = req.query.title
        Books.getAll(title, (err, books) => {
            if(err){
                response.error(err.message, res)
            }else{
                console.log(books);
                response.ok(books, res)
            }
        })
    }
    catch (error){
        console.error(error);
        response.error(error.message, res)
    }
}
const show = async (req, res) => {
    try {
        const id = req.params.id
        Books.findById(id, (err, book) => {
            if (err) {
                if (err.kind == "not_found") {
                    response.notFound({}, res)
                }else{
                    response.error(err.message, res)
                }
            }else{
                response.ok(book, res)
            }
        })
    }
    catch (error){
        console.error(error);
        response.error(error.message, res)
    }
}
const post = async (req, res) => {
    try {
        const value = req.body

        //buat book object
        const book = new Books({
            title: value.title,
            description: value.description,
            cover_url: value.cover_url,
            book_url: value.book_url
        })
        // save data
        Books.create(book, (err, book) => {
            if (err) {
                response.error(err.message, res)
            }else{
                response.created(book, res)
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
        Books.update(id, value, (err, book) => {
            if (err) {
                if (err.kind == "not_found") {
                    response.notFound({}, res)
                }else{
                    response.error(err.message, res)
                }
            }else{
                response.created(book, res)
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
        Books.delete(id, (err, book) => {
            if (err) {
                if (err.kind == "not_found") {
                    response.notFound({}, res)
                }else{
                    response.error(err.message, res)
                }
            }else{
                response.created(book, res)
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