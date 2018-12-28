var express      = require('express');
var path         = require('path');
var bodyParser   = require('body-parser');

var authApi   = require('./server/routes/auth/auth');
var notesApi  = require('./server/routes/notes/notes');
var colorsApi = require('./server/routes/colors/colors');

const port = 3000;

var app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', authApi);
app.use('/api', notesApi);
app.use('/api', colorsApi);

app.listen(port, () => console.log('Server on port ' + port));