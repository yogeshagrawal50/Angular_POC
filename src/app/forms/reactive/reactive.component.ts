import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  titles = ['Mr', 'Mrs', 'Miss', 'Ms'];
  formstatus:any;
  testData = {};
  constructor(private http:HttpClient, private fb:FormBuilder) { }

  reactiveForm:FormGroup;

  ngOnInit(): void {
    this.reactiveForm = this.fb.group({
      personalDetails: new FormGroup({
        firstName: new FormControl('Tunish', [Validators.required,this.noSpaceAllowed]),
        lastName: new FormControl('Joy'),
        email: new FormControl('karnika.trainer@gmail.com', [Validators.required, Validators.email]),
      }),
      password: new FormControl(null),
      confirmPassword: new FormControl(null),
      tnc: new FormControl(null),
      interests: new FormArray([
        new FormControl(null, Validators.required),
      ])
    })
    this.reactiveForm = new FormGroup({
      personalDetails: new FormGroup({
        firstName: new FormControl('Tunish', [Validators.required,this.noSpaceAllowed]),
        lastName: new FormControl('Joy'),
        email: new FormControl('karnika.trainer@gmail.com', [Validators.required, Validators.email]),
      }),
      password: new FormControl(null),
      confirmPassword: new FormControl(null),
      tnc: new FormControl(null),
      interests: new FormArray([
        new FormControl(null, Validators.required),
      ])
    });

    // this.reactiveForm.valueChanges.subscribe((value)=>{
    //   console.log(value);
    // });

    this.reactiveForm.statusChanges.subscribe((value)=>{
      this.formstatus = value;
    });

    // this.reactiveForm.setValue({
    //   personalDetails: {
    //     firstName: 'karnika',
    //     lastName: 'Arora',
    //     email: 'karnika.trainer@gmail.com'
    //   },
    //   password: '',
    //   confirmPassword: '',
    //   tnc: '',
    //   interests:[]
    // });

    this.reactiveForm.patchValue({
      personalDetails: {
        firstName: 'karnika',
        lastName: 'Arora'
      }
    });
  }
  onSubmit(){
    console.log(this.reactiveForm.value.personalDetails.firstName);
    this.testData = {
      username:this.reactiveForm.value.personalDetails.firstName,
      password:'1234'
    }
    this.http.post('https://authentication-23-2e9aa-default-rtdb.firebaseio.com/posts.json',this.testData).subscribe((val)=>{
      console.log(val);
    });
    // this.reactiveForm.reset();
  }
  addFormArray(){
    (<FormArray>this.reactiveForm.get('interests')).push(new FormControl(null, Validators.required));
  }

  noSpaceAllowed(control:FormControl){
    if(control.value != null && control.value.indexOf(" ") != -1){
      return{
        noSpaceAllowed: true
      }
    }else{
      return null;
    }
  }

}
