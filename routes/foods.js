const express=require("express");
const Food=require('../models/food')

const router=express.Router()

router.get("/",async(req,res)=>{
    try{
        const foods= await Food.find()
            res.json(foods)
    }catch(err){
        res.send('error'+err)
    }
})
router.post('/',async(req,res)=>{
    const food=new Food({
        name:req.body.name,
        category:req.body.category,
        img:req.body.img,
        description:req.body.description,
        options:req.body.options
    })
    try{
const a1=await food.save()
res.json(a1)
    }catch(err){
res.send('error')
    }
})
router.patch('/:id',async(req,res)=>{
    try{
        const food=await Food.findById(req.params.id)
        food.name=req.body.name
        const a1=await food.save()
        res.json(a1)
    }catch(err){
res.send('error')
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const food=await Food.findById(req.params.id)
        food.name=req.body.name
        const a1=await food.remove()
        res.json(a1)
    }catch(err){
res.send('error')
    }
})



module.exports = router;