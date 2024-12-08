import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItensService } from '../../shared/services/itens/service/itens.service';
import { Router } from '@angular/router';
import { PoPageDynamicTableActions } from '@po-ui/ng-templates';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrl: './itens.component.css'
})
export class ItensComponent implements OnInit {
  titulo: string = 'meu titulo';
  readonly fields: Array<any> = [
    { property: 'id', key: true, label: 'Código' },
    { property: 'name', label: 'Nome' },
    { property: 'preco', label: 'Preço' },
    { property: 'estoque', label: 'Qtd Estoque' },
    { property: 'modelo', label: 'Modelo' }
  ];

  readonly actions: PoPageDynamicTableActions = {
    new: '/itens/itens-form',
    remove: true,
    edit: '/itens/itens-form/:id'
  };

  constructor(
    private itensService: ItensService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToForm(): void {
    this.router.navigate(['itens/itens-form']);
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
