const express = require("express")

const tableController= require("../controllers/tableController")
const router = express.Router();

router.get('/', tableController.getAllTable)
        .get('/:id', tableController.getSpecificTable)
        .delete('/:id', tableController.deleteOneTable)
        .patch('/:id', tableController.updateTable)
        .post("/",tableController.insertTable)
module.exports = router;