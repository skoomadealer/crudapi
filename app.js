const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Log IN')
})
app.get('/seks', (req, res) => {
    res.send('Log IN')
})

app.listen(3000)

