const express = require("express")
const app = express()

app.get('/', (req, res) =>{
    res.send("hello munish")
})

app.listen(5000)