import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Servicio } from '../../servicio/servicio';
import { PrestadorService } from '../prestador.service';
import { Prestador } from '../prestador';
import { PrestadorDetail } from '../prestador-detail';
import { PrestadorHojaDeVidaComponent } from '../prestador-hojaDeVida/prestador-hojaDeVida.component';
import { PrestadorAddHojaDeVidaComponent} from '../prestador-add-hojaDeVida/prestador-add-hojaDeVida.component';
import { HojaDeVida } from '../hojaDeVida';
import { ToastrService } from 'ngx-toastr';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { PrestadorAddHabilidadComponent } from '../prestador-add-habilidad/prestador-add-habilidad.component';
import { Habilidad } from '../habilidad';

@Component({
    selector: 'app-prestador-detail',
    templateUrl: './prestador-detail.component.html',
    styleUrls: ['./prestador-detail.component.css']
})
export class PrestadorDetailComponent implements OnInit {

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
    * The prestador's id retrieved from the address
    */
    prestador_id: number;

    /**
    * The prestador whose details are shown
    */
    prestadorDetail: PrestadorDetail;

    /**
    * The other prestadores shown in the sidebar
    */
    other_prestadores: Prestador[];

    /**
     * The prestadors services
     */
    servicios: Servicio[];

    /**
     * 
     */
    hojaDeVida: HojaDeVida;

    /**
     * 
     */
    habilities: Habilidad[];

    /**
     * Shows or hides the edit component.
     */
    showEdit: boolean;

    /**
     * Shows or hides the add hoja de vida component
     */
    showAdd: boolean;

    /**
     * Shows or hides the edit hoja de vida component
     */
    showEditH: boolean;

    showAddH: boolean;

    /**
    * The suscription which helps to know when a new prestador
    * needs to be loaded
    */
    navigationSubscription;

    /**
     * The child BookReviewListComponent
     */
    @ViewChild(PrestadorHojaDeVidaComponent) hojaDeVidaListComponent: PrestadorHojaDeVidaComponent;

    /**
     * The child BookReviewListComponent
     */
    @ViewChild(PrestadorAddHojaDeVidaComponent) hojaDeVidaAddComponent: PrestadorAddHojaDeVidaComponent;

    /**
     * El niño PrestadorAddHabilidadComponent
     */
    @ViewChild(PrestadorAddHabilidadComponent) habilidadAddComponent: PrestadorAddHabilidadComponent;

    toggleCreateHojaDeVida(): void {
        if(this.showAdd == true)
        {
            this.showAdd = false;
        }
        else
        {
            this.showAdd = true;
        }
    }

    toggleCreateHabilidad(): void {
        if(this.showAddH == false)
        {
            this.showAddH = true;
        }
        else {
            this.showAddH = false;
        }
    }

    /**
    * The method which re
    * The method which retrieves the  of an prestador
    */
    getPrestadorDetail(): void {
        this.prestadorService.getPrestadorDetail(this.prestador_id)
            .subscribe(prestadorDetail => {
                this.prestadorDetail = prestadorDetail;
                this.servicios = prestadorDetail.servicios;
                this.hojaDeVida = prestadorDetail.hojaDeVida;
                this.habilities = prestadorDetail.habilities;
            });
    }

    /**
    * Shows or hides the create component
    */
   showHideEdit(editorial_id: number): void {
        if (!this.showEdit || (this.showEdit)) {
            this.showEdit = true;
        }
        else {
            this.showEdit = false;
        }
    }

    updatePrestador(): void {
        this.showEdit = false;
    }

    deleteHojaDeVida(): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Delete a hoja de vida',
            childComponent: SimpleModalComponent,
            data: {text: 'Está seguro de que desea eliminar su hoja de vida?'},
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.prestadorService.deleteHojaDeVida(this.prestador_id).subscribe(book => {
                            this.toastrService.success("The hoja de vida  ", "Hoja de vida deleted");
                            window.location.reload();
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

    editHojaDeVida(): void {
        if (this.showEditH == false) {
            this.showEditH = true;
        }
        else {
            this.showEditH = false;
        }
    }

    /**
    * The method which initializes the component
    * We need to initialize the prestador so it is never considered as undefined
    */
    ngOnInit() {
        this.prestador_id = +this.route.snapshot.paramMap.get('id');
        this.prestadorDetail = new PrestadorDetail();
        this.other_prestadores = [];
        this.servicios = [];
        this.hojaDeVida = new HojaDeVida();
        this.habilities = [];
        this.showEdit = false;
        this.showAdd = false;
        this.showEditH = false;
        this.showAddH = false;
        this.getPrestadorDetail();
    }

}
