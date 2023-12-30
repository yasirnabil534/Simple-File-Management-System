const File = require('../Models/File');
const { fileType } = require('../utils/enums');

const createFile = async (req, res) => {
    try {
        const fileObj = {
            originalName: req?.body?.originalname,
            name: (Math.round(Math.random() * 1E9) + '-' + (req?.body?.originalname)),
            type: fileType.FOLDER,
        };
        const file = await new File(fileObj);
        await file.save();
        const newFile = await File.findOne({ originalName: req?.body?.originalname });
        res.status(200).json({
            file: newFile,
        });
    } catch (err) {
        res.status(500).json({ message: 'Something wrong with file upload' });
    }
};

const getFiles = async (req, res) => {
    try {
        const files = [];
        const fileIdList = req?.body?.fileIdList;
        for (let idx = 0; idx < fileIdList.length; idx++) {
            const file = await File.findById(fileIdList[idx]);
            files.push(file);
        }
        if (files.length > 0) {
            res.status(200).json({ files });
        } else {
            res.status(400).json({ message: 'Files cannot be found.' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

const uploadFile = async (req, res) => {
    try {
        const fileObj = {
            name: req?.file?.filename,
            originalName: req?.file?.originalname,
            type: fileType.FILE,
        };
        const file = await new File(fileObj);
        await file.save();
        const newFile = await File.findOne({ name: req?.file?.filename });
        res.status(200).json({
            file: newFile,
        });
    } catch (err) {
        res.status(500).json({ message: 'Something wrong with file upload' });
    }
};

const insertInFolder = async (req, res) => {
    try {
        const parent = req?.body?.parent;
        const child = req?.body?.child;
        const file = await File.findById(parent);
        file.inFiles.push(child);
        const updateFile = await File.findByIdAndUpdate(parent, file, { new: true });
        res.status(200).json({
            file: updateFile,
        });
    } catch (err) {
        res.status(500).json({ message: 'Something wrong with file insertion' });
    }
}

module.exports = {
    createFile,
    getFiles,
    uploadFile,
    insertInFolder,
};