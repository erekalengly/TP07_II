const express = require('express')
const fs = require('fs')
const app = express()
const dir = app.use(express.static('public'))



app.get('/', function (req,res) {
    fs.readFile('index.html', 'utf8', (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        res.send(data)
    })
})

app.listen(3000, () => {
    console.log("Server is running is port 3000")
})


