const mongoose = require('mongoose');
require('dotenv').config('../.env');
(async()=>{
    mongoose.connect(process.env.MONGO_URL)
})()
.then((res)=>{
    console.log("connection established");
});
const User = require('../models/User');
const Images = require('../models/Images');
async function CreateUser(data){
    
};
async function LookAtImages(){
    let data = await Images.find();
    console.log(data[1]);
    console.log( data);
}

async function addImages(){
    let data = new Images({"path":"public/images/test.png",rating:4,username:"ashmit",password:"lavde"});
    await data.save();
}
// addImages()
// LookAtImages();