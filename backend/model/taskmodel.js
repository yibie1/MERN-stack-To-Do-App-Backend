
const mongoose = require('mongoose')
const taskSchema= mongoose.Schema({
    name: {
        type: String,
        required: [true, "Task name shouldn't be empty"]
    },
    iscomplet:{
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps : true // for every entry
})

const taskModel = mongoose.model("Task",taskSchema)
module.exports = taskModel;