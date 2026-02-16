
//const dashboard = require('../helpers/dashboard');
const editProduct = require('../helpers/editProduct');
const Product = require('../models/Product');
const newProductTemplate = require('../templates/newProducts');
const deleteProduct = require('../helpers/deleteProduct');
const baseHtml = require('../helpers/baseHtml');
const Category = require('../models/Category');
const productDetail = require('../helpers/productDetails');

const productController = {
    getAllProducts: async (req, res) => {
        const products = await Product.find();
        const categories = await Product.distinct("categoria");
                if (!products) {
          return res.json({ message: "Products not found" });
        }
        const dashboardHtml = baseHtml(products, categories);
        return res.send(dashboardHtml);

      },
      getNewDashboard:(req,res) => {
        res.send(newProductTemplate);
      },
      getEditProduct:  async (req, res) => {
        const {id} = req.params;
        const product = await Product.findById(id);
    const html = editProduct(product);
    res.send(html)
      
      },
      getProducts: async (req,res) => {
        try{
            const products = await Product.find();
            const categorias = await Product.distinct("categoria");
            if(!products){ 
            return res.status(404).json({error : 'products not available'})}
          const html = baseHtml(products, categorias);  
          
        res.send(html);
    }catch(error){
        console.error(error.message);
        res.status(500).json({error : 'Error getting the products'})
    }
    },
    crearNuevoProducto: async (req, res) => {
        const { nombre, descripcion, categoria, talla, precio } = req.body;
        try {
          const newProduct = await Product.create({
            nombre,
            descripcion,
imagen: req.file ? `/uploads/${req.file.filename}` : undefined,
            categoria,
            talla,
            precio,
          });
          console.log(newProduct);
          console.log(req.body);
          console.log(req.file);
          return res.redirect("/dashboard");
        } catch (error) {
          console.error(error.messsage);
          return res.status(500).json(error);
        }
      },
      getFormDeleteProduct: async (req, res) => {
        const { productId } = req.params;
        const product = await Product.findById(productId);
        const html = deleteProduct(product);
        res.send(html);
      },
    dashboardDetalleProduct: async (req, res) => {
        try {
            const { id } = req.params;
            
            const product = await Product.findById(id);
            
            if (!product) {
                return res.status(404).json({ error: 'product not found' });
            }
            
            const html = productDetail(product);
            res.send(html);
            
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ error: 'error getting product' });
        }
    },
    actualizarProducto: async (req, res) => {
        const { id } = req.params;
        const { nombre, descripcion, categoria, talla, precio } = req.body;
    
        try {
          const newProduct = await Product.findByIdAndUpdate(
            id,
            {
              nombre,
              descripcion,
              imagen: req.file ? req.file.path : undefined,
              categoria,
              talla,
              precio,
            },
            {
              new: true, //para que traiga el documento actualizado
            },
          );
          if (!newProduct) {
            return res.status(404).json({ error: "Product not found" });
          }
          console.log(newProduct);
          return res.redirect("/dashboard");
          //res.json(newProduct);
        } catch (error) {
          console.error(error.message);
          res.status(500).json(error.message);
        }
      },
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
                }},
                getProductsByCategoria: async (req, res) => {
                    const { categoria } = req.params;
                
                    try {
                        const products = await Product.find({ categoria });
                
                        if (!products || products.length === 0) {
                            return res.status(404).send("No hay productos en esta categoría");
                        }
                        const categories = await Product.distinct("categoria");
                
                        const html = baseHtml(products, categories);
                
                        res.send(html);
                
                    } catch (error) {
                        console.error(error);
                        res.status(500).json({ error: 'Error getting products by category' });
                    }
                
                }
};


module.exports = productController;




