import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'

export default class HomeController {
  public async index({ view }: HttpContextContract) {
    const laptops = await Product.query().where('category', 'laptop').limit(4)
    const phones = await Product.query().where('category', 'phone').limit(4)
    return view.render('home', { laptops, phones })
  }
}
