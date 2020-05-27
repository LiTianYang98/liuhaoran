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
    var sql ="select 招生单位,avg(拟招生人数) as 招生人数 from tab group by 招生单位";
    conn.query(sql, (err, result)=>{
        if (err) {
            console.log(err);
        }
        if (result) {
            console.log(result);
            res.json(result);
            conn.release();
        }
    })
});
});

module.exports = router;
