const mongoose = require('mongoose')
const Schema = mongoose.Schema

const meetSchema = new Schema({
    topic: { type:String, default:"Meeting"},
    date: { type: Date, default: Date.now },
    from: { 
        type: String,
        required: [true, "This field is required"]
    },
    to: { 
        type: String,
        required: [true, "This field is required"]
    },
    email: String
})

const Meet = mongoose.model("meet", meetSchema);

module.exports = Meet;