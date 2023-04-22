const { Schema, model } = require("mongoose")


const Task = new Schema({
    type: {type: String, required: true, default: "task"},
    order: {type: Number, required: true,},
    text: {type: String},
})

module.exports = model("Task", Task)