import { Solicitud } from '../solicitud/solicitud';
import { TarjetaCredito } from './tarjeta-credito';

export class TarjetaCreditoDetail extends TarjetaCredito {
    solicitudes: Solicitud[];
}