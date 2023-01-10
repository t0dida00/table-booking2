
const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
    invoice_id: String ,
    table_id: String,
    date: Date,
    total:Number
  });

 const InvoiceSchema = mongoose.model('Invoice', invoiceSchema);


 

 module.exports = InvoiceSchema