const express = require("express")
const mongoose = require("mongoose")
const config = require("config")

const taskRouter = require("./presentation/routes/task.routes")
const corsMiddleware = require("./presentation/middleware/cors.middleware")

const app = express()

const PORT = config.get("serverPort")

app.use(corsMiddleware)
app.use(express.json())
app.use("/api/tasks", taskRouter)

const start = async () => {
    try {
        await mongoose.connect(config.get("dbUrl"))

        app.listen(PORT, () => {
            console.log(`Server started on port: ${PORT}`)
        })
    } catch (error) {
        console.log("Server failed")
    }
}

start()