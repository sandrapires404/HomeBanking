import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FazerMovimentosComponent } from './fazer-movimentos.component';

describe('FazerMovimentosComponent', () => {
  let component: FazerMovimentosComponent;
  let fixture: ComponentFixture<FazerMovimentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FazerMovimentosComponent]
    });
    fixture = TestBed.createComponent(FazerMovimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
