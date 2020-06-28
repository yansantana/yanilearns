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


/* Handle production */
if (process.env.NODE_ENV === 'production') {
    /* Static Folder */
    app.use(express.static(__dirname + '/public/'))

    /* Handle SPA */
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("Listening on port: " , port )
})