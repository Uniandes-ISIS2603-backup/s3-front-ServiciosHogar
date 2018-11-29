import { Cliente } from "./cliente";
export class Tarjeta {
    /**
     * Nombre del titular
     */
    titular: string;

    /**
     * Fecha de vencimiento
     */
    date: any;

    /**
     * Código de seguridad
     */
    code: number;

    /**
     * Número de la tarjeta
     */
    numero: number;

    /**
    * The cliente of the tarjeta
    */
    cliente: Cliente;
}
