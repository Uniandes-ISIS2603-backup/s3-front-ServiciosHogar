import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ServicioService } from '../servicio.service';
import { Servicio } from '../servicio';
import { ServicioDetail } from '../servicio-detail';

@Component({
    selector: 'app-servicio-detail',
    templateUrl: './servicio-detail.component.html',
    styleUrls: ['./servicio-detail.component.css']
})
export class ServicioDetailComponent implements OnInit {

    /**
    * The component's constructor
    * @param servicioService The servicio's service
    * @param route The route element which helps to obtain the servicio's id
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private servicioService: ServicioService,
        private route: ActivatedRoute
    ) { }

    /**
    * The servicio whose details we want to show
    */
    servicioDetail: ServicioDetail;



    /**
    * The servicio's id retrieved from the address
    */
    servicio_id: number;

    /**
    * The method which retrieves the prestadores of an servicio
    */
    getServicioDetail(): void {
        this.servicioService.getServicioDetail(this.servicio_id)
            .subscribe(servicioDetail => {
                this.servicioDetail = servicioDetail
            });
    }

    /**
    * The method which initializes the component
    * We need to initialize the servicio so it is never considered as undefined
    */
    ngOnInit() {
        this.servicio_id = +this.route.snapshot.paramMap.get('id');
        this.servicioDetail = new ServicioDetail();
        this.getServicioDetail();
    }

}
