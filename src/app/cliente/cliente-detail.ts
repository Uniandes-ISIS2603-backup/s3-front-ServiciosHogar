import { Solicitud } from '../solicitud/solicitud';
import {Cliente} from '../cliente/cliente';

export class ClienteDetail extends Cliente
{
    solicitudes: Solicitud[];
}