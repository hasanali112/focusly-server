import { ITarget } from './weeklyTarget.interface'
import { Target } from './weeklyTarget.model'

const createWeekTarget = async (payload: ITarget) => {
  console.log(payload)
  const result = await Target.create(payload)
  return result
}

export const WeeklyTargetService = {
  createWeekTarget,
}
