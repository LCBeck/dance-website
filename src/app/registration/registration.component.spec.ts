import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrationComponent } from './registration.component';
import { FormsModule, ReactiveFormsModule,  } from '@angular/forms';


describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        
        
      ],
    })
    
    .compileComponents();
}));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
 
  
  // My custom test below for this component.

  it('should create a FormGroup comprised of FormControls', () => {
    component.ngOnInit();
    expect(Object.keys(component.registerForm.controls).length).toEqual(8);
    expect(Object.keys(component.registerForm.controls)).toEqual([
      'grade', 'firstName', 'lastName', 'technique', 'email', 'parentsFirstName', 'parentsLastName', 'acceptTerms'
    ]);
});
});
