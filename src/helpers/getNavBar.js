const getNavBar =() => {
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