"use strict"
const Notification = require('../models/notifications');

// get non read notifications
      exports.getNonReadNotifications = function(req, res, next) {  
        // Only return one message from each conversation to display as snippet
        Notification.find({ to: req.user._id, read :false },function(err,notifications){
            if(err) res.status(200).json({ message: "No new notifications" });
            res.status(200).json(notifications);
            return next();
        });
         
      }      


// get all notifications      
exports.getAllNotifications = function(req, res, next) {  
    // Only return one message from each conversation to display as snippet
    Notification.find({ to: req.user._id},function(err,notifications){
        if(err) res.status(200).json({ message: "No  notifications" });
        res.status(200).json(notifications);
        return next();
    });
     
  }   

  // DELETE notification
exports.deleteConversation = function(req, res, next) {  

  }
  
  // set notification as read
  exports.updateMessage = function(req, res, next) {  
    
  }   