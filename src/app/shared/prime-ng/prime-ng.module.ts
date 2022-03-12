import { NgModule } from '@angular/core';

import { RippleModule }     from 'primeng/ripple';
import { ButtonModule }     from 'primeng/button';
import { ImageModule }      from 'primeng/image';
import { InputTextModule }  from 'primeng/inputtext';

@NgModule({
  exports:[
    ButtonModule,
    RippleModule,
    ImageModule,
    InputTextModule,
  ]
})
export class PrimeNgModule { }
