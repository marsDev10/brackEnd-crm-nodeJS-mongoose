import express from "express";
import mongoose from "mongoose";

import cors from 'cors';

import Routes from "./routes/index.js";

import bodyParser from "body-parser";

const PORT = 5000;

// Conectar Mongo
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1/restapis', {
    useNewUrlParser: true,
});

// Configuración personalizada para CORS
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};


// Crea app
const app = express();


// Habilitar bodyparse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Habilita CORS con opciones personalizadas
app.use(cors(corsOptions));

// User rutas
app.use('/', Routes);

//Carpeta publica
app.use(express.static('uploads'))


app.listen(PORT, () => {

    console.log("Servidor en ", PORT);    
});