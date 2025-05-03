import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { ExpenseService } from './expense.service'

const createExpenseIntoDB = catchAsync(async (req, res) => {
  const payload = req.body
  const result = await ExpenseService.createExpense(payload)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Expense created successfully',
    data: result,
  })
})

const getAllExpenseIntoDB = catchAsync(async (req, res) => {
  const result = await ExpenseService.getAllExpense(req.query)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Expense get successfully',
    meta: result.count,
    data: result.expense,
  })
})

export const ExpenseController = {
  createExpenseIntoDB,
  getAllExpenseIntoDB,
}
