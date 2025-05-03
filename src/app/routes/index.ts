import { Router } from 'express'

import { TaskRoutes } from '../modules/Task/task.routes'
import { ExpenseRoutes } from '../modules/Expense/expense.routes'

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
]

router.forEach(route => middlewareRoutes.use(route.path, route.routes))

export default middlewareRoutes
