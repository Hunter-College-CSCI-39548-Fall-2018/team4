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
var login_component_1 = require("./login/login.component");
var settings_component_1 = require("./settings/settings.component");
var set_component_1 = require("./set/set.component");
var auth_guard_service_1 = require("./auth-guard.service");
var delete_component_1 = require("./delete/delete.component");
exports.authProviders = [
    auth_guard_service_1.AuthGuard
];
exports.appRoutes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: login_component_1.LoginComponent },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "logout", component: login_component_1.LoginComponent },
    { path: "settings", component: settings_component_1.SettingsComponent },
    { path: "set", component: set_component_1.SetComponent },
    { path: "delete", component: delete_component_1.DeleteComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw0Q0FBNEM7QUFDNUMsNENBQTRDO0FBQzVDLDBFQUEwRTtBQUMxRSw0REFBNEQ7QUFDNUQsbURBQW1EOztBQUduRCw4QkFBOEI7QUFDOUIsNkRBQTZEO0FBQzdELG9EQUFvRDtBQUNwRCxzRUFBc0U7QUFDdEUsS0FBSztBQUVMLGNBQWM7QUFDZCw4REFBOEQ7QUFDOUQsMENBQTBDO0FBQzFDLEtBQUs7QUFDTCxvQ0FBb0M7QUFFcEMsaUNBQWlDO0FBQ2pDLGdCQUFnQjtBQUNoQixLQUFLO0FBRUwsMkRBQXlEO0FBQ3pELG9FQUFrRTtBQUNsRSxxREFBbUQ7QUFFbkQsMkRBQWlEO0FBQ2pELDhEQUE0RDtBQUcvQyxRQUFBLGFBQWEsR0FBRztJQUN6Qiw4QkFBUztDQUNaLENBQUM7QUFFVyxRQUFBLFNBQVMsR0FBRztJQUNyQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3JELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtJQUM1QyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLCtCQUErQixFQUFFO0lBQy9ELEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBQztJQUM1QyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFDO0lBQ2pELEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsNEJBQVksRUFBQztJQUN2QyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUM7Q0FDaEQsQ0FBQztBQUVGO0lBQUE7SUFBZ0MsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQyxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG4vLyBpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG4vLyBpbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50Jztcbi8vIGltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gXCIuL2F1dGgtZ3VhcmQuc2VydmljZVwiXG5cblxuLy8gZXhwb3J0IGNvbnN0IGFwcFJvdXRlcyA9ICBbXG4vLyAgICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9sb2dpblwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4vLyAgICAgeyBwYXRoOiBcImxvZ2luXCIsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcbi8vICAgICB7IHBhdGg6IFwiaG9tZVwiLCBsb2FkQ2hpbGRyZW46IFwiLi9ob21lL2hvbWUubW9kdWxlI0hvbWVNb2R1bGVcIiB9XG4vLyBdO1xuXG4vLyBATmdNb2R1bGUoe1xuLy8gICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChhcHBSb3V0ZXMpXSxcbi8vICAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxuLy8gfSlcbi8vIGV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuXG4vLyBleHBvcnQgY29uc3QgYXV0aFByb3ZpZGVycyA9IFtcbi8vICAgICBBdXRoR3VhcmRcbi8vIF07XG5cbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2V0dGluZ3NDb21wb25lbnQgfSBmcm9tICcuL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZXRDb21wb25lbnQgfSBmcm9tIFwiLi9zZXQvc2V0LmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tIFwiLi9hdXRoLWd1YXJkLnNlcnZpY2VcIjtcbmltcG9ydCB7IERlbGV0ZUNvbXBvbmVudCB9IGZyb20gXCIuL2RlbGV0ZS9kZWxldGUuY29tcG9uZW50XCI7XG5cblxuZXhwb3J0IGNvbnN0IGF1dGhQcm92aWRlcnMgPSBbXG4gICAgQXV0aEd1YXJkXG5dO1xuXG5leHBvcnQgY29uc3QgYXBwUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvbG9naW5cIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIHsgcGF0aDogXCJsb2dpblwiLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImhvbWVcIiwgbG9hZENoaWxkcmVuOiBcIi4vaG9tZS9ob21lLm1vZHVsZSNIb21lTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwibG9nb3V0XCIsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnR9LFxuICAgIHsgcGF0aDogXCJzZXR0aW5nc1wiLCBjb21wb25lbnQ6IFNldHRpbmdzQ29tcG9uZW50fSxcbiAgICB7IHBhdGg6IFwic2V0XCIsIGNvbXBvbmVudDogU2V0Q29tcG9uZW50fSxcbiAgICB7IHBhdGg6IFwiZGVsZXRlXCIsIGNvbXBvbmVudDogRGVsZXRlQ29tcG9uZW50fVxuXTtcblxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=