var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const cors = require('cors')

app.use(bodyParser.json());

app.use(cors())

require('./app/routes/woocomerce.routes')(app);

var PORT = process.env.PORT || 8100;

var server = app.listen(PORT, function(){
    // app.use('/', routes,)
    var host = server.address().address;
    var port = server.address().port;
    console.log("app listening at http://%s:%s", host, port);

})

