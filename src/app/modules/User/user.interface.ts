import { TStatus } from '../../interface/common.interface'

type TRole = 'CONSUMER' | 'ADMIN'

export interface IUser {
  userId: string
  fullName: string
  email: string
  password: string
  needPasswordChange: boolean
  passwordChangedAt?: Date
  role: TRole
  status: TStatus
  isDeleted: boolean
}
