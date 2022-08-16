

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'TasksController.index').as('home')



Route.get('/task', 'TasksController.create').as('create')
Route.post('/task', 'TasksController.store')


Route.get('/task/:id', 'TasksController.show').as('show')
Route.post('/task/:id', 'TasksController.delete').as('delete')

Route.get('/task/edit/:id', 'TasksController.show').as('show.update')
Route.post('/task/edit/:id', 'TasksController.update').as('update')
