import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

/**
 * Interface con los datos básicos del prestador
 */
import {Prestador} from './prestador';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL; //Cambio de ruta, ahora está en la carpeta assets donde están los JSON
const prestadores = '/prestadores'; //JSON donde está la información de los prestadores

@Injectable()
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
}
