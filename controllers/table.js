const Room = require('../models/table'),
      tables = require('../socketEvents').tables,
      setTableInfo = require('../helpers').setTableInfo;

//========================================
// view tables route
//========================================

exports.viewTables = function(req, res, next) {  
    // Only return one message from each conversation to display as snippet
    Room.find({}, function(err, docs) {
        if (!err){ 
         
            return res.status(200).send(docs);
        } else {throw err;}
    });
  }


//========================================
// addtable route
//========================================
exports.addTable = function(req, res, next) {  
    // Check for registration errors
    let tableInfo = setTableInfo(req);
   

    // Return error if no email provided
    if (!tableInfo.id) {
        return res.status(422).send({ error: 'You must enter an id for table emiter.', });
    }
    // Return error if full name not provided
    if (!tableInfo.name) {
        return res.status(422).send({ error: 'You must enter the table name.'});
    }
    // Return error if no password provided
    if (!tableInfo.bb) {
        return res.status(422).send({ error: 'You must enter the big blind amount' });
    }
    if (!tableInfo.sb) {
        return res.status(422).send({ error: 'You must enter the small blind amount.' });
    }
    if (!tableInfo.maxBuyIn) {
        return res.status(422).send({ error: 'You must declare the max buy in amount.'});
    }
    // Return error if full name not provided
    if (!tableInfo.minBuyIn) {
        return res.status(422).send({ error: 'You must declare the minimum buy in amount.'});
    }
      // Return error if no password provided
    if (!tableInfo.privateTable) {
        return res.status(422).send({ error: 'You must declare if he table status its private or public' });
    }
    if (!tableInfo.cardSuit) {
        return res.status(422).send({ error: 'you must define the card suit' });
    }
    if (!tableInfo.cardBack) {
        return res.status(422).send({ error: 'you must define the cardback style'});
    }
    if (!tableInfo.backgroundColor) {
        return res.status(422).send({ error: 'you must define the bg color' });
    }
    if (!tableInfo.backgroundImg) {
        return res.status(422).send({ error: 'you must define the bg img' });
    }
    if (!tableInfo.feltColor) {
        return res.status(422).send({ error: 'you must define thefelt color' });
    }
    if (!tableInfo.feltImg) {
        return res.status(422).send({ error: 'you must define the felt img' });
    }
    if (!tableInfo.chipColor) {
        return res.status(422).send({ error: 'you must define the the chip color' });
    }
    if (!tableInfo.type) {
        return res.status(422).send({ error: 'you must define thetype' });
    }

    if (!tableInfo.cardBack) {
        return res.status(422).send({ error: 'you must define the cardback style' });
    }
    Room.findOne({ id: tableInfo.id }, function(err, existingTable) {
        if (err) { return next(err); }
  
        // If user is not unique, return error
        if (existingTable) {
          return res.status(422).send({ error: 'this table is already existing', msg : existingTable });
        }
  
        // If email is unique and password was provided, create account
        let room = new Room({
          id : tableInfo.id,
          name: tableInfo.name,
          seats: tableInfo.seats,
          bb : tableInfo.bb,
          sb : tableInfo.sb,
          maxBuyIn : tableInfo.maxBuyIn,
          minBuyIn : tableInfo.minBuyIn,
          privateTable: tableInfo.privateTable,
          cardSuit : tableInfo.cardSuit,
          cardBack : tableInfo.cardBack,
          backgroundColor : tableInfo.backgroundColor,
          backgroundImg : tableInfo.backgroundImg,
          feltColor : tableInfo.feltColor,
          feltImg : tableInfo.feltImg,
          chipColor : tableInfo.chipColor,
          type : tableInfo.type 
        });
  
        room.save(function(err, room) {
          if (err) { return next(err); }
  
          // Subscribe member to Mailchimp list
          // mailchimp.subscribeToNewsletter(user.email);
  
          // Respond with JWT if user was created
  
          return res.status(200).send({ room: room });
        });
    });
  }

