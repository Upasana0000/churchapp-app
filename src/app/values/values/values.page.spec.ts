import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValuesPage } from './values.page';

describe('ValuesPage', () => {
  let component: ValuesPage;
  let fixture: ComponentFixture<ValuesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
