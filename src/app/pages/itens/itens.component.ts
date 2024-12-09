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
    { property: 'preco', label: 'Preço' },
    { property: 'estoque', label: 'Qtd Estoque' },
    { property: 'modelo', label: 'Modelo' },
    { property: 'cor', label: 'Cor' },
    { property: 'produto', label: 'Produto' }
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
        case 'preco':
          return 'Preço';
          case 'estoque':
        return 'Qtd Estoque';
        case 'modelo':
        return 'Modelo';
        case 'cor':
        return 'Cor';
        case 'produto':
        return 'Produto';
      default:
        return '';
    }
  }

  getColumnData(columnName: string, element: any): any {
    switch(columnName) {
      case 'id':
        return element.id;
        case 'preco':
          return element.preco;
          case 'estoque':
        return element.estoque;
        case 'modelo':
        return element.modelo;
        case 'cor':
        return element.cor;
        case 'produto':
        return element.produto;
      default:
        return '';
    }
  }

}
