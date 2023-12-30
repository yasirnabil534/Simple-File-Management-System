const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name: String,
        email: {
            type: String,
            unique: true,
        },
        password: String,
        rawPassword: String, // It is kept cause it is hard to remember multiple random passwords
        phone: String,
        image: {
            type: mongoose.Types.ObjectId,
            ref: 'FIle',
        },
        address: {
            area: String,
            city: String,
            country: String,
        },
        type: {
            type: String,
            enum: ['admin', 'user'],
            default: 'user',
        },
        accessList: [],
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', userSchema);
module.exports = User;