const mongoose=require("mongoose");
const BespokeScheme=new mongoose.Schema({
    Email:String,
    Gender:String,
    MaterialType:String,
    JacketColor:String,
    JacketDescription:String, 
    MinimumPrice:String, 
    MaximumPrice:String, 
    PrefferedSize:String,
      Waist:String,
      Chest:String,
      ArmLength:String
})
module.exports=mongoose.model("Bespoke",BespokeScheme);
