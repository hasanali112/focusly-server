import QueryBuilder from '../../builder/QueryBuilder'
import { taskProgess } from './task.constant'
import { ITask } from './task.interface'
import { Task } from './task.model'

const taskCreate = async (payload: ITask) => {
  const result = await Task.create(payload)
  return result
}

const allGetTasks = async (query: Record<string, unknown>) => {
  const taskQuery = await new QueryBuilder(Task.find(), query)
    .filter()
    .sort()
    .pagination()
    .fields().modelQuery
  const count = await new QueryBuilder(Task.find(), query).countTotal()
  return {
    count,
    taskQuery,
  }
}

const getSingleTask = async (id: string) => {
  const _id = id
  const result = await Task.findById(_id).select('workStartTime')
  return result
}

const updateTask = async (id: string) => {
  const _id = id
  const result = await Task.findByIdAndUpdate(
    _id,
    {
      status: taskProgess.inProgress,
    },
    {
      new: true,
    }
  )

  return result
}

const updateStartAndEndTime = async (id: string, payload: ITask) => {
  const _id = id

  let result
  if (payload.workStartTime) {
    result = await Task.findByIdAndUpdate(
      _id,
      {
        workStartTime: payload.workStartTime,
      },
      {
        new: true,
      }
    )
  }

  if (payload.workEndTime) {
    result = await Task.findByIdAndUpdate(
      _id,
      {
        workEndTime: payload.workEndTime,
        status: taskProgess.completed,
      },
      {
        new: true,
      }
    )
  }

  return result
}

export const TaskService = {
  taskCreate,
  allGetTasks,
  updateTask,
  updateStartAndEndTime,
  getSingleTask,
}
