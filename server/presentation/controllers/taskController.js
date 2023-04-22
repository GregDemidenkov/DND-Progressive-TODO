const TaskRepository = require("../../infrastructure/db/repo/TaskRepository")


class taskController {


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
            const { id, type } = req.body

            await TaskRepository.deleteTask(id, type)

            return res.json({message: 'File was deleted'})
        } catch (e) {
            console.log(e)
            return res.status(400).json(e)
        }
    }

    async updateTask(req, res) {
        try {
            const { id, type, newType } = req.body

            const task = await TaskRepository.updateTask(id, type, newType)
           
            return res.json(task)
        } catch (e) {
            console.log(e)
            return res.status(400).json(e)
        }
    }

    async getTasks(req, res) {
        try {
            const { type } = req.body

            const tasks = await TaskRepository.getTasks(type)

            return res.json(tasks)
        } catch (e) {
            console.log(e)
            return res.status(400).json(e)
        }
    }
}


module.exports = new taskController()