import {Component, OnInit} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];


  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    this.signupForm.valueChanges.subscribe(
      (value) => {
        if (value.gender==='male') { console.log(value)}
        else { console.log('Nothing')}

      }
    )
  }

  onSubmit(){
    console.log(this.signupForm)
    this.signupForm.reset({
      'gender': new FormControl('male'),  // Nie dziala bo trzeba caly obiekt
    })
  }
  onAddHobbies() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }
  forbiddenNames(control: FormControl): {[s: string]: boolean} {  // Moj stworzony validator
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {   //Asynchroniczna walidacja
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(()=>{
        if (control.value === 'marcel.k@onet.eu') {
          resolve({'emailIsForbidden': true});
        }else{
          resolve(null)
        }
      },1500);
    } )
    return promise;
  }
}

