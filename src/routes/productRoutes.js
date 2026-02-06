//## Creación de rutas

//Vamos a crear las rutas CRUD para los productos.
//Las rutas deberían tener una estructura similar a esta:

// Devuelve todos los productos. Cada producto tendrá un enlace a su página de detalle.
//- GET /products/:productId: Devuelve el detalle de un producto.
//- GET /dashboard: Devuelve el dashboard del administrador. En el dashboard aparecerán todos los artículos que se hayan subido. Si clickamos en uno de ellos nos llevará a su página para poder actualizarlo o eliminarlo.
//- GET /dashboard/new: Devuelve el formulario para subir un artículo nuevo.

//- GET /dashboard/:productId: Devuelve el detalle de un producto en el dashboard.
//- GET /dashboard/:productId/edit: Devuelve el formulario para editar un producto.
//- PUT /dashboard/:productId: Actualiza un producto.
//- DELETE /dashboard/:productId/delete: Elimina un producto.

const express = require('express');
const productRouter = express.Router();

const Product = require('../models/Product');


//- GET /products:

productRouter.get('/products',async (req,res) => {
    try{
        const products = await Product.find();
        if(!products)
        return res.status(404).json({error : 'products not available'})
    res.json(products);
}catch(error){
    console.error(error.message);
    res.status(500).json({error : 'Error getting the products'})
}
});

productRouter.get('/', (req, res) => {
    res.send("Product router working");
})

module.exports = productRouter;

//- POST /dashboard: Crea un nuevo producto.

productRouter.post('/dashboard', async (req, res) => {
    const {nombre, descripcion, imagen, categoria, talla, precio} = req.body;
    try {
        const newProduct = await Product.create({
            nombre,
            descripcion,
            imagen,
            categoria,
            talla,
            precio
        })
        res.status(201).json(newProduct);
        console.log('product created successfully')
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json(error)
    } {}
})


  
