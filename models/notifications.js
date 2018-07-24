const mongoose = require('mongoose'),
Schema = mongoose.Schema;
//========================================
// Conversation schema
//========================================

// Schema defines how notifications will be stored in MongoDB
const NotificationSchema = new Schema({
  to:{
    type: Schema.Types.ObjectId, 
    ref: 'User'           
  },
  icon: String,
  title: String,
  body: String,
  read: Boolean,
  },{
    timestamps:true
});

module.exports = mongoose.model('Notification', NotificationSchema);  