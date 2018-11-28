import { Component, OnInit } from "@angular/core";
import { User } from "../shared/user/user.model";
import { UserService } from "../shared/user/user.service";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";

@Component({
  selector: "gr-login",
  providers: [UserService],
  styleUrls: ["login/login.component.css"],
  templateUrl: "login/login.component.html"
})

export class LoginComponent implements OnInit {
  user: User;
  isLoggingIn = true;

  constructor(private router: Router, private userService: UserService, private page: Page) {
    this.user = new User();
  }

  ngOnInit() {
  this.page.actionBarHidden = true;
}

submit() {
  if (this.isLoggingIn) {
    this.login();
  } else {
    this.signUp();
  }
}

login() {
  this.userService.login(this.user)
    .subscribe(
      () => this.router.navigate(["/list"]),
      (error) => alert("Unfortunately we could not find your account.")
    );
}
signUp() {
  this.userService.register(this.user)
    .subscribe(
      () => {
        alert("Your account was successfully created.");
        this.toggleDisplay();
      },
      () => alert("Unfortunately we were unable to create your account.")
    );
}

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}
