import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalExistAlertComponent } from './modal-exist-alert.component';

describe('ModalExistAlertComponent', () => {
  let component: ModalExistAlertComponent;
  let fixture: ComponentFixture<ModalExistAlertComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ModalExistAlertComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalExistAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
