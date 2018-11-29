import { Component, OnInit, Input, Output } from '@angular/core';
import { PrestadorService } from '../prestador.service';
import { ToastrService } from 'ngx-toastr';
import { Habilidad } from '../habilidad';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-prestador-edit-habilidad',
  templateUrl: './prestador-edit-habilidad.component.html',
  styleUrls: ['./prestador-edit-habilidad.component.css']
})
export class PrestadorEditHabilidadComponent implements OnInit {

     /**
    * Constructor for the component
    * @param authorService The authors' services provider
    * @param toastrService The toastr to show messages to the user
    */
   constructor(
    private authorService: PrestadorService,
    private toastrService: ToastrService,
) {}

@Input()
prestador_id: string;
/**
* The author id as received from the parent component
*/
@Input() author: Habilidad;

/**
* Updates the information of the author
*/
editHabilidad(): void {
    this.authorService.updateHabilidad(this.prestador_id, this.author, this.author.id)
        .subscribe(() => {
            this.toastrService.success("The habilidad's information was updated", "Habilidad edition");
        });
        window.location.reload();
}

/**
* This function will initialize the component
*/
ngOnInit() {
}

/**
* This function will be called when the user chooses another author to edit
*/
ngOnChanges() {
    this.ngOnInit();
}

}
