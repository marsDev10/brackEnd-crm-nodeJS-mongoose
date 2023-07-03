import { Router } from 'express';

import { 
    nuevoCliente, 
    mostrarClientes, 
    mostrarCliente,
    actualizarCliente, 
    eliminarCliente
} from '../../controllers/clienteController.js';

const router = Router(); 

/* Clientes */ 

// Agregando nuevos clientes via POST
router.post('/', nuevoCliente);

// Obtener todos los clientes
router.get('/', mostrarClientes);

// Muestra un cliente en especifico (ID)
router.get('/:idCliente', mostrarCliente)

//Actualizar cliente
router.put('/:idCliente', actualizarCliente);

router.delete('/:idCliente', eliminarCliente);

export default router;