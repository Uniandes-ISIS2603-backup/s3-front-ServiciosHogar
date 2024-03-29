import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Prestador} from './prestador';
import {PrestadorDetail} from './prestador-detail';
import { HojaDeVida } from './hojaDeVida';

import {environment} from '../../environments/environment';
import { Habilidad } from './habilidad';
const API_URL = environment.apiURL;
const prestadores = '/prestadores';
const hojaDeVida = 'hojaDeVida';
const habilidades = '/habilidades';


/**
* The service provider for everything related to prestadores
*/
@Injectable()
export class PrestadorService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) {}

    /**
    * Returns the Observable object containing the list of prestadores retrieved from the API
    * @returns The list of prestadores in real time
    */
    getPrestadores(): Observable<Prestador[]> {
        console.log("holi");
        return this.http.get<Prestador[]>(API_URL + prestadores);
    }

    /**
    * Creates a new prestador
    * @param prestador The new prestador
    * @returns The prestador with its new id if it was created, false if it wasn't
    */
    createPrestador(prestador): Observable<PrestadorDetail> {
        return this.http.post<PrestadorDetail>(API_URL + prestadores, prestador);
    }

    /**
    * Returns the Observable object with the details of an servicio retrieved from the API
    * @returns The servicio details
    */
    getPrestadorDetail(prestadorId): Observable<PrestadorDetail> {
        return this.http.get<PrestadorDetail>(API_URL + prestadores + '/' + prestadorId);
    }

    /**
        * Updates a new prestador
        * @param prestador The updated prestador
        * @returns The updated prestador
        */
    updatePrestador(prestador): Observable<PrestadorDetail> {
        return this.http.put<PrestadorDetail>(API_URL + prestadores + '/' + prestador.id, prestador);
    }
    
    /**
    * Deletes a prestador
    * @param prestadorId The prestador's id
    * @returns True if the prestador was deleted, false otherwise
    */
    deletePrestador(prestadorId): Observable<PrestadorDetail> {
        return this.http.delete<PrestadorDetail>(API_URL + prestadores + '/' + prestadorId);
    }

    /**
    * Creates an hoja de vida
    * @param hojaDeVida The hoja de vida which will be created
    * @returns The confirmation of the hojaDeVida's creation
    */
   createHojaDeVida(prestadorId, hojaDeVidaA): Observable<HojaDeVida> {
    return this.http.post<HojaDeVida>(API_URL + prestadores + '/' + prestadorId +'/'+ hojaDeVida, hojaDeVidaA);
    }

    /**
     * 
     * @param prestadorId 
     * @param hojaDeVida 
     */
    deleteHojaDeVida(prestadorId): Observable<HojaDeVida> {
        return this.http.delete<HojaDeVida>(API_URL+prestadores+'/'+prestadorId+ '/'+hojaDeVida);
    }

    /**
     * 
     * @param prestadorId 
     * @param hojaDeVidaA 
     */
    updateHojaDeVida(prestadorId, hojaDeVidaA): Observable<HojaDeVida> {
        return this.http.put<HojaDeVida>(API_URL+prestadores+'/'+prestadorId+'/'+hojaDeVida, hojaDeVidaA);
    }

     /**
     * Retorna las habilidades de un  libro dado su identificador
     * @param prestadorId El identificador del prestador
     * @returns La lista de habilidades
     */
    getHabilidades(prestadorId): Observable<Habilidad[]> {
        return this.http.get<Habilidad[]>(API_URL + prestadores + '/' + prestadorId + habilidades);
    }

    /**
    * Crea una habilidad
    * @param habilidad La habilidad
    * @returns True si la habilidad fue creada, falso de lo contrario
    */
    createHabilidad(prestadorId, habilidad): Observable<boolean> {
        return this.http.post<boolean>(API_URL + prestadores + '/'+ prestadorId + habilidades, habilidad);
    }

    updateHabilidad(prestadorId, habilidad, habilidadId): Observable<boolean> {
        return this.http.put<boolean>(API_URL + prestadores + '/'+ prestadorId + habilidades+'/'+habilidadId, habilidad);
    }

    /**
     * 
     * @param prestadorId 
     * @param habilidadId 
     */
    deleteHabilidad(prestadorId, habilidadId): Observable<Habilidad> {
        return this.http.delete<Habilidad>(API_URL + prestadores + '/'+ prestadorId + habilidades+'/'+habilidadId);
    }

    /**
     * 
     * @param prestadorId 
     * @param habilidadId 
     */
    getHabilidad(prestadorId, habilidadId): Observable<Habilidad> {
        return this.http.get<Habilidad>(API_URL + prestadores + '/' + prestadorId + habilidades + '/' + habilidadId);
    }
}
