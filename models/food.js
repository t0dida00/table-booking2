
const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    food_id: String ,
    food_name: String,
    food_type1: String,
    food_type2: String,
    food_price: Number,
    food_description:String
  });

 const FoodSchema = mongoose.model('Food', foodSchema);


 

 module.exports = FoodSchema