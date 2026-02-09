
const dashboard = require('../helpers/dashboard');
const editProduct = require('../helpers/editProduct');
const Product = require('../models/Product');
const newProductTemplate = require('../templates/newProducts');
const deleteProduct = require('../helpers/deleteProduct');
const productController = {
    getProductsDashboard: async (req, res) => {
        const products = await Product.find();
        if (!products) {
          return res.json({ message: "Products not found" });
        }
        const dashboardHtml = dashboard(products);
        return res.send(dashboardHtml);
      },
      getNewDashboard:(req,res) => {
        res.send(newProductTemplate);
      },
      getEditProduct:  async (req, res) => {
        const {id} = req.params;
        const html = editProduct(id);
        res.send(html)
      },
      getProducts: async (req,res) => {
        try{
            const products = await Product.find();
            if(!products)
            return res.status(404).json({error : 'products not available'})
        res.json(products);
    }catch(error){
        console.error(error.message);
        res.status(500).json({error : 'Error getting the products'})
    }
    },
    crearNuevoProducto: async (req, res) => {
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
        } 
    },getFormDeleteProduct: async (req, res) => {
        const { productId } = req.params;
        const product = await Product.findById(productId);
        const html = deleteProduct(product);
        res.send(html);
      },
    detalleProductId:  async (req, res) => {
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
    },
    dashboardDetalleProduct: async (req, res) => {
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
    },
    actualizarProducto:  async (req, res) => {
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
                res.redirect('/dashboard');
                res.json(updatedProduct)
            } catch (error) {
                console.error(error.message);
                res.status(500).json(error.message);
            }},
            deleteProduct: async(req, res) => {
                const { id } = req.params;
                try {
                    const product = await Product.findByIdAndDelete(id);
                    if(!product){
                        return res.status(404).json({error : 'product not found'})
                    }
                    //res.json({message: 'product deleted successfully'})
                    res.redirect('/dashboard');
                } catch (error) {
                    console.error(error.message);
                    res.status(500).json(error.message);
                }}

};


module.exports = productController;
