var express = require('express');
var router = express.Router();
const multer = require('multer')

/**
 * @openapi
 * /upload:
 *   post:
 *     description: Permits admin users to upload file on server
 *     responses:
 *       204:
 *         description: Returns empty success status
 */

const uploader = multer({dest: "uploadedFile/"})

router.post('', uploader.single("test"), (req,res) => {
    console.log(req.file)
    res.send(req.file)
})

module.exports = router