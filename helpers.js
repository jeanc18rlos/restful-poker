const ROLE_MEMBER = require('./constants').ROLE_MEMBER;
const ROLE_CLIENT = require('./constants').ROLE_CLIENT;
const ROLE_OWNER = require('./constants').ROLE_OWNER;
const ROLE_ADMIN = require('./constants').ROLE_ADMIN;

// Set user info from request

exports.setUserInfo = function setUserInfo(request) {
  const getUserInfo = {
    username : request.userName,
    emailVerified : request.verified.emailVerified,
    dniVerified  : request.verified.dniVerified,
    dniNumber: request.userDocumentationId.number,
    dniPhoto: request.userDocumentationId.img,
    sessionTime: request.session.sessionTime,
    autoExclude: request.session.autoExclude,
    break: request.session.break,
    currency : request.currency,
    depositLimitDay : request.depositLimit.day,
    depositLimitMonth : request.depositLimit.month,
    depositLimitYear : request.depositLimit.year,
    _id: request._id,
    birthDate: request.profile.birthDate,
    sex: request.profile.sex,
    country: request.profile.country,
    city : request.profile.city,
    phone: request.profile.phone,
    inAppMessages : request.profile.inAppMessages,
    firstName: request.profile.firstName,
    lastName: request.profile.lastName,
    email: request.email,
    role: request.role,
    pushNotifications : request.profile.pushNotifications,
    phoneCalls: request.profile.phoneCalls,
    sendEmails: request.profile.sendEmails,
    receiveSms: request.profile.receiveSms
  };

  return getUserInfo;
};

// Set table info from request
exports.setTableInfo = function setTableInfo(request) {
  const getTableInfo = {
    id: request.body.id,
    name: request.body.name,
    seats: request.body.seats,
    bb: request.body.bb,
    sb: request.body.sb,
    maxBuyIn: request.body.maxBuyIn,
    minBuyIn: request.body.minBuyIn,
    privateTable: request.body.privateTable,
    cardSuit: request.body.cardSuit,
    cardBack: request.body.cardBack,
    backgroundColor: request.body.backgroundColor,
    backgroundImg: request.body.backgroundImg,
    feltColor: request.body.feltColor,
    feltImg: request.body.feltImg,
    chipColor: request.body.chipColor,
    type: request.body.type,
  };

  return getTableInfo;
};

exports.getRole = function getRole(checkRole) {
  let role;

  switch (checkRole) {
    case ROLE_ADMIN: role = 4; break;
    case ROLE_OWNER: role = 3; break;
    case ROLE_CLIENT: role = 2; break;
    case ROLE_MEMBER: role = 1; break;
    default: role = 1;
  }

  return role;
};
