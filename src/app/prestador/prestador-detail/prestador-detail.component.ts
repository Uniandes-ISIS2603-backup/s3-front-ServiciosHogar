import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    * The prestador whose details we want to show
    */
    prestadorDetail: PrestadorDetail;



    /**
    * The prestador's id retrieved from the address
    */
    prestador_id: number;

    /**
    * The method which retrieves the  of an prestador
    */
    getPrestadorDetail(): void {
        this.prestadorService.getPrestadorDetail(this.prestador_id)
            .subscribe(prestadorDetail => {
                this.prestadorDetail = prestadorDetail
            });
    }

    /**
    * The method which initializes the component
    * We need to initialize the prestador so it is never considered as undefined
    */
    ngOnInit() {
        this.prestador_id = +this.route.snapshot.paramMap.get('id');
        this.prestadorDetail = new PrestadorDetail();
        this.getPrestadorDetail();
    }

}
