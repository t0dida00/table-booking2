
const express = require("express")

const invoiceController= require("../controllers/invoiceController")
const router = express.Router();

router.get('/', invoiceController.getAllInvoice)
        .get('/:id', invoiceController.getSpecificInvoice)
        .delete('/:id', invoiceController.deleteOneInvoice)
        .patch('/:id', invoiceController.updateInvoice)
    
module.exports = router;