import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrationComponent } from './registration.component';
const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);


describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should return true if the form control is valid', () => {
    component.ngOnInit();
    component.registerForm.controls['grade'].setValue('Prek');
    component.registerForm.controls['firstName'].setValue('Ava');
    component.registerForm.controls['lastName'].setValue('Hero');
    component.registerForm.controls['technique'].setValue('yes');
    component.registerForm.controls['email'].setValue('@gmail.com');
    component.registerForm.controls['parentsFirstName'].setValue('Mom');
    component.registerForm.controls['parentsLastName'].setValue('Hero');
    component.registerForm.controls['acceptTerms'].setValue(true);
    expect(component.registerForm.valid).toBe(true);
  
    component.onSubmit();
    expect(component.submitted).toBe(true);
  });
});
