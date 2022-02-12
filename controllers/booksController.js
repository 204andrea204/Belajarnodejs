const response = require("../restapi")

const index = async (req, res) => {
    try {
        const books = [
            {
                "id": "01",
                "name": "Novel 1"
            },
            {
                "id": "02",
                "name": "Novel 2"
            },
            {
                "id": "03",
                "name": "Novel 3"
            },
            {
                "id": "04",
                "name": "Novel 4"
            },
        ]
        response.ok(books, res)
    }
    catch (error){
        console.error(error);
        response.error(error.message, res)
    }
}
const show = async (req, res) => {
    try {
        console.log("heloo");
    }
    catch (error){
        console.error(error);
        response.error(error.message, res)
    }
}
const post = async (req, res) => {
    try {
        console.log("heloo");
    }
    catch (error){
        console.error(error);
        response.error(error.message, res)
    }
}
const update = async (req, res) => {
    try {
        console.log("heloo");
    }
    catch (error){
        console.error(error);
        response.error(error.message, res)
    }
}
const destroy = async (req, res) => {
    try {
        console.log("hello")
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