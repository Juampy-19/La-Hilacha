const express = require('express')
const app = express()

// Llamando a las rutas.
const homeRoute = require('./routes/homeRouter.js')
const pizzasRoute = require('./routes/pizzasRouter.js')
const empanadasRoute = require('./routes/empanadasRouter.js')

// Recursos estaticos.
app.use(express.static('public'))

// Template engine.
app.set('view engine', 'ejs')
app.set('views', './views')

// Rutas.
app.use('/', homeRoute)
app.use('/', pizzasRoute)
app.use('/', empanadasRoute)

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
