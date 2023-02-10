const mongoose=require('mongoose');

const foodSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    
    category:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    options: [{half:Number,full:Number,regular:Number,medium:Number,large:Number}]
   

})
module.exports=mongoose.model('Food',foodSchema)