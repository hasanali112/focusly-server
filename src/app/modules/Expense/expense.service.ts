import QueryBuilder from '../../builder/QueryBuilder'
import { IExpense } from './expense.interface'
import { Expense } from './expense.model'

const createExpense = async (payload: IExpense) => {
  const result = await Expense.create(payload)
  return result
}

const getAllExpense = async (query: Record<string, unknown>) => {
  // Extract date range parameters if present
  const { startDate, endDate, ...restQuery } = query

  let baseQuery = Expense.find()

  if (startDate || endDate) {
    const dateFilter: Record<string, unknown> = {}

    if (startDate) {
      dateFilter.date = { $gte: new Date(startDate as string) }
    }

    if (endDate) {
      dateFilter.date = {
        ...(dateFilter.date || {}),
        $lte: new Date(endDate as string),
      }
    }

    baseQuery = baseQuery.where(dateFilter)
  }

  // Continue with the regular query builder process
  const expense = await new QueryBuilder(baseQuery, restQuery)
    .filter()
    .sort()
    .pagination()
    .fields().modelQuery

  const count = await new QueryBuilder(
    Expense.find().where(baseQuery.getQuery()),
    restQuery
  ).countTotal()

  return {
    count,
    expense,
  }
}

export const ExpenseService = {
  createExpense,
  getAllExpense,
}
