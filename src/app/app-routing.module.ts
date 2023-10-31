import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/accueil'},
  { path: 'accueil', loadChildren: () => import('./features/components/accueil/accueil.module').then(m => m.AccueilModule) },
  { path: 'laboratoire', loadChildren: () => import('./features/components/labo/labo.module').then(m => m.LaboModule) },
  { path: 'article/:id', loadChildren: () => import('./features/components/labo/article/article.module').then(m => m.ArticleModule) },
  { path: 'imperator', loadChildren: () => import('./features/components/imperator/connexion/connexion.module').then(m => m.ConnexionModule) },
  { path: 'imperator/panel', loadChildren: () => import('./features/components/imperator/panel/panel.module').then(m => m.PanelModule) },
  { path: '**', loadChildren: () => import('./shared/not-found/not-found.module').then(m => m.NotFoundModule) }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
