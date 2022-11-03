const mongoose = require ("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const accountTypeSchema = mongoose.Schema(
  {
    accountType: {type: String, required: true, unique: true},
    interest: {type: String, required: true, unique: true},
    note: {type:String,default: "none" },
  
  },
  { collection : 'accountType' }
);

accountTypeSchema.plugin(uniqueValidator);

module.exports = mongoose.model('accountType', accountTypeSchema );

