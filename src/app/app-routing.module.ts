import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from './guards/validar-token.guard';
import { ValidarAuthGuard } from  './guards/validar-auth.guard';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: ()=> import('./auth/auth.module').then(m=>m.AuthModule),
    // canActivate:[ValidarAuthGuard],
    // canLoad:    [ValidarAuthGuard],
  },
  {
    path:'media',
    loadChildren: ()=> import('./gallery/gallery.module').then(m=>m.GalleryModule),
    canActivate:[ValidarTokenGuard],
    canLoad:    [ValidarTokenGuard],
  },
  {
    path:'**',
    redirectTo:'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
