import { Prestador } from './prestador';
/** 
 * Esta clase representa ua Habilidad de HomeServices
 * Contiene toda la información básica de la habilidad
 */
 export class Habilidad{
     
     /**
      * El id de la habilidad
      */
     id: number;
     
     /**
      * La descripcion de la habilidad
      */
     descripcion: string;
     
     /**
      * El tipo de la habilidad
      */
     tipo: string;
     
    /**
    * El prestador de la habilidad
    */
    prestador: Prestador;

 }


