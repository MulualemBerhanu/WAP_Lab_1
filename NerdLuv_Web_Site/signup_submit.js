const express = require('express');
const app = express();
const fs = require('fs');
const path = require("path");

app.use(express.urlencoded({extended:false}));

app.use("/signup",express.static(path.join(__dirname,"signup.html")));
app.use("/matches",express.static(path.join(__dirname,"matches.html")));
app.use("/signup.css",express.static(path.join(__dirname,"signup.css")));

app.post('/signup', (req, res,next)=>{
    let result = req.body;
    let text = `${result.name},${result.gen},${result.age},${result.personality},${result.os},${result.min},${result.max}\n`;
    fs.appendFile("singles.txt",text,(err)=>{
        if(err){
            next(err);
        }
        else{
            res.redirect(303,'back');
        }
    });
})



app.listen(8080, ()=>{
    console.log("running")
})
