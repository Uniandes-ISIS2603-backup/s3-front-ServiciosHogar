import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Servicio } from './servicio';
import { ServicioDetail } from './servicio-detail';
import { Calificacion } from './calificacion';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const servicios = 'servicios';
const calificacion = '/calificacion';


/**
* The service provider for everything related to servicios
*/
@Injectable()
export class ServicioService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }

    /**
    * Returns the Observable object containing the list of servicios retrieved from the API
    * @returns The list of prestadores in real time
    */
    getServicios(): Observable<Servicio[]> {
        return this.http.get<Servicio[]>(API_URL + servicios);
    }

    /**
    * Returns the Observable object containing the servicio retrieved from the API
    * @returns The servicio
    */
    getServicioDetail(servicioId): Observable<ServicioDetail> {
        return this.http.get<ServicioDetail>(API_URL + servicios + '/' + servicioId);
    }

    /**
    * Creates a calificacion
    * @param calificacion The calificacion
    * @returns True if the calificacion was posted, false otherwise
    */
    createCalificacion(servicioId, calificacion): Observable<Calificacion> {
        return this.http.post<Calificacion>(API_URL + servicios + '/' + servicioId + calificacion, calificacion);
    }

    /**
    * Creates an servicio
    * @param servicio The servicio which will be created
    * @returns The confirmation of the servicio's creation
    */
    createServicio(servicio): Observable<Servicio> {
        return this.http.post<Servicio>(API_URL + servicios, servicio);
    }

    /**
    * Updates an servicio
    * @param servicio The servicio which will be update
    * @returns The confirmation of the servicio's update
    */
    updateServicio(servicio): Observable<ServicioDetail> {
        return this.http.put<ServicioDetail>(API_URL + servicios + '/' + servicio.id, servicio);
    }
}
