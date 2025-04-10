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

router.get('/advices', '#controllers/adviceController.index').as('advices.index')
router.get('/advices/new', '#controllers/adviceController.new').as('advices.new')
router.put('/advices', '#controllers/adviceController.create')
router.get('/advices/:slug', '#controllers/adviceController.show').as('advices.show')
router.get('/advices/:slug/edit', '#controllers/adviceController.edit').as('advices.edit')
router.put('/advices/:id', '#controllers/adviceController.update').as('advices.update')
router.delete('/advices/:id', '#controllers/adviceController.destroy').as('advices.destroy')
