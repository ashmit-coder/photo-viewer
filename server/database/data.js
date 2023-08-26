const mongoose = require('mongoose');
require('dotenv').config('../.env');
(async()=>{
    mongoose.connect(process.env.MONGO_URL)
})()
.then((res)=>{
    console.log(res);
    console.log("connection established");
});
const User = require('../models/User');
const Images = require('../models/Images');
async function CreateUser(data){
    
};