const Router = require("express")

const TaskController = require("../controllers/taskController")


const router = new Router()

router.post('/create', TaskController.createTask)
router.post('/insert', TaskController.insertTask)

router.delete('/delete', TaskController.deleteTask)

router.patch('/rebase', TaskController.rebaseTask)
router.patch('/edit', TaskController.editTask)

router.get('', TaskController.getTasks)


module.exports = router