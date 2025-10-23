import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'

export default class CartController {
  public async index({ session, view }: HttpContextContract) {
    const cart = session.get('cart', [])
    // Load product details for cart items
    const products = await Product.query().whereIn('id', cart)
    return view.render('shoppingcart', { products })
  }

  public async add({ params, session, response }: HttpContextContract) {
    const productId = parseInt(params.productId)
    let cart = session.get('cart', [])
    if (!cart.includes(productId)) {
      cart.push(productId)
      session.put('cart', cart)
    }
    return response.redirect().back()
  }

  public async remove({ params, session, response }: HttpContextContract) {
    const productId = parseInt(params.productId)
    let cart = session.get('cart', [])
    cart = cart.filter((id) => id !== productId)
    session.put('cart', cart)
    return response.redirect().back()
  }
}
