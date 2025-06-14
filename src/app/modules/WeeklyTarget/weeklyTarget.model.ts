import { model, Schema } from 'mongoose'

import { ITarget, ITask } from './weeklyTarget.interface'

const TaskSchema = new Schema<ITask>({
  taskName: { type: String, required: true },
  taskList: { type: [String], required: true },
})

const TargetSchema = new Schema<ITarget>({
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  taskOne: { type: TaskSchema, required: true },
  taskTwo: { type: TaskSchema, required: true },
  taskThree: { type: TaskSchema, required: true },
})

export const Target = model<ITarget>('Target', TargetSchema)
