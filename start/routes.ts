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

router.get('/login', '#controllers/authController.showLoginForm').as('auth.login').use(middleware.guest())
router.post('/login', '#controllers/authController.login').use(middleware.guest())
router.post('/logout', '#controllers/authController.logout').as('auth.logout')
router.get('/register', '#controllers/authController.showRegisterForm').as('auth.register').use(middleware.guest())
router.post('/register', '#controllers/authController.register').use(middleware.guest())

router.get('/advices', '#controllers/adviceController.index').as('advices.index')
router.get('/advices/new', '#controllers/adviceController.new').use(middleware.auth()).use(middleware.admin()).as('advices.new')
router.put('/advices', '#controllers/adviceController.create').use(middleware.auth()).use(middleware.admin())
router.get('/advices/:slug', '#controllers/adviceController.show').as('advices.show')
router.get('/advices/:slug/edit', '#controllers/adviceController.edit').use(middleware.auth()).use(middleware.admin()).as('advices.edit')
router.put('/advices/:id', '#controllers/adviceController.update').use(middleware.auth()).use(middleware.admin()).as('advices.update')
router.delete('/advices/:id', '#controllers/adviceController.destroy').use(middleware.auth()).use(middleware.admin()).as('advices.destroy')
