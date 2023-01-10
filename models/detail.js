
const mongoose = require("mongoose");

const invoiceDetailSchema = new mongoose.Schema({
    invoice_id: String ,
    detail_id: String,
    food_id: String,
    food_price: Number,
    food_quantity:Number
  });

 const InvoiceDetailSchema = mongoose.model('invoice_detail', invoiceDetailSchema);


 

 module.exports = InvoiceDetailSchema