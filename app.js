// const express=require("express");
// const mongoose=require('mongoose');


// const app=express()

// mongoose.set('strictQuery', true);


// mongoose.connect( "mongodb+srv://admin4:jass123@cluster0.ngg3vxt.mongodb.net/new1?retryWrites=true&w=majority",{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// },()=>{
//     console.log('DB connected')
// })
   
// app.use(express.json())

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


// app.listen(7000,function(){
//     console.log('server started')
// })



const express=require("express");
const mongoose=require('mongoose');
require('dotenv').config();

const app=express()

mongoose.set('strictQuery', true);
// mongoose.connect(url,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// })
// const con=mongoose.connection
// con.on('open',()=>{
//     console.log('DB connected')
// })

mongoose.connect(process.env.MONGODB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},()=>{
    console.log('DB connected')
    const fetched_data=  mongoose.connection.db.collection("foods")
    fetched_data.find({}).toArray(function(err,data){
        if(err) console.log(err);
        else console.log()
    })
})
   
app.use(express.json())

const foodRouter=require('./routes/foods')
app.use('/foods',foodRouter)

app.listen(7000,function(){
    console.log('server started')
})