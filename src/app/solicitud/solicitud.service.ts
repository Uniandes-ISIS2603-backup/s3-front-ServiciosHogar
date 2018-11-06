import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

// Se importa la interface con los datos del solicitud.
import {Solicitud} from './solicitud';

// Constantes
import { environment } from '../../environments/environment';
import { SolicitudDetail } from './solicitud-detail';
const API_URL = environment.apiURL; // Cambio de ruta, ahora está en la carpeta assets donde están los JSON
const solicitudes = 'clientes/7/solicitudes'; // JSON donde está la información de los prestadores


@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  /**
   * Constructor del solicitud
   * @param http The HttpClient - es necesario para el performance de los requerimientos
   */
  constructor(private http: HttpClient){}

  /**
   * Devuelve un objeto Observable con un arraglo de los prestadores recuperados del API.
   * @returns Lista con los solicitudes en tiempo real.
   */
  getSolicitudes(): Observable<Solicitud[]> {
      return this.http.get<Solicitud[]>(API_URL + solicitudes);
  }

  getSolicitudDetail(solicitudId): Observable<SolicitudDetail> {
    return this.http.get<SolicitudDetail>(API_URL + solicitudes + '/' + solicitudId);
}
}
