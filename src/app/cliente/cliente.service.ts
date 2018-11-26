import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Cliente} from './cliente';
import {ClienteDetail} from './cliente-detail';
import {Tarjeta} from './tarjeta';


import {environment} from '../../environments/environment';
const API_URL = environment.apiURL;
const clientes = 'clientes';
const tarjetas = '/tarjetas';


/**
* The service provider for everything related to clientes
*/
@Injectable()
export class ClienteService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) {}

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
    * Creates a tarjeta
    * @param tarjeta The tarjeta
    * @returns True if the tarjeta was posted, false otherwise
    */
    createTarjeta(clienteId, tarjeta): Observable<Tarjeta> {
        return this.http.post<Tarjeta>(API_URL + clientes + '/' + clienteId + tarjetas, tarjeta);
    }

    /**
        * Updates a new cliente
        * @param cliente The updated cliente
        * @returns The updated cliente
        */
    updateCliente(cliente): Observable<ClienteDetail> {
        return this.http.put<ClienteDetail>(API_URL + clientes + '/' + cliente.id, cliente);
    }
}
