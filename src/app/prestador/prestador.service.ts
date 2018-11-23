import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Prestador } from './prestador';
import { PrestadorDetail } from './prestador-detail';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const prestadores = '/prestadores';


/**
* The service provider for everything related to prestadores
*/
@Injectable()
export class PrestadorService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }

    /**
    * Returns the Observable object containing the list of prestadores retrieved from the API
    * @returns The list of books in real time
    */
    getPrestadores(): Observable<Prestador[]> {
        return this.http.get<Prestador[]>(API_URL + prestadores);
    }

    /**
    * Returns the Observable object containing the prestador retrieved from the API
    * @returns The prestador
    */
    getPrestadorDetail(prestadorId): Observable<PrestadorDetail> {
        return this.http.get<PrestadorDetail>(API_URL + prestadores + '/' + prestadorId);
    }
    
    /**
    * Creates an prestador
    * @param prestador The prestador which will be created
    * @returns The confirmation of the prestador's creation
    */
    createPrestador(prestador): Observable<Prestador> {
        return this.http.post<Prestador>(API_URL + prestadores, prestador);
    }
    
    /**
    * Updates an prestador
    * @param prestador The prestador which will be update
    * @returns The confirmation of the prestador's update
    */
    updatePrestador(prestador): Observable<PrestadorDetail> {
        return this.http.put<PrestadorDetail>(API_URL + prestadores + '/' + prestador.id, prestador);
    }
}
