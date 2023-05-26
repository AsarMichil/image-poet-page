import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgSkinnyOneOneComponent } from './pg-skinny-one-one.component';

describe('PgSkinnyOneOneComponent', () => {
  let component: PgSkinnyOneOneComponent;
  let fixture: ComponentFixture<PgSkinnyOneOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgSkinnyOneOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgSkinnyOneOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
