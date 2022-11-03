
const transfermodel = require("../model/auth/tranaction.model");
const account = require("../model/auth/acount.model ");

const express = require("express");
var path = require('path');


//express app declaration
const auth = express();


//let  userdata=[];
exports.addTransfer = async(req) => {

var amounts;
var senderid=req.body.accountNo;
var reciverid=req.body.reciverNo;

    const transfer = new transfermodel(
        req.body
            
       
   );
    
           //console.log(authUser); // test
       await transfer.save()
            .then(userout=> {
              amounts=userout.amount;
updatebalanceminus(senderid,amounts);
updatebalanceplus(reciverid,amounts);

                state = 1;
                return state;
            })
            .catch(err => {
                state = 0;
                console.log(err);
                

            });

return state;

}


async function updatebalanceplus  (acc,ammount)  {
console.log(acc);
var balance;
var newbalance;
await account.aggregate([

        { $match: { "accountNo":Number(acc) } }
       


    ]).then((documents => {
        balance = documents[0].balance;
   newbalance=balance+ammount;


    })).then(a=>{


account.updateOne({ "accountNo": Number(acc) }, {


        balance:newbalance





    }, function(
        err,
        result
    ) {
        if (err) {
            res.send(err);
        } else {
            return "Update Sucessfully done"
        }
    });



})



                

           

}



async function updatebalanceminus  (acc,ammount)  {
console.log(acc);
var balance;
var newbalance;
await account.aggregate([

        { $match: { "accountNo":Number(acc) } }
       


    ]).then((documents => {
        balance = documents[0].balance;
   newbalance=balance-ammount;


    })).then(a=>{


account.updateOne({ "accountNo": Number(acc) }, {


        balance:newbalance





    }, function(
        err,
        result
    ) {
        if (err) {
            res.send(err);
        } else {
            return "Update Sucessfully done"
        }
    });



})



                

           

}