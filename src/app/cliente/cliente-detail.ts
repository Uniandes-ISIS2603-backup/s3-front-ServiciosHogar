import { Solicitud } from '../solicitud/solicitud';
import { Cliente } from './cliente';
import { Tarjeta } from './tarjeta';

/**
* This class represents a cliente of the ServiciosHogar. 
* It contains all the information relevant to the cliente.
*/
export class ClienteDetail extends Cliente {
   
    solicitudes: Solicitud[];
    
    tarjetas: Tarjeta[];
}
