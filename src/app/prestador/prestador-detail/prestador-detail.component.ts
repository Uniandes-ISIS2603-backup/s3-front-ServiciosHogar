import { Component, OnInit, OnDestroy, ViewContainerRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import {PrestadorService} from '../prestador.service';
import {Prestador} from '../prestador';

@Component({
    selector: 'app-prestador-detail',
    templateUrl: './prestador-detail.component.html',
    styleUrls: ['./prestador-detail.component.css']
})
export class PrestadorDetailComponent implements OnInit, OnDestroy
{
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
        private router: Router){
            this.navigationSubscription = this.router.events.subscribe((e: any) => {
                if(e instanceof NavigationEnd){
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
          prestador: Prestador;
          
          /**
           * Los otros prestadores mostrados en la barra lateral
           */
           otros_prestadores: Prestador[];
           
           /**
            * ELa subscribción que ayuda a saber cuando un nuevo libros necesita ser cargado
            */
            navigationSubscription;
            
            /**
             * La función que retorna el detalle del prestador que queremos mostar
             */
            getPrestador(): void {
                this.prestadorService.getPrestador(this.prestador_id)
                    .subscribe(prestador => {
                        this.prestador = prestador;
                });
            }
            /**
             * La función que retorna todos los prestadores en HomeServices para mostrarlos en una lista
             */
             getAllPrestadores(): void {
                 this.prestadorService.getPrestadores()
                    .subscribe(prestadores => {
                        this.otros_prestadores = prestadores;
                        this.otros_prestadores = this.otros_prestadores.filter(prestador => prestador.id !== this.prestador_id);
                 });
             }
             
             ngOnInit() {
                 this.prestador_id = + this.route.snapshot.paramMap.get('id');
                 this.prestador = new Prestador();
                 this.otros_prestadores = [];
                 this.getPrestador();
                 this.getAllPrestadores();
             }
             
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
}


