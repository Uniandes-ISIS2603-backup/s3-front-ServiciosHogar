import { Prestador } from './prestador';
/** 
 * Esta clase representa una Hoja de vida de HomeServices
 * Contiene toda la información básica de la hoja de vida.
 */
export class HojaDeVida{
   
   /**
    * The hojaDeVida's id
    */
   id: number;

    /**
     * El trayectoria de la hoja de vida
     */
    trayectoria: string;

     /**
     * El fecha de nacimiento de la hoja de vida
     */
    fechaNacimiento: any;

    /**
     * El email de la hoja de vida
     */
    email: string;
    
    /**
     * El telefono de la hoja de vida
     */
    telefono:number;

    /**
     * La dirección de la hoja de vida
     */
    dirección:number;

    /**
     * La formación de la hoja de vida
     */
    formacion:string;

    /**
     * El prestador de la hoja de vida
     */
    prestador:Prestador;
    
}