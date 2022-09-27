'use strict'

const express = require('express')
const cors = require('cors')
const config = require('./config')
const competidorRoutes = require('./routes/competidor-routes')
const touroRoutes = require('./routes/touro-routes')
const agendaRoutes = require('./routes/agenda-routes')
const timeRoutes = require('./routes/time-routes')
const resultadoRoutes = require('./routes/resultado-routes')

const app = express()

app.use(express.json())

app.use(cors())

app.use('/api', touroRoutes.routes)
app.use('/api/competidores', competidorRoutes)
app.use('/api/agendas', agendaRoutes)
app.use('/api/times', timeRoutes)
app.use('/api/resultados', resultadoRoutes)

app.listen(config.port, () =>
  console.log('API está rodando em http://localhost:' + config.port)
)