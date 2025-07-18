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

router.group(() => {
  router.post('/deconnection', '#controllers/authController.logout').as('auth.logout')

  router.get('/mon-espace/tous', '#controllers/userController.advices').as('user.advices')
  router.get('/mon-espace/etapes/:step', '#controllers/userController.advicesByStep').as('user.advicesByStep')

  router.get('/mon-compte', '#controllers/userController.edit').as('user.edit')
  router.put('/mon-compte', '#controllers/userController.update').as('user.update')
}).use(middleware.auth())

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
router.post('/conseils/:id/save', '#controllers/adviceController.save').as('advices.save')
router.post('/conseils/:id/check', '#controllers/adviceController.check').as('advices.check')

router.get('/tests', ({ inertia })=>{
  return inertia.render('tests')
})

router.get('/info', ({ inertia })=>{
  return inertia.render('info')
})

router.get('/festival', ({ inertia })=>{
  return inertia.render('festival')
})
