import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {
  public async register({ request, response, auth }: HttpContextContract) {
    const data = request.only(['username', 'email', 'password'])

    const user = await User.create(data)

    await auth.login(user)

    return response.redirect('/')
  }

  public async login({ auth, request, response, session }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    try {
      await auth.attempt(email, password)
      return response.redirect('/')
    } catch {
      session.flash('error', 'Invalid credentials')
      return response.redirect().back()
    }
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.logout()
    return response.redirect('/login')
  }
}
