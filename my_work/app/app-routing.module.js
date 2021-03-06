"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_component_1 = require("./login/login.component");
var settings_component_1 = require("./settings/settings.component");
var set_component_1 = require("./set/set.component");
var auth_guard_service_1 = require("./auth-guard.service");
var delete_component_1 = require("./delete/delete.component");
var update_component_1 = require("./update/update.component");
var schedule_component_1 = require("./schedule/schedule.component");
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
    { path: "update", component: update_component_1.UpdateComponent },
    { path: "schedule", component: schedule_component_1.ScheduleComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkRBQXlEO0FBQ3pELG9FQUFrRTtBQUNsRSxxREFBbUQ7QUFFbkQsMkRBQWlEO0FBQ2pELDhEQUE0RDtBQUM1RCw4REFBNEQ7QUFDNUQsb0VBQWdFO0FBQ25ELFFBQUEsYUFBYSxHQUFHO0lBQ3pCLDhCQUFTO0NBQ1osQ0FBQztBQUVXLFFBQUEsU0FBUyxHQUFHO0lBQ3JCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDckQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBQzVDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsK0JBQStCLEVBQUU7SUFDL0QsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFDO0lBQzVDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUM7SUFDakQsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSw0QkFBWSxFQUFDO0lBQ3ZDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBQztJQUM3QyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUM7SUFDN0MsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBQztDQUNwRCxDQUFDO0FBRUY7SUFBQTtJQUFnQyxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2V0dGluZ3NDb21wb25lbnQgfSBmcm9tICcuL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZXRDb21wb25lbnQgfSBmcm9tIFwiLi9zZXQvc2V0LmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tIFwiLi9hdXRoLWd1YXJkLnNlcnZpY2VcIjtcbmltcG9ydCB7IERlbGV0ZUNvbXBvbmVudCB9IGZyb20gXCIuL2RlbGV0ZS9kZWxldGUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBVcGRhdGVDb21wb25lbnQgfSBmcm9tIFwiLi91cGRhdGUvdXBkYXRlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTY2hlZHVsZUNvbXBvbmVudCB9IGZyb20gXCIuL3NjaGVkdWxlL3NjaGVkdWxlLmNvbXBvbmVudFwiXG5leHBvcnQgY29uc3QgYXV0aFByb3ZpZGVycyA9IFtcbiAgICBBdXRoR3VhcmRcbl07XG5cbmV4cG9ydCBjb25zdCBhcHBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9sb2dpblwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcImxvZ2luXCIsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiaG9tZVwiLCBsb2FkQ2hpbGRyZW46IFwiLi9ob21lL2hvbWUubW9kdWxlI0hvbWVNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJsb2dvdXRcIiwgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudH0sXG4gICAgeyBwYXRoOiBcInNldHRpbmdzXCIsIGNvbXBvbmVudDogU2V0dGluZ3NDb21wb25lbnR9LFxuICAgIHsgcGF0aDogXCJzZXRcIiwgY29tcG9uZW50OiBTZXRDb21wb25lbnR9LFxuICAgIHsgcGF0aDogXCJkZWxldGVcIiwgY29tcG9uZW50OiBEZWxldGVDb21wb25lbnR9LFxuICAgIHsgcGF0aDogXCJ1cGRhdGVcIiwgY29tcG9uZW50OiBVcGRhdGVDb21wb25lbnR9LFxuICAgIHsgcGF0aDogXCJzY2hlZHVsZVwiLCBjb21wb25lbnQ6IFNjaGVkdWxlQ29tcG9uZW50fVxuXTtcblxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=