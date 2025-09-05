import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { TaskService } from './task.service'

const createTask = catchAsync(async (req, res) => {
  const payload = req.body
  const result = await TaskService.taskCreate(payload)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Task created successfully',
    data: result,
  })
})

const getTasks = catchAsync(async (req, res) => {
  const result = await TaskService.allGetTasks(req.query)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Task created successfully',
    meta: result.count,
    data: result.taskQuery,
  })
})

const deleteTask = catchAsync(async (req, res) => {
  const result = await TaskService.deleteTask(req.params.id)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Task deleted successfully',
    data: result,
  })
})

const updateTasks = catchAsync(async (req, res) => {
  const result = await TaskService.updateTask(req.params.id, req.body)
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

const getSingleTaskIntoDb = catchAsync(async (req, res) => {
  const result = await TaskService.getSingleTask(req.params.id)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Task retrieved successfully',
    data: result,
  })
})

export const TaskController = {
  createTask,
  getTasks,
  updateTasks,
  updateStartAndEndtime,
  getSingleTaskIntoDb,
  deleteTask,
}
