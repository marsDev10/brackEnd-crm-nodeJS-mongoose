import { Router } from 'express';

import {
    mostrarPedido,
    mostrarPedidos,
    nuevoPedido,
    actualizarPedido, 
    eliminarPedido
} from '../../controllers/pedidosController.js';

const router = Router(); 

/* PEDIDOS */

// Agregar nuevos pedidos
router.post('/', nuevoPedido);

// Mostrar pedidos
router.get('/', mostrarPedidos);

// Obtener Pedido expecificamente (ID)
router.get('/:idPedido', mostrarPedido);

// Actualizar pedido en especifico
router.put('/:idPedido', actualizarPedido)

// Eliminar pedidos
router.delete('/:idPedido', eliminarPedido);

export default router;