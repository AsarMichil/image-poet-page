import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgTwoOneOneComponent } from './pg-two-one-one.component';

describe('PgTwoOneOneComponent', () => {
  let component: PgTwoOneOneComponent;
  let fixture: ComponentFixture<PgTwoOneOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgTwoOneOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgTwoOneOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
