const productDetail = require("./productDetails");
const getNavBar = require("./getNavBar");
const deleteProduct =  (product)=>{
    const html =`<!DOCTYPE html>
    <html lang="es">
      <head>
      <header>
      ${getNavBar()}  
  </header>
       <meta charset="UTF-8">
       <link rel="stylesheet" href="/style/styles.css" />
        <meta http-equiv="Content-Security-Policy"
        content="default-src 'self';
        connect-src 'self' http://localhost:4000;
        img-src 'self' data: http:;
        style-src 'self' 'unsafe-inline';
        form-action 'self';">
        <title>Editar Productos</title>
      </head>
      <body>
        <h1>Eliminar un  Producto</h1>
        ${productDetail(product)}
       
        <form action="/dashboard/delete/${product._id}?_method=DELETE" method="POST">
          <button type="submit">ELIMINAR</button>
        </form>
        <p><a href="/dashboard">← Volver al dashboard</a></p>

      </body>
    </html>
  `;
  return html;
  }
  
  
  module.exports = deleteProduct;