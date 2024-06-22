const taskModel = require("../model/taskmodel");

const createTask = async (req, res) =>{
    try {
        const addTask = await taskModel.create(req.body)
        res.status(200).json(addTask);
    } catch (error) {
       res.status(500).json({message: error.message})
    }
}

const getTask = async(req, res) =>{
    try {
        const tasks = await taskModel.find();
        res.status(200).json(tasks)
    } catch (error) {
    res.status(500).json({message: error.message})
    }
}
const getSingleTask = async(req, res) =>{
    try {
        const {id} = req.params
        const singleTask = await taskModel.findById(id)

        if(!singleTask){
            return res.status(404).json(`No Task found with this id: ${id}`)
        }
        res.status(200).json(singleTask)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteTask = async(req, res) =>{
  try {
    const {id} = req.params
    const delete_task = await taskModel.findByIdAndDelete(id)
    if(!delete_task){
        return res.status(404).json(`Thire is no task with this id: ${id}`)
    }
    res.status(200).json("Task Deleted Sucssfully")
  } catch (error) {
 res.status(500).json({message: error.message})
  }
}

const updateTask = async(req, res)=>{
    try {
        const {id} = req.params
        const update_task = await taskModel.findByIdAndUpdate({_id: id}, req.body,
             {new: true,
                runValidators: true
             })
        if(!update_task){
            return res.status(404).json(`Thire is no task with this id: ${id}`)
        }
        res.status(200).json({
            update_task,
           nessage: 'Task updated sucssfully'
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
module.exports = {
    createTask,
    getTask,
    getSingleTask,
    deleteTask,
    updateTask
}