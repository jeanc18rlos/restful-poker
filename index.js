// Importing Node modules and initializing Express
const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      logger = require('morgan'),
      mongoose = require('mongoose'),
      router = require('./router'),
      cors = require('cors'),
      socketEvents = require('./socketEvents').realtime,
      config = require('./config/main');

// Database Connection
mongoose.connect(config.database, { useNewUrlParser: true });  
app.use(cors());
app.options('*', cors());

// Setting up basic middlewares for all Express requests
app.use(logger('dev')); //Log requests to API using morgan
app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
      res.header('Access-Control-Allow-Credentials', 'true');
      next();
    });
// Adding bodyParser to parse urlEncoded bodies to Json
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// rest routing
router(app);  

// Start the server
const server = app.listen(config.port);
console.log('server running on port ' + config.port);

// Socket server
const io = require('socket.io').listen(server);
// Socket events
socketEvents(io);  
