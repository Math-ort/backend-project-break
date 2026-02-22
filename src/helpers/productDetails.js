const productDetail = (product) => {
    const html = `
           <div class="product-card">
           <img src="${product.imagen}" alt="${product.nombre}">
          <h2>${product.nombre}</h2>
          <p>${product.descripcion}</p>
          <p>${product.precio}€</p>
          <a href="/dashboard/${product._id}/edit">Editar Producto</a>
          <a href="/dashboard/${product._id}/delete">Eliminar Producto</a>
          </div>
    `;
    return html;
  };
  module.exports = productDetail; 


