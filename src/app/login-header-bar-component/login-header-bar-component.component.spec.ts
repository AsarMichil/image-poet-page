import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginHeaderBarComponentComponent } from './login-header-bar-component.component';

describe('LoginHeaderBarComponentComponent', () => {
  let component: LoginHeaderBarComponentComponent;
  let fixture: ComponentFixture<LoginHeaderBarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginHeaderBarComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginHeaderBarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
