const express = require('express')
const app = express()
const port = 6060

const lib = require('./router-info')

app.get('/', (req, res) => {
    res.send('Hello World_change34!')
})

app.get('/devices-count', (req, res) => {
let device_count = lib.findAllDevices()
    res.send(device_count)
}) 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})