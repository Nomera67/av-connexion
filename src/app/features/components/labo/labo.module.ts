import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaboRoutingModule } from './labo-routing.module';
import { LaboComponent } from './labo.component';
import { ArticlesHeroComponent } from './articles-hero/articles-hero.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { TruncatePipe } from '../../pipes/truncate.pipe';


@NgModule({
  declarations: [
    LaboComponent,
    ArticlesHeroComponent,
    ArticlesListComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    LaboRoutingModule
  ]
})
export class LaboModule { }
