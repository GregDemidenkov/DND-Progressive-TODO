const Router = require("express")

const taskController = require("../controllers/taskController")


const router = new Router()

router.post('/create', taskController.createTask)
router.post('/insert', taskController.insertTask)

router.delete('/delete', taskController.deleteTask)

router.patch('/rebase', taskController.rebaseTask)

router.get('', taskController.getTasks)


module.exports = router