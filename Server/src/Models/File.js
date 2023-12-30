const mongoose = require('mongoose');

const fileSchema = mongoose.Schema(
    {
        name: {
            type: String,
            unique: true,
        },
        originalName: {
            type: String,
        },
        type: {
            type: 'String',
            enum: ['folder', 'file'],
            default: 'folder',
        },
        inFiles: [],
    },
    {
        timestamps: true,
    }
);

const File = mongoose.model('File', fileSchema);
module.exports = File;