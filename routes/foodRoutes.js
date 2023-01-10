
const express = require("express")

const foodController= require("../controllers/foodController")
const router = express.Router();

router.get('/', foodController.getAllFood)
        .get('/:id', foodController.getSpecificFood)
        .delete('/:id', foodController.deleteOneFood)
        .patch('/:id', foodController.updateFood)
        .post("/",foodController.insertFood)
      
module.exports = router;