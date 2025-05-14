import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class AdminMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    /**
     * Middleware logic goes here (before the next call)
     */

    const user = ctx.session?.get('user')
    if (!user || user.role !== 'admin') {
      ctx.session.flashExcept(['_csrf'])
      ctx.session.flashErrors({ 401: 'Unauthorized' })
      return ctx.response.redirect().toRoute('home')
    }

    /**
     * Call next method in the pipeline and return its output
     */
    const output = await next()
    return output
  }
}
