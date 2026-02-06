const express = require('express');
const dotenv = require('dotenv');
const {dbConnection} = require('./config/db');
const productRouter = require('./routes/productRoutes');
const app = express();

app.use(express.json());
app.use('/', productRouter);


dotenv.config();// lectura variables entorno


dbConnection();

app.listen(process.env.PORT || 4000,()=>{
    console.log(`server listen in port http://localhost:${process.env.PORT || 4000}`)
});

