import mongoose from 'mongoose'
import { TErrorSource } from '../interface/error'

export const handleValidationError = (
  error: mongoose.Error.ValidationError
) => {
  const errorSources: TErrorSource = Object.values(error.errors).map(
    (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: val?.path,
        message: val?.message,
      }
    }
  )

  const statusCode = 400
  return {
    statusCode,
    message: 'Validation Error',
    errorSources,
  }
}
