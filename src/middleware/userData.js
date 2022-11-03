
const userData = require("../model/auth/user.model");

const express = require("express");
var path = require('path');


//express app declaration
const auth = express();



exports.addUser = async(req) => {
let   state = 0;
console.log(req.body);
    const newuser = new userData(
        req.body,

            
       
   );
 
           console.log(newuser); // test
      await  newuser.save()
            .then(() => {
                console.log("done");
                state = 1;
                return state;
            })
            .catch(err => {
                state = 0;
                console.log(err);
                return state;

            });


   

}