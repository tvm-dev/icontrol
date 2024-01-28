import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'


export default class UsersController {
  public async index({}: HttpContextContract) {
    const users = await User.all()
    return users
  }

  public async store({ request, response }: HttpContextContract) {
    const body = request.body()
    console.log(body)
    const user = await User.create(body)

    response.status(201)

    return {
      message: 'Usuário criado com Sucesso!',
      data: user
    }


  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
