
const acountuser = require("../model/auth/acountUser.model");
const account = require("../model/auth/acount.model ");

const express = require("express");
var path = require('path');


//express app declaration
const auth = express();


//let  userdata=[];
exports.addAccount = async(req) => {
let userdata=[];
var  state = 0;
var uers=req.body.userData.users;
var accno;


console.log(userdata);

    const accounts = new account(
        req.body.account
            
       
   );
    
           //console.log(authUser); // test
       await accounts.save()
            .then(userout=> {
                //console.log(a);
accno=userout.accountNo;
uers.forEach(nic => {
var data={"usernic":nic,"accountNo":accno};
userdata.push(data);
});


userdata.forEach(req=>{
adduserstoaccount (req);
})
                state = 1;
                return state;
            })
            .catch(err => {
                state = 0;
                console.log(err);
                

            });

return state;

}


async function adduserstoaccount  (userids)  {

 const accountsUser = new acountuser (
        userids
            
       
   );
    
           //console.log(authUser); // test
       await accountsUser.save().then(a=>{
console.log("added");
});
            
                

           

}