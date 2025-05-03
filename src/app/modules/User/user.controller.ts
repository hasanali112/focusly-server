// import catchAsync from '../../utils/catchAsync'
// import sendResponse from '../../utils/sendResponse'
// import httpStatus from 'http-status'
// import { UserSercive } from './user.service'

// const register = catchAsync(async (req, res) => {
//   const { password, customers } = req.body
//   console.log(req.body)
//   const result = await UserSercive.registerUser(password, customers)
//   if (result) {
//     const { refreshToken } = result
//     res.cookie('refreshToken', refreshToken, {
//       httpOnly: true,
//       secure: true,
//       sameSite: 'none',
//     })
//   }
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     message: 'User created successfully',
//     data: result,
//   })
// })

// const createAdminIntoDB = catchAsync(async (req, res) => {
//   const { password, admin } = req.body
//   const result = await UserSercive.createAdmin(password, admin)
//   sendResponse(res, {
//     statusCode: httpStatus.CREATED,
//     message: 'Admin created successfully',
//     data: result,
//   })
// })

// const getAllCustomers = catchAsync(async (req, res) => {
//   const result = await UserSercive.getAllCustomersFromDB()
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     message: 'Customer get successfully',
//     data: result,
//   })
// })

// const getMeFromDB = catchAsync(async (req, res) => {
//   const { _id } = req.user

//   const result = await UserSercive.getMe(_id)
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     message: 'Profile get successfully',
//     data: result,
//   })
// })

// const deleteUser = catchAsync(async (req, res) => {
//   const { id } = req.params
//   const result = await UserSercive.deleteUser(id)
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     message: 'User deleted successfully',
//     data: result,
//   })
// })

// export const UserController = {
//   register,
//   createAdminIntoDB,
//   getAllCustomers,
//   getMeFromDB,
//   deleteUser,
// }
