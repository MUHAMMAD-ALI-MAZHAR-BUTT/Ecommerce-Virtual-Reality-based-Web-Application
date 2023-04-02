const router = require("express").Router();
const Bespoke = require("../models/Bespoke");
const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ehaider822@gmail.com',
        pass: 'ppoeokpybpkfyqeu'
    }
});

router.post("/", async (request, response) => {
    console.log("Bespoke Request body : ", request.body);
    let NewBespoke = new Bespoke(request.body);
    console.log("NewBespoke : ", NewBespoke);
    let result = await NewBespoke.save();
    if (result) {
        response.sendStatus(200);
    }
    else {
        response.sendStatus(404);
    }
})
router.get('/hello', async (req, res) => {
    const filePath = './uploads/male7.fbx';
    res.sendFile(filePath);
})


// getting user requests 
router.get('/', async (req, res) => {
    // debugger;
    try {
        const productReqs = await Bespoke.find({});
        res.status(200).send(productReqs);
    } catch (error) {
        res.status(500).send('Server Error:' + error)
    }
})

router.post('/sendResponse', async (req, res) => {
    let isEmailSent = false;
    const productRequest = await Bespoke.findOne({ id: req.body.productRequestId });
    console.log(productRequest);
    let receiverEmail = productRequest.Email;
    if (receiverEmail == '') receiverEmail = 'abdullahrasheed837@gmail.com';



    console.log('status',req.body.status);
    // productRequest.Status = req.body.status;
    // console.log('comparison',productRequest)
    const updatedProductRequest = await Bespoke.findOneAndUpdate({_id:req.body.productRequestId}, {Status:req.body.status}, { new: true })
    if (!updatedProductRequest) {
        res.status(404).send("This bespoke does not exist");
        return;
    }
    



    let mailOptions = {
        from: 'ehaider822@gmail.com',
        to: receiverEmail,
        subject: 'Request response',
        text: `Response aginst id:${req.body.productRequestId}: ${req.body.responseMsg}`
    };

    // sending Email 
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            isEmailSent = true;
            res.status(200).send(updatedProductRequest);
        }
    });


})

module.exports = router;