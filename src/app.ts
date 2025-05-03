import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import httpStatus from 'http-status'
import middlewareRoutes from './app/routes'
import globalErrorHandler from './app/middleware/globalErrorHandler'
import { notFoundRoutes } from './app/middleware/notFoundRoutes'

const app: Application = express()

app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    origin: [
      'http://192.168.0.102:3000',
      'http://localhost:5173',
      'http://localhost:5174',
    ],
    credentials: true,
  })
)

app.options('', cors({ origin: true, credentials: true }))

app.use('/api/v1', middlewareRoutes)

app.get('/', (req: Request, res: Response) => {
  res.status(httpStatus.OK).json({
    statusCode: httpStatus.OK,
    success: true,
    message: 'Shoes server is running successfully',
  })
})

app.use(globalErrorHandler)
app.use(notFoundRoutes)

export default app
