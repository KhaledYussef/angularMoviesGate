import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/controllers/auth.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private auth: AuthService) {}

  myForm: FormGroup = this.formBuilder.group({
    userName: ["", [Validators.required, Validators.minLength(3)]],
    email: ["", [Validators.required, Validators.minLength(10), Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]],
});
  ngOnInit() {
  }

  onsubmit(){

  }


  validate(controlName: string) {
    return this.myForm.get(controlName)!.invalid && this.myForm.get(controlName)!.touched;
}
}
