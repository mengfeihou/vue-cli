var express = require('express');
var router = express.Router();
var md5 = require('md5');
var UserModel = require("../model/UserModel");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/register',function(req,res){
	var username = req.body.username;
	var psw = md5(req.body.psw);
	
	var result = {
		status: 1,
		message: "注册成功"
	}
	
	UserModel.find({username:username},function(err,docs){
		if(!err && docs.length > 0){
			console.log("用户名已经被使用，请选择别的用户名");
			result.status = -111;
			result.message = "用户名已经被使用，请选择别的用户名";
			res.send(result);
			return;
		}
		
		var um = new UserModel();
		um.username = username;
		um.psw = psw;
	
		um.save(function(err){
			if(err){
				console.log("注册失败", err);
					result.status = -110;
					result.message = "注册失败";
					res.send(result);
				} else {
					console.log("注册成功");
					res.send(result);
			}
		});
	});
	
	
});
module.exports = router;
