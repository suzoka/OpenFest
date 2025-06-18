import type { HttpContext } from '@adonisjs/core/http'
import Advice from '#models/advice'
import { adviceCategoryOptions, AdviceCategory } from '#models/advice'
import User from '#models/user'
import { attachmentManager } from '@jrmc/adonis-attachment'

const adviceCategoryValues = Object.values(AdviceCategory)

export default class UserController {
  async edit({ inertia }: HttpContext) {

    return inertia.render('user/edit')
  }

  async update({ request, response, auth }: HttpContext) {
    await auth.check()

    const user = auth.use('web').user as User
    const data = request.only(['name', 'email'])
    const avatar = request.file('avatar')!

    user.merge(data)
    user.avatar = await attachmentManager.createFromFile(avatar)

    await user.save()

    return response.redirect().toRoute('user.edit')
  }

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
