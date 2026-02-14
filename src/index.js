const express = require('express');
const dotenv = require('dotenv');
dotenv.config();// lectura variables entorno
const helmet = require('helmet');
const methodOverride = require('method-override');
const app = express();
const productRouter = require('./routes/productRoutes');
const session = require('express-session');
const {dbConnection} = require('./config/db');

app.use(helmet({contentSecurityPolicy: false,}));
app.use(methodOverride('_method')); 
dbConnection();
app.use(express.json());
app.use(express.urlencoded());
app.use(session({//para guardar los datos en sesion 
    secret: "mi_secret",
    resave: false,
    saveUninitialized: false,
    }),
  );
app.use('/', productRouter);


app.listen(process.env.PORT || 4000,()=>{
    console.log(`server listen in port http://localhost:${process.env.PORT || 4000}`)
});



