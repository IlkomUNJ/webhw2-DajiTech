import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthRedirect {
  public async handle({ auth, response }: HttpContextContract, next: () => Promise<void>) {
    if (!(await auth.check())) {
      return response.redirect('/login')
    }

    await next()
  }
}
