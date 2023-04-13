const mongoose=require('mongoose');
// const jwt=require('jsonwebtoken');
const {productSchema}=  require('./product');


const cartSchema=new mongoose.Schema({
    item:{
        type:productSchema,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
        min:0,
    },

});


module.exports.cartSchema=cartSchema;

module.exports.Cart=mongoose.model('Cart',cartSchema);



