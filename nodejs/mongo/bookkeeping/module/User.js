const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    title: { type: String, required: true },
    time: { type: Date },
    type: { type: String, default: -1 },
    amount: { type: Number,required: true },
    note:{ type: String }
});

const User = mongoose.model('user', userSchema);

module.exports = User;