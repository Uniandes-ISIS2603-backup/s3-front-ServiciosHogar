
import { Servicio } from './servicio';
import { Solicitud } from './solicitud';

export class SolicitudDetail extends Solicitud {
    servicios: Servicio[];
}