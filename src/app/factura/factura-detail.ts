import { Factura } from './factura';
import { Solicitud } from '../solicitud/solicitud';

/**
* This class represents a cliente of the ServiciosHogar. 
* It contains all the information relevant to the cliente.
*/
export class FacturaDetail extends Factura {
   
    solicitudes: Solicitud[];
}