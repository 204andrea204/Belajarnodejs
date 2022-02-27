const express = require("express"),
router = express.Router(),
controller = require("../controllers/authController.js"),
middleware = require("../middlewares/validate"),
schema = require("../schemas/authSchema")

router.post("/login", middleware.privateConnect, middleware.body(schema.login),controller.login)
router.post("/logout", middleware.privateConnect, middleware.body(schema.logout),controller.logout)
router.post("/register", middleware.privateConnect, middleware.body(schema.register),controller.register)

module.exports = router