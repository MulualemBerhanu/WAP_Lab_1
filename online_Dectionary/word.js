const express = require('express');
const path = require("path");
const app = express();
const sql = require("mysql");

app.use(express.urlencoded({extended:false}));
app.use("/static",express.static(path.join(__dirname,"static")));


const DB_CONFIG={
    host: 'localhost',
    user: 'root',
    password: 'Password',
    database: 'entries'
};
app.get('/search', (req,res,next)=>{
    const connection =sql.createConnection(DB_CONFIG);
    connection.connect();
    connection.query(`SELECT * from entries where word = '${req.query.query}'`, (err, row, field)=>{
        if (err) next(err);
        else{
            res.send(JSON.stringify(row));
        }
    });
})


app.listen(8081, ()=>{
    console.log('server running');
})