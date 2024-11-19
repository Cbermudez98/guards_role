import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BothPage } from './both.page';

describe('BothPage', () => {
  let component: BothPage;
  let fixture: ComponentFixture<BothPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BothPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
