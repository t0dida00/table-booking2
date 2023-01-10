
const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
    table_id: String ,
    table_name: String,
    table_type: String,
    table_slots:Number
  });

 const TableModel = mongoose.model('Table', tableSchema);


 

 module.exports = TableModel