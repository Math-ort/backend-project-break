const getProducts = require('./productsCards');
const getNavBar = require('./getNavBar');
const getProductCards = require('./productsCards');
const baseHtml = (products, categories) => 
    `
      <!DOCTYPE html>
      <html lang="es">
        <head>
         <meta charset="UTF-8">
         <meta http-equiv="Content-Security-Policy"
        content="default-src 'self';
        connect-src 'self' http://localhost:4000;
        img-src 'self' data: http:;
        style-src 'self' 'unsafe-inline';
        form-action 'self';">
          <title>Mi tienda</title>
        </head>
        <header>
        ${getNavBar()}
        </header>
        <body>
          <h1>Productos</h1>
          ${getProducts(products)}
          </body>
      </html>
    `
  module.exports = baseHtml;