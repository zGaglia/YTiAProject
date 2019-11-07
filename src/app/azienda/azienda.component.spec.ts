import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AziendaComponent } from './azienda.component';

describe('AziendaComponent', () => {
  let component: AziendaComponent;
  let fixture: ComponentFixture<AziendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AziendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AziendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
