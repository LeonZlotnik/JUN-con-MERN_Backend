const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProducersSchema = new Schema ({
  User_Id : Number,
  UserName : String,
  Mail : String,
  Age : Date
})

Producers = mongoose.model('Producers',ProducersSchema);

module.exports = Producers;