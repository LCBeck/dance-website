import { InformationComponent } from './../information/information.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryPageComponent } from './primary-page.component';

describe('PrimaryPageComponent', () => {
  let component: PrimaryPageComponent;
  let fixture: ComponentFixture<PrimaryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
