import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

<<<<<<< HEAD
import {PrestadorService} from '../prestador.service';
import {Prestador} from '../prestador';
import {PrestadorDetail} from '../prestador-detail';
import {PrestadorHojaDeVidaComponent} from '../prestador-hojaDeVida/prestador-hojaDeVida.component';
import {PrestadorAddHojaDeVidaComponent} from '../prestador-add-hojaDeVida/prestador-add-hojaDeVida.component';
import { Servicio } from 'src/app/servicio/servicio';
=======
import { PrestadorService } from '../prestador.service';
import { Prestador } from '../prestador';
import { PrestadorDetail } from '../prestador-detail';
>>>>>>> origin/Ciclo3

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
        private route: ActivatedRoute
    ) { }

    /**
    * The prestador whose details we want to show
    */
    prestadorDetail: PrestadorDetail;



    /**
    * The prestador's id retrieved from the address
    */
    prestador_id: number;

    /**
<<<<<<< HEAD
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
=======
    * The method which retrieves the  of an prestador
>>>>>>> origin/Ciclo3
    */
    getPrestadorDetail(): void {
        this.prestadorService.getPrestadorDetail(this.prestador_id)
            .subscribe(prestadorDetail => {
<<<<<<< HEAD
                this.prestadorDetail = prestadorDetail;
                this.servicios = prestadorDetail.servicios;
=======
                this.prestadorDetail = prestadorDetail
>>>>>>> origin/Ciclo3
            });
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
        this.getPrestadorDetail();
    }

}
