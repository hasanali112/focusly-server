import { Request, Response, NextFunction } from 'express'
import { AnyZodObject } from 'zod'

export const validateRequestedFileData = (schema: AnyZodObject) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.body.data) {
        throw new Error('The `data` field is missing in the request.')
      }

      const parsedData = JSON.parse(req.body.data)
      req.body = schema.parse(parsedData)
      next()
    } catch (error: any) {
      next(error)
    }
  }
}
