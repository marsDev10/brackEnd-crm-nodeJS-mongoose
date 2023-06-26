import { Router } from 'express';

import { 
    nuevoCliente, 
    mostrarClientes, 
    mostrarCliente,
    actualizarCliente, 
    eliminarCliente
} from '../controllers/clienteController.js';

import {
    nuevoProducto, 
    subirArchivo,
    mostrarProductos,
    mostrarProducto,
    actualizarProducto,
    eliminarProducto,
} from '../controllers/productosController.js';

import {
    mostrarPedido,
    mostrarPedidos,
    nuevoPedido
} from '../controllers/pedidosController.js';
const router = Router();

// Agregando nuevos clientes via POST
router.post('/clientes', nuevoCliente);


// Obtener todos los clientes
router.get('/clientes', mostrarClientes);

// Muestra un cliente en especifico (ID)
router.get('/clientes/:idCliente', mostrarCliente)

//Actualizar cliente
router.put('/clientes/:idCliente', actualizarCliente);

router.delete('/clientes/:idCliente', eliminarCliente);

/* Productos */

// Crear un nuevo producto
router.post('/productos/', 
subirArchivo,
nuevoProducto);

// Obtener todos los productos
router.get('/productos', mostrarProductos);

// Obtener producto por id (ID)
router.get('/productos/:idProducto', mostrarProducto);

// Actualizar productos
router.put('/productos/:idProducto', 
subirArchivo,
actualizarProducto);

// Eliminar un producto
router.delete('/productos/:idProducto', eliminarProducto);

/* PEDIDOS */

//Agregar nuevos pedidos
router.post('/pedidos', nuevoPedido);

//mostrar pedidos
router.get('/pedidos', mostrarPedidos);

//Obtener Pedido expecificamente (ID)
router.get('/pedidos/:idPedido', mostrarPedido);


export default router;
