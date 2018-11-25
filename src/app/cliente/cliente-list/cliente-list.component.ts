import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';


import {Cliente} from '../../cliente/cliente';
import {ClienteService} from '../../cliente/cliente.service';
@Component({
    selector: 'app-cliente-list',
    templateUrl: './cliente-list.component.html',
    styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

    /**
    * The list of clientes to display
    */
    @Input() clientes: Cliente[];

    /**
    * The component's constructor
    */
    constructor(private clienteService: ClienteService, private route: ActivatedRoute) {}

    allclientes: string = 'no';
    /**
    * This method retrieves all the clientes in the Servicioshogar to show them in the list
    */
    getClientes(): void {
        this.clienteService.getClientes()
            .subscribe(clientes => {
                this.clientes = clientes;
            });
    }

    /**
    * The method which initializes the component
    */
    ngOnInit() {
        this.route.queryParams
            .filter(params => params.allclientes)
            .subscribe(params => {
                console.log(params);

                this.allclientes = params.allclientes;
                console.log(this.allclientes);
            });
        if (this.allclientes == 'yes') {
            console.log("allclientes");

            this.getClientes();
        }
    }

}
