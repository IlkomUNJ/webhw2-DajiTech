// start/kernel.ts (register middleware)
Server.middleware.registerNamed({
  auth: () => import('@ioc:Adonis/Addons/Auth/middleware'),
  authRedirect: () => import('App/Middleware/AuthRedirect'),
})
