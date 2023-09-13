const express = require('express');
const app = express();
const morgan  = require('morgan');
const cors = require('cors');
const multer = require('multer');
const passport =  require('passport');
const LocalStrategy = require('passport-local');
const {createClient} = require('redis');
const RedisStore = require('connect-redis').default;
const upload = multer();
require('dotenv').config();
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 5000;
const session = require('express-session');
const data = require('./database/data');
const User = require('./models/User');

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}


// initialize redis store
let redisClient = createClient();
redisClient.connect().catch(console.error);
let redisStore = new RedisStore({
    client: redisClient,
    prefix:"myapp:",
    ttl: 3000000
});

// app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(upload.array());


app.get('/',(req,res)=>{
    res.json({status:true,message:"connection established"});
});
// initializing sessions based services
app.use(session({
    store:redisStore,
    resave:false,
    saveUninitialized:false,
    secret:process.env.SECRET,
    cookie:{
        maxAge:3000000,
        httpOnly:true
    }
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.post('/signup',async (req,res)=>{
    console.log(req.body);
     User.register(new User(req.body),req.body.password,(err,user)=>{
        if(err){
            console.log(err);
            return res.send("ehhh");
        }
        else{
             req.login(user,(err)=>{
                console.log(err);
                return res.send("kar liya");
            })
          
        }
    })
}); 

app.post("/login", passport.authenticate("local",{
    successRedirect: "/image",
    failureRedirect: "/"
}), function(req, res){
    
    res.send("yes :)")
});

app.post('/admin/login',(req,res)=>{

    if(req.body.user===process.env.user && req.body.password===process.env.password){

        return res.send("Admin logged in");
    }
    res.redirect('/login');
});

app.get("/image",isLoggedIn,async(req,res)=>{
    fs.readdir("./public/images",(err,files)=>{
        if(err) return res.status(400).json({message:"Unexpected error",status:false});
        let randNumber = Math.ceil(Math.random()*(files.length -1));
        return res.json({path:path.join(__dirname,`./public/images/${files[randNumber]}`),number:randNumber})
    })
//    res.sendFile(path.join(__dirname,"./public/images/test.png")); 
});
app.use("/images",isLoggedIn);
app.use("/images",express.static(path.join(__dirname,"./public/images")));
app.post("/logout",async(req,res)=>{
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    req.logout("local",(err)=>{
        if(err){
            console.log(err);
           return res.send("error");
        }
    
        res.send("success");
    })
});

app.listen(PORT,()=>{
console.log(`Listening to port ${PORT}....`);
}); 