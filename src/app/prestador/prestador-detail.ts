import { Servicio } from '../servicio/servicio';
import { Prestador } from './prestador';
import { HojaDeVida } from './hojaDeVida';

/**
* This class represents a prestador of the PrestadorStore. 
* It contains all the information relevant to the prestador.
*/
export class PrestadorDetail extends Prestador {
   
    servicios: Servicio[];
    
    hojaDeVida: HojaDeVida[];
}
