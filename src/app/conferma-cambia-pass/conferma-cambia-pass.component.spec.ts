import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfermaCambiaPassComponent } from './conferma-cambia-pass.component';

describe('ConfermaCambiaPassComponent', () => {
  let component: ConfermaCambiaPassComponent;
  let fixture: ComponentFixture<ConfermaCambiaPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfermaCambiaPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfermaCambiaPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
