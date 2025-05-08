const express = require('express');
const router = express.Router();
const multer = require('multer');//Requerir Multer

const productoController = require("../controller/productosController");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage });

router.get("/", productoController.list);


module.exports = router;
