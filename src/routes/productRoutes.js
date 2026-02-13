
const express = require('express');
const productRouter = express.Router();
const productController = require('../controllers/productController');
const baseHtml = require('../helpers/baseHtml');

//ruta opcional para comprobar que el router funciona, se puede eliminar posteriormente
productRouter.get('/', productController.getProducts);

//- GET /dashboard: Devuelve el dashboard del administrador. En el dashboard aparecerán todos los artículos que se hayan subido. 
//Si clickamos en uno de ellos nos llevará a su página para poder actualizarlo o eliminarlo.

productRouter.get("/dashboard", productController.getAllProducts);

// -GET productos por categoria:
productRouter.get('/products/category/:categoria', productController.getProductsByCategoria);

//- GET /dashboard/new: Devuelve el formulario para subir un artículo nuevo.
productRouter.get("/dashboard/new",productController.getNewDashboard);

// - DELETE /dashboard/:productId/delete: Elimina un producto.
productRouter.get("/dashboard/:productId/delete", productController.getFormDeleteProduct);
//- GET /dashboard/:productId/edit: Devuelve el formulario para editar un producto.
productRouter.get('/dashboard/:id/edit', productController.getEditProduct);


//- POST /dashboard: Crea un nuevo producto.

productRouter.post('/dashboard', productController.crearNuevoProducto);

//- GET /products/:productId: Devuelve el detalle de un producto.
//TODO revisar esta ruta
productRouter.get('/products/:id', productController.detalleProductId);

//- GET /dashboard/:productId: Devuelve el detalle de un producto en el dashboard.
productRouter.get('/dashboard/:id',productController.dashboardDetalleProduct);


//- PUT /dashboard/:productId: Actualiza un producto.

productRouter.put('/dashboard/:id',productController.actualizarProducto);
        
        
//- DELETE /dashboard/:productId/delete: Elimina un producto.
        
productRouter.delete('/dashboard/delete/:id', productController.deleteProduct);
            
            
            
module.exports = productRouter;