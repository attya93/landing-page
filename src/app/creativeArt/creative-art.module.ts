import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreativeArtRoutingModule } from './creative-art-routing.module';
import { MainComponent } from './main/main.component';
import { IndividualComponent } from './individual/individual.component';
import { GroupComponent } from './group/group.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';

@NgModule({
  declarations: [
    MainComponent,
    IndividualComponent,
    GroupComponent,
    WorkshopComponent
  ],
  imports: [
    CommonModule,
    CreativeArtRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
})
export class CreativeArtModule { }
