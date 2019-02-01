import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  state = ['Stable', 'Critical', 'Finished'];
  myForm: FormGroup;
  name = 'Test'


  ngOnInit(): void {
    this.myForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, this.myValidator.bind(this)], this.mySecondValidatorASynchronic.bind(this)),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('Critical')
    })
  }
  onSubmit() {
    console.log(this.myForm)
  }

  myValidator(control: FormControl): {[s:string]: boolean} {
    if (control.value === 'Test'){
      return {'gowno': true};
    }else {
      return null;
    }
  }
  mySecondValidatorASynchronic(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(()=>{
          if(control.value === 'TestProject') resolve({'forbiddenName2': true});
          else resolve(null);
        },2000)
      }
    );
    return promise;
  }

}
