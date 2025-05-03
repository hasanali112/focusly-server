import { Router } from 'express'
import { TaskController } from './task.controller'

const router = Router()

router.post('/create-task', TaskController.createTask)
router.get('/get-tasks', TaskController.getTasks)
router.get('/get-single-task/:id', TaskController.getSingleTaskIntoDb)
router.patch('/update-task/:id', TaskController.updateTasks)
router.patch(
  '/update-start-and-end-time/:id',
  TaskController.updateStartAndEndtime
)

export const TaskRoutes = router
