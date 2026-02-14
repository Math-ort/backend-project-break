
const createProductForm = (product) => {
    const html =`
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
  <title> Crear producto </title>
    </head>
    <body>
      <h1> Crear producto </h1>
      <form action="/dashboard"method="POST" enctype="multipart/form-data">

        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" required>
        
        <label for="precio">Precio (€)</label>
        <input type="number" id="precio" name="precio" min="0" step="0.01" required>
  
        <label for="categoria">Categoria </label>
        <input type="text" id="categoria" name="categoria" required placeholder= "Ejemplo: Camisetas, Pantalones, Zapatos, Accesorios">
        
        <label for="talla">Talla </label>
        <input type="text" id="talla" name="talla" required placeholder= "Ejemplo: XS S M L XL ">
  
        <label for="descripcion">Descripcion</label>
        <input type="text" id="descripcion" name="descripcion" required>
  
        <label for="image">Imagen</label>
        <input type="file" id="image" name="image" required>
  
        <button type="submit">Guardar</button>
      </form>
      <p><a href="/dashboard"> ← Volver al dashboard</a></p>
    </body>
  </html>
  `;
  return html;
  }
  
  
  module.exports = createProductForm;
