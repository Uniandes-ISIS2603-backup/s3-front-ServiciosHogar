import {Servicio} from "./servicio";
export class Calificacion 
{   
    /**
     * El id de la calificacion
     */
    id: number;
    
    /**
     * Comentario de la calificacion.
     */
    comentario: string;
    
    /**
     * Calificacion.
     */
    calificacion: number;

    /**
    * The servicio of the calificacion
    */
    servicio: Servicio;
}
