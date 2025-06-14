export interface ITask {
  taskName: string
  taskList: string[]
}

export interface ITarget {
  startDate: Date
  endDate: Date
  taskOne: ITask
  taskTwo: ITask
  taskThree: ITask
}
