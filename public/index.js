const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/led1', function(req, res) {
    res.sendFile(path.join(__dirname + '/led1/led1.html'));
});
app.get('/led2', function(req, res) {
    res.sendFile(path.join(__dirname + '/led2/led2.html'));
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
/*Load the following url to see output
http://localhost:3000/ 

*/