import { Router } from 'express'
import { ExpenseController } from './expense.controller'

const router = Router()

router.post('/create-expense', ExpenseController.createExpenseIntoDB)
router.get('/get-expense', ExpenseController.getAllExpenseIntoDB)

export const ExpenseRoutes = router
