import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteListComponent } from './cliente-list/cliente-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClienteListComponent],
  exports: [ClienteListComponent]
})
export class ClienteModule { }
