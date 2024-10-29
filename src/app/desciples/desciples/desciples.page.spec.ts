import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesciplesPage } from './desciples.page';

describe('DesciplesPage', () => {
  let component: DesciplesPage;
  let fixture: ComponentFixture<DesciplesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DesciplesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
