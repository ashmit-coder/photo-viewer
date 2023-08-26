const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const User = new mongoose.Schema({
    phone:{
        type:Number,
        required: true
    },
    email:{
        type:String,
        required: true
    }
});

User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', User);