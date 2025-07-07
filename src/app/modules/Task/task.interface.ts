import { Types } from 'mongoose'

type TTasksSatus = 'pending' | 'inProgress' | 'completed'

export interface ITask {
  title: string
  startTime?: Date
  endTime?: Date
  date?: Date
  status: TTasksSatus
  workStartTime?: Date
  workEndTime?: Date
  pomodoro: boolean
}
