import {Component, OnInit, OnDestroy, ViewContainerRef, ViewChild} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';

import {PrestadorService} from '../prestador.service';
import {Prestador} from '../prestador';
import {PrestadorDetail} from '../prestador-detail';
import {PrestadorHabilidadComponent} from '../prestador-habilidades/prestador-habilidades.component';
import {PrestadorAddHabilidadComponent} from '../prestador-add-habilidad/prestador-add-habilidad.component';

@Component({
    selector: 'app-prestador-detail',
    templateUrl: './prestador-detail.component.html',
    styleUrls: ['./prestador-detail.component.css']
})
export class PrestadorDetailComponent implements OnInit, OnDestroy {
    /**
     * El constructor del componente
     * @param prestadorService El servicio prestador que se comunica con el API
     * @param route The route which helps to retrieves the id of the book to be shown
    * @param router The router which is needed to know when the component needs to reload
    * @param toastrService The toastr to show messages to the user
    * @param modalDialogService The popup provider
    * @param viewRef The container for the popup 
     */
    constructor(
        private prestadorService: PrestadorService,
        private route: ActivatedRoute,
        private router: Router) {
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.ngOnInit();
            }
        });
    }

    /**
     * El id del prestador retornado de la dirección
     */
    prestador_id: number;

    /**
     * El prestador del que se van a mostrar los detalles
     */
    prestadorDetail: PrestadorDetail;

    /**
     * Los otros prestadores mostrados en la barra lateral
     */
    otros_prestadores: Prestador[];

    /**
     * La subscribción que ayuda a saber cuando un nuevo libros necesita ser cargado
     */
    navigationSubscription;
    
    /**
     * El niño PrestadorHabilidadComponent
     */
    @ViewChild(PrestadorHabilidadComponent) habilidadListComponent: PrestadorHabilidadComponent;
    
    @ViewChild(PrestadorAddHabilidadComponent) habilidadAddComponent: PrestadorAddHabilidadComponent;
    
    toggleHabilidades(): void {
        if (this.habilidadAddComponent.isCollapsed == false) {
            this.habilidadAddComponent.isCollapsed = true;
        }
        this.habilidadListComponent.isCollapsed = !this.habilidadListComponent.isCollapsed;
    }
        toggleCreateHabilidad(): void {
            if (this.habilidadListComponent.isCollapsed == false) {
                this.habilidadListComponent.isCollapsed = true;
        }
            this.habilidadAddComponent.isCollapsed = !this.habilidadAddComponent.isCollapsed;
    }

    /**
     * La función que retorna el detalle del prestador que queremos mostar
     */
    getPrestadorDetail(): void {
        this.prestadorService.getPrestadorDetail(this.prestador_id)
            .subscribe(prestadorDetail => {this.prestadorDetail = prestadorDetail;});
    }
    /**
     * La función que retorna todos los prestadores en HomeServices para mostrarlos en una lista
     */
    getOtherPrestadores(): void {
        this.prestadorService.getPrestadores()
            .subscribe(prestadores => {
                this.otros_prestadores = prestadores;
                this.otros_prestadores = this.otros_prestadores.filter(prestador => prestador.id !== this.prestador_id);
            });
    }

        /**
     * The function called when a review is posted, so that the child component can refresh the list
     */
    updateHabilidades(): void {
        this.getPrestadorDetail();
        this.habilidadListComponent.updateHabilidades(this.prestadorDetail.habilities);
        this.habilidadListComponent.isCollapsed = false;
        this.habilidadAddComponent.isCollapsed = true;
    }

    ngOnInit() {
        this.prestador_id = + this.route.snapshot.paramMap.get('id');
        this.prestadorDetail = new PrestadorDetail();
        this.otros_prestadores = [];
        this.getPrestadorDetail();
        this.getOtherPrestadores();
    }

    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
}


