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

async function LookAtImages(){
    let data = await Images.find();
    console.log(data[1]);
    console.log( data);
}

async function addImages(fileName){
    let data = new Images({"path":`public/images/${fileName}`,rating:4});
    await data.save();
}

// module.exports = {addImages};