const { User } = require("./User");
const { Session } = require("./Session");
const { Exercise } = require("./Exercise");

Session.belongsTo(User);
User.hasMany(Session);

Exercise.belongsTo(Session);
Session.hasMany(Exercise);

User.hasMany(Exercise);

module.exports = { Session, User, Exercise };
