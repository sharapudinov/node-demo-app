/**
 * Created by Asus- on 18.02.2015.
 */
var express = require('express')
    , app = express()
    , port = process.env.PORT || 3000

app.get('/', function (req, res) {
    res.send('Hello, World!')
})

app.listen(port, function () {
    console.log('Listening on port ', port)
})