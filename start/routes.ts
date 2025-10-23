import Route from '@ioc:Adonis/Core/Route'

Route.get('/login', async ({ view }) => view.render('auth/login')).as('login')
Route.post('/login', 'AuthController.login')
Route.post('/logout', 'AuthController.logout').middleware('auth')

Route.get('/register', async ({ view }) => view.render('auth/register'))
Route.post('/register', 'AuthController.register')
