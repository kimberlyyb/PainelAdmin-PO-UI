import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoDialogService, PoDynamicFormField, PoNotificationService, PoPageAction } from '@po-ui/ng-components';
import { ColorService } from '../../../shared/services/color/services/color.service';

@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styleUrl: './color-form.component.css'
})
export class ColorFormComponent implements OnInit {
  title: string = 'Cadastra cor';
  operation: string = 'new';
  id: string = '';
  color: any;

  readonly actions: Array<PoPageAction> = [
    { label: 'Salvar', action: this.saveColor.bind(this) },
    { label: 'Cancelar', action: this.cancel.bind(this) }
  ]

  readonly fields: Array<PoDynamicFormField> = [
    { property: 'id', required: true, label: 'Código', gridLgColumns: 1, gridMdColumns: 1, gridSmColumns: 12 },
    { property: 'name', required: true, label: 'Nome', gridLgColumns: 4, gridMdColumns: 4, gridSmColumns: 12 }
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private colorService: ColorService,
    private poNotificationService: PoNotificationService,
    private router: Router,
    private poDialogService: PoDialogService
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.setOperation();
    if (this.operation === 'edit') {
      this.getColor();
    }
  }

  setOperation(): void {
    this.id ? this.operation = 'edit' :  this.operation = 'new';
  }

  getTitlePage(): string {
    return this.operation === 'new' ? 'Cadastrar cor' : 'Editar cor';
  }

  getColor(): void {
    this.colorService.getById(parseInt(this.id)).subscribe({
      next: (color: any) => this.color= color[0]
    });
  }

  getForm(event: any): void {
    this.color = event.value;
  }

  saveColor(): void {
    let message: string = this.operation === 'new' ? 'Registro incluído com sucesso.' : 'Registro alterado com sucesso.'
    this.poNotificationService.success(message);
    this.router.navigate(['color']);
  }

  cancel(): void {
    this.poDialogService.confirm({
      title: 'Cancelar',
      message: 'As informações não ficarão salvas. Tem certeza que deseja cancelar?',
      confirm: () => this.router.navigate(['color'])
    })
  }
}
