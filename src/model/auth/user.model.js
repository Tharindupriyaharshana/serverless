const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userDataSchema = mongoose.Schema({
  
    userNic: { type: String,unique: true },
    userName: { type: String  },
    userAddress: { type: String  },
    userContactNo: { type: String },
    RegDate: { type: String  },
 status: { type: String  },
    
}, { collection: 'userData' });

userDataSchema.plugin(uniqueValidator);

module.exports = mongoose.model('userData', userDataSchema);