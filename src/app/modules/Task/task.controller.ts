import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { TaskService } from './task.service'

const createTask = catchAsync(async (req, res) => {
  const payload = req.body
  const user = req.user
  const result = await TaskService.taskCreate(user, payload)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Task created successfully',
    data: result,
  })
})

const getTasks = catchAsync(async (req, res) => {
  const user = req.user
  const result = await TaskService.allGetTasks(user, req.query)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Task created successfully',
    meta: result.count,
    data: result.taskQuery,
  })
})

const getSingleTaskIntoDb = catchAsync(async (req, res) => {
  const result = await TaskService.getSingleTask(req.params.id)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Task get successfully',
    data: result,
  })
})

const updateTasks = catchAsync(async (req, res) => {
  const result = await TaskService.updateTask(req.params.id)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Task updated successfully',
    data: result,
  })
})

const updateStartAndEndtime = catchAsync(async (req, res) => {
  const result = await TaskService.updateStartAndEndTime(
    req.params.id,
    req.body
  )
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Task update successfully',
    data: result,
  })
})

export const TaskController = {
  createTask,
  getTasks,
  updateTasks,
  updateStartAndEndtime,
  getSingleTaskIntoDb,
}
