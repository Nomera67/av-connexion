import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/accueil'},
  { path: 'accueil', loadChildren: () => import('./features/components/accueil/accueil.module').then(m => m.AccueilModule) },
  { path: 'laboratoire', loadChildren: () => import('./features/components/labo/labo.module').then(m => m.LaboModule) },
  { path: '**', loadChildren: () => import('./shared/not-found/not-found.module').then(m => m.NotFoundModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
