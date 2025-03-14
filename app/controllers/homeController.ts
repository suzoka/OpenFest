import type { HttpContext } from '@adonisjs/core/http'
import Advice from '#models/advice'
import { adviceDisabilityOptions, AdviceDisability } from '#models/advice'

export default class ProjectsController {
  async home({ inertia }: HttpContext) {
    const myAdvice = await Advice.query()
      .preload('tags')
      .first()

    return inertia.render('home', {
      advice: myAdvice,
      adviceDisabilities: adviceDisabilityOptions,
    })
  }
}
