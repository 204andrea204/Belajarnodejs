const express = require("express"),
cors = require("cors"),
bodyParser = require("body-parser"),
response = require("./restapi"),
app = express(),
versionPath = "/v1/"

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.disable('etag')

// books management
app.use(versionPath + 'auth', require('./routes/auth'))
app.use(versionPath + 'books', require('./routes/books'))
app.use(versionPath + 'users', require('./routes/users'))

app.use('/', (req, res) => {
    return response.notFound([], res)
})

app.listen(3000,() => console.log("Server is running on http://localhost:3000"))