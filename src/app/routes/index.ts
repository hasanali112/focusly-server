import { Router } from 'express'

import { TaskRoutes } from '../modules/Task/task.routes'
import { ExpenseRoutes } from '../modules/Expense/expense.routes'
import { UserRoutes } from '../modules/User/user.routes'
import { AuthRoutes } from '../modules/Auth/auth.routes'
import { WeeklyTargetRoutes } from '../modules/WeeklyTarget/weeklyTarget.routes'

const middlewareRoutes = Router()

const router = [
  {
    path: '/task',
    routes: TaskRoutes,
  },
  {
    path: '/expense',
    routes: ExpenseRoutes,
  },
  {
    path: '/user',
    routes: UserRoutes,
  },
  {
    path: '/auth',
    routes: AuthRoutes,
  },
  {
    path: '/target',
    routes: WeeklyTargetRoutes,
  },
]

router.forEach(route => middlewareRoutes.use(route.path, route.routes))

export default middlewareRoutes
