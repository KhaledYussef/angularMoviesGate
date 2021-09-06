import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RegisterModel } from "src/app/models/AccountModels";
import { AuthService } from "src/app/controllers/auth.service";

@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
    constructor(private formBuilder: FormBuilder, private api: AuthService) {}
    myForm: FormGroup = this.formBuilder.group({
        userName: ["", [Validators.required, Validators.minLength(3)]],
        email: ["", [Validators.required, Validators.minLength(10), Validators.email]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        rememberMe: [false],
    });
    registerModel = new RegisterModel("gh", "", "");
    ngOnInit(): void {}

    onsubmit() {
        if (this.myForm.invalid) return;
        console.log(this.myForm);
        this.api.Register(new RegisterModel(this.myForm.value!.userName, this.myForm.value!.email, this.myForm.value!.password)).subscribe(
            () => {
                alert("success");
            },
            (error) => {
                console.error(error);
            }
        );
    }

    validate(controlName: string) {
        return this.myForm.get(controlName)!.invalid && this.myForm.get(controlName)!.touched;
    }
}
