import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/controllers/auth.service";
import { ToastService } from "src/app/services/toast/toast-service";

@Component({
    selector: "app-confirm-reset-password",
    templateUrl: "./confirm-reset-password.component.html",
    styleUrls: ["./confirm-reset-password.component.css"],
})
export class ConfirmResetPasswordComponent implements OnInit {
    constructor(private fb: FormBuilder, private auth: AuthService, private toast: ToastService, private activeRote: ActivatedRoute, private router: Router) {}

    myForm: FormGroup = this.fb.group({
        password: ["", [Validators.required, Validators.minLength(6)]],
        passwordConfirm: ["", [Validators.required, Validators.minLength(6)]],
    });
    ngOnInit() {}

    onsubmit() {
        if (this.myForm.invalid) return;
        var pass = this.myForm.value.password;
        var passConfirm = this.myForm.value.passwordConfirm;
        if (pass !== passConfirm) {
            this.toast.error("Password And Confirm Password are not the same!");
            return;
        }

        this.activeRote.queryParams.subscribe((params) => {
            const email = params["email"];
            const token = params["token"];

            if (email && token) {
                console.log(email, token);
                this.auth.ConfirmResetPassword({ email, code: token, password: pass }).subscribe(
                    () => {
                      this.router.navigate(['login']);
                    },
                    (e) => {
                      console.error(e)
                      this.toast.error('Operation faild, Try again!')
                    }
                );
            } else {
                this.router.navigate(["home"]).then(() => window.location.reload());
            }
        });
    }

    validate(controlName: string) {
        return this.myForm.get(controlName)!.invalid && this.myForm.get(controlName)!.touched;
    }
}
