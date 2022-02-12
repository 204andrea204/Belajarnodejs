const express = require("express"),
router = express.Router(),
controller = require("../controllers/booksController"),
middleware = require("../middlewares/validate"),
schema = require("../schemas/booksSchema")
 
router.get("/", middleware.privateConnect, middleware.query(schema.query), controller.index)
router.get("/:id", middleware.privateConnect, middleware.param(schema.param), controller.show)
router.post("/", middleware.privateConnect, middleware.body(schema.body), controller.post)
router.patch("/:id", middleware.privateConnect, middleware.param(schema.param), middleware.body(schema.body), controller.update)
router.delete("/:id", middleware.privateConnect, middleware.param(schema.param), controller.destroy)
 
module.exports = router