const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const {dbConnection} = require('./config/db');
const productRouter = require('./routes/productRoutes');
const methodOverride = require('method-override');
const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(methodOverride('_method')); 
app.use('/', productRouter);
app.use(helmet({
    contentSecurityPolicy: false,
}));

dotenv.config();// lectura variables entorno


dbConnection();

app.listen(process.env.PORT || 4000,()=>{
    console.log(`server listen in port http://localhost:${process.env.PORT || 4000}`)
});

