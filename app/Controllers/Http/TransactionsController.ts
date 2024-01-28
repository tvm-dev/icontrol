import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Transaction from 'App/Models/Transaction'

export default class TransactionsController {
  public async index({ }: HttpContextContract) {

    const transactions = await Transaction.all()
    return transactions

  }

  public async store({ request, response }: HttpContextContract) {

    const body = request.body()
    console.log(body) //apagar
    const transactions = await Transaction.create(body)
    response.status(201)
    return {
      message: 'Transação criada com Sucesso!',
      data: transactions,
    }
  }

  public async show({ params }: HttpContextContract) {
    const transactions = await Transaction.findOrFail(params.id)
    
    return {
       data: transactions
      
    
    }
  }

  public async update({params, request }: HttpContextContract) {

    const body = request.body()
    const transactions = await Transaction.findOrFail(params.id)

    transactions.date = body.date
    transactions.type = body.type
    transactions.description = body.description
    transactions.value = body.value
    transactions.details = body.details
    transactions.status = body.status

    await transactions.save()


    return { 
      message: 'Transação atualizada com Sucesso!',
      data: transactions
     }
  }

  public async destroy({ params }: HttpContextContract) {

    const transactions = await Transaction.findOrFail(params.id)

    await transactions.delete()

    return { 
      message: 'Transação deletada com Sucesso!',
      data: transactions
    
    }
  }
}
