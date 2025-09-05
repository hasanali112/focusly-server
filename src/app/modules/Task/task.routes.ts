import { Router } from 'express'
import { TaskController } from './task.controller'
import auth from '../../middleware/auth'
import { UserRole } from '../User/user.contant'

const router = Router()

router.post('/create-task', TaskController.createTask)
router.get('/get-tasks', TaskController.getTasks)
router.get('/get-single-task/:id', TaskController.getSingleTaskIntoDb)
router.patch('/update-task/:id', TaskController.updateTasks)
router.delete('/delete-task/:id', TaskController.deleteTask)

export const TaskRoutes = router
