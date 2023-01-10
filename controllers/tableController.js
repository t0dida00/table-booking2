const short = require('short-uuid');
const TableModel = require("../models/table")
const invoiceControllers = require("../controllers/invoiceController")
module.exports = {
    getAllTable: async (req, res) => {
        try {
            const result = await TableModel.find({});
            res.status(200).send(result)
        }
        catch {
            console.error()
        }
    },
    getSpecificTable: async (req, res) => {
        try {
            const result = await TableModel.find({ "table_id": req.params.id });
            res.status(200).send(result)
        }
        catch {
            console.error()
        }
    },
    deleteOneTable: async (req, res) => {
        try {
            const result = await TableModel.deleteOne({ "table_id": req.params.id });
            res.status(200).send(result)
        }
        catch {
            console.error()
        }
    },

    updateTable: async (req, res) => {
        try {
            const query = req.body
            const result = await TableModel.updateOne({ "table_id": req.params.id }, query);
            res.status(200).send(result)
        }
        catch {
            console.error()
        }
    },
    
    insertTable: async (req, res) => {
        try {
            const object =  req.body
            object["table_id"] =short.generate()
           
            
            const tableModel = new TableModel(object)
            
            await tableModel.save()

           
        // invoiceControllers.insertInvoice(object["table_id"])

        //   const result = await TableModel.insertOne(tableModel);
         res.status(200).send("Added successfully")
        }
        catch {
            console.error()
        }
    },
}

