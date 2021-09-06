import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { LoginModel } from "src/app/models/AccountModels";
import { AuthService } from "src/app/controllers/auth.service";
import { ToastService } from "src/app/services/toast/toast-service";
import { Router } from "@angular/router";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
    constructor(private formBuilder: FormBuilder, private auth: AuthService, public toastService: ToastService, private route: Router) {}
    loginForm: FormGroup = this.formBuilder.group({
        userNameOrEmail: ["", [Validators.required, Validators.minLength(3)]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        rememberMe: new FormControl(false),
    });

    ngOnInit(): void {}

    onSubmit() {
        var model = new LoginModel(this.loginForm.value!.userNameOrEmail, this.loginForm.value!.password, this.loginForm.value!.rememberMe);
        if (this.loginForm.invalid) return;
        this.auth.Login(model).subscribe(
            (res) => {
                console.log(res);
                this.auth.SaveTokenLocal(res.token, res.role, model.rememberMe);
                this.route.navigate(["home"]);
            },
            (err) => {
                // this.openSnackBar();
                this.toastService.error(err.error);
                console.error(err);
            }
        );
    }

    getDemoData() {
        // this.loginForm.setValue({
        //   userNameOrEmail:'DemoUser',
        //   password:'Password',
        //   rememberMe:true,
        // });
        // Or use this to set specific values
        this.loginForm.patchValue({
            userNameOrEmail: "DemoUser",
        });
    }

    validate(controlName: string) {
        return this.loginForm.get(controlName)!.invalid && this.loginForm.get(controlName)!.touched;
    }
}
