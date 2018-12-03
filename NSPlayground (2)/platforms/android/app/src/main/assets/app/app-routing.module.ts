// import { NgModule } from "@angular/core";
// import { Routes } from "@angular/router";
// import { NativeScriptRouterModule } from "nativescript-angular/router";
// import { LoginComponent } from './login/login.component';
// import { AuthGuard } from "./auth-guard.service"


// export const appRoutes =  [
//     { path: "", redirectTo: "/login", pathMatch: "full" },
//     { path: "login", component: LoginComponent },
//     { path: "home", loadChildren: "./home/home.module#HomeModule" }
// ];

// @NgModule({
//     imports: [NativeScriptRouterModule.forRoot(appRoutes)],
//     exports: [NativeScriptRouterModule]
// })
// export class AppRoutingModule { }

// export const authProviders = [
//     AuthGuard
// ];


import { AuthGuard } from "./auth-guard.service";
import { LoginComponent } from './login/login.component';

export const authProviders = [
    AuthGuard
];

export const appRoutes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "home", loadChildren: "./home/home.module#HomeModule" }
];
