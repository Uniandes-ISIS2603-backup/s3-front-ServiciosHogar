import { Solicitud } from './solicitud';
import { Servicio } from '../servicio/servicio';
/**
* This class represents an solicitudDetail of the ServiciosHogar. 
* It contains all the information relevant to the solicitud.
*/
export class SolicitudDetail extends Solicitud {

    /**
     * The solicitud's servicios
     */
    servicios: Servicio[];
}