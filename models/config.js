const mongoose = require('mongoose'),
      Schema = mongoose.Schema;
//========================================
// configuration schema
//========================================

// Schema defines how game preferences  will be stored in MongoDB
const ConfigSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId, 
        ref: 'User'           
        },
    avatar: {
        type : String,
        default :'default'
    },
    language: {
        type : String,
        default :'english'
    },
    timeZone: {
        type : String,
        default :'default'
    },
    enableSounds: {
        type : Boolean,
        default : true
    },
    disableChat: {
        type : Boolean,
        default : false
    },
    disableDealerChat: {
        type : Boolean,
        default : false
    },
    enableHandRanking: {
        type : Boolean,
        default : true
    },    
});

module.exports = mongoose.model('Config', ConfigSchema);  