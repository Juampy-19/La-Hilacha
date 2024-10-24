const express = require('express')
const session = require('express-session')
const app = express()
const validationFormDatos = require('./middlewares/validationFormDatos.js')

// Llamando a las rutas.
const homeRoute = require('./routes/homeRouter.js')
const pizzasRoute = require('./routes/pizzasRouter.js')
const empanadasRoute = require('./routes/empanadasRouter.js')
const formDatosRouter = require('./routes/formDatosRouter.js')
const seleccionProductos = require('./routes/seleccionProductosRouter.js')

// Configuración de express-session.
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}))

// Recursos estaticos.
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(validationFormDatos)

// Template engine.
app.set('view engine', 'ejs')
app.set('views', './views')

// Rutas.
app.use('/', homeRoute)
app.use('/', pizzasRoute)
app.use('/', empanadasRoute)
app.use('/', formDatosRouter)
app.use('/', seleccionProductos)
app.use((req, res, next) => {
  res.status(404).render('404')
})

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT} 🚀`)
})
