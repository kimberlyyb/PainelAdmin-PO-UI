import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItensComponent } from './itens.component';
import { ItensRoutes } from './itens.routing';
import { ToolbarModule } from '../../shared/components/toolbar/toolbar.module';
import { ItensFormComponent } from '../itens/itens-form/itens-form.component';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { PoModule, PoToolbarComponent } from '@po-ui/ng-components';


@NgModule({
  imports: [
    CommonModule,
    ItensRoutes,
    ToolbarModule,
    PoTemplatesModule,
    PoModule
  ],
  declarations: [ItensComponent, ItensFormComponent]
})
export class ItensModule { }
