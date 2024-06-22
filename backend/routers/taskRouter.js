const express = require('express')
const taskModel = require('../model/taskmodel')
const { createTask, getTask, getSingleTask, deleteTask, updateTask } = require('../controllers/taskController')
const routers = express.Router()


//-         ---- Routes-------
 // create task
routers.post('/', createTask)
 // get data or featch data
routers.get('/', getTask)
// get single task by id
routers.get('/:id', getSingleTask)
// delete task
routers.delete('/:id', deleteTask)
// update task by put
routers.patch('/:id', updateTask)

 //make refactor on routers (this one may be diffcult to understnad )

        // routers.route('/').get(getTask).post(createTask)
        // routers.route('/:id').get(getSingleTask).delete(deleteTask).patch(updateTask)
module.exports = routers