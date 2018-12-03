"use strict";
// import { NgModule } from "@angular/core";
// import { Routes } from "@angular/router";
// import { NativeScriptRouterModule } from "nativescript-angular/router";
// import { LoginComponent } from './login/login.component';
// import { AuthGuard } from "./auth-guard.service"
Object.defineProperty(exports, "__esModule", { value: true });
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
var auth_guard_service_1 = require("./auth-guard.service");
exports.authProviders = [
    auth_guard_service_1.AuthGuard
];
exports.appRoutes = [
    { path: "", redirectTo: "/", pathMatch: "full" }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw0Q0FBNEM7QUFDNUMsNENBQTRDO0FBQzVDLDBFQUEwRTtBQUMxRSw0REFBNEQ7QUFDNUQsbURBQW1EOztBQUduRCw4QkFBOEI7QUFDOUIsNkRBQTZEO0FBQzdELG9EQUFvRDtBQUNwRCxzRUFBc0U7QUFDdEUsS0FBSztBQUVMLGNBQWM7QUFDZCw4REFBOEQ7QUFDOUQsMENBQTBDO0FBQzFDLEtBQUs7QUFDTCxvQ0FBb0M7QUFFcEMsaUNBQWlDO0FBQ2pDLGdCQUFnQjtBQUNoQixLQUFLO0FBR0wsMkRBQWlEO0FBRXBDLFFBQUEsYUFBYSxHQUFHO0lBQ3pCLDhCQUFTO0NBQ1osQ0FBQztBQUVXLFFBQUEsU0FBUyxHQUFHO0lBQ3JCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7Q0FDbkQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbi8vIGltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbi8vIGltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuLy8gaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSBcIi4vYXV0aC1ndWFyZC5zZXJ2aWNlXCJcblxuXG4vLyBleHBvcnQgY29uc3QgYXBwUm91dGVzID0gIFtcbi8vICAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2xvZ2luXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbi8vICAgICB7IHBhdGg6IFwibG9naW5cIiwgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxuLy8gICAgIHsgcGF0aDogXCJob21lXCIsIGxvYWRDaGlsZHJlbjogXCIuL2hvbWUvaG9tZS5tb2R1bGUjSG9tZU1vZHVsZVwiIH1cbi8vIF07XG5cbi8vIEBOZ01vZHVsZSh7XG4vLyAgICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KGFwcFJvdXRlcyldLFxuLy8gICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG4vLyB9KVxuLy8gZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG5cbi8vIGV4cG9ydCBjb25zdCBhdXRoUHJvdmlkZXJzID0gW1xuLy8gICAgIEF1dGhHdWFyZFxuLy8gXTtcblxuXG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tIFwiLi9hdXRoLWd1YXJkLnNlcnZpY2VcIjtcblxuZXhwb3J0IGNvbnN0IGF1dGhQcm92aWRlcnMgPSBbXG4gICAgQXV0aEd1YXJkXG5dO1xuXG5leHBvcnQgY29uc3QgYXBwUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfVxuXTtcbiJdfQ==