import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreativeArtRoutingModule } from './creative-art-routing.module';
import { MainComponent } from './main/main.component';
import { IndividualComponent } from './individual/individual.component';
import { GroupComponent } from './group/group.component';
import { WorkshopComponent } from './workshop/workshop.component';

@NgModule({
  declarations: [
    MainComponent,
    IndividualComponent,
    GroupComponent,
    WorkshopComponent
  ],
  imports: [
    CommonModule,
    CreativeArtRoutingModule
  ],
})
export class CreativeArtModule { }
