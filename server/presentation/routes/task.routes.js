const Router = require("express")

const taskController = require("../controllers/taskController")


const router = new Router()

router.post('/create', taskController.createTask)

router.delete('/delete', taskController.deleteTask)


module.exports = router