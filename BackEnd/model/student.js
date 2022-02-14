const mongoose=require('mongoose');
const schema=mongoose.Schema
mongoose.connect('mongodb+srv://rahul:rahul1234@cluster0.yoa22.mongodb.net/studentmarkssystem?retryWrites=true&w=majority');

const studentSchema= new schema({
    name:String,
    class:String,
    mathmark:String,
    engmark:String,
    total:String
});

module.exports=mongoose.model('student',studentSchema,'student');