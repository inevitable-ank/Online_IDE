const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Load environment variables from the .env file
dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));


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