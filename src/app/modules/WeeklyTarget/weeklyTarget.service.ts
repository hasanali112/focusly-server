import { ITarget } from './weeklyTarget.interface'
import { Target } from './weeklyTarget.model'

const createWeekTarget = async (payload: ITarget) => {
  const result = await Target.create(payload)
  return result
}

export const WeeklyTargetService = {
  createWeekTarget,
}
