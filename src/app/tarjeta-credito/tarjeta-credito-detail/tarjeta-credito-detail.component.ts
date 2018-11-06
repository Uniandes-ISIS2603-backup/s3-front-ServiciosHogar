import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TarjetaCreditoDetail } from '../tarjeta-credito-detail';
import { TarjetaCreditoService } from '../tarjeta-credito.service';

@Component({
  selector: 'app-tarjeta-credito-detail',
  templateUrl: './tarjeta-credito-detail.component.html',
  styleUrls: ['./tarjeta-credito-detail.component.css']
})
export class TarjetaCreditoDetailComponent implements OnInit {

   /**
    * The factura
    */
   tarjetaDetail: TarjetaCreditoDetail;
   /**
   * Constructor for the component
   * @param route The route which helps to retrieves the id of the book to be shown
   * @param tarjetaService The factura's services provider
   * @param toastrService The toastr to show messages to the user
   */
   constructor(
       private route: ActivatedRoute,
       private tarjetaService: TarjetaCreditoService
   ) { }

   /**
   * El id del factura que viene en el path get .../facturas/factura_id
   */
   tarjeta_id: number;
   /**
   * The method which obtains the factura whose details we want to show
   */
   getTarjetaDetail(): void {
       this.tarjetaService.getTarjetaDetail(this.tarjeta_id)
           .subscribe(tarjetaDetail => {
               this.tarjetaDetail = tarjetaDetail;
           });
   }

   /**
   * The method which initializes the component.
   * We need to create the factura so it is never considered as undefined
   */
   ngOnInit() {
       this.tarjeta_id = +this.route.snapshot.paramMap.get('id');
       if (this.tarjeta_id){
       this.tarjetaDetail = new TarjetaCreditoDetail();
       this.getTarjetaDetail();
       }
   }

}
