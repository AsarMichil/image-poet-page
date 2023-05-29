import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgOneOneSkinnyComponent } from './pg-one-one-skinny.component';

describe('PgOneOneSkinnyComponent', () => {
  let component: PgOneOneSkinnyComponent;
  let fixture: ComponentFixture<PgOneOneSkinnyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgOneOneSkinnyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgOneOneSkinnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
