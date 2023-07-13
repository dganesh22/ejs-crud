const express = require('express')
require('dotenv').config()
// import connnectdb method
const connectDb = require('./db/connect')

const PORT = process.env.PORT

const app = express()

app.use(express.static('./view'))

// body parser middleware config
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// ejs settings
app.set('view engine', 'ejs')
app.set('views', './view')

// home route
app.use(`/`, require('./route/userRoute'))

// server listen
app.listen(PORT, () => {
    connectDb() // call the db connectivity method
    console.log(`server started and live @ http://localhost:${PORT}`)
})