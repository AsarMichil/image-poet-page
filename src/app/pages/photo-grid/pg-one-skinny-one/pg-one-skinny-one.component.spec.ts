import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgOneSkinnyOneComponent } from './pg-one-skinny-one.component';

describe('PgOneSkinnyOneComponent', () => {
  let component: PgOneSkinnyOneComponent;
  let fixture: ComponentFixture<PgOneSkinnyOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgOneSkinnyOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgOneSkinnyOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
