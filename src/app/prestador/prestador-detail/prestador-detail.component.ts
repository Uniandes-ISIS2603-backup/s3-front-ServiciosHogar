import {Component, OnInit, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

import {PrestadorService} from '../prestador.service';
import {Prestador} from '../prestador';
import {PrestadorDetail} from '../prestador-detail';
import {PrestadorHojaDeVidaComponent} from '../prestador-hojaDeVida/prestador-hojaDeVida.component';
import {PrestadorAddHojaDeVidaComponent} from '../prestador-add-hojaDeVida/prestador-add-hojaDeVida.component';
import { Servicio } from 'src/app/servicio/servicio';

@Component({
    selector: 'app-prestador-detail',
    templateUrl: './prestador-detail.component.html',
    styleUrls: ['./prestador-detail.component.css']
})
export class PrestadorDetailComponent implements OnInit, OnDestroy {

    /**
    * The constructor of the component
    * @param prestadorService The prestador service which communicates with the API
    * @param route The route which helps to retrieves the id of the prestador to be shown
    * @param router The router which is needed to know when the component needs to reload
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private prestadorService: PrestadorService,
        private route: ActivatedRoute,
        private modalDialogService: ModalDialogService,
        private router: Router,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService
    ) {
        //This is added so we can refresh the view when one of the prestadores in
        //the "Other prestadores" list is clicked
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.ngOnInit();
            }
        });
    }

    /**
    * The prestador's id retrieved from the path
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
    * The suscription which helps to know when a new prestador
    * needs to be loaded
    */
    navigationSubscription;


    /**
     * The child PrestadorHojaDeVidaListComponent
     */
    @ViewChild(PrestadorHojaDeVidaComponent) hojaDeVidaListComponent: PrestadorHojaDeVidaComponent;

    /**
     * The child PrestadorHojaDeVidaListComponent
     */
    @ViewChild(PrestadorAddHojaDeVidaComponent) hojaDeVidaAddComponent: PrestadorAddHojaDeVidaComponent;

    toggleHojaDeVida(): void {
        if (this.hojaDeVidaAddComponent.isCollapsed == false) {
            this.hojaDeVidaAddComponent.isCollapsed = true;
        }
        this.hojaDeVidaListComponent.isCollapsed = !this.hojaDeVidaListComponent.isCollapsed;
    }

    toggleCreateHojaDeVida(): void {
        if (this.hojaDeVidaListComponent.isCollapsed == false) {
            this.hojaDeVidaListComponent.isCollapsed = true;
        }
        this.hojaDeVidaAddComponent.isCollapsed = !this.hojaDeVidaAddComponent.isCollapsed;
    }


    /**
    * The method which retrieves the details of the prestador that
    * we want to show
    */
    getPrestadorDetail(): void {
        this.prestadorService.getPrestadorDetail(this.prestador_id)
            .subscribe(prestadorDetail => {
                this.prestadorDetail = prestadorDetail;
                this.servicios = prestadorDetail.servicios;
            });
    }

    /**
    * This method retrieves all the prestadores in the Prestadorestore to show them in the list
    */
    getOtherPrestadores(): void {
        this.prestadorService.getPrestadores()
            .subscribe(prestadores => {
                this.other_prestadores = prestadores;
                this.other_prestadores = this.other_prestadores.filter(prestador => prestador.id !== this.prestador_id);
            });
    }

    /**
     * The function called when a hojaDeVida is posted, so that the child component can refresh the list
     */
    updateHojaDeVida(): void {
        this.getPrestadorDetail();
        this.hojaDeVidaListComponent.updateHojaDeVida(this.prestadorDetail.hojaDeVida);
        this.hojaDeVidaListComponent.isCollapsed = false;
        this.hojaDeVidaAddComponent.isCollapsed = true;
    }

    /**
* This function deletes the prestador from the PrestadorStore 
*/
    deletePrestador(): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Delete a prestador',
            childComponent: SimpleModalComponent,
            data: {text: 'Are you sure your want to delete this prestador?'},
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.prestadorService.deletePrestador(this.prestador_id).subscribe(prestador => {
                            this.toastrService.success("The prestador  ", "Prestador deleted");
                            this.router.navigate(['prestadores/list']);
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

    /**
    * The method which initilizes the component
    * We need to initialize the prestador so that
    * they are never considered undefined
    */
    ngOnInit() {
        this.prestador_id = +this.route.snapshot.paramMap.get('id');
        this.prestadorDetail = new PrestadorDetail();
        this.other_prestadores = [];
        this.servicios = [];
        this.getPrestadorDetail();
        this.getOtherPrestadores();
    }

    /**
    * This method helps to refresh the view when we need to load another prestador into it
    * when one of the other prestadores in the list is clicked
    */
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
}
