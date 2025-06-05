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
import Advice from '#models/advice'

router.get('/', '#controllers/homeController.home').as('home')

router.group(() => {
  router.get('/connection', '#controllers/authController.showLoginForm').as('auth.login')
  router.post('/connection', '#controllers/authController.login')
  router.get('/registration', '#controllers/authController.showRegisterForm').as('auth.register')
  router.post('/registration', '#controllers/authController.register')
}).use(middleware.guest())

router.post('/deconnection', '#controllers/authController.logout').as('auth.logout')


router.group(() => {
  router.get('/conseils/nouveau', '#controllers/adviceController.new').as('advices.new')
  router.put('/conseils', '#controllers/adviceController.create')
  router.get('/conseils/:slug/edit', '#controllers/adviceController.edit').as('advices.edit')
  router.put('/conseils/:id', '#controllers/adviceController.update').as('advices.update')
  router.delete('/conseils/:id', '#controllers/adviceController.destroy').as('advices.destroy')

  router.get('/reindex-all', ({ response }) => {
    Advice.reindexAll()
    return response.redirect().toRoute('home')
  })
}).use([middleware.auth(), middleware.admin()])

router.get('/conseils', '#controllers/adviceController.index').as('advices.index')
  router.get('/conseils/etapes/:step', '#controllers/adviceController.step').as('advices.step')
router.get('/conseils/:slug', '#controllers/adviceController.show').as('advices.show')

router.get('/tests', ({ inertia })=>{
  return inertia.render('tests')
})
