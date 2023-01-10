
const express = require("express")

const detailController= require("../controllers/detailController")
const router = express.Router();

router.get('/', detailController.getAllDetail)
        .get('/:id', detailController.getSpecificDetail)
        .delete('/:id', detailController.deleteOneDetail)
        .patch('/:id', detailController.updateDetail)
    
module.exports = router;