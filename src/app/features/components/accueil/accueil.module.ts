import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccueilRoutingModule } from './accueil-routing.module';
import { AccueilComponent } from './accueil.component';
import { HeroeComponent } from './heroe/heroe.component';
import { CompetencesComponent } from './competences/competences.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { ImgDisplayComponent } from './competences/img-display/img-display.component';


@NgModule({
  declarations: [
    AccueilComponent,
    HeroeComponent,
    CompetencesComponent,
    CertificationsComponent,
    TeamComponent,
    ContactComponent,
    ImgDisplayComponent
  ],
  imports: [
    CommonModule,
    AccueilRoutingModule
  ]
})
export class AccueilModule { }
