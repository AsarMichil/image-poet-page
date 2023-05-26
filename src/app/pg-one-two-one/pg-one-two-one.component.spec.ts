import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgOneTwoOneComponent } from './pg-one-two-one.component';

describe('PgOneTwoOneComponent', () => {
  let component: PgOneTwoOneComponent;
  let fixture: ComponentFixture<PgOneTwoOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgOneTwoOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgOneTwoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
