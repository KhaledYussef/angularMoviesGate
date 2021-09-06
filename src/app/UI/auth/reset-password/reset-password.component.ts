import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/controllers/auth.service";
import { ToastService } from "src/app/services/toast/toast-service";

@Component({
    selector: "app-reset-password",
    templateUrl: "./reset-password.component.html",
    styleUrls: ["./reset-password.component.css"],
})
export class ResetPasswordComponent implements OnInit {
    constructor(private fb: FormBuilder, public toastService: ToastService, private auth: AuthService) {}

    myForm: FormGroup = this.fb.group({ emailadress: ["", [Validators.required, Validators.email]] });
    ngOnInit() {}

    onSubmit() {
        var email = this.myForm.value!.emailadress;
        if (this.myForm.valid) {
            this.auth.RequestResetPassword(email).subscribe(
                () => {
                  this.toastService.success('Reset Password Link has been sent to your email!');
                },
                (e) => {
                  this.toastService.error('Error occured, Please enter a valid Email!');
                  console.error(e);
                }
            );
        }
    }

    validate(controlName: string) {
        return this.myForm.get(controlName)!.invalid && this.myForm.get(controlName)!.touched;
    }
}
