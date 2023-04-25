const Task = require("../models/Task")

class TaskRepository {


    async createTask(text, type) {
        const tasks = await Task.find({type: type})

        const order = tasks.length 
        const task = new Task({ type: type, order, text })

        await task.save()

        return task
    }

    async getTasks(type) {
        const tasks = await Task.find({type: type}).sort({order: 1})

        return tasks
    }

    async deleteTask(id, type) {
        const task = await Task.findOne({ _id: id })

        const order = task.order
        const tasks = await Task.find({ type: type, order: {$gt: order} })

        tasks.forEach(task_el => {
            task_el.order -= 1
            task_el.save()
        })

        await task.deleteOne()
    }

    async rebaseTask(id, type, newType) {
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

    async insertTask(id, newType, newOrder) {
        const newTasks = await Task.find({ type: newType })

        const task = await Task.findOne({ _id: id })
        task.order = newOrder
        task.type = newType

        newTasks.forEach(task_el => {
            if(task_el.order >= newOrder) {
                task_el.order += 1
                task_el.save()
            }
        })

        await task.save()
    }

    async editTask(id, newText) {
        const task = await Task.findOne({ _id: id })
        task.text = newText

        await task.save()
    }

}


module.exports = new TaskRepository()