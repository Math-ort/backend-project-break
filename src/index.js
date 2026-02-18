const express = require('express');
const dotenv = require('dotenv');
dotenv.config();// lectura variables entorno
const helmet = require('helmet');
const methodOverride = require('method-override');
const session = require('express-session');

const app = express();

const productRouter = require('./routes/productRoutes');
const productApiRoutes = require('./routes/productApiRoutes');
const authRoutes = require('./routes/authRoutes');

const {dbConnection} = require('./config/db');

app.use(helmet({contentSecurityPolicy: false,}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method')); 
app.use(session({//para guardar los datos en sesion 
  secret: "mi_secret",
  resave: false,
  saveUninitialized: false,
}),);

app.use(express.static('public'));

dbConnection();

app.use('/', productRouter);
app.use('/', authRoutes);
app.use('/api/products', productApiRoutes);


app.listen(process.env.PORT || 4000,()=>{
    console.log(`server listen in port http://localhost:${process.env.PORT || 4000}`)
});



