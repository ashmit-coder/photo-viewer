const express = require('express');
const app = express();
const morgan  = require('morgan');
const cors = require('cors');
const multer = require('multer');
const redis = require('redis');
const upload = multer();
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const session = require('express-session');

app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(upload.array());

app.get('/',(req,res)=>{
res.json({status:true,message:"connection established"});
});

app.post('/signup',(req,res)=>{
    console.log(req.body)
    res.send("sign up successful")
}); 

app.post('/login',(req,res)=>{
    console.log(req.body)
    res.send("login successful")
}); 

app.post('/admin/login',(req,res)=>{
    console.log(req.body);
    
    if(req.body.user===process.env.user && req.body.password===process.env.password){

        return res.send("Admin logged in");
    }
    res.redirect('/login');
});
app.listen(PORT,()=>{
console.log(`Listening to port ${PORT}....`);
}); 