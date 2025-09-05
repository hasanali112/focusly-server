import { Types } from 'mongoose'

type TTasksSatus = 'pending' | 'inProgress' | 'completed'

export interface ITask {
  title: string;
  startTime?: Date;
  endTime?: Date;
  date?: Date;
  status: TTasksSatus;
  priority?: 'low' | 'medium' | 'high';
  workStartTime?: Date;
  workEndTime?: Date;
  pomodoro: boolean;
}
