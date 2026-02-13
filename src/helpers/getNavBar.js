const getNavBar = (categories) => {

  const categoryLinks = categories.map(cat => {
    return `<li><a href="/products/category/${cat.nombre}">${cat.nombre}</a></li>`
  }).join('');
   return `
    <nav>
      <ul>
        <li><a href="/#">Productos</a></li>
        <li><a href="/products/category/Accesorios">Accesorios</a></li>
        <li><a href="/products/category/Camisetas">Camisetas</a></li>
        <li><a href="/products/category/Pantalones">Pantalones</a></li>
        <li><a href="/products/category/Zapatos">Zapatos</a></li>
        <li><a href="/login">Log in</a></li>
        </ul>
        </nav>
        `
      };
      
      module.exports = getNavBar;
      
      //${categoryLinks}
