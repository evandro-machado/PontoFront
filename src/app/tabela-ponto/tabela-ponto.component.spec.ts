import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaPontoComponent } from './tabela-ponto.component';

describe('TabelaPontoComponent', () => {
  let component: TabelaPontoComponent;
  let fixture: ComponentFixture<TabelaPontoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaPontoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaPontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
