import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(h => h.HomeModule)
  },
  {
    path: 'itens',
    component: HomeComponent,  // Usando HomeComponent para 'itens' para incluir a toolbar
    children: [
      { path: '', loadChildren: () => import('./pages/itens/itens.module').then(h => h.ItensModule) }
    ]
  },
  {
    path: 'color',
    component: HomeComponent,  // Usando HomeComponent para 'color' para incluir a toolbar
    children: [
      { path: '', loadChildren: () => import('./pages/color/color.module').then(h => h.ColorModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
