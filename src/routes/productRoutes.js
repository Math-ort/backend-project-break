
const express = require('express');
const productRouter = express.Router();
const productController = require('../controllers/productController');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const auth = require('../middlewares/authMiddleware');
const upload = require('../middlewares/uploadCloudinaryMiddleware');




//ruta opcional para comprobar que el router funciona, se puede eliminar posteriormente
productRouter.get('/', productController.getProducts);

//- GET /dashboard: Devuelve el dashboard del administrador. En el dashboard aparecerán todos los artículos que se hayan subido. 
//Si clickamos en uno de ellos nos llevará a su página para poder actualizarlo o eliminarlo.

productRouter.get("/dashboard", auth, productController.getAllProducts);

//- GET /dashboard/new: Devuelve el formulario para subir un artículo nuevo.
productRouter.get("/dashboard/new",auth, productController.getNewDashboard);

//login 
productRouter.get('/login', authController.getLoginForm);

//- GET /dashboard/:productId/edit: Devuelve el formulario para editar un producto.
productRouter.get('/dashboard/:id/edit',auth, productController.getEditProduct);

// LOGIN POST
//TODO: crear ruta get 
productRouter.post('/login', authController.login);

productRouter.get('/loggin' , authController.getLoginForm);


//crear usuario:
productRouter.get('/crearusuario', userController.createNewUser)

productRouter.post('/crearusuario', userController.crearUsuario);


// - DELETE /dashboard/:productId/delete: Elimina un producto.
productRouter.get("/dashboard/:productId/delete", auth, productController.getFormDeleteProduct);


// -GET productos por categoria:
productRouter.get('/products/category/:categoria', productController.getProductsByCategoria);

//- POST /dashboard: Crea un nuevo producto.

productRouter.post('/dashboard', upload.single('image'), productController.crearNuevoProducto);


//- PUT /dashboard/:productId: Actualiza un producto.

productRouter.put('/dashboard/:id', auth, upload.single('image'), productController.actualizarProducto);

//- DELETE /dashboard/:productId/delete: Elimina un producto.

productRouter.delete('/dashboard/delete/:id', auth, productController.deleteProduct);

//- GET /dashboard/:productId: Devuelve el detalle de un producto en el dashboard.
productRouter.get('/dashboard/:id', auth, productController.dashboardDetalleProduct);


module.exports = productRouter;

