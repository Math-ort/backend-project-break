const express = require('express');
const router = express.Router();

const auth = require('../middlewares/authMiddleware');
const authController = require('../controllers/authController');
const upload = require('../middlewares/uploadCloudinaryMiddleware');
const productController = require('../controllers/productController');

//- GET /dashboard: Devuelve el dashboard del administrador. En el dashboard aparecerán todos los artículos que se hayan subido. 
//Si clickamos en uno de ellos nos llevará a su página para poder actualizarlo o eliminarlo.

router.get("/dashboard", auth, productController.getAllProducts);


//- GET /dashboard/new: Devuelve el formulario para subir un artículo nuevo.
router.get("/dashboard/new",auth, productController.getNewDashboard);

//login 
router.get('/login', authController.getLoginForm);

//- GET /dashboard/:productId/edit: Devuelve el formulario para editar un producto.
router.get('/dashboard/:id/edit',auth, productController.getEditProduct);


// LOGIN POST
router.post('/login', authController.login);

router.get('/loggin' , authController.getLoginForm);


// - DELETE /dashboard/:productId/delete: Elimina un producto.
router.get("/dashboard/:productId/delete", auth, productController.getFormDeleteProduct);
//- POST /dashboard: Crea un nuevo producto.

router.post('/dashboard', auth, upload.single('image'), productController.crearNuevoProducto);

//- PUT /dashboard/:productId: Actualiza un producto.

router.put('/dashboard/:id', auth, upload.single('image'), productController.actualizarProducto);

//- DELETE /dashboard/:productId/delete: Elimina un producto.

router.delete('/dashboard/delete/:id', auth, productController.deleteProduct);

//- GET /dashboard/:productId: Devuelve el detalle de un producto en el dashboard.
router.get('/dashboard/product/:id', auth, productController.dashboardDetalleProduct);


module.exports = router;