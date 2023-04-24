const TaskRepository = require("../../infrastructure/db/repo/TaskRepository")


class TaskController {


    async createTask(req, res) {
        try {
            const { text, type } = req.body

            const task = await TaskRepository.createTask(text, type)
           
            return res.json(task)
        } catch (e) {
            console.log(e)
            return res.status(400).json(e)
        }
    }

    async deleteTask(req, res) {
        try {
            const { id, type } = req.query

            await TaskRepository.deleteTask(id, type)

            return res.json({message: 'File was deleted'})
        } catch (e) {
            console.log(e)
            return res.status(400).json(e)
        }
    }

    async rebaseTask(req, res) {
        try {
            const { id, type, newType } = req.body

            const task = await TaskRepository.rebaseTask(id, type, newType)
           
            return res.json(task)
        } catch (e) {
            console.log(e)
            return res.status(400).json(e)
        }
    }

    async getTasks(req, res) {
        try {
            const { type } = req.query

            const tasks = await TaskRepository.getTasks(type)

            return res.json(tasks)
        } catch (e) {
            console.log(e)
            return res.status(400).json(e)
        }
    }

    async insertTask(req, res) {
        try {
            const { id, newType, newOrder } = req.body

            await TaskRepository.insertTask(id, newType, newOrder)

            return res.json({message: 'File was inserted'})
        } catch (e) {
            console.log(e)
            return res.status(400).json(e)
        }
    }
}


module.exports = new TaskController()