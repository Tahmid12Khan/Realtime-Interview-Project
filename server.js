const express = require('express');
const bodyParser = require('body-parser');
var methodOverride = require('method-override');
var session = require('express-session');


const app = express();


app.use(methodOverride('_method'));
app.use(session({
    secret: 'ssshhhhh'
}));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static('static'));
// parse requests of content-type - application/json
app.use(bodyParser.json())
app.set('view engine', 'ejs');

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

require('./routes/user.routes.js')(app);

server = app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

require('./controller/socket.controller')(server)
