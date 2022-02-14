const express=require('express');
var router=express.Router();
var student=require('../model/student');

router.post('/student/add',(req,res)=>{
    new student(req.body).save((err,data)=>{
        (err)?console.log(err):res.status(200).send(data);

    })
})

router.get('/student/view',(req,res)=>{
    student.find().then((data)=>{
        res.send(data)
    })
})

module.exports=router;