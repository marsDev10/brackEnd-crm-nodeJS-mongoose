import { Productos } from "../models/Productos.js";

import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Obtiene la ruta del archivo actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import multer from "multer";
import shortid from "shortid";
import fs from "fs";

const configuracionMulter = {
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, __dirname + '../../uploads/');
        },
        filename: (req, file, cb) => {
            const extension = file.mimetype.split('/')[1];
            cb(null, `${shortid.generate()}.${extension}`);
        }
    }),
    fileFilter(req, file, cb) {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, true);
        } else {
            cb(new Error('Formato no válido'))
        }
    }
}

// Pasar la configiguración y el campo
const upload = multer(configuracionMulter).single('imagen');

// Sube un archivo
export const subirArchivo = (req, res, next) => {
    upload(req, res, function (error) {
        if (error) {
            res.json({ mensaje: error })
        }
        return next();
    })
}

// Crear un nuevo producto
export const nuevoProducto = async (req, res, next) => {
    try {
        const producto = new Productos(req.body);
        
        if (req.file.filename) {
            producto.imagen = req.file.filename
        }

        await producto.save();

        res.json({
            message: "Se agrego un nuevo prodcuto",
            status: 200,
        })

    } catch (err) {
        console.log(err);
        next();
    }
};

// Mostrar todos los productos
export const mostrarProductos = async (req, res, next) => {
    try {
        const productos = await Productos.find({});

        res.json(productos);

    } catch (err) {
        console.log(err);
        next();
    }
};

// Mostrar un producto en especifico (ID)
export const mostrarProducto = async (req, res, next) => {
    try {
        
        const producto = await Productos.findById(req.params.idProducto);
        
        if(!producto) {
            res.json({
                message: "El producto no existe",
            });
            next();
        }

        res.json(producto);

    } catch (err) {

        console.log(err);
        next();
    }
};

// Actualizamos un producto en especifico (ID)
export const actualizarProducto = async (req, res, next) => {
    try{

        const { idProducto } = req.params;

        // Construir un nuevo producto
        let nuevoProducto = req.body;

        // Verificar si hay imagen nueva
        if(req.file){

            nuevoProducto.imagen = req.file.filename;

        } else {

            let productoAnterior = await Productos.findById(idProducto);
            nuevoProducto.imagen = productoAnterior.imagen;
        }

        const producto = await Productos.findOneAndUpdate({
            _id: idProducto, 
        }, nuevoProducto, {
            new: true,
        });

        res.json({
            producto,
            mensaje: 'Producto actualizado',
            status: 200
        });

    }catch(err){
        console.log(err);
        next();
    }
}

export const eliminarProducto = async (req, res, next) => {
    try {

        const { idProducto } = req.params;

        await Productos.findByIdAndDelete({ _id: idProducto });

        res.json({
            message: "El producto se elimino correctamente",
            status: 200,
        });

    } catch (err) {
        console.log(err);
        next();
    }
};

