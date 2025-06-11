import type { HttpContext } from '@adonisjs/core/http'

export default class HomeController {
  async home({ inertia }: HttpContext) {

    return inertia.render('home')
  }
}
