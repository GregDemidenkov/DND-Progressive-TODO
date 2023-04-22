const TaskRepository = require("../../infrastructure/db/repo/TaskRepository")


class taskController {


    async createTask(req, res) {
        try {
            const { text } = req.body

            const task = await TaskRepository.createTask(text)
           
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
}


module.exports = new taskController()