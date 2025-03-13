import type { HttpContext } from '@adonisjs/core/http'
import Advice from '#models/advice'
import { AdviceCategory, AdviceDisabilityType } from '#models/advice'
import Tag from '#models/tag'

export default class ProjectsController {
  async home({ inertia }: HttpContext) {
    const advice = new Advice()

    advice.title = 'Test advice'
    advice.category = AdviceCategory.BOOKING
    advice.disabilityType = AdviceDisabilityType.PMR
    advice.isPublished = true

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

    const myAdvice = await Advice.query()
      .where('id', advice.id)
      .preload('tags')
      .first()

    return inertia.render('home', {
      advice: myAdvice
    })
  }
}
