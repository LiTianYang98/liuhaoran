var models = require('../db');
var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;



function execCmd(province,major) {
    exec('python3.7 -m yzwspider -ssdm '+province+' -yjxk '+major+' mysql -p123456 -db yanzhao -table tab', function (error, stdout, stderr) {
		if(error) {
        //console.log('get weather api error:'+stderr);
    } else {
	//var data = JSON.parse(stdout);
        //console.log(data);
    }
    });
}


router.get('/', (req, res) => {
		var province = req.query.province;
		var major = req.query.major;
		//console.log(province);
		execCmd(province,major);
        }
    );
module.exports = router;
