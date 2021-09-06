import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginModel, RegisterModel } from "src/app/models/AccountModels";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CryptService } from "../services/security/crypt.service";
@Injectable({
    providedIn: "root",
})
export class AuthService {
    constructor(private http: HttpClient, private crypto: CryptService) {}
    private baseUrl = "http://localhost:49061/";
    private headers = new HttpHeaders({ "content-type": "application/json" });
    Register(model: RegisterModel): Observable<RegisterModel> {
        return this.http
            .post<RegisterModel>(this.baseUrl + "register", model, {
                headers: this.headers,
            })
            .pipe();
    }
    //******************************************************************* */
    Login(model: LoginModel): Observable<any> {
        return this.http
            .post<LoginModel>(this.baseUrl + "login", model, {
                headers: this.headers,
            })
            .pipe();
    }

    //******************************************************************* */
    SaveTokenLocal(token: string, role: string, rememberMe: boolean) {
        let expire = new Date();
        if (rememberMe) {
            expire.setDate(expire.getDay() + 5);
        } else {
            expire.setMinutes(expire.getMinutes() + 60);
        }
        localStorage.setItem("token", token);
        localStorage.setItem("role", this.crypto.encryptUsingAES256(role));
        localStorage.setItem("tokenExpire", this.crypto.encryptUsingAES256(expire.toString()));
    }

    //******************************************************************* */
    GetLocalToken() {
        const token = localStorage.getItem("token");
        const expire = this.crypto.decryptUsingAES256(localStorage.getItem("tokenExpire")!);
        const role = this.crypto.decryptUsingAES256(localStorage.getItem("role")!);

        if (token && role) {
            console.log(token, role, expire);
        }
    }

    //******************************************************************* */
    RequestResetPassword(email: string): Observable<any> {
        return this.http.get<string>(this.baseUrl + "resetPassword/" + email).pipe();
    }

    //******************************************************************* */
    ConfirmResetPassword(model: { email: string; password: string; code: string }): Observable<any> {
        return this.http.post<{ email: string; password: string; code: string }>(this.baseUrl + "resetPassword", model).pipe();
    }
}
