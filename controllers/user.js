const User = require('../models/user');
const setUserInfo = require('../helpers').setUserInfo;

//= =======================================
// User Routes
//= =======================================

// view profile
exports.viewProfile = function (req, res, next) {
  let userId = req.params.userId;

  if (req.user._id.toString() !== userId) { return res.status(401).json({ error: 'You are not authorized to view this user profile.' }); }
  User.findById(userId, (err, user) => {
    if (err) {
      res.status(400).json({ error: 'No user could be found for this ID.' });
      return next(err);
    }

    const userToReturn = setUserInfo(user);

    return res.status(200).json({ user: userToReturn });
  });
};
// update profile
exports.updateProfile = function (req, res, next) {
  let updateObject = {}
  if(req.body.email)  updateObject.email = req.body.email;
  if(req.body.userName)  updateObject.userName = req.body.email;
  if(req.body.currency)  updateObject.currency = req.body.currency;
  //profile
  if(req.body.firstName)  updateObject.profile.firstName = req.body.firstName;
  if(req.body.lastName)  updateObject.profile.lastName = req.body.lastName;
  if(req.body.birthDate)  updateObject.profile.birthDate = req.body.birthDate;
  if(req.body.sex)  updateObject.profile.sex = req.body.sex;
  if(req.body.country)  updateObject.profile.country = req.body.country;
  if(req.body.city)  updateObject.profile.city = req.body.city;
  if(req.body.phone)  updateObject.profile.phone = req.body.phone;
  if(req.body.inAppMessages)  updateObject.profile.inAppMessages = req.body.inAppMessages;
  if(req.body.pushNotifications)  updateObject.profile.pushNotifications = req.body.pushNotifications;
  if(req.body.phoneCalls)  updateObject.profile.phoneCalls = req.body.phoneCalls;
  if(req.body.sendEmails)  updateObject.profile.sendEmails = req.body.sendEmails;
  if(req.body.receiveSms)  updateObject.profile.receiveSms = req.body.receiveSms;
  //Session
  if(req.body.sessionTime)  updateObject.session.sessionTime = req.body.sessionTime;
  if(req.body.autoExclude)  updateObject.session.autoExclude = req.body.autoExclude;
  if(req.body.break)  updateObject.session.break = req.body.break;
  //deposit limits
  if(req.body.day)  updateObject.depositLimit.day = req.body.day;
  if(req.body.week)  updateObject.depositLimit.week = req.body.week;
  if(req.body.month)  updateObject.depositLimit.month = req.body.month;
  //dni data
  if(req.body.number)  updateObject.userDocumentationId.number = req.body.number;
  if(req.body.img)  updateObject.userDocumentationId.img = req.body.img;


  let userId = req.params.userId;

  if (req.user._id.toString() !== userId) { return res.status(401).json({ error: 'You are not authorized to edit this user profile.' }); }
  User.findById(userId, (err, user) => {
    if (err) {
      res.status(400).json({ error: 'No user could be found for this ID.' });
      return next(err);
    }
    user.set(updateObject);

    user.save(function (err, updatedUser) {
    if (err) return res.status(200).json(err);
    return res.status(200).json(updatedUser);
   
    });
   

    

    
  });
};