import { Factura } from '../factura/factura';
import { Cliente } from '../cliente/cliente';
export class Solicitud {
    /**
    * The solicitud's id
    */
    id: number;

    /**
    * The solicitud's fecha
    */
   fecha: any;

    /**
    * The solicitud's direccion
    */
   direccion: string;

   /**
    * The solicitud's factura
    */
   factura: Factura;

   /**
    * The cliente of the tarjeta
    */
   cliente: Cliente;

}
