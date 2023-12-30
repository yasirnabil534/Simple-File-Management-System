const express = require('express');
const { fileAPI } = require('../utils/apiEndpoints');
const {
    createFile,
    getFiles,
    uploadFile,
    insertInFolder,
} = require('../services/fileService');
const { setPathForUploader } = require('../middlewares/fileUploader');

const router = express.Router();
const upload = setPathForUploader();

router.post(fileAPI.CREATE, createFile);

router.post(fileAPI.ALL, getFiles);

router.post(fileAPI.UPLOAD, upload.single('file'), uploadFile);

router.put(fileAPI.INSERT, insertInFolder);

module.exports = router;

