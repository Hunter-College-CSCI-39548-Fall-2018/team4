import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "nativescript-angular/router";
import { setString } from "application-settings";
import { alert, LoginService, User } from "../shared";

@Component({
    selector: "app-login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    isLoggingIn = true;
    user: User;
    processing = false;
    @ViewChild("password") password: ElementRef;
    @ViewChild("confirmPassword") confirmPassword: ElementRef;

    constructor(private page: Page, private userService: LoginService, private router: Router, private RouterExtensions: RouterExtensions) {
        this.page.actionBarHidden = true;
        this.user = new User();
    }

    toggleForm() {
        this.isLoggingIn = !this.isLoggingIn;
    }

    submit() {
        if (!this.user.email || !this.user.password) {
            alert("Please provide both an email address and password.");
            return;
        }

        this.processing = true;
        if (this.isLoggingIn) {
            this.login();
        } else {
            this.register();
        }
    }

    login() {
        this.userService.login(this.user)
            .then(status => {
                setString("user_id", this.user.email);
                this.RouterExtensions.navigate(["/home"], {clearHistory: true});
            })
            .catch(() => {
                this.clearFields();
                alert("Unfortunately we could not find your account.");
            });
    }

    register() {
        this.userService.register(this.user)
            .then(status => {
                this.processing = false;
                alert("Your account was successfully created.");
                this.isLoggingIn = true;
            })
            .catch(() => {
                this.processing = false;
                alert("Unfortunately we were unable to create your account.");
            });
    }

    clearFields(){
        this.user.email = '';
		this.user.password = '';
    }
}
