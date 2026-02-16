//const multer  = require('multer');
//const { CloudinaryStorage } = require('multer-storage-cloudinary');
//const cloudinary = require('../config/cloudinary');
//
//const storage = new CloudinaryStorage({
//  cloudinary: cloudinary,
//  params: {
//    folder: 'tienda-ropa',
//    allowed_formats: ['jpg', 'jpeg', 'png', 'webp']
//  }
//});
//const upload = multer({ storage });
//
//module.exports = upload;

//module.exports = multer({ storage });


const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });

module.exports = upload;