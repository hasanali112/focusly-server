import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { WeeklyTargetService } from './weeklyTarget.service'

const createTarget = catchAsync(async (req, res) => {
  const result = await WeeklyTargetService.createWeekTarget(req.body)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Target created successfully',
    data: result,
  })
})

export const WeeklyTargetController = {
  createTarget,
}
