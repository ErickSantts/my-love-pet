import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioclieteComponent } from './funcionariocliete.component';

describe('FuncionarioclieteComponent', () => {
  let component: FuncionarioclieteComponent;
  let fixture: ComponentFixture<FuncionarioclieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionarioclieteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioclieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
