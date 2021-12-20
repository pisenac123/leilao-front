import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLanceComponent } from './modal-lance.component';

describe('ModalLanceComponent', () => {
  let component: ModalLanceComponent;
  let fixture: ComponentFixture<ModalLanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalLanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalLanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
