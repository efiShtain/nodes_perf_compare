const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
app.use(morgan('combined'))
app.get('/', (req, res) => res.json( { hello: 'world' }))

app.listen(port, async () =>console.log(`started express server on port ${port}`))
