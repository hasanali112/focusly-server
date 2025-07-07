import { Router } from 'express'
import { TaskController } from './task.controller'
import auth from '../../middleware/auth'
import { UserRole } from '../User/user.contant'

const router = Router()

router.post('/create-task', TaskController.createTask)
router.get('/get-tasks', TaskController.getTasks)
router.get(
  '/get-single-task/:id',
  auth(UserRole.CONSUMER),
  TaskController.getSingleTaskIntoDb
)
router.patch(
  '/update-task/:id',
  auth(UserRole.CONSUMER),
  TaskController.updateTasks
)
router.patch(
  '/update-start-and-end-time/:id',
  auth(UserRole.CONSUMER),
  TaskController.updateStartAndEndtime
)

export const TaskRoutes = router
