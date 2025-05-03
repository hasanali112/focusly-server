import { model, Schema } from 'mongoose'
import { IExpense } from './expense.interface'

const expenseSchema = new Schema<IExpense>({
  expenseName: {
    type: String,
    required: true,
  },
  description: String,
  amount: {
    type: Number,
    required: true,
  },
  date: Date,
})

export const Expense = model<IExpense>('Expense', expenseSchema)
