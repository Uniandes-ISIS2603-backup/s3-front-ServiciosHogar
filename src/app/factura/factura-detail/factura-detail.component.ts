import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';


import {FacturaService} from '../factura.service';
import {Factura} from '../factura';
import {FacturaDetail} from '../factura-detail';

@Component({
    selector: 'app-factura-detail',
    templateUrl: './factura-detail.component.html',
    styleUrls: ['./factura-detail.component.css']
})
export class FacturaDetailComponent implements OnInit, OnDestroy {

    /**
    * The constructor of the component
    * @param clienteService The factura service which communicates with the API
    * @param route The route which helps to retrieves the id of the factura to be shown
    * @param router The router which is needed to know when the component needs to reload
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private facturaService: FacturaService,
        private route: ActivatedRoute,
        private router: Router,
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
    * The factura's id retrieved from the path
    */
    factura_id: number;

    /**
    * The factura whose details are shown
    */
    facturaDetail: FacturaDetail;
    
    /**
    * The suscription which helps to know when a new prestador
    * needs to be loaded
    */
   navigationSubscription;

    /**
    * The method which retrieves the details of the factura that
    * we want to show
    */
    getFacturaDetail(): void {
        this.facturaService.getFacturaDetail(this.factura_id)
            .subscribe(facturaDetail => {
                this.facturaDetail = facturaDetail;
            });
    }

    /**
    * The method which initilizes the component
    * We need to initialize the cliente and its factura so that
    * they are never considered undefined
    */
    ngOnInit() {
        this.factura_id = +this.route.snapshot.paramMap.get('id');
        this.facturaDetail = new FacturaDetail();
        this.getFacturaDetail();
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
