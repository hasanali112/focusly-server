import { model, Schema } from 'mongoose'
import { ITarget } from './weeklyTarget.interface'

const targetSchema = new Schema<ITarget>({
  description: { type: String, required: true },
})

export const Target = model<ITarget>('Target', targetSchema)
