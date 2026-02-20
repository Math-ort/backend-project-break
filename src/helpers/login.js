
const login = (product) => {
    const html =`
    <!DOCTYPE html>
    <html lang="es">
  <head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="/style/styles.css" />
  <title> Iniciar sesion</title>
    </head>
    <body>
      <h1>Inicia Sesion </h1>
      <form action="/login" method="POST">
  
        <label for=email">email</label>
        <input type="email" id="email" name="email" required>
        
        <label for="password">Password</label>
        <input type="text" id="password" name="password" required>
          <button type="submit">Guardar</button>
      </form>
      <p><a href="/#"> Inicio </a></p>
      <p><a href="/crearusuario">  no tienes cuenta? crea tu cuenta aqui </a></p>

    </body>
  </html>
  `;
  return html;
  }
  
  
  module.exports = login;