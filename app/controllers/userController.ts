import type { HttpContext } from '@adonisjs/core/http'
import Advice from '#models/advice'
import { adviceCategoryOptions, AdviceCategory } from '#models/advice'
import User from '#models/user'

const adviceCategoryValues = Object.values(AdviceCategory)

export default class UserController {
  async advicesByStep({ inertia, params, auth }: HttpContext) {
    await auth.check()

    const user = auth.user as User

    if (!params.step || !adviceCategoryValues[params.step - 1]) {
      return inertia.render('errors/not_found')
    }

    const advices = await Advice.query()
      .preload('tags')
      .preload('isSelected', (query) => {
        query.where('user_id', user.id)
      })
      .where('advices.category', adviceCategoryValues[params.step - 1])
      .whereHas('isSelected', (query) => {
        query.where('user_id', user.id)
      })
      .select('advices.*')

    const counts = await Advice.query()
      .whereHas('isSelected', (query) => {
        query.where('user_id', user.id)
      })
      .select('category')
      .count('* as count')
      .groupBy('category')

    const steps = adviceCategoryOptions.map((step) => {
      const found = counts.find(c => c.category === step.value)
      return {
        ...step,
        count: found ? Number(found.$extras.count) : 0
      }
    })

    return inertia.render('user/advices/step', {
      advices: advices,
      steps: steps
    })
  }
}
