const short = require('short-uuid');
const FoodModel = require("../models/food")
module.exports = {
    getAllFood: async (req, res) => {
        try {
            const result = await FoodModel.find({});
            res.status(200).send(result)
        }
        catch {
            console.error()
        }
    },
    getSpecificFood: async (req, res) => {
        try {
            const result = await FoodModel.find({ "food_id": req.params.id });
            res.status(200).send(result)
        }
        catch {
            console.error()
        }
    },
    deleteOneFood: async (req, res) => {
        try {
            const result = await FoodModel.deleteOne({ "food_id": req.params.id });
            res.status(200).send(result)
        }
        catch {
            console.error()
        }
    },

    updateFood: async (req, res) => {
        try {
            const query = req.body
            const result = await FoodModel.updateOne({ "food_id": req.params.id }, query);
            res.status(200).send(result)
        }
        catch {
            console.error()
        }
    },
    
    insertFood: async (req, res) => {
        try {
            const object =  req.body
            object["food_id"] =short.generate()
           
            console.log(object)
            const foodModel = new FoodModel(object)
            
            await foodModel.save()

    
         res.status(200).send("Added successfully")
        }
        catch {
            console.error()
        }
    },
}

