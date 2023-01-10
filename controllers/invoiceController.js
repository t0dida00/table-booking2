const short = require('short-uuid');
const InvoiceModel = require("../models/invoice")

module.exports = {
    getAllInvoice: async (req, res) => {
        try {
            const result = await InvoiceModel.find({});
            res.status(200).send(result)
        }
        catch {
            console.error()
        }
    },
    getSpecificInvoice: async (req, res) => {
        try {
            const result = await InvoiceModel.find({ "invoice_id": req.params.id });
            res.status(200).send(result)
        }
        catch {
            console.error()
        }
    },
    deleteOneInvoice: async (req, res) => {
        try {
            const result = await InvoiceModel.deleteOne({ "invoice_id": req.params.id });
            res.status(200).send(result)
        }
        catch {
            console.error()
        }
    },

    updateInvoice: async (req, res) => {
        try {
            const query = req.body
            const result = await InvoiceModel.updateOne({ "invoice_id": req.params.id }, query);
            res.status(200).send(result)
        }
        catch {
            console.error()
        }
    },
    
    insertInvoice: async (table_id) => {
        try {
            const object = {}
            object["invoice_id"] =short.generate()
            object["table_id"]=table_id
            object["date"]=Date()
            object["total"]=0
          
                
            console.log(object)
            const invoiceModel = new InvoiceModel(object)
            
            invoiceModel.save()
         res.status(200).send("Added successfully")
        }
        catch {
            console.error()
        }
    },
}

