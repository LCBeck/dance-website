import { InformationComponent } from './../information/information.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { PrimaryPageComponent } from './primary-page.component';
import { Button } from 'protractor';

import { get } from "http";


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

// This is my custom test I added below.
it('should render title in a h1 tag', async(() => {
  const fixture = TestBed.createComponent(InformationComponent);
  fixture.detectChanges();
  const compiled = fixture.debugElement.nativeElement;
  expect(compiled.querySelector('h1').textContent).toContain('Classes');
}));

});
