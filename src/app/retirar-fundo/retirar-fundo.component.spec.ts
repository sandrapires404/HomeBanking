import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirarFundoComponent } from './retirar-fundo.component';

describe('RetirarFundoComponent', () => {
  let component: RetirarFundoComponent;
  let fixture: ComponentFixture<RetirarFundoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetirarFundoComponent]
    });
    fixture = TestBed.createComponent(RetirarFundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
