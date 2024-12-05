import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoPageDynamicTableActions } from '@po-ui/ng-templates';
import { TasksService } from '../../shared/services/tasks/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  readonly fields: Array<any> = [
    { property: 'id', key: true, visible: true, label: 'Código' },
    { property: 'name', label: 'Nome' },
    { property: 'category', label: 'Categoria' },
    { property: 'preco', label: 'Preço' }
  ];

  readonly actions: PoPageDynamicTableActions = {
    new: '/tasks-form',
    remove: true,
    edit: '/tasks-form/:id'
  };

  constructor(
    private router: Router,
    private tasksService: TasksService
  ) { }

  ngOnInit() {
    this.tasksService.getById(1).subscribe({next: (res: any) => console.log("aqui", res)})
  }

  getColumnTitle(columnName: string): string {
    switch(columnName) {
      case 'id':
        return 'Código';
      case 'name':
        return 'Nome';
      case 'category':
        return 'Categoria';
      case 'preco':
        return 'Preço';
      default:
        return '';
    }
  }

  getColumnData(columnName: string, element: any): any {
    switch(columnName) {
      case 'id':
        return element.id;
      case 'name':
        return element.name;
      case 'category':
        return element.category;
      case 'preco':
        return element.preco;
      default:
        return '';
    }
  }

  goToForm(): void {
    this.router.navigate(['/tasks-form']);
  }

  minhaFuncao(): void {
    alert('cliquei no botão');
  }
}
