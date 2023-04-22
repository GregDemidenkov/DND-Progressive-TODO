const Task = require("../models/Task")

class TaskRepository {


    async createTask(text) {
        try {
            const tasks = await Task.find({type: "task"})

            const order = tasks.length 
            const task = new Task({ order, text })
    
            await task.save()
    
            return task
        } catch (e) {
            console.log(e)
            throw new Error(e)
        }
    }

    async deleteTask(id, type) {
        try {
            const task = await Task.findOne({ _id: id })

            const order = task.order
            const tasks = await Task.find({ type: type, order: {$gt: order} })

            console.log(tasks, task.order)

            tasks.forEach(task_el => {
                task_el.order -= 1
                task_el.save()
            })

            await task.deleteOne()

        } catch (e) {
            console.log(e)
            throw new Error(e)
        }
    }
}


module.exports = new TaskRepository()