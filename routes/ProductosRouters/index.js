import { Router } from 'express';
import {
    nuevoProducto, 
    subirArchivo,
    mostrarProductos,
    mostrarProducto,
    actualizarProducto,
    eliminarProducto,
} from '../../controllers/productosController.js';

const router = Router();

/* Productos */

// Crear un nuevo producto
router.post('/', 
subirArchivo,
nuevoProducto);

// Obtener todos los productos
router.get('/', mostrarProductos);

// Obtener producto por id (ID)
router.get('/:idProducto', mostrarProducto);

// Actualizar productos
router.put('/:idProducto', 
subirArchivo,
actualizarProducto);

// Eliminar un producto
router.delete('/:idProducto', eliminarProducto);

export default router;