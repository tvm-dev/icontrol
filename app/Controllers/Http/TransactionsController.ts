import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TransactionsController {
  public async index({}: HttpContextContract) {
    return {msg: 'Index'}
  }

  public async store({}: HttpContextContract) {
    return {msg: 'Store'}
  }

  public async show({}: HttpContextContract) {
    return {msg: 'Show'}
  }

  public async update({}: HttpContextContract) {
    return {msg: 'Update'}
  }

  public async destroy({}: HttpContextContract) {
    return {msg: 'Destroy'}
  }
}
