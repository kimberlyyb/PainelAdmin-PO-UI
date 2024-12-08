import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoDialogService, PoDynamicFormField, PoNotificationService, PoPageAction } from '@po-ui/ng-components';
import { ItensService } from '../../../shared/services/itens/service/itens.service';

@Component({
  selector: 'app-itens-form',
  templateUrl: './itens-form.component.html',
  styleUrl: './itens-form.component.css'
})
export class ItensFormComponent implements OnInit {
  title: string = 'Cadastrar item';
  operation: string = 'new';
  id: string = '';
  itens: any = {
    id: null,
    title: '',
    category: '',
    status: '',
    image: '' // Campo para o link da imagem
  };

  readonly actions: Array<PoPageAction> = [
    { label: 'Salvar', action: this.saveItens.bind(this) },
    { label: 'Cancelar', action: this.cancel.bind(this) }
  ]

  readonly fields: Array<PoDynamicFormField> = [
    { property: 'id', required: true, label: 'ID', gridLgColumns: 1, gridMdColumns: 1, gridSmColumns: 2 },
     { property: 'codigo', required: true, label: 'Código', gridLgColumns: 3, gridMdColumns: 4, gridSmColumns: 4 },
    { property: 'name', required: true, label: 'Nome', gridLgColumns: 4, gridMdColumns: 4, gridSmColumns: 5 },
    
    { property: 'estoque', required: true, label: 'Qtd Estoque', type: 'number', gridLgColumns: 3, gridMdColumns: 2, gridSmColumns: 5, minValue: 0, placeholder: 'Digite a quantidade', clean: true},
    { property: 'modelo', required: true, label: 'Modelo', gridLgColumns: 4, gridMdColumns: 4, gridSmColumns: 4 },
    { property: 'idProduto', required: true, label: 'Id produto',gridLgColumns: 1, gridMdColumns: 1, gridSmColumns: 3},
    { property: 'idTamanho', required: true, label: 'Id tamanho',gridLgColumns: 1, gridMdColumns: 1, gridSmColumns: 3 },
    { property: 'idCor', required: true, label: 'Id cor', gridLgColumns: 1, gridMdColumns: 1, gridSmColumns: 3 },
    { property: 'preco', required: true, label: 'Preço', type: 'number', gridLgColumns: 4, gridMdColumns: 2, gridSmColumns: 5, minValue: 0, placeholder: 'Digite o preço', clean: true},
    { property: 'image', required: true, label: 'Imagem do Produto',gridLgColumns: 6, gridMdColumns: 6, gridSmColumns: 5, placeholder: 'URL da imagem', type: 'string' },
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private itensService: ItensService,
    private poNotificationService: PoNotificationService,
    private router: Router,
    private poDialogService: PoDialogService
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.setOperation();
    if (this.operation === 'edit') {
      this.getItens();
    }
  }

  setOperation(): void {
    this.id ? this.operation = 'edit' :  this.operation = 'new';
  }

  getTitlePage(): string {
    return this.operation === 'new' ? 'Cadastrar item' : 'Editar item';
  }

  getItens(): void {
    this.itensService.getById(parseInt(this.id)).subscribe({
      next: (itens: any) => this.itens= itens[0]
    });
  }

  getForm(event: any): void {
    this.itens = event.value;
  }

  saveItens(): void {
    if (this.operation === 'new') {
      this.itensService.create(this.itens).subscribe({
        next: () => {
          this.poNotificationService.success('Registro incluído com sucesso.');
          this.router.navigate(['itens']);
        },
        error: () => {
          this.poNotificationService.error('Erro ao incluir o registro.');
        }
      });
    } else {
      this.itensService.update(parseInt(this.id), this.itens).subscribe({
        next: () => {
          this.poNotificationService.success('Registro alterado com sucesso.');
          this.router.navigate(['itens']);
        },
        error: () => {
          this.poNotificationService.error('Erro ao alterar o registro.');
        }
      });
    }
  }


  cancel(): void {
    this.poDialogService.confirm({
      title: 'Cancelar',
      message: 'As informações não ficarão salvas. Tem certeza que deseja cancelar?',
      confirm: () => this.router.navigate(['itens'])
    })
  }
}
