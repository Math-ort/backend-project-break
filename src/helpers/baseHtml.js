const getProducts = require('./productsCards');
const getNavBar = require('./getNavBar');
const getProductCards = require('./productsCards');

const baseHtml = (products, categories, view = "") => {
const category = products[0].categoria;
   return `
      <!DOCTYPE html>
      <html lang="es">
        <head>
         <meta charset="UTF-8">
         <link rel="stylesheet" href="/style/styles.css" />

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
        ${view!== 'home'? `<h1>${category}</h1>` : `<h1> Productos </h1>`}
        
        <body>
          ${getProducts(products)}
          </body>
      </html>
  `}
    
  module.exports = baseHtml;