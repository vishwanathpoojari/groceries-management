var express = require("express");
var router = express.Router();
var client =  require("./database");
const  credential = {
    email : "admin@gmail.com",
    password : "admin123"
}

// login user
router.post('/login', (req, result)=>{
    var email = req.body.email;
    var password =  req.body.password
    client.query(`select count (*) from users where email= '${(req.body.email)}'
    and password = '${(req.body.password)}'`, (err, res)=>{
        if(res.rows[0].count >0){
            result.json('ok')
        }
        else{
           
        }
    })
});


module.exports = router;