const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const {Product}=require('../models/product');
const _=require('lodash');
const multer  = require('multer');
const path=require('path');
// const path=require('./productImages')


const fileStorageEngine=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname, '/productImages/'));
    },
    filename:(req,file,cb)=>{
        const uniqueName=file.originalname
        cb(null,uniqueName);
    }
})
const upload=multer({storage:fileStorageEngine});

router.post('/',upload.array('product2DImages[]',5),async(req,res)=>{

    console.log(req.files);
    
    const productTwoDImages=req.files.map(file=> file.path);
    console.log('all images path',productTwoDImages);

    const temp=_.pick(req.body,['name','price','gender','season','weight','fabricType','description','sizesTable']);
    console.log('temp',temp);
    temp['productTwoDImages']=productTwoDImages;

    // const productObj=_.pick(req.body,['name','price','gender','season','weight','fabricType','description','sizesTable'],productTwoDImages
    const product=new Product(temp);

    console.log('product after request is',product);
    try {
        await product.save();
        res.status(200).send(product);
        
    } catch (error) {
        res.status(500).send('Server error: ' + error); 
    }
})


router.get('/',async(req,res)=>{
    try {
        const products=await Product.find({}).select('title description price category image');
        res.status(200).send(products);
    } catch (error) {
       res.status(500).send('Server Error:'+ error)
    }
})

router.get('/:id',async(req,res)=>{

    try {
        const product=await Product.findOne({_id:req.params.id});
        res.status(200).send(product);
    } catch (error) {
        res.status(404).send('Product not found');
    }
})


module.exports=router;
