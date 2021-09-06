import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserModel } from "../models/UserModel";

@Injectable({
    providedIn: "root",
})
export class AdminService {
    constructor(private http: HttpClient) {}
    private baseUrl = "http://localhost:49061/admin/";
    private token = "Bearer " + localStorage.getItem('token');

    private headers = new HttpHeaders({ "content-type": "application/json", 'Authorization':this.token });
    GetAllUsers(): Observable<UserModel[]> {
      console.log(this.token);

        return this.http.get<UserModel[]>(this.baseUrl + "getAllUsers",{headers: this.headers}).pipe();
    }
}
