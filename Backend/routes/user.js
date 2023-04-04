const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");
const auth=require("../middleware/auth");
const _=require('lodash');

router.post("/", async (req, res) => {
	console.log('in user post request');
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});
router.get('/',auth,async(req,res)=>{
	try {
        const user = await User.findOne({_id: req.user._id });
        if (!user) return res.status(404).send('User not found');
		
		return res.status(200).send(user);
        
    } catch (error) {
        return res.status(500).send('server Error');
    }
})

router.put('/profileUpdate',async(req,res)=>{
	const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
	req.body.password=hashedPassword;
	const updatedUser={..._.pick(req.body,['email','firstName','lastName','password'])};


	try {
        const user = await User.findByIdAndUpdate({_id: req.body._id },updatedUser,{new:true});
        if (!user) return res.status(404).send('User not found');
		
		console.log('updated User',user);
		return res.status(200).send(user);
        
    } catch (error) {
        return res.status(500).send('server Error');
    }
})

module.exports = router;