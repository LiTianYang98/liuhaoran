var models = require('../db');
var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;


var cmds = ['100', '200', '300'];
var no = 0;

function execCmd(province,major) {
    exec('python -m yzwspider -ssdm '+province+' -yjxk '+major+' mysql -p123456 -db yanzhao -table tab', function (error, stdout, stderr) {
        if(error){
            console.error('error: ' + error);
            return;
        }
        console.log('receive: ' + stdout.split("#")[0] + ": " + stdout.split("#")[1]);

        var json = JSON.parse(stdout.split("#")[1]);
        console.log(json.msg);
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
