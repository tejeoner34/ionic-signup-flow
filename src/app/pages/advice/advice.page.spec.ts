import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdvicePage } from './advice.page';

describe('AdvicePage', () => {
  let component: AdvicePage;
  let fixture: ComponentFixture<AdvicePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
