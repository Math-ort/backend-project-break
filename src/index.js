const express = require('express');
const dotenv = require('dotenv');
const {dbConnection} = require('./config/db') 

dotenv.config();// lectura variables entorno

const app = express();

dbConnection();
app.get('/',(req, res) => {
    res.send("Hi world");
})

app.listen(process.env.PORT || 4000,()=>{
    console.log(`server listen in port http://localhost:${process.env.PORT || 4000}`)
});

