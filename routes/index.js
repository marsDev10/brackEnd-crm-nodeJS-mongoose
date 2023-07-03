import { Router } from 'express';

// Routes
import clientesRouters from './ClientesRouters/index.js';
import productosRouters from './ProductosRouters/index.js';
import pedidosRouters from './PedidosRouters/index.js';

const router = Router();

/* Clientes */
router.use('/clientes', clientesRouters);

/* Productos */ 
router.use('/productos', productosRouters);

/* Pedidos */
router.use('/pedidos', pedidosRouters);

export default router;