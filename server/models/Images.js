const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Images = new  mongoose.Schema({
    path:{
        type: String,
        required: true
    },
    "rating" : {
        type : Number,
        required: true
    }
});

Images.plugin(passportLocalMongoose);
module.exports = mongoose.model('Image', Images);