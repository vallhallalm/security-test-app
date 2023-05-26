var express = require('express');
var router = express.Router();
const { exec } = require('child_process');


/**
 * @openapi
 * /exec/:filename:
 *   post:
 *     description: Exec precise node file to help admin open account for their customer
 *     parameters:
  *     - in: path
  *       name: filename
  *       schema:
  *        type: string
 *     responses:
 *       204:
 *         description: Returns empty success status
 */

router.post('/:filename', function(req, res) {

    console.log("trying to execute file");

    exec(`node ${__dirname.replace("\\routes","\\uploadedFile\\") + req.params.filename}`, (error, stdout, stderr) => {
        if (error) {
        console.error(`error: ${error.message}`);
        res.send(error.message)
        return;
        }
    
        if (stderr) {
        console.error(`stderr: ${stderr}`);
        res.send(stderr)
        return;
        }
    
        console.log(`stdout:\n${stdout}`);
        res.send(stdout)
    });
})

module.exports = router