import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {NgxRolesService, NgxPermissionsService} from 'ngx-permissions'
import 'rxjs/add/operator/catch';

/**
 * The service provider for everything related to authentication
 */
@Injectable()
export class AuthService {

    /**
     * Constructor of the service
     * @param router Angular's Router to redirect the user on login or logout
     * @param roleService NgxRolesService to manage authentication roles
     * @param permissionsService NgxPermissionsService to manage authentication permissions
     */
    constructor (private router: Router, private roleService: NgxRolesService, private permissionsService: NgxPermissionsService) { }

    start (): void {
        this.permissionsService.flushPermissions();
        this.roleService.flushRoles();
        this.permissionsService.loadPermissions(['edit_solicitud_permission', 'delete_solicitud_permission', 'leave_solicitud']);
        const role = localStorage.getItem('role');
        if (!role) {
            this.setGuestRole();
        } else if (role === 'ADMIN') {
            this.setAdministradorRole();
        } else if(role == 'CLIENTE') {
            this.setClienteRole();
        } else if(role == 'PRESTADOR') {
            this.setPrestadorRole();
        }
       

    }

    setGuestRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('GUEST', ['']);
    }

    setClienteRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('CLIENTE', ['']);
        localStorage.setItem('role', 'CLIENTE');
    }

    setPrestadorRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('PRESTADOR', ['']);
        localStorage.setItem('role', 'PRESTADOR');
    }
    
    setAdministradorRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('ADMIN', ['']);
        localStorage.setItem('role', 'ADMIN');
    }


    printRole (): void {
        console.log(this.roleService.getRoles());
    }

    /**
     * Logs the user in with the desired role
     * @param role The desired role to set to the user
     */
    login (role): void {
        if (role === 'ADMIN') {
            this.setAdministradorRole();
            this.router.navigateByUrl('/prestadores/list');
        } else if(role === 'CLIENTE'){
            this.setClienteRole()
            this.router.navigateByUrl('/solicitudes/add');
        } else if(role === 'PRESTADOR') {
            this.setPrestadorRole()
            this.router.navigateByUrl('/servicios/add');
        }
       
    }

    /**
     * Logs the user out
     */
    logout (): void {
        this.roleService.flushRoles();
        this.setGuestRole();
        localStorage.removeItem('role');
        this.router.navigateByUrl('/');
    }
}