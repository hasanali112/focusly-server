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
      'http://localhost:5173',
      'http://localhost:5174',
      'http://localhost:5678/workflow/lfpVY8TO0whfdID1',
      'https://focuslypomo.arviontech.online',
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
    message: 'Efcizen server is running successfully',
  })
})

app.use(globalErrorHandler)
app.use(notFoundRoutes)

export default app
