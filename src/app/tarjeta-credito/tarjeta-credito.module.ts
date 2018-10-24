import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaCreditoListComponent } from './tarjeta-credito-list/tarjeta-credito-list.component';
import { TarjetaCreditoService} from './tarjeta-credito.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TarjetaCreditoListComponent],
  providers: [TarjetaCreditoService],
  exports: [TarjetaCreditoListComponent]
})
export class TarjetaCreditoModule { }
