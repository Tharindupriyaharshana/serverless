//const users = require("../model/auth/userData.model");
//const accounttype = require("../model/auth/acountType.model");
const acountuser = require("../model/auth/acountUser.model");
const account = require("../model/auth/acount.model ");

//dependency imports
const express = require("express");
var path = require('path');


//express app declaration
const auth = express();



exports.getacountdata = async(accountid) => {
    console.log(accountid);
   
    await account.aggregate([

        { $match: {"accountNo":"123"} },
      

        //  {
        //   $project: { _id: 0, userid: 1, token: { token: 1 } },
        // }


    ]).then((documents => {
        finaldata = documents;
        console.log(finaldata)

    }))

    return finaldata;
}
