import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Servicio } from '../../servicio/servicio';
import { PrestadorService } from '../prestador.service';
import { Prestador } from '../prestador';
import { PrestadorDetail } from '../prestador-detail';

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
