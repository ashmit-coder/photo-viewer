const mongoose = require('mongoose');
require('dotenv').config('../.env');
// console.log(process.env);
// mongoose.connect(process.env.MONGO_URL)
// .then((RES)=>{
//     console.log("connected successfully");
// });
// const passportLocalMongoose = require('passport-local-mongoose');
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

// Images.plugin(passportLocalMongoose);
module.exports = mongoose.model('Image', Images);