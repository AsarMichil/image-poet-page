import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTempComponent } from './account-temp.component';

describe('AccountTempComponent', () => {
  let component: AccountTempComponent;
  let fixture: ComponentFixture<AccountTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountTempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
