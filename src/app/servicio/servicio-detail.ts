import { Servicio } from './servicio';
import { Prestador } from '../prestador/prestador';
/**
* This class represents an servicioDetail of the PrestadorStore. 
* It contains all the information relevant to the servicio.
*/
export class ServicioDetail extends Servicio {


    /**
     * The servicio's prestadores
     */
    prestadores: Prestador[];
}