import { Cliente } from '../cliente/cliente';
import { Factura } from './factura';

export class FacturaDetail extends Factura {
    clientes: Cliente[];
}