const mongoose = require("mongoose");


const accountUserSchema = mongoose.Schema({
    usernic: { type: String },
    accountNo: { type: String },



}, { collection: 'accountUser' });



module.exports = mongoose.model('accountUser', accountUserSchema);