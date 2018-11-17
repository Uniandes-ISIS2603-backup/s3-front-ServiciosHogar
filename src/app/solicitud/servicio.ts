import {Solicitud} from './solicitud';
export class Servicio {
    /**
    * The servicio's id
    */
    id: number;

    /**
     * The servicio's descripcion
     */
    descripcion: string;

    /**
     * The servicio's requerimientos
     */
    requerimientos: string;

    solicitud: Solicitud;
}
