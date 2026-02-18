
const express = require('express');
const productRouter = express.Router();
const productController = require('../controllers/productController');
const userController = require('../controllers/userController');


//ruta opcional para comprobar que el router funciona, se puede eliminar posteriormente
productRouter.get('/', productController.getProducts);

//crear usuario:
productRouter.get('/crearusuario', userController.createNewUser)

productRouter.post('/crearusuario', userController.crearUsuario);


// -GET productos por categoria:
productRouter.get('/products/category/:categoria', productController.getProductsByCategoria);


module.exports = productRouter;

