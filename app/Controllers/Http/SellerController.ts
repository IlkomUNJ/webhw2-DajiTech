import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'

export default class SellerController {
  public async products({ auth, view }: HttpContextContract) {
    // Assuming products belong to seller, here simplified:
    const products = await Product.all()
    return view.render('seller_products', { products })
  }

  public async addProduct({ request, response }: HttpContextContract) {
    const data = request.only(['name', 'price', 'image', 'category'])

    await Product.create({
      name: data.name,
      price: Number(data.price),
      image: data.image,
      category: data.category,
    })

    return response.redirect('/seller/products')
  }
}
