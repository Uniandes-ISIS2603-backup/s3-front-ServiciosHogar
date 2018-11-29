import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Servicio } from 'src/app/servicio/servicio';
import { PrestadorService } from '../prestador.service';
import { Prestador } from '../prestador';
import { PrestadorDetail } from '../prestador-detail';
import { PrestadorHojaDeVidaComponent } from '../prestador-hojaDeVida/prestador-hojaDeVida.component';
import { PrestadorAddHojaDeVidaComponent} from '../prestador-add-hojaDeVida/prestador-add-hojaDeVida.component';

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
     * Shows or hides the edit component.
     */
    showEdit: boolean;

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

    toggleHpjaDeVida(): void {
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
    * The method which re
    * The method which retrieves the  of an prestador
    */
    getPrestadorDetail(): void {
        this.prestadorService.getPrestadorDetail(this.prestador_id)
            .subscribe(prestadorDetail => {
                this.prestadorDetail = prestadorDetail;
                this.servicios = prestadorDetail.servicios;
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
    * The method which initializes the component
    * We need to initialize the prestador so it is never considered as undefined
    */
    ngOnInit() {
        this.prestador_id = +this.route.snapshot.paramMap.get('id');
        this.prestadorDetail = new PrestadorDetail();
        this.other_prestadores = [];
        this.servicios = [];
        this.showEdit = false;
        this.getPrestadorDetail();
    }

}
