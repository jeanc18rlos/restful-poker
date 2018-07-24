const mongoose = require('mongoose'),
      Schema = mongoose.Schema;
//========================================
// Bets schema
//========================================

// Schema defines how player bets  will be stored in MongoDB
const BetSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId, 
        ref: 'User'           
        },
    amount: Number,
    result: String,
    type: String, 
});

module.exports = mongoose.model('Bet', BetSchema);  