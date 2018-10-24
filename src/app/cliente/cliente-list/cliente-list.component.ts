import { Component, OnInit } from '@angular/core';

//Importar Cliente
import {ClienteService} from '../cliente.service';
import {Cliente} from '../cliente';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit 
{
    /**
     * Constructor del componente
     * @param clienteService - El servicio del cliente
     */
    constructor(private clienteService: ClienteService) {}
    
    /**
     * Arreglo de clientes.
     */
    clientes: Cliente[];
    
    /**
     * Le pregunta al servicio para actualizar la lista de clientes.
     */
    getClientes(): void 
    {
        this.clienteService.getClientes()
            .subscribe(clientes => this.clientes = clientes);
    }
    
    /**
     * Inicializará el componente y retornará la lista de clientes del servicio
     * Se llama cuando de crea el componente.
     */
    ngOnInit() 
    {
        this.getClientes();
    }

}
