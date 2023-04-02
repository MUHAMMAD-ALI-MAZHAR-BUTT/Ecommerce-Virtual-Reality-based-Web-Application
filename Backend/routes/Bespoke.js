const router = require("express").Router();
const { Bespoke } = require("../models/Bespoke");

router.post("/",async (request,response)=>
{
    console.log("Bespoke Request body : ",request.body);
    let NewBespoke=new Bespoke(request.body);
    console.log("NewBespoke : ",NewBespoke);
    let result=await NewBespoke.save();
    if(result)
    {
        response.sendStatus(200);
    }
    else
    {
        response.sendStatus(404);
    }
})



// getting user requests 
router.get('/',async(req,res)=>{
    try {
        const productReqs=await Bespoke.find({});
        res.status(200).send(productReqs);
    } catch (error) {
       res.status(500).send('Server Error:'+ error)
    }
})

module.exports = router;