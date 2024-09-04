module.exports = (app) => { // Exporto una función a la que le paso como parámetro "app"
  const router = require('express').Router() // 'express es la libreria que escucha por los puertos por todas las url que le pasemos. Aquí se carga en la constante "router" en la RAM, la funcion "router()" de la librertia express que se ha llamado mediante "require".
  const controller = require('../controllers/admin/user-controller.js') // En la constante "controller" cargo el archivo "user-controller.js"

  router.post('/', controller.create) // '/' simboliza -->'/api/admin/users'
  router.get('/', controller.findAll)
  router.get('/:id', controller.findOne)
  router.put('/:id', controller.update)
  router.delete('/:id', controller.delete)
  // Las cuatro lineas anteriores serían los endpoints
  app.use('/api/admin/users', router) // Hey app! Usa esta url básica, con los anteriores endpoints ("roter")
}

// Ojo: para pasar parámetros por url primero hay que decirle al método get en '/' que recoja separe el espacio para reocger dicho parámetro; en este cado es "id"
