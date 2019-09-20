const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bycrypt = require('bcryptjs');
mongoose.promise = Promise;

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        enum: ['Admin', 'User', 'Producer'],
        default: 'User'
    },
})


const User = mongoose.model('User', userSchema);
module.exports = User;