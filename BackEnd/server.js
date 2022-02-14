const express=require('express');
var app=express();
var api=require('./routes/api');
var cors=require('cors');
var bodyparser=require('body-parser');


app.use(cors());
app.use(bodyparser.json())
app.use('/api',api);
app.use(express.urlencoded({extended:true}));

app.listen(8081,(req,res)=>{
    console.log("server stared");
    console.log(__dirname);
})
