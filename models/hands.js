const mongoose = require('mongoose'),
      Schema = mongoose.Schema;
//========================================
// Hands schema
//========================================

// Schema defines how poker hands played will be stored in MongoDB
const HandSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId, 
        ref: 'User'           
        },
    tableId:{
        type: Schema.Types.ObjectId,
        ref: 'Room'
    },
    name: String,
    score: Number,
    cards: [{
        type: String
    }],
    winningHand: Boolean
    
});

module.exports = mongoose.model('Hand', HandSchema);  