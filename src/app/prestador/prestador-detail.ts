import { Servicio } from '../servicio/servicio';
import { HojaDeVida } from './hojaDeVida';
import { Prestador } from './prestador';

/**
* This class represents a prestador of the PrestadorStore. 
* It contains all the information relevant to the prestador.
*/
export class PrestadorDetail extends Prestador {
   
    servicios: Servicio[];

    hojaDeVida: HojaDeVida[];
}
