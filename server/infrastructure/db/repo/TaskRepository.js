const Task = require("../models/Task")

class TaskRepository {


    async createTask(text, type) {
        try {
            const tasks = await Task.find({type: type})

            const order = tasks.length 
            const task = new Task({ type: type, order, text })
    
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

    async updateTask(id, type, newType) {
        const task = await Task.findOne({ _id: id })

        const order = task.order
        const tasks = await Task.find({ type: type, order: {$gt: order} })

        tasks.forEach(task_el => {
            task_el.order -= 1
            task_el.save()
        })

        const newTasks = await Task.find({ type: newType })
        task.order = newTasks.length
        task.type = newType

        await task.save()

        return task
    }

    async getTasks(type) {
        const tasks = await Task.find({type: type}).sort({order: 1})

        return tasks
    }

}


module.exports = new TaskRepository()