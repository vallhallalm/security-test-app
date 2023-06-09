var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const conf = require ('../conf.json')

/**
 * @openapi
 * /user/:id/:pwd:
 *   get:
 *     description: Get bank account informations of the user
 *     parameters:
  *     - in: path
  *       name: id
  *       schema:
  *        type: string
  *     - in: path
  *       name: pwd
  *       schema:
  *        type: string
 *     responses:
 *       200:
 *         description: Returns the bank account informations
 */
router.get('/:id/:pwd', function(req, res) {
  let connection = mysql.createConnection({
    host: conf.DB_HOST,
    port: conf.DB_PORT,
    user: 'root',
    password: 'root',
    database: 'projetIF27'
  });

  connection.query(`SELECT * FROM user WHERE username='${req.params.id}' && password='${req.params.pwd}'`, (err, result) => {
    if(err) {
      res.send(err)
    } else {
      console.log(`SELECT * FROM user WHERE username='${req.params.id}' && password='${req.params.pwd}'` , result)
      if(result.length!==0) {
        res.send({
          "auth":true,
          "admin": result[0].admin,
          "data": result,
          "id": result[0].id
        })
      } else {
        res.send({"auth":false})
      }
    }
  })

  connection.end()
});

/* POST new account. */
router.post('/:id/:pwd', function(req, res) {
  let connection = mysql.createConnection({
    host: conf.DB_HOST,
    port: conf.DB_PORT,
    user: 'root',
    password: 'root',
    database: 'projetIF27'
  });

  connection.query(`INSERT INTO user(username, password) VALUES ('${req.params.id}', '${req.params.pwd}')`, (err, result) => {
    if(err) {
      res.send({
        "status": 400,
        "error": err
      })
    } else {
      res.send({
        "status": 201,
      });
      res.status(201).end()
    }
  })

  connection.end()
});

module.exports = router;
