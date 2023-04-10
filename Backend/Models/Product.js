const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3,
        maxLength:200,
    },
    price:{
        type:Number,
        required:true,
        min:0,
    },
    gender:{
        type:String,
        required:true,
        // minLength:3,
        // maxLength:200,
    },
    season:{
        type:String,
        required:true,
        // minLength:5,
        // maxLength:500,
    },
    weight:{
        type:Number,
        required:true,
        min:0,
    },
    fabricType:{
        type:String,
        required:true,
        // minLength:3,
        // maxLength:200,
    },
    description:{
        type:String,
        required:true,
        minLength:3,
    },
    sizesTable:{
        type:Object,
        required:true,
    },
    productTwoDImages:{
        type:[String],
        required:true,
    },
    thumbnailImg:{
        type:String,
        required:true,
    },
    product3DImages:{
        type:[String],
        required:true,
    },
});
module.exports=mongoose.model("Product",productSchema);