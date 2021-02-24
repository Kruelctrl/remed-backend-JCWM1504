// import module
const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')

// main app
const app = express()

// apply middleware
app.use(cors())
app.use(bodyparser.json())

// main route
const response = (req, res) => res.status(200).send('<h1>REST API JCWM1504</h1>')
app.get('/', response)

// // bind to local machine
// const PORT = process.env.PORT || 2000
// app.listen(PORT, () => console.log(`CONNECTED : port ${PORT}`))

// setup sql
// import connection
const db = require('./database')

db.connect((err) => {
    // console.log(err)
    // console.log(connection)
    if (err) return console.log(`error connecting : ${err.stack}`)
    console.log(`connected as id : ${db.threadId}`)
})

// create home route
app.get('/', (req, res) => {
    res.status(200).send(`<h1>This is Home</h1>`)
})

// import router
const { productRouter } = require('./routers')
app.use('/product', productRouter)

const PORT = 2000
app.listen(PORT, () => console.log(`Connected to PORT: ${PORT}`))