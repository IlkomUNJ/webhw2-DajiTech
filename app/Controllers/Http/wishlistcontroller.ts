import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Wishlist from 'app/models/wishlist.ts'
import Product from 'app/models/product.ts'

export default class WishlistController {
  public async index({ auth, view }: HttpContextContract) {
    const user = auth.user!
    const wishlistItems = await Wishlist.query()
      .where('user_id', user.id)
      .preload('product')

    return view.render('wishlist', { wishlistItems })
  }

  public async add({ auth, params, response }: HttpContextContract) {
    const user = auth.user!
    const productId = Number(params.productId)

    await Wishlist.firstOrCreate({
      userId: user.id,
      productId,
    })

    return response.redirect('/wishlist')
  }

  public async remove({ auth, params, response }: HttpContextContract) {
    const user = auth.user!
    const productId = Number(params.productId)

    await Wishlist.query()
      .where('user_id', user.id)
      .andWhere('product_id', productId)
      .delete()

    return response.redirect('/wishlist')
  }
}
