const mongoose = require('mongoose');
const Schema = Schema.mongoose;

const UserSchema = new Schema ({
  User_Id : Number,
  UserName : String,
  Mail : String,
  Age : Date
})

User = mongoose.model('Usear', UserSchema);

module.exports = User;