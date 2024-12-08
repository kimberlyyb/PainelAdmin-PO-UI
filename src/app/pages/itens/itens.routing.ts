import { Routes, RouterModule } from '@angular/router';
import { ItensComponent } from './itens.component';
import { ItensFormComponent } from './itens-form/itens-form.component';

const routes: Routes = [
  { path: '', component: ItensComponent },
  { path: 'itens-form', component: ItensFormComponent },
  { path: 'itens-form/:id', component: ItensFormComponent }
];

export const ItensRoutes = RouterModule.forChild(routes);