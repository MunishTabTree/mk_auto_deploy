const express = require("express")
const app = express()

app.get('/', (req, res) =>{
    res.send("hello munish & pbk & sabari & madhes")
})

app.get('/:name', (req, res) =>{
    res.send(`select dynamic route is ${req.params.name}`)
})

app.listen(5000, ()=>{
    console.log("app running on port :", 5000)
})