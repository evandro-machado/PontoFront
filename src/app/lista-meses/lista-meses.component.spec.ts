import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMesesComponent } from './lista-meses.component';

describe('ListaMesesComponent', () => {
  let component: ListaMesesComponent;
  let fixture: ComponentFixture<ListaMesesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMesesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
