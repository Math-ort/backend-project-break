//## Creación de rutas

//Vamos a crear las rutas CRUD para los productos.
//Las rutas deberían tener una estructura similar a esta:

// Devuelve todos los productos. Cada producto tendrá un enlace a su página de detalle.

//- GET /dashboard: Devuelve el dashboard del administrador. En el dashboard aparecerán todos los artículos que se hayan subido. Si clickamos en uno de ellos nos llevará a su página para poder actualizarlo o eliminarlo.
//- GET /dashboard/:productId/edit: Devuelve el formulario para editar un producto.


const express = require('express');
const productRouter = express.Router();

const Product = require('../models/Product');
const newProductTemplate = require('../templates/newProducts');


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

//- GET /products/:productId: Devuelve el detalle de un producto.

productRouter.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        
        const product = await Product.findById(id);
        
        if (!product) {
            return res.status(404).json({ error: 'product not found' });
        }
        
        res.json(product);
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'error getting product' });
    }
});
//- GET /dashboard/new: Devuelve el formulario para subir un artículo nuevo.
productRouter.get("/dashboard/new", (req, res) => {
res.send(newProductTemplate)
 });

//- GET /dashboard/:productId: Devuelve el detalle de un producto en el dashboard.
productRouter.get('/dashboard/:id', async (req, res) => {
    try {
        const { id } = req.params;
        
        const product = await Product.findById(id);
        
        if (!product) {
            return res.status(404).json({ error: 'product not found' });
        }
        
        res.json(product);
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'error getting product' });
    }
});


//- PUT /dashboard/:productId: Actualiza un producto.

productRouter.put('/dashboard/:id', async (req, res) => {
    const { id } = req.params;
    const {nombre, descripcion, imagen, categoria, talla, precio} = req.body;
    
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            id,{
            nombre,
            descripcion,
            imagen,
            categoria,
            talla,
            precio,
        },{new: true});
        if(!updatedProduct){
            return res.status(404).json({error : 'product not found'})
        }
        res.json(updatedProduct)
        } catch (error) {
        console.error(error.message);
        res.status(500).json(error.message);
        }})
        

//- DELETE /dashboard/:productId/delete: Elimina un producto.

productRouter.delete('/dashboard/:id/delete', async(req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({error : 'product not found'})
        }
        res.json({message: 'product deleted successfully'})
        } catch (error) {
        console.error(error.message);
        res.status(500).json(error.message);
        }})


