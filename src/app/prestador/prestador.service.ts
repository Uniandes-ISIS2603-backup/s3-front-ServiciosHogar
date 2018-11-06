import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';

/**
 * Interface con los datos básicos del prestador
 */
import {Prestador} from './prestador';
import {Habilidad} from './habilidad';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL; //Cambio de ruta, ahora está en la carpeta assets donde están los JSON
const prestadores = 'prestadores'; //JSON donde está la información de los prestadores
const habilidades = '/habilidades';

/**
 * El proveedor del servicio para todo lo relacionado con prestadores
 */
@Injectable(
{
    providedIn: 'root'
})
export class PrestadorService{

    
    /**
     * Constructor del servicio
     * @param http The HttpClient - es necesario para el performance de los requerimientos
     */
    constructor(private http: HttpClient){}
    
    /**
     * Retorna un objeto Observable que contiene una lista de prestadores recuperados del API
     * @returns La lista de prestadores en tiempo real
     */
    getPrestadores(): Observable<Prestador[]> {
        return this.http.get<Prestador[]>(API_URL + prestadores);
    }
    
    /**
     * Retorna la información de un prestador en HomeServices dado el id
     * @param prestadorId El identificador del prestador
     * @returns El prestador 
     */
    getPrestador(prestadorId): Observable<Prestador>{
        return this.http.get<Prestador>(API_URL + prestadores + '/' + prestadorId);
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
     * Crea un nuevo prestador
     * @param prestador El nuevo prestador
     * @returns El prestador con el nuevo identifcador si fue creado, falso de lo contrario
     */
    createPrestador(prestador): Observable<Prestador> {
        return this.http.post<Prestador>(API_URL + prestadores, prestador);
    }
    
    /**
     * Crea una habilidad
     * @param habilidad La habilidad
     * @returns True si la habilidad fue creada, falso de lo contrario
     */
    postHabilidad(habilidad): Observable<boolean> {
        return this.http.post<boolean>(API_URL + prestadores + habilidades, habilidad);
    }
}
