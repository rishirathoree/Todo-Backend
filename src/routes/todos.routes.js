const Router = require("express")
const { Create, getEvery, deleteTodo,  } = require("../controllers/todos.controller")
const { CheckJwt } = require("../middlewares/jwt.middleware")

const router = Router()

router
.post("/create",CheckJwt, Create)
.get("/",CheckJwt,getEvery)
.delete("/:id",CheckJwt, deleteTodo)

module.exports = router