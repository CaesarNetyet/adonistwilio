/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return [
    {
      "name": "AdonisJS",
      "description": "A web framework for Node.js",
    },
    {
      "name": "Lucid ORM",
      "description": "A database ORM for AdonisJS",
      "detalles": [
        "AdonisJS",
        "Lucid ORM",
        
      ]
    }
  ]
})


Route.get('/hola', 'TwiliosController.Hola');

Route.get('/axios', 'TwiliosController.Axios');

Route.get('/specificmessage/:v', 'TwiliosController.specificMessage');

Route.post('/sendmessage/:v?', 'TwiliosController.sendMessage');
Route.post('/sendmessageurl', 'TwiliosController.sendMessageUrl');

Route.get('/index/:v?', 'TwiliosController.index');


Route.get('/prueba/:name?', 'PruebasController.prueba');
