const Config = require('../models/config');


//= =======================================
// Config Routes
//= =======================================

// update Config
exports.updateConfig = function (req, res, next) {
  let updateObject = {}
  if(req.body.avatar)  updateObject.avatar = req.body.avatar;
  if(req.body.language)  updateObject.language = req.body.language;
  if(req.body.timeZone)  updateObject.timeZone = req.body.timeZone;
  if(req.body.enableSounds)  updateObject.enableSounds = req.body.enableSounds;
  if(req.body.disableChat)  updateObject.disableChat = req.body.disableChat;
  if(req.body.disableDealerChat)  updateObject.disableDealerChat = req.body.disableDealerChat;
  if(req.body.enableHandRanking)  updateObject.enableHandRanking = req.body.enableHandRanking;
 

  let userId = req.params.userId;

  if (req.user._id.toString() !== userId) { return res.status(401).json({ error: 'You are not authorized to edit this user profile.' }); }
  Config.findOne({userId : userId}, (err, config) => {
    if (err) {
      res.status(400).json({ error: 'No user could be found for this ID.' });
      return next(err);
    }
    config.set(updateObject);

    config.save(function (err, updatedConfig) {
    if (err) return res.status(200).json(err);
    return res.status(200).json(updatedConfig);
   
    });
   

    

    
  });
};