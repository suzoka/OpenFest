import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class AuthController {
  async showLoginForm({ inertia }: HttpContext) {
    return inertia.render('auth/login')
  }

  async login({ request, response, auth, inertia }: HttpContext) {
    const { email, password } = request.body()

    try {
      const user = await User.verifyCredentials(email, password)
      await auth.use('web').login(user)
      return response.redirect().toRoute('home')
    } catch (error) {
      return inertia.render('auth/login', {
        errors: {
          email: 'Invalid credentials',
        },
      })
    }
  }

  async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.redirect().toRoute('auth.login')
  }

  async showRegisterForm({ inertia }: HttpContext) {
    return inertia.render('auth/register')
  }

  async register({ request, response }: HttpContext) {
    const { email, password, name } = request.body()
    const user = new User()
    user.fill({ email, password, name })
    await user.save()
    return response.redirect().toRoute('auth.login')
  }
}
