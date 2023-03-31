var express = require('express');
var router = express.Router();
const multer = require('multer')

const uploader = multer({dest: "uploadedFile/"})

router.post('', uploader.single("test"), (req,res) => {
    console.log(req.file)
})

module.exports = router