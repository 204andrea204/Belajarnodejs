const express = require("express"),
router = express.Router(),
controller = require("../controllers/usersController"),
middleware = require("../middlewares/validate"),
schema = require("../schemas/usersSchema")

router.get("/", middleware.privateConnect, middleware.query(schema.query),controller.index)
router.get("/:id", middleware.privateConnect, middleware.param(schema.param),controller.show)
router.post("/", middleware.privateConnect, middleware.body(schema.bodyPost),controller.post)
router.patch("/:id", middleware.privateConnect, middleware.param(schema.param),middleware.body(schema.bodyPatch), controller.update)
router.delete("/:id", middleware.privateConnect, middleware.param(schema.param),controller.destroy)

module.exports = router