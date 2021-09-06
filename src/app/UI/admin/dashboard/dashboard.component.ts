import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
import { AddUserComponent } from "../user/add-user/add-user.component";
import { UsersListComponent } from "../user/users-list/users-list.component";

@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
    constructor() {}


    subPage:any = UsersListComponent;

    changeScreen(screenName: string){
      switch (screenName) {
        case 'usersList':
          this.subPage = UsersListComponent
          break;

          case 'addUser':
          this.subPage = AddUserComponent
          break;
        default:
          break;
      }

    }

    ngOnInit() {
        $("#sidebarCollapse").on("click", function () {
            $("#sidebar").toggleClass("active");
            $(this).toggleClass("active");
        });
    }
}
