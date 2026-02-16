
const createProductForm = (product) => {
    const html =`
    <!DOCTYPE html>
    <html lang="es">
  <head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="/style/styles.css">
  <meta http-equiv="Content-Security-Policy"
          content="default-src 'self';
          connect-src 'self' http://localhost:4000;
          img-src 'self' data: http:;
          style-src 'self' 'unsafe-inline';
          form-action 'self';">
  <title> Crear producto </title>
    </head>
    <body>
    <div class="form-container">
      <h1> Crear producto </h1>
      <form action="/dashboard" method="POST" enctype="multipart/form-data">
      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" required>
      </div>
      <div class="form-group">
        <label for="precio">Precio (€)</label>
        <input type="number" id="precio" name="precio" min="0" step="0.01" required>
      </div>
      <div class="form-group">
        <label for="categoria">Categoria </label>
        <input type="text" id="categoria" name="categoria" required placeholder= "Ejemplo: Camisetas, Pantalones, Zapatos, Accesorios">
      </div>
      <div class="form-group">
        <label for="talla">Talla </label>
        <input type="text" id="talla" name="talla" required placeholder= "Ejemplo: XS S M L XL ">
      </div>
      <div class="form-group">
        <label for="descripcion">Descripcion</label>
        <input type="text" id="descripcion" name="descripcion" >
      </div>
      <div class="form-group">
        <label for="image">Imagen</label>
        <input type="file" id="image" name="image">
      </div>

      <button type="submit">Guardar</button>
      </form>
      <p><a href="/dashboard" class="primary-btn"> ← Volver al dashboard</a></p>
      
      </body>
      </html>
      `;
      return html;
    }
    
    
    module.exports = createProductForm;
    
    
    //enctype="multipart/form-data"
   