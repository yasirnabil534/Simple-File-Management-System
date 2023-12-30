const multer = require('multer');

const setPathForUploader = (path = './public/files') => {
    const storage = multer.diskStorage({
        destination(req, file, cb) {
            cb(null, path);
        },
        filename(req, file, cb) {
            const name = `${Math.round(Math.random() * 1E9)}-${file.originalname}`;
            cb(null, name);
        },
    });
    const upload = multer({ storage });
    return upload;
};

module.exports = {
    setPathForUploader,
};