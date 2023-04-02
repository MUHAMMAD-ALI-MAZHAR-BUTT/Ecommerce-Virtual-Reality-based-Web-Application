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

        console.log('file name is:',file);
        console.log('into fileStarage Engine destination folder');
        cb(null,path.join(__dirname, '../Public/uploads'));
        // cb(null, '../uploads');
    },
    filename:(req,file,cb)=>{
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        const uniqueName=file.fieldname
        cb(null,uniqueName + '-' + uniqueSuffix + '.'+ file.originalname.split('.').pop());
    }
})


const upload=multer({storage:fileStorageEngine});



router.post('/',upload.fields([{ name: 'thumbnailImg', maxCount: 1 }, { name: 'product2DImages[]', maxCount: 1000},{ name: 'product3DImages[]', maxCount: 1000}]),async(req,res)=>{

    console.log('req.files',req.files);
    // console.log('req.file',req.file);
    
    const productTwoDImages=req.files['product2DImages[]'].map(file=> file.filename);
    console.log('all 2D images path',productTwoDImages);
    const product3DImages=req.files['product3DImages[]'].map(file=> file.filename);
    console.log('all 3D images path',product3DImages);
    const thumbnailImg=req.files['thumbnailImg'].map(file=>file.filename);
    console.log('thumbnail img path',thumbnailImg)
    // return;


    const temp=_.pick(req.body,['name','price','gender','season','weight','fabricType','description','sizesTable']);
    console.log('temp',temp);
    temp['productTwoDImages']=productTwoDImages;
    temp['product3DImages']=product3DImages;
    temp['thumbnailImg']=thumbnailImg[0];
    temp['sizesTable']=JSON.parse(temp['sizesTable']);


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
        const products=await Product.find({});
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



router.delete('/:id', async (req, res) => {
    // const product


    //finding if product exists or not
    let product = await Product.findOne({ _id: req.params.id });
    if (!product) {
        return res.status(404).send('This product does not exist');
    }

    const deletedProduct=await Product.deleteOne({_id:req.params.id});
    console.log('deletedProduct',deletedProduct);
    if(deletedProduct.acknowledged) return res.status(200).send('product deleted successfully');


    


})



// updating product 
router.put('/:id',upload.fields([{ name: 'newThumbnailImg', maxCount: 1 }, { name: 'newTwoDImages[]', maxCount: 1000},{ name: 'newThreeDModels[]', maxCount: 1000}]),async(req,res)=>{
    
    // const updatedProduct=_.pick(req.body,['name','price','gender','season','weight','fabricType','description','sizesTable']);
    // const productTwoDImages=req.files['product2DImages[]'].map(file=> file.path);
    // console.log('all 2D images path',productTwoDImages);
    // const product3DImages=req.files['product3DImages[]'].map(file=> file.path);
    // console.log('all 3D images path',product3DImages);
    // const thumbnailImg=req.files['thumbnailImg'].map(file=>file.path);
    // console.log('thumbnail img path',thumbnailImg);
    // updatedProduct['productTwoDImages']=productTwoDImages;
    // updatedProduct['product3DImages']=product3DImages;
    // updatedProduct['thumbnailImg']=thumbnailImg[0];

    console.log('in Edit object files are ',req.files)
    console.log('in Edit object body is ',req.body)

    const temp=_.pick(req.body,['name','price','gender','season','weight','fabricType','description','sizesTable','thumbnailImg','productTwoDImages','product3DImages']);
    temp['sizesTable']=JSON.parse(temp['sizesTable']);
    temp['thumbnailImg']=temp['thumbnailImg']==''? req.files['newThumbnailImg'].map(img=>img.filename)[0] : temp['thumbnailImg'];
    temp['productTwoDImages']=JSON.parse(temp['productTwoDImages']);
    temp['product3DImages']=JSON.parse(temp['product3DImages']);
    
    req.files['newTwoDImages[]'] && req.files['newTwoDImages[]'].map(img=>{temp['productTwoDImages'].push(img.filename);});
    req.files['newThreeDModels[]'] && req.files['newThreeDModels[]'].map(img=>{temp['product3DImages'].push(img.filename);});


    console.log('in edit product temp',temp);





    // return;




    const newUpdatedProduct = await Product.findByIdAndUpdate(
        {_id:req.params.id},
        temp,
        { new: true }
      );
      if (!newUpdatedProduct) {
        res.status(404).send("This Product does not exists");
        return;
      }
      res.status(200).send(newUpdatedProduct);
})

module.exports=router;
