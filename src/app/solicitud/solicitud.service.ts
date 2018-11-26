import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Solicitud } from './solicitud';
import { SolicitudDetail } from './solicitud-detail';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const solicitudes = 'clientes/7/solicitudes';


/**
* The service provider for everything related to solicitudes
*/
@Injectable()
export class SolicitudService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }

    /**
    * Returns the Observable object containing the list of solicitudes retrieved from the API
    * @returns The list of servicios in real time
    */
    getSolicitudes(): Observable<Solicitud[]> {
        return this.http.get<Solicitud[]>(API_URL + solicitudes);
    }

    /**
    * Returns the Observable object containing the solicitud retrieved from the API
    * @returns The solicitud
    */
    getSolicitudDetail(solicitudId): Observable<SolicitudDetail> {
        return this.http.get<SolicitudDetail>(API_URL + solicitudes + '/' + solicitudId);
    }
    
    /**
    * Creates an solicitud
    * @param solicitud The solicitud which will be created
    * @returns The confirmation of the solicitud's creation
    */
    createSolicitud(solicitud): Observable<Solicitud> {
        return this.http.post<Solicitud>(API_URL + solicitudes, solicitud);
    }
    
    /**
    * Updates an solicitud
    * @param solicitud The solicitud which will be update
    * @returns The confirmation of the solicitud's update
    */
    updateSolicitud(solicitud): Observable<SolicitudDetail> {
        return this.http.put<SolicitudDetail>(API_URL + solicitudes + '/' + solicitud.id, solicitud);
    }
}
