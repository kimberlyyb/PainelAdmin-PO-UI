import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorComponent } from './color.component';
import { ColorRoutes } from './color.routing';
import { ToolbarModule } from '../../shared/components/toolbar/toolbar.module';
import { ColorFormComponent } from './color-form/color-form.component';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { PoModule } from '@po-ui/ng-components';

@NgModule({
  imports: [
    CommonModule,
    ColorRoutes,
    ToolbarModule,
    PoTemplatesModule,
    PoModule
  ],
  declarations: [ColorComponent, ColorFormComponent]
})
export class ColorModule { }
