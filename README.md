# BACKEND-PROJECT-BREAK:

Aplicación backend desarrollada con Node.js, Express y MongoDB que permite crear, editar, eliminar y visualizar productos. Incluye autenticacion de administrador y subida de imagenes usando Cloudinary.

Este proyecto implementa un sistema completo de gestión de productos con dashboard privado y operaciones CRUD completas.

# Funcionalidades principales
Dashboard:
Ver todos los productos
Editar productos
Eliminar productos

Crear producto:
Nombre
Precio
Categoría
Talla
Descripción
Imagen (Cloudinary)

Editar producto:
Actualizar información
Cambiar imagen

# Tecnologias utilizadas:
Backend:
- Node.js
- Express
- MongoDB
- Mongoose

Autenticacion y seguridad:
- Express-session
- Helmet
- Dotenv

Subida de archivos:
- Multer
- Multer Storage Cloudinary
- Cloudinary

Frontend:
- HTML
- CSS
- JavaScript

Otros:
- Method-override

# Subida de imagenes:
Las imagenes se almacenan en Cloudinary usando:
Multer
Cloudinary Storage
Middleware personalizado

# Endpoints principales:
Metodo	    Ruta	                    Descripcion

GET	        /login	                    Formulario login
POST	    /login	                    Iniciar sesión
GET 	    /dashboard	                Ver dashboard
GET	        /dashboard/new	            Form crear producto
POST	    /dashboard	                Crear producto
GET 	    /dashboard/:id/edit	        Form editar
PUT	        /dashboard/:id	            Actualizar producto
DELETE	    /dashboard/delete/:id	    Eliminar producto


# Seguridad:

Autenticación con express-session
Rutas protegidas con middleware auth
Variables sensibles en .env






## ⚙️ Instalación

Clonar repositorio:

https://github.com/Math-ort/backend-project-break.git

Entrar en carpeta:
cd BACKEND-PROJECT-BREAK
Instalar dependencias:
npm install
# Ejecutar el proyecto
npm start
Abrir en navegador:
http://localhost:4000/login



# Estructura del proyecto:
BACKEND-PROJECT-BREAK/
│
├── public/
│ └── style/
│ └── styles.css
│
├── src/
│ ├── config/
│ ├── controllers/
│ ├── helpers/
│ ├── middlewares/
│ ├── models/
│ ├── routes/
│ ├── templates/
│ └── index.js
│
├── .env-example
├── package.json
├── README.md

# Autor:
Mathias Ortiz 


# Licencia:
Este proyecto es solo para fines educativos.