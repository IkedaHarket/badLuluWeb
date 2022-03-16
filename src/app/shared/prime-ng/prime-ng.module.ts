import { NgModule } from '@angular/core';

import { RippleModule }     from 'primeng/ripple';
import { ButtonModule }     from 'primeng/button';
import { ImageModule }      from 'primeng/image';
import { InputTextModule }  from 'primeng/inputtext';
import { InputMaskModule}   from 'primeng/inputmask';

@NgModule({
  exports:[
    ButtonModule,
    RippleModule,
    ImageModule,
    InputTextModule,
    InputMaskModule
  ]
})
export class PrimeNgModule { }
