import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacturaDetail } from '../factura-detail';
import { FacturaService } from '../factura.service';

@Component({
  selector: 'app-factura-detail',
  templateUrl: './factura-detail.component.html',
  styleUrls: ['./factura-detail.component.css']
})
export class FacturaDetailComponent implements OnInit {

  
    /**
    * The factura
    */
   facturaDetail: FacturaDetail;
   /**
   * Constructor for the component
   * @param route The route which helps to retrieves the id of the book to be shown
   * @param facturaService The factura's services provider
   * @param toastrService The toastr to show messages to the user
   */
   constructor(
       private route: ActivatedRoute,
       private facturaService: FacturaService
   ) { }

   /**
   * El id del factura que viene en el path get .../facturas/factura_id
   */
   factura_id: number;
   /**
   * The method which obtains the factura whose details we want to show
   */
   getFacturaDetail(): void {
       this.facturaService.getFacturaDetail(this.factura_id)
           .subscribe(facturaDetail => {
               this.facturaDetail = facturaDetail;
           });
   }

   /**
   * The method which initializes the component.
   * We need to create the factura so it is never considered as undefined
   */
   ngOnInit() {
       this.factura_id = +this.route.snapshot.paramMap.get('id');
       if (this.factura_id){
       this.facturaDetail = new FacturaDetail();
       this.getFacturaDetail();
       }
   }

}
