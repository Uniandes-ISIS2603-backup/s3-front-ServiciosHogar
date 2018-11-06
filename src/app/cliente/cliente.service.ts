import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// Se importa la interface con los datos del cliente.
import { Cliente } from './cliente';

// Constantes
import { environment } from '../../environments/environment';
import { ClienteDetail } from './cliente-detail';
const API_URL = environment.apiURL; // Cambio de ruta, ahora está en la carpeta assets donde están los JSON
const clientes = 'clientes'; // JSON donde está la información de los prestadores


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  /**
    * Constructor del servicio
    * @param http The HttpClient - es necesario para el performance de los requerimientos
    */
  constructor(private http: HttpClient) { }
  /**
     * Devuelve un objeto Observable con un arraglo de los prestadores recuperados del API.
     * @returns Lista con los clientes en tiempo real.
     */
  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(API_URL + clientes);
  }

  getClienteDetail(clienteId): Observable<ClienteDetail> {
    return this.http.get<ClienteDetail>(API_URL + clientes + '/' + clienteId);
    }
}
