import { Factura } from '../factura/factura';
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

}
