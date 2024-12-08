import { Routes, RouterModule } from '@angular/router';
import { ColorComponent } from './color.component';
import { ColorFormComponent } from './color-form/color-form.component';

const routes: Routes = [
  { path: '', component: ColorComponent },
  { path: 'color-form', component: ColorFormComponent },
  { path: 'color-form/:id', component: ColorFormComponent }
];

export const ColorRoutes = RouterModule.forChild(routes);