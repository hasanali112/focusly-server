// import { Router } from 'express'
// import { UserController } from './user.controller'
// import validateData from '../../middleware/validateRequest'
// import { UserValidation } from './user.validation'
// import { AdminValidation } from '../Admin/admin.validation'
// import auth from '../../middleware/auth'
// import { UserRole } from './user.contant'

// const router = Router()

// router.get('/customers', auth(UserRole.ADMIN), UserController.getAllCustomers)

// router.post(
//   '/register',
//   validateData(UserValidation.customerSchemaValidation),
//   UserController.register
// )

// router.post(
//   '/create-admin',
//   // validateData(AdminValidation.adminSchemaValidation),
//   UserController.createAdminIntoDB
// )

// router.get(
//   '/me',
//   auth(UserRole.ADMIN, UserRole.CUSTOMER),
//   UserController.getMeFromDB
// )

// router.delete('/:id', auth(UserRole.ADMIN), UserController.deleteUser)

// export const UserRoutes = router
