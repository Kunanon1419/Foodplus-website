const express = require('express');
const router = express.Router();
const res_users = require('../../res_users');

router.post('/',(req,res)=>{
    const newUser = {
        res_name:req.body.res_name,
        res_tel:req.body.res_tel,
        res_email:req.body.res_email
    }
    if(!newUser.res_name || !newUser.res_email){
        return res.status(400).json({msg:"Please include a name and email"});
    }
    res_users.push(newUser);
    res.json(res_users);
    res.redirect('/');
})
module.exports = router;