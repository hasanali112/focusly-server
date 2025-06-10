import { Router } from 'express'
import { WeeklyTargetController } from './weeklyTarget.controller'

const router = Router()

router.post('/create-target', WeeklyTargetController.createTarget)

export const WeeklyTargetRoutes = router
