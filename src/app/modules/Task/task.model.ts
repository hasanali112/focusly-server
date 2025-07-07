import { model, Schema } from 'mongoose'
import { ITask } from './task.interface'
import { tasksEnum } from './task.constant'

const taskSchema = new Schema<ITask>({
  title: { type: String, required: true },
  startTime: { type: Date },
  endTime: { type: Date },
  date: { type: Date },
  status: {
    type: String,
    enum: tasksEnum,
    default: 'pending',
  },
  pomodoro: { type: Boolean, default: false },
  workStartTime: { type: Date },
  workEndTime: { type: Date },
})

export const Task = model<ITask>('Task', taskSchema)
