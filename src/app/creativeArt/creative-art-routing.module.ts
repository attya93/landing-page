import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupComponent } from './group/group.component';
import { IndividualComponent } from './individual/individual.component';
import { MainComponent } from './main/main.component';
import { WorkshopComponent } from './workshop/workshop.component';
const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: "individual", component: IndividualComponent },
      { path: "group", component: GroupComponent },
      { path: "workshops", component: WorkshopComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreativeArtRoutingModule { }
