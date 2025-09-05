import { JwtPayload } from 'jsonwebtoken'
import QueryBuilder from '../../builder/QueryBuilder'
import { taskProgess } from './task.constant'
import { ITask } from './task.interface'
import { Task } from './task.model'
import { dateconverted } from '../../utils/converDateToTime'

const taskCreate = async (payload: any) => {
  if (payload.taskName) {
    payload.title = payload.taskName;
    delete payload.taskName;
  }

  // Only process time conversion if both time and date are provided
  if (payload.startTime && payload.date) {
    const startedTime = dateconverted(payload.startTime, payload.date);
    payload.startTime = startedTime;
  }
  
  if (payload.endTime && payload.date) {
    const endedTime = dateconverted(payload.endTime, payload.date);
    payload.endTime = endedTime;
  }
  
  if (payload.date) {
    payload.date = new Date(payload.date);
  }

  const result = await Task.create(payload);
  return result;
};

const allGetTasks = async (query: Record<string, unknown>) => {
  const baseQuery = Task.find()
  const taskQuery = await new QueryBuilder(baseQuery, query)
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

const deleteTask = async (id: string) => {
  const result = await Task.findByIdAndDelete(id);
  return result;
};

const updateTask = async (id: string, payload: Partial<ITask>) => {
  const result = await Task.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

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

const getSingleTask = async (id: string) => {
  const result = await Task.findById(id);
  return result;
};

export const TaskService = {
  taskCreate,
  allGetTasks,
  updateTask,
  updateStartAndEndTime,
  getSingleTask,
  deleteTask,
};
