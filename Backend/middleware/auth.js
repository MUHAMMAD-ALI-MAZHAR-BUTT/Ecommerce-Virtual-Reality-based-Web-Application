const jwt=require('jsonwebtoken');


module.exports=async function(req, res, next) {
    const token=req.header('x-auth-token');
    if(!token || token=='null'){
        return res.status(401).send('Authentication Required');
    }
    try {
        
        const decoded=jwt.verify(token,process.env.JWTPRIVATEKEY);
        req.user=decoded;
        next();

    } catch (error) {
        res.status(400).send('Invalid token');
    }

}