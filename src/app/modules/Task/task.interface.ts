type TTasksSatus = 'pending' | 'inProgress' | 'completed'

export interface ITask {
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
