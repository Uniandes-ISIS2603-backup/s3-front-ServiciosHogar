import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { PrestadorService } from '../prestador.service';
import { Prestador } from '../prestador';
import { Habilidad } from '../habilidad';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-prestador-add-habilidad',
  templateUrl: './prestador-add-habilidad.component.html',
  styleUrls: ['./prestador-add-habilidad.component.css']
})
export class PrestadorAddHabilidadComponent implements OnInit {

  /**
    * El constructor del componente
    * @param prestadorService El servicio de prestador que se comunica con el API
    * @param toastrService El toastr para mostrar mensajes al usuario
    */
   constructor(
    private prestadorService: PrestadorService,
  ) { }

/**
* El id del prestador
*/
@Input() prestador: Prestador;

/**
* La habilidad a postear
*/
habilidad: Habilidad;

/**
* The Event Emitter que envía una señal cuando una habilidad ha sido posteada
* así la lista de habilidades se refresca
*/
@Output() updateHabilidades = new EventEmitter();

/**
* La función para postear una habilidad
* @param habilidadForm La forma de la habilidad
*/
postHabilidad(habilidadForm: NgForm): Habilidad {
    this.habilidad.prestador = this.prestador;
    this.prestadorService.createHabilidad(this.prestador.id,this.habilidad)
        .subscribe(() => {
            habilidadForm.resetForm();
            window.location.reload();
        });
    return this.habilidad;
}

/**
* La función que inicializa el componente
*/
ngOnInit() {
    this.habilidad = new Habilidad();
}

/**
* La función que nota que el input que define el id del prestador ha cambiado
* Si el prestador ha cambiado, actualizamos la lista de habilidades a mostar
*/
ngOnChanges() {
    this.ngOnInit();
}

}
