import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import {SolicitudListComponent} from '../solicitud/solicitud-list/solicitud-list.component';
import {SolicitudDetailComponent} from '../solicitud/solicitud-detail/solicitud-detail.component';
import {ServicioListComponent} from '../servicio/servicio-list/servicio-list.component';
import {ServicioDetailComponent} from '../servicio/servicio-detail/servicio-detail.component';
import {PrestadorListComponent} from '../prestador/prestador-list/prestador-list.component';
import {PrestadorDetailComponent} from '../prestador/prestador-detail/prestador-detail.component';

const routes: Routes = [
    
    {
        path: 'solicitudes',
        children: [
            {
                path: 'list',
                component: SolicitudListComponent
            },
            {
                path: ':id',
                component: SolicitudDetailComponent,
                runGuardsAndResolvers: 'always'
            }
        ]
    },
    {
        path: 'servicios',
        children: [
            {
                path: 'list',
                component: ServicioListComponent
            },
            {
                path: ':id',
                component: ServicioDetailComponent,
                runGuardsAndResolvers: 'always'
            }
        ]
    },
    {
        path: 'prestadores',
        children: [
            {
                path: 'list',
                component: PrestadorListComponent
            },
            {
                path: ':id',
                component: PrestadorDetailComponent,
                runGuardsAndResolvers: 'always'
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
