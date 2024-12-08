import { Component, OnInit } from '@angular/core';
import { ColorService } from '../../shared/services/color/services/color.service';
import { Router } from '@angular/router';
import { PoPageDynamicTableActions } from '@po-ui/ng-templates';
@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  titulo: string = 'meu titulo';
  readonly fields: Array<any> = [
    { property: 'id', key: true, label: 'Código' },
    { property: 'name', label: 'Nome' }
  ];

  readonly actions: PoPageDynamicTableActions = {
    new: '/color/color-form',
    remove: true,
    edit: '/color/color-form/:id'
  };

  constructor(
    private colorService: ColorService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToForm(): void {
    this.router.navigate(['color/color-form']);
  }

  getColumnTitle(columnName: string): string {
    switch(columnName) {
      case 'id':
        return 'Código';
      case 'name':
        return 'Nome';
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
      default:
        return '';
    }
  }
}