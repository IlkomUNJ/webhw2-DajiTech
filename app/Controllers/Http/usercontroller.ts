import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserController {
  public async profile({ auth, view }: HttpContextContract) {
    const user = auth.user
    return view.render('profile', { user })
  }

  // Additional edit or update profile methods here
}
