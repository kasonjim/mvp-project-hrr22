var app = require('./server-config.js');

var port = process.env.PORT || 1337;

app.listen(port);
console.log('Now listening to port ' + port);