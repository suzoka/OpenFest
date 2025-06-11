import type { HttpContext } from '@adonisjs/core/http'
import Advice from '#models/advice'
import { createAdviceValidator } from '#validators/advice'
import Tag from '#models/tag'
import { adviceCategoryOptions, AdviceCategory } from '#models/advice'
import SelectedAdvice from '#models/selectedAdvice'
import User from '#models/user'

const adviceCategoryValues = Object.values(AdviceCategory)

export default class AdvicesController {

  async index({ inertia, request, auth }: HttpContext) {
    await auth.check()
    const user = auth.user as User

    let advicesQuery

    const params = request.qs()

    if (params.search) {
      const searchResults = await Advice.search(params.search)
      const ids = searchResults.map(a => a.id)
      advicesQuery = Advice.query().whereIn('id', ids).preload('tags')

      if (user) {
        advicesQuery = advicesQuery.preload('isSelected', q => q.where('user_id', user.id))
      }
    } else {
      advicesQuery = Advice.query()
        .preload('tags')
        .orderBy('created_at', 'desc')

      if (user) {
        advicesQuery.preload('isSelected', (query) => {
          query.where('user_id', user.id)
        })
      }
    }

    const advices = await advicesQuery

    return inertia.render('advices/index', {
      advices: advices.map(advice => advice.serialize()),
    })
  }

  async step({ inertia, params, auth }: HttpContext) {
    await auth.check()

    const user = auth.user as User

    if (!params.step || !adviceCategoryValues[params.step - 1]) {
      return inertia.render('errors/not_found')
    }

    const advicesQuery = Advice.query()
      .preload('tags')
      .where('category', adviceCategoryValues[params.step - 1])

    if (user) {
      advicesQuery.preload('isSelected', (query) => {
        query.where('user_id', user.id)
      })
    }

    const advices = await advicesQuery

    const counts = await Advice.query()
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

    return inertia.render('advices/step', {
      advices: advices.map(advice => advice.serialize()),
      steps: steps
    })
  }

  async show({ inertia, params, auth }: HttpContext) {
    await auth.check()
    const user = auth.use('web').user as User

    const adviceQuery = Advice.query()
      .preload('tags')
      .preload('similarAdvices')
      .where('slug', params.slug)

    if (user) {
      adviceQuery.preload('isSelected', (query) => {
        query.where('user_id', user.id)
      })
    }

    const advice = await adviceQuery.firstOrFail()

    return inertia.render('advices/show', {
      advice: advice.serialize(),
    })
  }

  async new({ inertia }: HttpContext) {
    return inertia.render('advices/new', {
      adviceCategories: adviceCategoryOptions,
    })
  }

  async create({ request, response }: HttpContext) {
    const payload = await createAdviceValidator.validate(request.body())

    const advice = new Advice()

    advice.fill(payload)

    await advice.save()

    const tag = new Tag()
    tag.title = 'Test tag'
    tag.color = '#000000'
    await tag.save()

    const tag2 = new Tag()
    tag2.title = 'Test tag 2'
    tag2.color = '#000000'
    await tag2.save()

    await advice.related('tags').attach([tag.id, tag2.id])

    return response.redirect().toRoute('home')
  }

  async save({ request, response, params, auth }: HttpContext) {
    await auth.check()
    if (!auth.user) {
      return response.status(401).send('Unauthorized')
    }

    const advice = await Advice.findOrFail(params.id)
    const { save } = request.body()

    if (save) {
      await SelectedAdvice.firstOrCreate({
        userId: auth.user.id,
        adviceId: advice.id,
      })
    } else {
      await SelectedAdvice.query()
        .where('user_id', auth.user.id)
        .where('advice_id', advice.id)
        .delete()
    }
  }

  async check({ request, response, params, auth }: HttpContext) {
    await auth.check()
    if (!auth.user) {
      return response.status(401).send('Unauthorized')
    }

    const advice = await SelectedAdvice.query()
      .where('user_id', auth.user.id)
      .where('advice_id', params.id)
      .first()

    if (!advice) {
      return response.status(404).send('Not Found')
    }

    const { check } = request.body()

    advice.isChecked = check
    await advice.save()
  }
}
