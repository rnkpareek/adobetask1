import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MykartComponent } from './mykart.component';

describe('MykartComponent', () => {
  let component: MykartComponent;
  let fixture: ComponentFixture<MykartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MykartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MykartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
