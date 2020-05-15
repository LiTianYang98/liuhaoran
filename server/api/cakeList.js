var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

// 连接数据库
// var conn = mysql.createConnection(models.mysql);
// conn.connect();
// 用连接池 连接数据库
var pool = mysql.createPool(models.mysql);

router.get('/', (req, res) => {
    pool.getConnection((err,conn)=>{
        if(err) throw err;
    var sql ="select * from hebei";
    conn.query(sql, (err, result)=>{
        if (err) {
            console.log(err);
        }
        if (result) {
            //console.log(result);
            res.json(result);
            conn.release();
        }
    })
});
});

module.exports = router;
