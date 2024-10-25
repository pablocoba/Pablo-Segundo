const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) =>{
    response.send('Tonto el que lo lea!')
})

app.use('/html', express.static(__dirname + '/html'))

app.listen(port, (err)=>{
    console.log(`server is listening on ${port}`)
})