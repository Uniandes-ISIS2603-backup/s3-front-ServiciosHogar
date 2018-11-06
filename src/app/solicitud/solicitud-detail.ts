import { Servicio } from '../servicio/servicio';
import { Solicitud } from './solicitud';

export class SolicitudDetail extends Solicitud {
    servicios: Servicio[];
}