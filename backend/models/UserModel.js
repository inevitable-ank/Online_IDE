const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('mongoose');

dotenv.config({ path: path.resolve(__dirname, '../.env') });
mongoose.connect(process.env.MONGODB_URI);

let userSchema = new mongoose.Schema({
    name: String,
    username : String,
    email : String,
    password: String,
    date : {
        type: Date,
        default: Date.now
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('User', userSchema)