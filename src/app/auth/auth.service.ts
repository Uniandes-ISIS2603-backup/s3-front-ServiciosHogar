import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxRolesService, NgxPermissionsService } from 'ngx-permissions'
import { ClienteListComponent } from '../cliente/cliente-list/cliente-list.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { Cliente } from '../cliente/cliente';
import { ClienteService } from '../cliente/cliente.service';

/**
 * The service provider for everything related to authentication
 */
@Injectable()
export class AuthService {
    
    clienteList: ClienteListComponent;
    logInComp : AuthLoginComponent;
    

    /**
     * Constructor of the service
     * @param router Angular's Router to redirect the user on login or logout
     * @param roleService NgxRolesService to manage authentication roles
     * @param permissionsService NgxPermissionsService to manage authentication permissions
     */
    constructor(private router: Router, private roleService: NgxRolesService, private permissionsService: NgxPermissionsService) { }

    start(): void {
        
        this.permissionsService.flushPermissions();
        this.roleService.flushRoles();
        this.permissionsService.loadPermissions(['edit_solicitud_permission', 'delete_solicitud_permission', 'leave_solicitud']);
        const role = localStorage.getItem('role');
        this.setGuestRole();
        // this.logInComp.ngOnInit();
    }



    setGuestRole(): void {
        this.roleService.flushRoles();
        this.roleService.addRole('GUEST', ['']);
    }

    setClienteRole(): void {
        const role = localStorage.getItem('role');
        if (role!=='ADMIN') {
            this.roleService.flushRoles();
            this.roleService.addRole('CLIENTE', ['']);
            localStorage.setItem('role', 'CLIENTE');
        }
    }

    setPrestadorRole(): void {
        const role = localStorage.getItem('role');
        if (role!=='ADMIN') {
            this.roleService.flushRoles();
            this.roleService.addRole('PRESTADOR', ['']);
            localStorage.setItem('role', 'PRESTADOR');
        }
    }

    setAdministradorRole(): void {
        this.roleService.flushRoles();
        this.roleService.addRole('ADMIN', ['']);
        localStorage.setItem('role', 'ADMIN');
    }


    printRole(): void {
        console.log(this.roleService.getRoles());
    }

    /**
     * Logs the user in with the desired role
     * @param role The desired role to set to the user
     */
    login(role): void {
        this.printRole();
        if (role === 'ADMIN') {
            this.setAdministradorRole();
            this.router.navigateByUrl('/prestadores/list');
        } else if (role === 'CLIENTE') {
            
           
            console.log("ENTROOO "+ this.logInComp);
            // if(this.validarCliente(this.logInComp.user) )
            // {
            this.setClienteRole()
            this.router.navigateByUrl('/clientes/3');
            // }
        } else if (role === 'PRESTADOR') {
            this.setPrestadorRole()
            this.router.navigateByUrl('/prestadores/1');
        }

    }

    correoClientes(): String[]{
        let clientesNombres: String[];
        
        for(let cliente of this.clienteList.clientes){
            clientesNombres.push(cliente.correo);
        }
        return clientesNombres;
    }

    clientes(): Cliente[]{
        let clientes: Cliente[];
        
        for(let cliente of this.clienteList.clientes){
            clientes.push(cliente);
        }
        return clientes;
    }

    existeCliente(user): boolean {
        console.log("exisitiendo");
       if( this.correoClientes().includes(user.correo)){
       console.log("EXISTE");
       return true;}
       else{
           console.log("PAILAAA");
           return false;
       }
    }

    validarCliente(user): boolean {
        console.log("esta validando");
        if(this.existeCliente(user)){
            let clientesL = this.clientes();
            let cliente = clientesL.find(user);
            if(cliente.correo==user.correo && cliente.contrasena==user.password){
                return true;
            }
        }
        return false;
    }

    /**
     * Logs the user out
     */
    logout(): void {
        this.roleService.flushRoles();
        this.setGuestRole();
        localStorage.removeItem('role');
        this.router.navigateByUrl('/');
    }
}