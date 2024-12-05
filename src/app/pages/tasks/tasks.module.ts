import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ToolbarModule } from '../../shared/components/toolbar/toolbar.module';
import {MatButtonModule} from '@angular/material/button';
import { TasksRoutes } from './tasks.routing';
import { PoImageModule, PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { TasksFormComponent } from './tasks-form/tasks-form.component';


@NgModule({
  imports: [
    CommonModule,
    ToolbarModule,
    TasksRoutes,
    PoModule,
    PoTemplatesModule,
    PoImageModule
  ],
  declarations: [TasksComponent, TasksFormComponent]
})
export class TasksModule { }
