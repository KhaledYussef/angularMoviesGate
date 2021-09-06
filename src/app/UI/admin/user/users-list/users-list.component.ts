import { Component, OnInit } from "@angular/core";
import { AdminService } from "src/app/controllers/admin.service";
import { UserModel } from "src/app/models/UserModel";

@Component({
    selector: "users-list",
    templateUrl: "./users-list.component.html",
    styleUrls: ["./users-list.component.css"],
})
export class UsersListComponent implements OnInit {
    constructor(private api: AdminService) {}

    users: UserModel[] = [];
    // displayedColumns: string[] = UserModel.displayedColumns;
    displayedColumns: string[] = ['userName','email','phoneNumber']
    ngOnInit() {
        this.api.GetAllUsers().subscribe(
            (res) => {
              this.users = res;
              console.log('fdfsdfsdf',this.users);
            },
            (err) => console.error(err)
        );
    }
}
