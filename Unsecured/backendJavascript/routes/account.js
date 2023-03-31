var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const conf = require ('../conf.json')

router.get("/:user_id", function(req,res) {
  let connection = mysql.createConnection({
    host: conf.DB_HOST,
    port: conf.DB_PORT,
    user: 'root',
    password: 'root',
    database: 'projetIF27'
  });

  connection.query(`SELECT name, value FROM account WHERE user_id=${req.params.user_id}`, (err, result) => {
    if(err) {
      res.send({
        "status": 400,
        "error": err
      })
    } else {
      res.send({
        "status": 200,
        "data": result
      });
      res.status(200).end()
    }
  })

  connection.end()
})

module.exports = router;
