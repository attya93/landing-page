import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "creative-art/individual", pathMatch: 'full' },
  {
    path: "creative-art", children: [{
      path: "", loadChildren: () => import('./creativeArt/creative-art.module')
        .then(m => m.CreativeArtModule)
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
