import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.css']
})
export class ClassDetailsComponent implements OnInit {
  noOfClassList: any = [1,2,3,4,5,6]
  
  form = new FormGroup({
    standard: new FormControl('', Validators.required),
    noOfClass: new FormControl('', Validators.required)
  });
  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.form.value);
  }

}
