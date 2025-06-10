import { model, Schema } from 'mongoose'
import { ITask } from './task.interface'
import { tasksEnum } from './task.constant'

const taskSchema = new Schema<ITask>({
  userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  taskName: { type: String, required: true },
  description: String,
  startTime: { type: String },
  endTime: { type: String },
  date: { type: Date },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium',
  },
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
