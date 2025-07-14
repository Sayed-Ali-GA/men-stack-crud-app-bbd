const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const app = express()

mongoose.connect(process.env.MONGOBD_URI)
mongoose.connection.on('connected', () => {
    console.log(`connected to MongoDB ${mongoose.connection.name}`)
})

app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res) => {
    res.render('index.ejs')
  })

app.listen(3001, () => {
    console.log('Listening on port 3001')
})