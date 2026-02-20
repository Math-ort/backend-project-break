
const crearusuario = (product) => {
  const html =`
  <!DOCTYPE html>
  <html lang="es">
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="/style/styles.css" />
<title> Crear Usuario </title>
  </head>
  <body>
    <h1>Crear Usuario</h1>
    <form action="/crearusuario" method="POST">

      <label for=email">email</label>
      <input type="email" id="email" name="email" required>
      
      <label for="password">Password</label>
      <input type="text" id="password" name="password" required>
        <button type="submit">Guardar</button>
    </form>
    <p><a href="/#"> Inicio </a></p>
    <p><a href="/login"> Si ya tienes cuenta </a></p>

  </body>
</html>
`;
return html;
}


module.exports = crearusuario;
