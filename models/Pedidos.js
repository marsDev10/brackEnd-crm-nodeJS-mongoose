import mongoose from "mongoose";

const Schema = mongoose.Schema;

const pedidosSchema = Schema({
    cliente: {
        type: Schema.ObjectId,
        ref: 'Clientes',
    },
    pedido: [{
        producto: {
            type: Schema.ObjectId,
            ref: 'Productos',
        },
        cantidad: Number,
    }],
    total: {
        type: Number,
    }
});

export const Pedidos = mongoose.model('Pedidos', pedidosSchema);