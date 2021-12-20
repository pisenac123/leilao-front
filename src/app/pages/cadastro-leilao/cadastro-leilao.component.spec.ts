import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroLeilaoComponent } from './cadastro-leilao.component';

describe('CadastroLeilaoComponent', () => {
  let component: CadastroLeilaoComponent;
  let fixture: ComponentFixture<CadastroLeilaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroLeilaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroLeilaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
