import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  public userForm:FormGroup=new FormGroup({
    sname:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    class:new FormControl(null,[Validators.required,Validators.min(1),Validators.max(2)]),
    fname:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    dob:new FormControl(),
    address:new FormGroup({
      addressLine:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
      city:new FormControl(),
      state:new FormControl(),
      pincode:new FormControl()

    }),
    marks:new FormArray([]),
    type: new FormControl(),
    busfee: new FormControl(),
    hostelfee:new FormControl(),
    
  })
  get marksFormArray(){
    return this.userForm.get('marks') as FormArray;
  }
  delete(i:number){
    this.marksFormArray.removeAt(i);
  }
  Marksadd(){
    this.marksFormArray.push(
      new FormGroup({
        class:new FormControl(),
        year:new FormControl(),
        percentage:new FormControl(null,[Validators.required]),
      })

    )
  }
  submit(){
    console.log(this.userForm);
  }
  

}
