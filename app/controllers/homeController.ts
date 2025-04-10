import type { HttpContext } from '@adonisjs/core/http'
import Advice from '#models/advice'
import { adviceDisabilityOptions, adviceCategoryOptions } from '#models/advice'

export default class HomeController {
  async home({ inertia }: HttpContext) {
    const myAdvice = await Advice.query()
      .preload('tags')
      .orderBy('created_at', 'desc')
      .first()

    return inertia.render('home', {
      advice: myAdvice,
      adviceDisabilities: adviceDisabilityOptions,
      adviceCategories: adviceCategoryOptions,
    })
  }
}
