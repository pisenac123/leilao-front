import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaLeilaoComponent } from './consulta-leilao.component';

describe('ConsultaLeilaoComponent', () => {
  let component: ConsultaLeilaoComponent;
  let fixture: ComponentFixture<ConsultaLeilaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaLeilaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaLeilaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
