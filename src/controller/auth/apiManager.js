//express app declaration
const express = require("express");
var path = require('path');
//express app declaration
const api = express();
const addacount=require("../../middleware/addacount")
const account = require("../../model/auth/acount.model ");
const userMidileware = require("../../middleware/userData");
const acountCheckMidleware = require("../../middleware/usertype");
const transferMidleware = require("../../middleware/transfer");
const balanceMidleware = require("../../middleware/balance");



api.get('/userdata/:accountNo', (req, res) => {
 let val;
var accno=req.params.accountNo;
     account.aggregate( [
  {
    '$match': {
      'accountNo': accno
    }
  }
]).then((documents => {
       val=documents;
        console.log(documents )
 if(val){
res.status(200).json({
                val
            });}
    }))

    
});


api.post('/account', (req, res) => {

try {
 addacount.addAccount(req).then(out => {

        console.log(out);

        if (out === 1) {
            res.status(200).json({
                message: 'signed up successfully!',

            })
        } else if (out === 0) {
            res.status(500).json({
                message: 'Your signup was not successfull! Please try again!'
            });
        } else {
            res.status(500).json({
                message: 'Your signup was not successfull! Please try again!'
            });
        }

    })
    
} catch (error) {
    
}
  
});

//add new user


api.post('/user', (req, res, next) => {

    userMidileware.addUser(req).then(out => {

        console.log(out);

        if (out === 1) {
            res.status(200).json({
                message: 'Usercreated successfully!',

            })
        } else if (out === 0) {
            res.status(500).json({
                message: 'user creation  was not successfull! Please try again!'
            });
        } else {
            res.status(500).json({
                message: 'user creation was not successfull! Please try again!'
            });
        }

    })
});

//add trasaction


api.post('/transfer', (req, res, next) => {

   transferMidleware.addTransfer(req).then(out => {

        console.log(out);

        if (out === 1) {
            res.status(200).json({
                message: 'Transfered',

            })
        } else if (out === 0) {
            res.status(500).json({
                message: 'not successfull! Please try again!'
            });
        } else {
            res.status(500).json({
                message: ' not successfull! Please try again!'
            });
        }

    })
});


api.get('/balance/:id', (req, res, next) => {

   balanceMidleware.sendbalance(req.params.id).then(out => {

        console.log(out);
 res.status(200).json({
                balance: out
            })


    })
});


module.exports = api;