const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      bcrypt = require('bcrypt-nodejs');
//========================================
// Conversation schema
//========================================

// Schema defines how chat messages will be stored in MongoDB
const ConversationSchema = new Schema({
      participants:[
            {
                  type: Schema.Types.ObjectId, 
                  ref: 'User'           
             }
      ],
});

module.exports = mongoose.model('Conversation', ConversationSchema);  