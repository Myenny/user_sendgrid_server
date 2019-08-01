const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(cors())

const users = require('./routes/api/users')

const sendGrid = require('./routes/api/SendGrid')


app.use('/api/users', users)

app.use('/api/SendGrid', sendGrid)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))

//spathe
//test123