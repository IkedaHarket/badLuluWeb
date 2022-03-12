import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { BannerHeaderComponent } from './components/banner-header/banner-header.component';
import { EnlacesComponent } from './components/enlaces/enlaces.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { ErrMsgDirective } from './directives/err-msg.directive';
import { CustomIfDirective } from './directives/custom-if.directive';


@NgModule({
  exports:[
    PrimeNgModule,
    BannerHeaderComponent,
    EnlacesComponent,
    NavMenuComponent,
    ErrMsgDirective,
    CustomIfDirective,
  ],
  imports:[
    CommonModule,
    PrimeNgModule,
    RouterModule
  ],
  declarations: [
    BannerHeaderComponent,
    EnlacesComponent,
    NavMenuComponent,
    ErrMsgDirective,
    CustomIfDirective,
  ]
})
export class SharedModule { }
