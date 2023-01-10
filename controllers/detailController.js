const short = require('short-uuid');
const DetailModel = require("../models/detail")
module.exports = {
    getAllDetail: async (req, res) => {
        try {
            const result = await DetailModel.find({});
            res.status(200).send(result)
        }
        catch {
            console.error()
        }
    },
    getSpecificDetail: async (req, res) => {
        try {
            const result = await DetailModel.find({ "detail_id": req.params.id });
            res.status(200).send(result)
        }
        catch {
            console.error()
        }
    },
    deleteOneDetail: async (req, res) => {
        try {
            const result = await DetailModel.deleteOne({ "detail_id": req.params.id });
            res.status(200).send(result)
        }
        catch {
            console.error()
        }
    },

    updateDetail: async (req, res) => {
        try {
            const query = req.body
            const result = await DetailModel.updateOne({ "detail_id": req.params.id }, query);
            res.status(200).send(result)
        }
        catch {
            console.error()
        }
    },
    
    insertDetail: async (req, res) => {
        try {
            const object =  req.body
            object["detail_id"] =short.generate()
           
            
            const detailModel = new DetailModel(object)
            
            await detailModel.save()

    
         res.status(200).send("Added successfully")
        }
        catch {
            console.error()
        }
    },
}

