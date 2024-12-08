import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensFormComponent } from './itens-form.component';

describe('ItensFormComponent', () => {
  let component: ItensFormComponent;
  let fixture: ComponentFixture<ItensFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItensFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItensFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
