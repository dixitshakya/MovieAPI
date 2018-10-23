let express = require('express')
let path = require('path')
let bodyParser = require('body-parser')
let mongojs = require('mongojs')
let route = require('./routes/route')

let app = express();
let port = process.env.PORT || 3000


app.set(bodyParser.json());
app.set(bodyParser.urlencoded({extended:false}))

app.use('/',route)



app.listen(port,(err)=>{
    if(err){console.log(err)}
    else console.log("Listening on port "+port);
})