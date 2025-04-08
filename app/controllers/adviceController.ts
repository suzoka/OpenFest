import type { HttpContext } from '@adonisjs/core/http'
import Advice from '#models/advice'
import { createAdviceValidator } from '#validators/advice'
import Tag from '#models/tag'

export default class ProjectsController {
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
