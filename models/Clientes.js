import mongoose from "mongoose";

const Schema = mongoose.Schema;

const clientesSchema = new Schema({
    nombre: {
        type: 'string',
        trim: true,
    },
    apellido: {
        type: 'string',
        trim: true,
    },
    empresa: {
        type: 'string',
        trim: true,
    },
    email: {
        type: 'string',
        unique: true,
        lowercase: true,
        trim: true,
    },
    telefono: {
        type: 'string',
        trim: true,
    }
});

export const Clientes = mongoose.model('Clientes', clientesSchema);