const http = require("http")


app = http.createServer((req, res) => {
    res.end('hello world')
})

app.listen(5000)