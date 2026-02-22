const getProducts = require('./productsCards');
const getNavBar = require('./getNavBar');
const getProductCards = require('./productsCards');

const baseHtml = (products, categories, view = "") => {

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
          <body>
        <header>
        ${getNavBar()}
        </header>
        <h1 >
        ${
          view !== "home"
            ? (products[0]?.categoria ?? "Productos")
            : "Todos los productos"
        }
      </h1>
        
          ${getProducts(products)}
          </body>
      </html>
  `}
    
  module.exports = baseHtml;

 


// ${view!== 'home'? `<h1>${products[0]?.categoria??'productos'}</h1>` : `<h1> Productos </h1>`}