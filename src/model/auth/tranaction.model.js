const mongoose = require ("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
  var AutoIncrement2 = require('mongoose-sequence')(mongoose);
const transractionSchema = mongoose.Schema(
  {
    transId: {type: Number},
    amount: {type: Number},
    accountNo: {type:String },
reciverNo: {type:String,default:"ATM" },
 dateTime: {type:String },

  
  },
  { collection : 'transraction' }
);
 transractionSchema .plugin(AutoIncrement2, {start_seq:577,id:'_id',inc_field:'transId'});

transractionSchema.plugin(uniqueValidator);

module.exports = mongoose.model('transraction', transractionSchema );

