const express = require('express')    //Lllama a la libreria express
const app = express()  //Crea una instancia de esa libreria
const cors = require('cors') // Importa la librería cors
const fs = require('fs')  // Importa la librería fs para manejar el sistema de archivos

app.use(cors({ origin: ['localhost:8080'], credentials: true }))
app.use(express.json({ limit: '10mb', extended: true }))

fs.readdirSync('./src/routes/').forEach(file => {
  require(`./src/routes/${file}`)(app)
})

app.listen(8080, () => { //Abre el puerto
  console.log(`El servidor está corriendo en el puerto 8080.`)
})