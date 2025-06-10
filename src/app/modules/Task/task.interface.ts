import { Types } from 'mongoose'

type TTasksSatus = 'pending' | 'inProgress' | 'completed'

export interface ITask {
  userId: Types.ObjectId
  taskName: string
  description?: string
  startTime?: string
  endTime?: string
  date?: Date
  priority: 'low' | 'medium' | 'high'
  status: TTasksSatus
  workStartTime?: Date
  workEndTime?: Date
  pomodoro: boolean
}
