var express = require('express');
var app = express();
// Log the requests
//app.use(express.logger('dev'));
// Serve static files
app.use('/assets',express.static(__dirname+'/public'));
// Route for everything else.
app.get('/', function(req, res){
res.sendFile(__dirname+'/en/index.html');
});
app.get('/es', function(req, res){
res.sendFile(__dirname+'/es/index.html');
});
// Fire it up!
app.listen(3000);
console.log('Listening at http://localhost:3000');