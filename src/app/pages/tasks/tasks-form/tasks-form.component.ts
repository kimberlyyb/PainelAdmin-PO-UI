import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoDialogService, PoDynamicFormField, PoNotificationService, PoPageAction, PoSelectOption } from '@po-ui/ng-components';
import { TasksService } from '../../../shared/services/tasks/services/tasks.service';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-tasks-form',
  templateUrl: './tasks-form.component.html',
  styleUrls: ['./tasks-form.component.css']
})
export class TasksFormComponent implements OnInit {
  title: string = 'Cadastrar Produto';
   operation: string = 'new';
   id: string = '';
   task: any = {
    id: null,
    title: '',
    category: '',
    status: '',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKnCFNgcu5qAChLrvcc48cqHarAkiolvkMyA&s' // Campo para o link da imagem
  };

   readonly actions: Array<PoPageAction> = [
  { label: 'Salvar', action: this.saveTask.bind(this) },
    { label: 'Cancelar', action: this.cancel.bind(this) }
  ]



  readonly fields: Array<PoDynamicFormField> = [
    { property: 'id', required: true, label: 'Código', gridLgColumns: 1, gridMdColumns: 1, gridSmColumns: 12 },
    { property: 'name', required: true, label: 'Nome', gridLgColumns: 4, gridMdColumns: 4, gridSmColumns: 12 },
    { property: 'category', required: true, optionsService: 'http://localhost:3000/categories', fieldValue: 'id', fieldLabel: 'name', label: 'Categoria',  gridLgColumns: 4, gridMdColumns: 4, gridSmColumns: 12 },
    { property: 'descricao', required: true, label: 'Descrição', gridLgColumns: 7, gridMdColumns: 7, gridSmColumns: 12 },
    { property: 'estoque', required: true, optionsService: 'http://localhost:3000/status', fieldValue: 'id', fieldLabel: 'description', type:'number', label: 'Qtd Estoque',  gridLgColumns: 3, gridMdColumns: 3, gridSmColumns: 12, minValue: 0, placeholder: 'Digite a quantidade', clean: true },
    { property: 'preco', required: true, optionsService: 'http://localhost:3000/status', fieldValue: 'id', fieldLabel: 'preco', type:'number', label: 'Preço',  gridLgColumns: 3, gridMdColumns: 3, gridSmColumns: 12, minValue: 0, placeholder: 'Digite o preço', clean: true },
    {property: 'tamanhos', label: 'Tamanhos Disponíveis', type: 'multiselect', options: [
        { value: 'PP', label: 'PP' },
        { value: 'P', label: 'P' },
        { value: 'M', label: 'M' },
        { value: 'G', label: 'G' }
      ], gridLgColumns: 3, gridMdColumns: 3, gridSmColumns: 12
    },
    { property: 'image', required: true, label: 'Imagem do Produto', gridLgColumns: 6, gridMdColumns: 6, gridSmColumns: 12, placeholder: 'URL da imagem', type: 'string' }
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private tasksService: TasksService,
    private poNotificationService: PoNotificationService,
    private router: Router,
    private poDialogService: PoDialogService
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.setOperation();
    if (this.operation === 'edit') {
      this.getTask();
    }
  }

  setOperation(): void {
    this.id ? this.operation = 'edit' :  this.operation = 'new';
  }

  getTitlePage(): string {
    return this.operation === 'new' ? 'Cadastrar Produto' : 'Editar produto';
  }

  getTask(): void {
    this.tasksService.getById(parseInt(this.id)).subscribe({
      next: (task: any) => this.task = task[0]
    });
  }

  getForm(event: any): void {
    this.task = event.value;
  }

  saveTask(): void {
    let message: string = this.operation === 'new' ? 'Registro incluído com sucesso.' : 'Registro alterado com sucesso.'
    this.poNotificationService.success(message);
    this.router.navigate(['']);
    // this.tasksService.post(this.task).subscribe({
    //   next: () => console.log('ok')
    // });
  }

  cancel(): void {
    this.poDialogService.confirm({
      title: 'Cancelar',
      message: 'As informações não ficarão salvas. Tem certeza que deseja cancelar?',
      confirm: () => this.router.navigate([''])
    })
  }}