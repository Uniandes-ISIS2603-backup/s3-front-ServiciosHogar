import { Solicitud } from './solicitud';
import { Servicio } from './servicio';

/**
* This class represents a solicitud of the SolicitudStore.
* It contains all the information relevant to the solicitud.
*/
export class SolicitudDetail extends Solicitud {
    servicios: Servicio[];
}
