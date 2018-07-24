// Importing route controllers, helper functions and required modules
const AuthenticationController = require('./controllers/authentication'), 
      UserController = require('./controllers/user'),
      express = require('express'),
      configController = require('./controllers/config'),
      ChatController = require('./controllers/chat'),
      tableController= require('./controllers/table'),
      passportService = require('./config/passport'),
      passport = require('passport');

// Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });  
const requireLogin = passport.authenticate('local', { session: false });  

// Constants for role types
const ROLE_MEMBER = require('./constants').ROLE_MEMBER;
const ROLE_CLIENT = require('./constants').ROLE_CLIENT;
const ROLE_OWNER = require('./constants').ROLE_OWNER;
const ROLE_ADMIN = require('./constants').ROLE_ADMIN;

// Exporting the rest router
module.exports = function(app) { 

 // Initializing route groups
    const apiRoutes = express.Router(),
          authRoutes = express.Router(),
          chatRoutes = express.Router(),
          tableRoutes = express.Router(),
          configRoutes = express.Router(),
          userRoutes =  express.Router();
      
//=========================
// Auth Routes
//=========================
      
// Set auth routes as subgroup/middleware to apiRoutes
    apiRoutes.use('/auth', authRoutes);
      
// Registration route
    authRoutes.post('/register', AuthenticationController.register);
      
// Login route
    authRoutes.post('/login', requireLogin, AuthenticationController.login);

//=========================
// chat Routes
//=========================
// Set chat routes as a subgroup/middleware to apiRoutes
    apiRoutes.use('/chat', chatRoutes);

// View messages to and from authenticated user
    chatRoutes.get('/', requireAuth, ChatController.getConversations);

// Retrieve single conversation
    chatRoutes.get('/:conversationId', requireAuth, ChatController.getConversation);

// Send reply in conversation
    chatRoutes.post('/:conversationId', requireAuth, ChatController.sendReply);

// Start new conversation
    chatRoutes.post('/new/:recipient', requireAuth, ChatController.newConversation);      
// Set url for API group routes
    app.use('/api', apiRoutes);

 //= ========================
  // User Routes
  //= ========================

  // Set user routes as a subgroup/middleware to apiRoutes
  apiRoutes.use('/user', userRoutes);

  // View user profile route
  userRoutes.get('/:userId', requireAuth, UserController.viewProfile);

   // View user profile route
   userRoutes.put('/:userId', requireAuth, UserController.updateProfile);

  // Test protected route
  apiRoutes.get('/protected', requireAuth, (req, res) => {
    res.send({ content: 'The protected test route is functional!' });
  });
  // Test admins routes
  apiRoutes.get('/admins-only', requireAuth, AuthenticationController.roleAuthorization(ROLE_ADMIN), (req, res) => {
    res.send({ content: 'Admin dashboard is working.' });
  });
//=========================
// config Routes
//=========================
      
// Set auth routes as subgroup/middleware to apiRoutes
apiRoutes.use('/config', configRoutes);
// update config
configRoutes.put('/:userId', requireAuth, configController.updateConfig);      
//= ========================
// Table Routes
//= ========================
  // Set table routes as a subgroup/middleware to apiRoutes
  apiRoutes.use('/tables', tableRoutes);

  // create new tables route
  tableRoutes.post('/new', requireAuth, AuthenticationController.roleAuthorization(ROLE_ADMIN), tableController.addTable);

  // route to view all tables
  tableRoutes.get('/view', requireAuth,AuthenticationController.roleAuthorization(ROLE_ADMIN), tableController.viewTables);

  // FUTURE ROUTES
  //tableRoutes.get('/lobbyTables/', requireAuth, tableController.viewLobbyTables);
  //tableRoutes.get('/table-data/:tableId', requireAuth, tableController.sendData);
};
