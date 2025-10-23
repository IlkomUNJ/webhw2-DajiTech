import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class ProductValidator {
  public schema = schema.create({
    name: schema.string({}, [rules.maxLength(255)]),
    price: schema.number([rules.unsigned()]),
    image: schema.string({}, [rules.maxLength(255)]),
    category: schema.enum(['laptop', 'phone'] as const),
  })

  public messages = {
    'name.required': 'Nama produk harus diisi',
    'price.required': 'Harga harus diisi',
    'price.unsigned': 'Harga harus positif',
    'category.enum': 'Kategori harus laptop atau phone',
  }
}
