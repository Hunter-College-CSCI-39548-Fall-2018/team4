const express = require('express')
const bodyParser = require('body-parser')

const PORT = 3000
const api = require('./routes/api')
const app = express()

app.use(bodyParser.json())

app.get('/', function(req, res){
    res.send('Server is loading')
})
app.use('/api', api)
app.listen(PORT, function(){
    console.log('Server running on localhost:' + PORT)
})