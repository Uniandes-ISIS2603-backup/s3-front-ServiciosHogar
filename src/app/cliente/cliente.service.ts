import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Cliente } from './cliente';
import { ClienteDetail } from './cliente-detail';
import { Tarjeta } from './tarjeta';
import { Solicitud } from './solicitud';
import { SolicitudDetail } from './solicitud-detail';


import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const clientes = '/clientes';
const tarjetas = '/tarjetas';
const solicitudes = '/solicitudes';

/**
* The service provider for everything related to clientes
*/
@Injectable()
export class ClienteService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }

    /**
    * Returns the Observable object containing the list of clientes retrieved from the API
    * @returns The list of clientes in real time
    */
    getClientes(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(API_URL + clientes);
    }

    /**
    * Creates a new cliente
    * @param cliente The new cliente
    * @returns The cliente with its new id if it was created, false if it wasn't
    */
    createCliente(cliente): Observable<ClienteDetail> {
        return this.http.post<ClienteDetail>(API_URL + clientes, cliente);
    }

    /**
    * Returns the Observable object with the details of an solicitud retrieved from the API
    * @returns The solicitud details
    */
    getClienteDetail(clienteId): Observable<ClienteDetail> {
        return this.http.get<ClienteDetail>(API_URL + clientes + '/' + clienteId);
    }

    /**
        * Updates a new cliente
        * @param cliente The updated cliente
        * @returns The updated cliente
        */
    updateCliente(cliente): Observable<ClienteDetail> {
        return this.http.put<ClienteDetail>(API_URL + clientes + '/' + cliente.id, cliente);
    }


    /**
    * Deletes a cliente
    * @param clienteId The cliente's id
    * @returns True if the cliente was deleted, false otherwise
    */
    deleteCliente(clienteId): Observable<ClienteDetail> {
        return this.http.delete<ClienteDetail>(API_URL + clientes + '/' + clienteId);
    }

    /**
    * Returns the Observable object containing the solicitud retrieved from the API
    * @returns The solicitud
    */
    getSolicitudDetail(clienteId, solicitudId): Observable<SolicitudDetail> {
        return this.http.get<SolicitudDetail>(API_URL + clientes + '/' + clienteId + solicitudes + '/' + solicitudId);
    }

    /**
    * Creates an solicitud
    * @param solicitud The solicitud which will be created
    * @returns The confirmation of the solicitud's creation
    */
    createSolicitud(clienteId, solicitud): Observable<Solicitud> {
        return this.http.post<Solicitud>(API_URL + clientes + '/' + clienteId + solicitudes, solicitud);
    }

    /**
    * Updates an solicitud
    * @param solicitud The solicitud which will be update
    * @returns The confirmation of the solicitud's update
    */
    updateSolicitud(clienteId, solicitud): Observable<SolicitudDetail> {
        return this.http.put<SolicitudDetail>(API_URL + clientes + '/' + clienteId + solicitudes + '/' + solicitud.id, solicitud);
    }

    /**
    * Deletes a solicitud
    * @param solicitudId The solicitud's id
    * @returns True if the solicitud was deleted, false otherwise
    */
    deleteSolicitud(clienteId, solicitudId): Observable<SolicitudDetail> {
        return this.http.delete<SolicitudDetail>(API_URL + clientes + '/' + clienteId + solicitudes + '/' + solicitudId);
    }

    /**
    * Creates a tarjeta
    * @param tarjeta The tarjeta
    * @returns True if the tarjeta was posted, false otherwise
    */
    createTarjeta(clienteId, tarjeta): Observable<Tarjeta> {
        return this.http.post<Tarjeta>(API_URL + clientes + '/' + clienteId + tarjetas, tarjeta);
    }
}
