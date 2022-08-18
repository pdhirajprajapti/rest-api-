const mongoose = require('mongoose');

const menSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true
    },
    class: {
        type: Number,
        required: true
    }
})

// we are creating a new collection
const MensBiodata=new mongoose.model("MensBiodata",menSchema)

module.exports=MensBiodata;