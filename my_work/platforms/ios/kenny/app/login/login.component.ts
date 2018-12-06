import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
// import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";

// import { User } from "../shared/user.model";
// import { UserService } from "../shared/user.service";
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
        this.user.email = "foo2@foo.com";
        this.user.password = "foo";
        // this.processing = true;
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

    // forgotPassword() {
    //     prompt({
    //         title: "Forgot Password",
    //         message: "Enter the email address you used to register for APP NAME to reset your password.",
    //         inputType: "email",
    //         defaultText: "",
    //         okButtonText: "Ok",
    //         cancelButtonText: "Cancel"
    //     }).then((data) => {
    //         if (data.result) {
    //             this.userService.resetPassword(data.text.trim())
    //                 .then(() => {
    //                     this.alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
    //                 }).catch(() => {
    //                     this.alert("Unfortunately, an error occurred resetting your password.");
    //                 });
    //         }
    //     });
    // }

    // focusPassword() {
    //     this.password.nativeElement.focus();
    // }
    // focusConfirmPassword() {
    //     if (!this.isLoggingIn) {
    //         this.confirmPassword.nativeElement.focus();
    //     }
    // }

//     alert(message: string) {
//         return alert({
//             title: "APP NAME",
//             okButtonText: "OK",
//             message: message
//         });
//     }
// }

}
