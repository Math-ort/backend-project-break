const express = require('express');
const router = express.Router();

const productApiController = require('../controllers/productApiController');
const auth = require('../middlewares/authMiddleware');
const upload = require('../middlewares/uploadCloudinaryMiddleware');

router.get('/', productApiController.getAllProducts);
router.get('/:id', productApiController.getProductById);
router.post('/', auth, upload.single('image'), productApiController.createProduct); 
router.put('/:id', auth,upload.single('image'), productApiController.updateProduct);
router.delete('/:id', auth, productApiController.deleteProduct);

module.exports = router;