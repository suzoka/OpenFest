/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import Advice from '#models/advice'
import router from '@adonisjs/core/services/router'

const advice = new Advice()

advice.title = 'Test advice'
advice.setPMR()
advice.setBooking()
advice.isPublished = true

await advice.save()
console.log('Hello world!')

router.on('/').renderInertia('home', {
  advice: advice,
})

