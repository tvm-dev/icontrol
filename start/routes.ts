import Route from '@ioc:Adonis/Core/Route'
import TransactionsController from 'App/Controllers/Http/TransactionsController'
import UsersController from 'App/Controllers/Http/UsersController'
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'

Route.get('/api', async () => {
  return { hello: 'iControl Dashboard' }
}).prefix('/api')


Route.resource('/api/transactions', 'TransactionsController').apiOnly()
Route.resource('/api/users', 'UsersController').apiOnly()



