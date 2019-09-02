const express = require('express')
const app = express()
const dotEnv = require('dotenv')
dotEnv.config()

app.use(express.json())

// route middleware
app.use('/users', require('./routers/users'))
app.use('/users_agen', require('./routers/agen'))
app.use('/regular', require('./routers/regular'))

app.listen(process.env.PORT, () => console.log('Server Up and Running on port:' + process.env.PORT + '!'))