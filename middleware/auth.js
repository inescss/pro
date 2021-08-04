

const config = require('config');
const secret = config.get('secret');
const  jwt = require('jsonwebtoken');

const isAuth = async(req, res, next) => {
    const token = req.headers.authorization;
    if (!token){
        return res.status(401).json({msg: 'Authorization denied'});
    }
    try{
        const decoded = jwt.verify(token, secret);
        const user = await User.findById(decoded.id).select('-password');
        if (!user) return res.status(400).json({msg: 'unauthorized'});
        else{
            req.user = user;
            next();
        }

    }catch (error) {
        res.status(500).json({msg: 'invalid token'});
    }
};
module.exports = isAuth;