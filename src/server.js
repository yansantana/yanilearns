const express = require('express')
const bodyParser = require('body-parser')
const mongodb = require('mongodb')

const app = express()

/* Middleware */
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/* Routes */


/* Connection to MongoDB */


const port = 3000

app.listen(port, () => {
    console.log("Listening on port: " , port )
})