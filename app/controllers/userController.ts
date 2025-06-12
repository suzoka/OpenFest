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

      const selectedCounts = await Advice.query()
        .select('category')
        .count('* as count')
        .whereHas('isSelected', q => q.where('user_id', user.id))
        .groupBy('category')

      const checkedCounts = await Advice.query()
        .select('category')
        .count('* as count')
        .whereHas('isSelected', q => q.where('user_id', user.id).where('is_checked', true))
        .groupBy('category')

    const steps = adviceCategoryOptions.map((step) => {
      const checkedCount = checkedCounts.find(c => c.category === step.value)
      const selectedCount = selectedCounts.find(c => c.category === step.value)

      return {
        ...step,
        count: selectedCount ? Number(selectedCount.$extras.count) : 0,
        checked: checkedCount ? Number(checkedCount.$extras.count) : 0
      }
    })

    return inertia.render('user/advices/step', {
      advices: advices.map(advice => advice.serialize()),
      steps: steps
    })
  }

  async advices({ inertia, auth }: HttpContext) {
    await auth.check()

    const user = auth.use('web').user as User
    const advices = await Advice.query()
      .preload('tags')
      .preload('isSelected', (query) => {
        query.where('user_id', user.id)
      })
      .whereHas('isSelected', (query) => {
        query.where('user_id', user.id)
      })
      .select('advices.*')

    return inertia.render('user/advices/index', {
      advices: advices.map(advice => advice.serialize())
    })
  }
}
