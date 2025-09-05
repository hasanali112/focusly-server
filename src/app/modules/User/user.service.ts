import mongoose, { get } from 'mongoose'

import { IUser } from './user.interface'
import { User } from './user.model'
import { AppError } from '../../Error/AppError'
import httpStatus from 'http-status'

import { jwtHelper } from '../../utils/jwtHelper'
import config from '../../config'
import { UserRole } from './user.contant'
import { Admin } from '../Admin/admin.model'
import { IAdmin } from '../Admin/admin.interface'

import { v4 as uuidv4 } from 'uuid'

const generateUserId = (name: string): string => {
  const cleanName = name.trim().split(' ').join('').toLowerCase()
  const shortUuid = uuidv4().slice(0, 6) // keep it short & readable
  return `${cleanName}-${shortUuid}`
}

//REGISTER
const registerUser = async (payload: IUser) => {
  const userName = generateUserId(payload.fullName)

  const userData: Partial<IUser> = {
    userId: userName,
    fullName: payload.fullName,
    email: payload.email,
    password: payload.password,
    role: UserRole.CONSUMER,
  }

  const createdUser = await User.create(userData)

  const jwtPayload = {
    _id: createdUser._id,
    userId: createdUser.userId,
    fullName: createdUser.fullName,
    email: createdUser.email,
    role: createdUser.role,
  }

  const accessToken = jwtHelper.generateToken(
    jwtPayload,
    config.jwt.jwt_access_secret as string,
    config.jwt.jwt_access_expirein as string
  )

  const refreshToken = jwtHelper.generateToken(
    jwtPayload,
    config.jwt.jwt_refresh_secret as string,
    config.jwt.jwt_refresh_expirein as string
  )

  return {
    accessToken,
    refreshToken,
  }
}

//create-admin
// const createAdmin = async (password: string, payload: IAdmin) => {
//   const userName = generateUserId(payload.fullName)

//   const existingUser = await User.findOne({ email: payload.email })
//   if (existingUser) {
//     throw new AppError(httpStatus.BAD_REQUEST, 'User already exists')
//   }

//   const userData: Partial<IUser> = {}

//   //user-data
//   userData.userId = userName
//   userData.email = payload.email
//   userData.password = password
//   userData.role = UserRole.ADMIN

//   const session = await mongoose.startSession()
//   try {
//     session.startTransaction()
//     const createUser = await User.create([userData], { session })

//     if (!createUser.length) {
//       throw new AppError(httpStatus.BAD_REQUEST, 'Account Registration failed')
//     }

//     if (createUser.length > 0) {
//       payload.user = createUser[0]._id
//       const createAdmin = await Admin.create([payload], { session })

//       if (!createAdmin.length) {
//         throw new AppError(
//           httpStatus.BAD_REQUEST,
//           'Account Registration failed'
//         )
//       }

//       await session.commitTransaction()
//       await session.endSession()

//       return createAdmin
//     }
//   } catch (error: any) {
//     await session.abortTransaction()
//     await session.endSession()
//     throw new Error(error)
//   }
// }

//get all user
// const getAllCustomersFromDB = async () => {
//   const result = await Customers.find().populate('user')
//   return result
// }

//Get me
const getMe = async (user: string) => {
  const isUserExist = await User.findOne({ _id: user })
  if (!isUserExist) {
    throw new AppError(httpStatus.BAD_REQUEST, 'User not found')
  }

  return isUserExist
}

//soft delete
// const deleteUser = async (id: string) => {
//   const _id = id
//   const isUserExist = await User.findById(_id)
//   if (!isUserExist) {
//     throw new AppError(httpStatus.BAD_REQUEST, 'User not found')
//   }

//   const session = await mongoose.startSession()
//   try {
//     session.startTransaction()

//     if (isUserExist.role === UserRole.CUSTOMER) {
//       await User.updateOne(
//         { _id: _id },
//         { $set: { isDeleted: true, status: 'INACTIVE' } },
//         { session }
//       )
//       await Customers.updateOne(
//         { user: _id },
//         { $set: { isDeleted: true } },
//         { session }
//       )
//     } else if (isUserExist.role === UserRole.ADMIN) {
//       await User.updateOne(
//         { _id: _id },
//         { $set: { isDeleted: true, status: 'INACTIVE' } },
//         { session }
//       )
//       await Admin.updateOne(
//         { user: _id },
//         { $set: { isDeleted: true } },
//         { session }
//       )
//     }
//     await session.commitTransaction()
//     await session.endSession()
//   } catch (error) {
//     await session.abortTransaction()
//     await session.endSession()
//     throw new AppError(httpStatus.BAD_REQUEST, 'User delete failed')
//   }
// }

export const UserSercive = {
  registerUser,
  getMe,
}
