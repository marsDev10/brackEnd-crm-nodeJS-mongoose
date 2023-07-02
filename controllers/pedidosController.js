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

export const actualizarPedido = async (req, res, next) => {
    try {

        const { idPedido } = req.params;

        let pedido = await Pedidos.findOneAndUpdate({
            _id: idPedido,
        }, req.body, {
            new: true,
        })
        .populate('cliente')
        .populate({
            path: 'pedido.producto',
            model: 'Productos',
        });;

        console.log(pedido);

        res.status(201).json({
            status: 201,
            data: pedido,
        })

    } catch(err){
        console.log();
        next()
    }
};

export const eliminarPedido = async (req, res, next) => {
    try {

        const { idPedido } = req.params;

        await Pedidos.findOneAndDelete({
            _id: idPedido,
        });

        res.status(200)
        .json({
            status: 200,
            message: "Pedido Eliminado",
        });

    } catch(err) {
        console.log(err);
        next();
    }    
}