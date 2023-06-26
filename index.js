import express from "express";
import mongoose from "mongoose";

import Routes from "./routes/index.js";

import bodyParser from "body-parser";

const PORT = 5000;

// Conectar Mongo
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1/restapis', {
    useNewUrlParser: true,
});

// Crea app
const app = express();

// Habilitar bodyparse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// User rutas
app.use('/', Routes);


app.listen(PORT, () => {

    console.log("Servidor en ", PORT);    
});