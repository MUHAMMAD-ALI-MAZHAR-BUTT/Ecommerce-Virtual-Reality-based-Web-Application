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
        console.log('file name is:',file.filename);
        console.log('into fileStarage Engine destination folder');
        cb(null,path.join(__dirname, '../uploads/'));
    },
    filename:(req,file,cb)=>{
        const uniqueName=file.originalname
        cb(null,uniqueName);
    }
})


const upload=multer({storage:fileStorageEngine});



router.post('/',upload.fields([{ name: 'thumbnailImg', maxCount: 1 }, { name: 'product2DImages[]', maxCount: 1000}]),async(req,res)=>{

    console.log('req.files',req.files);
    // console.log('req.file',req.file);
    
    const productTwoDImages=req.files['product2DImages[]'].map(file=> file.path);
    console.log('all 2D images path',productTwoDImages);
    const thumbnailImg=req.files['thumbnailImg'].map(file=>file.path);
    console.log('thumbnail img path',thumbnailImg)

    const temp=_.pick(req.body,['name','price','gender','season','weight','fabricType','description','sizesTable']);
    console.log('temp',temp);
    temp['productTwoDImages']=productTwoDImages;
    temp['thumbnailImg']=thumbnailImg[0];

    
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
