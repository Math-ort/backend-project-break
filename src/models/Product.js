
const mongoose = require('mongoose');

const validCategorias = ['Camisetas', 'Pantalones', 'Zapatos', 'Accesorios'];  // enum de colores
const validTallas = ['XS', 'S', 'M', 'L', 'XL'];  

const productSchema = new mongoose.Schema({
    nombre: {
        type : String,
        requiered : true,
        unique : true,
    },
    descripcion: {
        type : String,
        requiered : true,
    },
    imagen: {
        type : String,
        requiered : true,
    },
    categoria: {
        type : String,
        requiered : true,
        enum: validCategorias,
    },
    talla: {
        type : String,
        requiered : true,
        enum: validTallas,
    },
    precio: {
        type : Number,
        requiered : true,
    }
})

module.exports = mongoose.model('Product', productSchema);
module.exports.validCategorias = validCategorias;
module.exports.validTallas = validTallas;


