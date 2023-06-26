import { Clientes } from "../models/Clientes.js";

// Agregar un nuevo cliente
export const nuevoCliente = async (req, res, next) => {
    try {
        const cliente = new Clientes(req.body);
        //almacenar el registro
        await cliente.save();

        res.json({
            message: "Se agrego un nuevo cliente"
        })

    } catch (err) {
        console.log(err);
        next();
    }
};

// Muestra todos los clientes
export const mostrarClientes = async (req, res, next) => {
    try { 
        const clientes = await Clientes.find({});

        res.json(clientes);

        
    } catch (err) {
        console.log(err);
        next();
    }
};

// Mostramos a un cliente en especifico (ID)
export const mostrarCliente = async (req, res, next) => {
    try {

        const cliente = await Clientes.findById(req.params.idCliente);
        
        if(!cliente) {

            res.json({ message: "Ese cliente no existe" });
            next();
        }

        res.json(cliente);
        
    } catch ( err ) {

        console.log(err);
        next();
    }
};

// Actualizamos a un cliente (ID)
export const actualizarCliente = async (req, res, next) => {
    try {
        
        const cliente = await Clientes.findOneAndUpdate({
            _id: req.params.idCliente,
        }, req.body, {
            new: true,
        });

        res.json(cliente);


    } catch ( err ) {
        console.log(err);
        next();
    }
};

// Eliminamos a un cliente (ID)
export const eliminarCliente = async (req, res, next) => {
    try {
        
        await Clientes.findOneAndDelete({ _id: req.params.idCliente });
 
        res.json({
            message: 'El cliente se ha eliminado',
        })

    } catch(err) {
        console.log(err);
        next();
    }
};