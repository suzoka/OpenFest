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

