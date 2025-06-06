import type { HttpContext } from '@adonisjs/core/http'
import Advice from '#models/advice'
import { createAdviceValidator } from '#validators/advice'
import Tag from '#models/tag'
import { adviceDisabilityOptions, adviceCategoryOptions, AdviceCategory } from '#models/advice'

const adviceCategoryValues = Object.values(AdviceCategory)

export default class AdvicesController {

  async index({ inertia, request }: HttpContext) {
    let advices

    const params = request.qs()

    if (params.search) {
      advices = await Advice.search(params.search)
    } else {
      advices = await Advice.query()
        .preload('tags')
        .orderBy('created_at', 'desc')
    }

    return inertia.render('advices/index', {
      advices: advices
    })
  }

  async step({ inertia, params }: HttpContext) {

    if (!params.step || !adviceCategoryValues[params.step - 1]) {
      return inertia.render('errors/not_found')
    }

    const advices = await Advice.query()
      .preload('tags')
      .where('category', adviceCategoryValues[params.step - 1])

    return inertia.render('advices/step', {
      advices: advices,
    })
  }

  async show({ inertia, params }: HttpContext) {
    const advice = await Advice.query()
      .preload('tags')
      .preload('similarAdvices')
      .where('slug', params.slug)
      .firstOrFail()
    return inertia.render('advices/show', {
      advice: advice,
    })
  }

  async new({ inertia }: HttpContext) {
    return inertia.render('advices/new', {
      adviceDisabilities: adviceDisabilityOptions,
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
}
