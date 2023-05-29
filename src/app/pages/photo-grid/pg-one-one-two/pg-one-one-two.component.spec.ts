import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgOneOneTwoComponent } from './pg-one-one-two.component';

describe('PgOneOneTwoComponent', () => {
  let component: PgOneOneTwoComponent;
  let fixture: ComponentFixture<PgOneOneTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgOneOneTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgOneOneTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
