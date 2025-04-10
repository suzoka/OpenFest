/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', '#controllers/homeController.home').as('home')

router.get('/login', '#controllers/authController.showLoginForm').as('auth.login')
router.post('/login', '#controllers/authController.login')
router.post('/logout', '#controllers/authController.logout').as('auth.logout')
router.get('/register', '#controllers/authController.showRegisterForm').as('auth.register')
router.post('/register', '#controllers/authController.register')

router.get('/advices', '#controllers/adviceController.index').as('advices.index')
router.get('/advices/new', '#controllers/adviceController.new').middleware('auth').as('advices.new')
router.put('/advices', '#controllers/adviceController.create').middleware('auth')
router.get('/advices/:slug', '#controllers/adviceController.show').as('advices.show')
router.get('/advices/:slug/edit', '#controllers/adviceController.edit').middleware('auth').as('advices.edit')
router.put('/advices/:id', '#controllers/adviceController.update').middleware('auth').as('advices.update')
router.delete('/advices/:id', '#controllers/adviceController.destroy').middleware('auth').as('advices.destroy')
