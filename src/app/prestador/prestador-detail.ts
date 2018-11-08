import { Prestador } from './prestador';
import { Habilidad } from './habilidad';

/**
 * Esta clase representa un prestador de HomeServices
 * Contiene toda la información relevante del prestador
 */
export class PrestadorDetail extends Prestador
{
    habilities: Habilidad[];
}


