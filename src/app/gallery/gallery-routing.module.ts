import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent }        from './pages/main/main.component';
import { GalleryComponent }     from './pages/gallery/gallery.component';

const routes: Routes = [{
  path:'',
  component:MainComponent,
  children:[
    {path:'gallery',component:GalleryComponent},
    {path:'**',redirectTo:'gallery'},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
