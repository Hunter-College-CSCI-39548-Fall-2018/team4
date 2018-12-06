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

import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';
import { SetComponent } from "./set/set.component";

import { AuthGuard } from "./auth-guard.service";
import { DeleteComponent } from "./delete/delete.component";
import { UpdateComponent } from "./update/update.component";

export const authProviders = [
    AuthGuard
];

export const appRoutes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "logout", component: LoginComponent},
    { path: "settings", component: SettingsComponent},
    { path: "set", component: SetComponent},
    { path: "delete", component: DeleteComponent},
    { path: "update", component: UpdateComponent}
];

export class AppRoutingModule { }
