import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  constructor(
    private clienteService: ClienteService,
    private toastrService: ToastrService,
    private router: Router) { }

  cliente: Cliente;

  cancelCreation(): void {
    this.toastrService.warning('El cliente no se creo', 'Cliente creation');
    this.router.navigate(['/clientes/list']);
  }

  createCliente(): Cliente {
    this.clienteService.createCliente(this.cliente)
      .subscribe(cliente => {
        this.cliente.id = cliente.id;
        this.router.navigate(['/clientes/' + cliente.id]);
      }, err => {
        this.toastrService.error(err, 'Error');
      });
    return this.cliente;
  }

  ngOnInit() {
    this.cliente = new Cliente();
  }

}
