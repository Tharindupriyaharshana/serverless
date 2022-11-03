const mongoose = require ("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
  var AutoIncrement = require('mongoose-sequence')(mongoose);
const acountSchema = mongoose.Schema(
  {
    accountNo: {type: Number},
    accountType: {type: String},
    balance: {type:Number},
    lastmodify: {type: String},
  
  },
  { collection : 'accounts' }
);

acountSchema.plugin(uniqueValidator);
 acountSchema .plugin(AutoIncrement, {start_seq:5000,id:'order_seq',inc_field: 'accountNo'});

module.exports = mongoose.model('acount', acountSchema );

