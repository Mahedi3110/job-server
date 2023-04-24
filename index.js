const express = require('express')
const datas = require('./datas.json');
const cors = require('cors');
const app = express()
const port = 5000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/datas', (req, res) => {
    res.send(datas)
})

app.get('/datas/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const data = datas.find(data => data.id == id)
    res.send(data)
})

app.listen(port, () => [
    console.log(`website is running on port: ${port}`)
])