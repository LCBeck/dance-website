import { InformationComponent } from './../information/information.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { PrimaryPageComponent } from './primary-page.component';
import { Button } from 'protractor';

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
  it('should have linear-gradient <body>', () => {
    const body: HTMLElement = fixture.nativeElement.querySelector('body');
    const bgColor = body.style.backgroundColor;
    expect(bgColor).toBe('linear-gradient');
  });
});
