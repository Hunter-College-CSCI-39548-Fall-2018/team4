"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var forms_1 = require("nativescript-angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login/login.component");
var settings_component_1 = require("./settings/settings.component");
var set_component_1 = require("./set/set.component");
var schedule_component_1 = require("./schedule/schedule.component");
var shared_1 = require("./shared");
var sqlite_service_1 = require("./database/sqlite.service");
var delete_component_1 = require("./delete/delete.component");
var update_component_1 = require("./update/update.component");
shared_1.setStatusBarColors();
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            providers: [
                app_routing_module_1.authProviders,
                shared_1.BackendService,
                shared_1.LoginService,
                sqlite_service_1.DatabaseService
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routing_module_1.appRoutes),
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                settings_component_1.SettingsComponent,
                set_component_1.SetComponent,
                delete_component_1.DeleteComponent,
                update_component_1.UpdateComponent,
                schedule_component_1.ScheduleComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnRkFBOEU7QUFDOUUsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSxvREFBcUU7QUFFckUsMkRBQWdFO0FBQ2hFLGlEQUErQztBQU0vQywyREFBeUQ7QUFFekQsb0VBQWtFO0FBQ2xFLHFEQUFtRDtBQUNuRCxvRUFBK0Q7QUFFL0QsbUNBQTRFO0FBQzVFLDREQUE0RDtBQUM1RCw4REFBNEQ7QUFDNUQsOERBQTJEO0FBQzNELDJCQUFrQixFQUFFLENBQUM7QUEyQnJCO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUF6QnJCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCxrQ0FBYTtnQkFDYix1QkFBYztnQkFDZCxxQkFBWTtnQkFDWixnQ0FBZTthQUNsQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsaUNBQXdCO2dCQUN4QixpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsOEJBQVMsQ0FBQzthQUM5QztZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWixnQ0FBYztnQkFDZCxzQ0FBaUI7Z0JBQ2pCLDRCQUFZO2dCQUNaLGtDQUFlO2dCQUNmLGtDQUFlO2dCQUNmLHNDQUFpQjthQUNwQjtZQUNELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDekIsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7U0FDOUIsQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG5pbXBvcnQgeyBhdXRoUHJvdmlkZXJzLCBhcHBSb3V0ZXMgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgTG9naW5Nb2R1bGUgfSBmcm9tIFwiLi9sb2dpbi9sb2dpbi5tb2R1bGVcIjtcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNldHRpbmdzQ29tcG9uZW50IH0gZnJvbSBcIi4vc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTZXRDb21wb25lbnQgfSBmcm9tIFwiLi9zZXQvc2V0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTY2hlZHVsZUNvbXBvbmVudH0gZnJvbSBcIi4vc2NoZWR1bGUvc2NoZWR1bGUuY29tcG9uZW50XCJcblxuaW1wb3J0IHsgc2V0U3RhdHVzQmFyQ29sb3JzLCBCYWNrZW5kU2VydmljZSwgTG9naW5TZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkXCI7XG5pbXBvcnQgeyBEYXRhYmFzZVNlcnZpY2UgfSBmcm9tIFwiLi9kYXRhYmFzZS9zcWxpdGUuc2VydmljZVwiO1xuaW1wb3J0IHsgRGVsZXRlQ29tcG9uZW50IH0gZnJvbSBcIi4vZGVsZXRlL2RlbGV0ZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFVwZGF0ZUNvbXBvbmVudH0gZnJvbSBcIi4vdXBkYXRlL3VwZGF0ZS5jb21wb25lbnRcIjtcbnNldFN0YXR1c0JhckNvbG9ycygpO1xuXG5ATmdNb2R1bGUoe1xuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBhdXRoUHJvdmlkZXJzLFxuICAgICAgICBCYWNrZW5kU2VydmljZSxcbiAgICAgICAgTG9naW5TZXJ2aWNlLFxuICAgICAgICBEYXRhYmFzZVNlcnZpY2VcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChhcHBSb3V0ZXMpLFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgTG9naW5Db21wb25lbnQsXG4gICAgICAgIFNldHRpbmdzQ29tcG9uZW50LFxuICAgICAgICBTZXRDb21wb25lbnQsXG4gICAgICAgIERlbGV0ZUNvbXBvbmVudCxcbiAgICAgICAgVXBkYXRlQ29tcG9uZW50LFxuICAgICAgICBTY2hlZHVsZUNvbXBvbmVudFxuICAgIF0sXG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19