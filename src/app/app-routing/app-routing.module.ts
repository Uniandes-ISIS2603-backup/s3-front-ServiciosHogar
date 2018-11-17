import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import {SolicitudListComponent } from '../solicitud/solicitud-list/solicitud-list.component';

const routes: Routes = [
    
    {
        path: 'solicitudes',
        children: [
            {
                path: 'list',
                component: SolicitudListComponent
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
