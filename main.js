const express = require('express')
const app = express()
const port = 6060


app.get('/', (req, res) => {
    res.send('Hello World_change3!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})