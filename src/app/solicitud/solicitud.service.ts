import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Solicitud} from './solicitud';
import {Servicio} from './servicio';


import {environment} from '../../environments/environment';
const API_URL = environment.apiURL;
const solicitudes = 'clientes/7/solicitudes';
const servicios = '/servicios';


/**
* The service provider for everything related to solicitudes
*/
@Injectable()
export class SolicitudService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) {}

    /**
    * Returns the Observable object containing the list of solicitudes retrieved from the API
    * @returns The list of solicitudes in real time
    */
    getSolicitudes(): Observable<Solicitud[]> {
        return this.http.get<Solicitud[]>(API_URL + solicitudes);
    }

    /**
    * Creates a new solicitud
    * @param solicitud The new solicitud
    * @returns The solicitud with its new id if it was created, false if it wasn't
    */
    createSolicitud(solicitud): Observable<Servicio> {
        console.log(solicitud);
        console.log(API_URL + solicitudes, solicitud);
        return this.http.post<Servicio>(API_URL + solicitudes, solicitud);
    }

    /**
    * Returns the Observable object with the details of an author retrieved from the API
    * @returns The author details
    */
    getSolicitudDetail(solicitudId): Observable<Servicio> {
        return this.http.get<Servicio>(API_URL + solicitudes + '/' + solicitudId);
    }

    /**
    * Creates a servicio
    * @param servicio The servicio
    * @returns True if the servicio was posted, false otherwise
    */
    createServicio(solicitudId, servicio): Observable<Servicio> {
        return this.http.post<Servicio>(API_URL + solicitudes + '/' + solicitudId + servicios, servicio);
    }

    /**
        * Updates a new solicitud
        * @param solicitud The updated solicitud
        * @returns The updated solicitud
        */
    updateSolicitud(solicitud): Observable<Servicio> {
        console.log(API_URL + solicitudes + '/' + solicitud.id, solicitud);
        return this.http.put<Servicio>(API_URL + solicitudes + '/' + solicitud.id, solicitud);
    }
}
