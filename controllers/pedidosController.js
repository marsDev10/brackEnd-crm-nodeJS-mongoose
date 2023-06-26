import { Pedidos } from "../models/Pedidos.js";

export const nuevoPedido = async (req, res, next) => {
    try {

        const pedido = new Pedidos(req.body);

        //almacenar el registro
        await pedido.save();

        res.json({
            message: "Se agrego un nuevo pedido",
            status: 200,
        })

    } catch(err){
        console.log(err);
        next();
    }
};

export const mostrarPedidos = async (req, res, next) => {
    try {

        const pedidos = await Pedidos.find({}).populate('cliente').populate({
                                            path: 'pedido.producto',
                                            model: 'Productos',
                                        });
        res.json({
            status: 200,
            data: pedidos,
        });

    } catch (err) {
        console.log(err);
        next();
    }
};

export const mostrarPedido = async (req, res, next) => {
    try {

        const { idPedido } = req.params;

        const pedido = await Pedidos.findById(idPedido);

        if(!pedido) {
            res.json({
                message: "No existe ese pedido",
            });
            next();
        }

        res.json({
            status: 200,
            data: pedido,
        });

    } catch (err) {
        console.log(err);
        next();
    }
};