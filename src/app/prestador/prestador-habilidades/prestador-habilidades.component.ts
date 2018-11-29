import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { Habilidad } from '../habilidad';
import { PrestadorService } from '../prestador.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';

@Component({
  selector: 'app-prestador-habilidades',
  templateUrl: './prestador-habilidades.component.html',
  styleUrls: ['./prestador-habilidades.component.css']
})
export class PrestadorHabilidadesComponent implements OnInit {

    /**
    * The component's constructor
    * @param prestadorService The prestador's service
    * @param route The route element which helps to obtain the prestador's id
    * @param toastrService The toastr to show messages to the user
    */
   constructor(
    private prestadorService: PrestadorService,
    private route: ActivatedRoute,        
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService,
    private modalDialogService: ModalDialogService
) { }
    /**
     * La lista de habilidades del prestador que se va a desplegar
     */
    @Input() prestadorHabilidades : Habilidad [];

    @Input() prestador_id : string;

    /**
    * Shows or hides the edition of an author
    */
    showEdit: boolean;

    /**
     * the author that the user views.
     */
    selectedHabilidad: Habilidad;

    habilidad_id: number;
     
    /**
     * La función llamada cuando una habilidad es posteada para actualizar la lista de habilidades
     */
    updateHabilidades(habilidades:Habilidad[]): void {
        this.prestadorHabilidades = habilidades;
        
    }

     /**
    * Shows the author
    */
   onSelected(habilidad_id: number): void {
    this.showEdit = false;
    this.habilidad_id = habilidad_id;
    this.selectedHabilidad = new Habilidad();
    this.getHabilidad();
    }

    getHabilidad(): void {
        this.prestadorService.getHabilidad(this.prestador_id, this.habilidad_id)
            .subscribe(selectedHabilidad => {
                this.selectedHabilidad = selectedHabilidad
            });
    }


    showHideEdit(author_id: number): void {
        if (this.showEdit == false) {
            this.showEdit = true;
            this.habilidad_id = author_id;
            this.getHabilidad();
        }
        else {
            this.showEdit = false;
        }
    }
    /**
    * Deletes an author
    */
   deleteHabilidad(habilidadId): void {
    this.modalDialogService.openDialog(this.viewRef, {
        title: 'Delete an author',
        childComponent: SimpleModalComponent,
        data: {text: 'Está seguro de que desea eliminar esta habilidad?'},
        actionButtons: [
            {
                text: 'Yes',
                buttonClass: 'btn btn-danger',
                onAction: () => {
                    this.prestadorService.deleteHabilidad(this.prestador_id, habilidadId).subscribe(() => {
                        this.toastrService.error("The habilidad was successfully deleted", "Habilidad deleted");
                        this.ngOnInit();
                    }, err => {
                        this.toastrService.error(err, "Error");
                    });
                    return true;
                }
            },
            {text: 'No', onAction: () => true}
        ]
    });
}

    getHabilidades(): void {
        this.prestadorService.getHabilidades(this.prestador_id)
            .subscribe(habilities => {
                this.prestadorHabilidades = habilities;
            });
    }

    
    /**
     * Método que inicializa el componente
     */
    ngOnInit(){        
        this.selectedHabilidad = undefined;
        this.habilidad_id = undefined;
        this.getHabilidades();
    }

}
