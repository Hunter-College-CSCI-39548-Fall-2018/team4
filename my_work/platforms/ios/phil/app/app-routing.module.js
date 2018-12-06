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
var update_component_1 = require("./update/update.component");
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
    { path: "delete", component: delete_component_1.DeleteComponent },
    { path: "update", component: update_component_1.UpdateComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw0Q0FBNEM7QUFDNUMsNENBQTRDO0FBQzVDLDBFQUEwRTtBQUMxRSw0REFBNEQ7QUFDNUQsbURBQW1EOztBQUduRCw4QkFBOEI7QUFDOUIsNkRBQTZEO0FBQzdELG9EQUFvRDtBQUNwRCxzRUFBc0U7QUFDdEUsS0FBSztBQUVMLGNBQWM7QUFDZCw4REFBOEQ7QUFDOUQsMENBQTBDO0FBQzFDLEtBQUs7QUFDTCxvQ0FBb0M7QUFFcEMsaUNBQWlDO0FBQ2pDLGdCQUFnQjtBQUNoQixLQUFLO0FBRUwsMkRBQXlEO0FBQ3pELG9FQUFrRTtBQUNsRSxxREFBbUQ7QUFFbkQsMkRBQWlEO0FBQ2pELDhEQUE0RDtBQUM1RCw4REFBNEQ7QUFFL0MsUUFBQSxhQUFhLEdBQUc7SUFDekIsOEJBQVM7Q0FDWixDQUFDO0FBRVcsUUFBQSxTQUFTLEdBQUc7SUFDckIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUNyRCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7SUFDNUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSwrQkFBK0IsRUFBRTtJQUMvRCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUM7SUFDNUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBQztJQUNqRCxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLDRCQUFZLEVBQUM7SUFDdkMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFDO0lBQzdDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBQztDQUNoRCxDQUFDO0FBRUY7SUFBQTtJQUFnQyxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbi8vIGltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbi8vIGltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuLy8gaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSBcIi4vYXV0aC1ndWFyZC5zZXJ2aWNlXCJcblxuXG4vLyBleHBvcnQgY29uc3QgYXBwUm91dGVzID0gIFtcbi8vICAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2xvZ2luXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbi8vICAgICB7IHBhdGg6IFwibG9naW5cIiwgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxuLy8gICAgIHsgcGF0aDogXCJob21lXCIsIGxvYWRDaGlsZHJlbjogXCIuL2hvbWUvaG9tZS5tb2R1bGUjSG9tZU1vZHVsZVwiIH1cbi8vIF07XG5cbi8vIEBOZ01vZHVsZSh7XG4vLyAgICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KGFwcFJvdXRlcyldLFxuLy8gICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG4vLyB9KVxuLy8gZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG5cbi8vIGV4cG9ydCBjb25zdCBhdXRoUHJvdmlkZXJzID0gW1xuLy8gICAgIEF1dGhHdWFyZFxuLy8gXTtcblxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZXR0aW5nc0NvbXBvbmVudCB9IGZyb20gJy4vc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50JztcbmltcG9ydCB7IFNldENvbXBvbmVudCB9IGZyb20gXCIuL3NldC9zZXQuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gXCIuL2F1dGgtZ3VhcmQuc2VydmljZVwiO1xuaW1wb3J0IHsgRGVsZXRlQ29tcG9uZW50IH0gZnJvbSBcIi4vZGVsZXRlL2RlbGV0ZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFVwZGF0ZUNvbXBvbmVudCB9IGZyb20gXCIuL3VwZGF0ZS91cGRhdGUuY29tcG9uZW50XCI7XG5cbmV4cG9ydCBjb25zdCBhdXRoUHJvdmlkZXJzID0gW1xuICAgIEF1dGhHdWFyZFxuXTtcblxuZXhwb3J0IGNvbnN0IGFwcFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2xvZ2luXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICB7IHBhdGg6IFwibG9naW5cIiwgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJob21lXCIsIGxvYWRDaGlsZHJlbjogXCIuL2hvbWUvaG9tZS5tb2R1bGUjSG9tZU1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcImxvZ291dFwiLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50fSxcbiAgICB7IHBhdGg6IFwic2V0dGluZ3NcIiwgY29tcG9uZW50OiBTZXR0aW5nc0NvbXBvbmVudH0sXG4gICAgeyBwYXRoOiBcInNldFwiLCBjb21wb25lbnQ6IFNldENvbXBvbmVudH0sXG4gICAgeyBwYXRoOiBcImRlbGV0ZVwiLCBjb21wb25lbnQ6IERlbGV0ZUNvbXBvbmVudH0sXG4gICAgeyBwYXRoOiBcInVwZGF0ZVwiLCBjb21wb25lbnQ6IFVwZGF0ZUNvbXBvbmVudH1cbl07XG5cbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIl19