# Restful Poker
A restful api combined with socket.io technology for realtime play and poker solver modules.

[========]

###Features

#####Essentials
- API routing with Express.
- Object document mapping with Mongoose.
- Authenticate requests with Passport and JWT.
- CORS enabled
- Real-time bidirectional communication with Socket.io

#####Environments 
-  Server-side platform with Node.
- Version control with Git.
- Code repository with GitHub.
- Manage dependencies with  npm.
- Cloud application hosting with Heroku.
- Cloud NoSQL database hosting with mLab.

#####To do
-  Add payment support with paypal
- Add email support with sendgrid
- Implement graphql as data query
- Implement redis for scalling
- Cloud application hosting with Heroku.
- Cloud NoSQL database hosting with mLab.
-  Add reactive extensions with ReactiveX.
-  Add socket io auth
-  Add hands and bets controllers & routes

[========]


###Table of contents
-  Getting Started
- Configuration
- Testing
- Directory structure

###Getting started
1) Clone this repo and cd inside

    ```
    $git clone https://github.com/jeanc18rlos/restful-poker.git <PROJECT NAME>
	cd <PROJECT NAME>
    ```

2) Install dependencies

    ```
    $ npm install
    ```

###Configuration
1) Cd into config folder and select main.js and change these lines

    ```
    module.exports = {
        // Your prefered port here
            'port' : process.env.PORT || 3000,
       // your Secret key for JWT signing and encryption
            'secret': 'MySecret',
       // your sendgrid api key
            'sendGridKey': 'mysgkey',
       // your database connection information
            'database': 'myMongoUri',
    }
    ```

###Testing
To test the app via postman you should need to follow these steps

1) set  Content type header as application/www-x-form-urlencoded

2) set the authorization header as Authorization and paste your generated token.

###Directory structure

```
|--config
		|--main.js
		|--passport.js
|--controllers
		|--authentication.js
		|--bets.js
		|--chats.js
		|--config.js
		|--hands.js
		|--mails.js
		|--notifications.js
		|--table.js
		|--user.js
|--models
		|--bets.js
		|--config.js
		|--conversations.js
		|--hands.js
		|--message.js
		|--notifications.js
		|--table.js
		|--user.js
|--node_modules
|--poker_modules
		|--deck.js
		|--player.js
		|--pot.js
		|--table.js
constants.js
helpers.js
index.js
socketEvents.js
router.js
package.json
```



## License

This project is licensed under the MIT License - see the [License.md](License.md) file for details

