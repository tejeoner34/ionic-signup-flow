import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgreePage } from './agree.page';

describe('AgreePage', () => {
  let component: AgreePage;
  let fixture: ComponentFixture<AgreePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
