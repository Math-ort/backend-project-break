const categoryTemplate = (products, categoria) => {

    return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
    <meta charset="UTF-8">
    <title>${categoria}</title>
    </head>
    
    <body>
    
    <h1>Categoria: ${categoria}</h1>
    
    <a href="/">Volver al inicio</a>
    
    <div class="products-container">
    
    ${products.map(product => `
        <div style="border:1px solid black; padding:10px; margin:10px">
            <h2>${product.nombre}</h2>
            <img src="${product.imagen}" width="150"/>
            <p>${product.descripcion}</p>
            <p><strong>Precio:</strong> ${product.precio}</p>
            <a href="/products/${product._id}">Ver detalle</a>
        </div>
    `).join("")}
    
    </div>
    <link rel="stylesheet" href="/style/styles.css">
    </body>
    </html>
    `;
    };
    
    module.exports = categoryTemplate;
    