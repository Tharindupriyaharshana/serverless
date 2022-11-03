
const transfermodel = require("../model/auth/tranaction.model");
const account = require("../model/auth/acount.model ");

const express = require("express");
var path = require('path');


//express app declaration
const auth = express();



 exports.sendbalance=async (acc) =>{
var balance;

await account.aggregate([

        { $match: { "accountNo":Number(acc) } }
       


    ]).then((documents => {
        balance = documents[0].balance;
 

    }));

return balance;
} 




                

           



