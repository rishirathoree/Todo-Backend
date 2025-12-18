const cors = require("cors")
const express = require("express")
require("dotenv").config()

const app = express()

const port = process.env.PORT || 3000

// routes imports
const authRoute = require("./routes/auth.routes")
const todosRoute = require("./routes/todos.routes")
const { CORS_CONFIG } = require("./constant")

app.use(cors(CORS_CONFIG))
app.use(express.json())

app.use("/auth",authRoute)
app.use("/todos",todosRoute)

app.listen(port,async()=>{
    console.log(`listening on port ${port}`)
})