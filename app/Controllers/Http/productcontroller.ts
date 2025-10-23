import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'

export default class ProductController {
  public async search({ request, view }: HttpContextContract) {
    const query = request.input('q', '')
    const products = await Product.query()
      .where('name', 'like', `%${query}%`)
      .orWhere('category', 'like', `%${query}%`)
    return view.render('search_results', { products, query })
  }

  public async show({ params, view }: HttpContextContract) {
    const product = await Product.findOrFail(params.id)
    return view.render('product_display', { product })
  }
}
