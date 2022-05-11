import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariopetComponent } from './funcionariopet.component';

describe('FuncionariopetComponent', () => {
  let component: FuncionariopetComponent;
  let fixture: ComponentFixture<FuncionariopetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionariopetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionariopetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
