const Router = require("express")
const { Create, Login } = require("../controllers/auth.controller")

const router = Router()

router
.post("/create", Create)
.post("/login", Login)

module.exports = router