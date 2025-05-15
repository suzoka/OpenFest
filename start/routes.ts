/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

router.get('/', '#controllers/homeController.home').as('home')

router.group(() => {
  router.get('/login', '#controllers/authController.showLoginForm').as('auth.login')
  router.post('/login', '#controllers/authController.login')
  router.get('/register', '#controllers/authController.showRegisterForm').as('auth.register')
  router.post('/register', '#controllers/authController.register')
}).use(middleware.guest())

router.post('/logout', '#controllers/authController.logout').as('auth.logout')


router.group(() => {
  router.get('/advices/new', '#controllers/adviceController.new').as('advices.new')
  router.put('/advices', '#controllers/adviceController.create')
  router.get('/advices/:slug/edit', '#controllers/adviceController.edit').as('advices.edit')
  router.put('/advices/:id', '#controllers/adviceController.update').as('advices.update')
  router.delete('/advices/:id', '#controllers/adviceController.destroy').as('advices.destroy')
}).use([middleware.auth(), middleware.admin()])

router.get('/advices', '#controllers/adviceController.index').as('advices.index')
router.get('/advices/:slug', '#controllers/adviceController.show').as('advices.show')

