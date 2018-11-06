import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteDetail } from '../cliente-detail';
import { ClienteService } from '../cliente.service';


@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit {

    /**
    * The Cliente
    */
   clienteDetail: ClienteDetail;

   constructor(
       private route: ActivatedRoute,
       private clienteService: ClienteService
   ) { }

   /**
   * El id del solicitud que viene en el path get .../solicituds/solicitud_id
   */
   cliente_id: number;
   /**
   * The method which obtains the solicitud whose details we want to show
   */
  getClienteDetail(): void {
       this.clienteService.getClienteDetail(this.cliente_id)
           .subscribe(clienteDetail => {
               this.clienteDetail = clienteDetail;
           });
   }

   /**
   * The method which initializes the component.
   * We need to create the solicitud so it is never considered as undefined
   */
   ngOnInit() 
   {
       this.cliente_id = +this.route.snapshot.paramMap.get('id');
       if (this.cliente_id){
       this.clienteDetail = new ClienteDetail();
       this.getClienteDetail();
    }
  }

}

