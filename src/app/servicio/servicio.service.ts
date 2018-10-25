import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

//Se importa la interface con los datos del servicio.
import {Servicio} from './servicio';

//Constantes
const API_URL = "../../assets/"; //Cambio de ruta, ahora está en la carpeta assets donde están los JSON
const servicios = '/servicios.json'; //JSON donde está la información de los prestadores


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  /**
   * Constructor del servicio
   * @param http The HttpClient - es necesario para el performance de los requerimientos
   */
  constructor(private http: HttpClient){}
  
  /**
   * Devuelve un objeto Observable con un arraglo de los prestadores recuperados del API.
   * @returns Lista con los servicios en tiempo real.
   */
  getServicios(): Observable<Servicio[]>
  {
      return this.http.get<Servicio[]>(API_URL + servicios)
  }
}
