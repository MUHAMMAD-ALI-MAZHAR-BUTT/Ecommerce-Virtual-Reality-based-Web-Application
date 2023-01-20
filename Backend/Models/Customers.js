const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    Username:String,
    Email:String,
    Password:String
})
module.exports=mongoose.model("Customers",userSchema);