import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class AuthController {
  async showLoginForm({ inertia }: HttpContext) {
    return inertia.render('auth/login')
  }

  async login({ request, response, auth, inertia, session }: HttpContext) {
    const { email, password } = request.body()

    try {
      const user = await User.verifyCredentials(email, password)
      await auth.use('web').login(user)
      session.put('user', { id: user.id, email: user.email, name: user.name, role: user.role })

      return response.redirect().toRoute('home')
    } catch (error) {
      return inertia.render('auth/login', {
        errors: {
          email: 'Invalid credentials',
        },
      })
    }
  }

  async logout({ auth, response, session }: HttpContext) {
    await auth.use('web').logout()
    session.forget('user')

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
