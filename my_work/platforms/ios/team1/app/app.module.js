"use strict";
// import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
// import { NativeScriptModule } from "nativescript-angular/nativescript.module";
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// import { NativeScriptRouterModule } from "nativescript-angular/router";
// import { AppRoutingModule } from "./app-routing.module";
// import { AppComponent } from "./app.component";
// import { LoginComponent } from "./login/login.component";
// import { HomeComponent } from "./home/home.component"
// import { DatabaseService } from "./database/sqlite.service";
// import { setStatusBarColors, BackendService, LoginService } from "./shared";
// import { authProviders, appRoutes } from "./app-routing.module";
// import { LoginModule } from "./login/login.module";
Object.defineProperty(exports, "__esModule", { value: true });
// @NgModule({
//     bootstrap: [
//         AppComponent
//     ],
//     imports: [
//         NativeScriptModule,
//         NativeScriptFormsModule,
//         NativeScriptHttpClientModule,
//         NativeScriptRouterModule.forRoot(appRoutes),
//         LoginModule
//     ],
//     declarations: [
//         AppComponent,
//         LoginComponent
//     ],
//     providers: [
//         authProviders,
//         BackendService,
//         DatabaseService,
//         LoginService
//     ],
//     schemas: [
//         NO_ERRORS_SCHEMA
//     ]
// })
// export class AppModule { }
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var forms_1 = require("nativescript-angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login/login.component");
var settings_component_1 = require("./settings/settings.component");
var set_component_1 = require("./set/set.component");
var shared_1 = require("./shared");
var sqlite_service_1 = require("./database/sqlite.service");
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
                set_component_1.SetComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFGQUFxRjtBQUNyRixpRkFBaUY7QUFDakYsbUZBQW1GO0FBQ25GLHdFQUF3RTtBQUN4RSwwRUFBMEU7QUFDMUUsMkRBQTJEO0FBQzNELGtEQUFrRDtBQUNsRCw0REFBNEQ7QUFDNUQsd0RBQXdEO0FBQ3hELCtEQUErRDtBQUMvRCwrRUFBK0U7QUFDL0UsbUVBQW1FO0FBQ25FLHNEQUFzRDs7QUFFdEQsY0FBYztBQUNkLG1CQUFtQjtBQUNuQix1QkFBdUI7QUFDdkIsU0FBUztBQUNULGlCQUFpQjtBQUNqQiw4QkFBOEI7QUFDOUIsbUNBQW1DO0FBQ25DLHdDQUF3QztBQUN4Qyx1REFBdUQ7QUFDdkQsc0JBQXNCO0FBQ3RCLFNBQVM7QUFDVCxzQkFBc0I7QUFDdEIsd0JBQXdCO0FBQ3hCLHlCQUF5QjtBQUN6QixTQUFTO0FBQ1QsbUJBQW1CO0FBQ25CLHlCQUF5QjtBQUN6QiwwQkFBMEI7QUFDMUIsMkJBQTJCO0FBQzNCLHVCQUF1QjtBQUN2QixTQUFTO0FBQ1QsaUJBQWlCO0FBQ2pCLDJCQUEyQjtBQUMzQixRQUFRO0FBQ1IsS0FBSztBQUNMLDZCQUE2QjtBQUc3QixnRkFBOEU7QUFDOUUsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSxvREFBcUU7QUFFckUsMkRBQWdFO0FBQ2hFLGlEQUErQztBQU0vQywyREFBeUQ7QUFFekQsb0VBQWtFO0FBQ2xFLHFEQUFtRDtBQUduRCxtQ0FBNEU7QUFDNUUsNERBQTREO0FBRTVELDJCQUFrQixFQUFFLENBQUM7QUEwQnJCO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUF4QnJCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCxrQ0FBYTtnQkFDYix1QkFBYztnQkFDZCxxQkFBWTtnQkFDWixnQ0FBZTthQUNsQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsaUNBQXdCO2dCQUN4QixpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsOEJBQVMsQ0FBQzthQUc5QztZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWixnQ0FBYztnQkFDZCxzQ0FBaUI7Z0JBQ2pCLDRCQUFZO2FBQ2Y7WUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQ3pCLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzlCLENBQUM7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBOZ01vZHVsZSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuLy8gaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuLy8gaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuLy8gaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcbi8vIGltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lL2hvbWUuY29tcG9uZW50XCJcbi8vIGltcG9ydCB7IERhdGFiYXNlU2VydmljZSB9IGZyb20gXCIuL2RhdGFiYXNlL3NxbGl0ZS5zZXJ2aWNlXCI7XG4vLyBpbXBvcnQgeyBzZXRTdGF0dXNCYXJDb2xvcnMsIEJhY2tlbmRTZXJ2aWNlLCBMb2dpblNlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWRcIjtcbi8vIGltcG9ydCB7IGF1dGhQcm92aWRlcnMsIGFwcFJvdXRlcyB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuLy8gaW1wb3J0IHsgTG9naW5Nb2R1bGUgfSBmcm9tIFwiLi9sb2dpbi9sb2dpbi5tb2R1bGVcIjtcblxuLy8gQE5nTW9kdWxlKHtcbi8vICAgICBib290c3RyYXA6IFtcbi8vICAgICAgICAgQXBwQ29tcG9uZW50XG4vLyAgICAgXSxcbi8vICAgICBpbXBvcnRzOiBbXG4vLyAgICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbi8vICAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4vLyAgICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXG4vLyAgICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KGFwcFJvdXRlcyksXG4vLyAgICAgICAgIExvZ2luTW9kdWxlXG4vLyAgICAgXSxcbi8vICAgICBkZWNsYXJhdGlvbnM6IFtcbi8vICAgICAgICAgQXBwQ29tcG9uZW50LFxuLy8gICAgICAgICBMb2dpbkNvbXBvbmVudFxuLy8gICAgIF0sXG4vLyAgICAgcHJvdmlkZXJzOiBbXG4vLyAgICAgICAgIGF1dGhQcm92aWRlcnMsXG4vLyAgICAgICAgIEJhY2tlbmRTZXJ2aWNlLFxuLy8gICAgICAgICBEYXRhYmFzZVNlcnZpY2UsXG4vLyAgICAgICAgIExvZ2luU2VydmljZVxuLy8gICAgIF0sXG4vLyAgICAgc2NoZW1hczogW1xuLy8gICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4vLyAgICAgXVxuLy8gfSlcbi8vIGV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG5cblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbmltcG9ydCB7IGF1dGhQcm92aWRlcnMsIGFwcFJvdXRlcyB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBMb2dpbk1vZHVsZSB9IGZyb20gXCIuL2xvZ2luL2xvZ2luLm1vZHVsZVwiO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5cbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vbG9naW4vbG9naW4uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2V0dGluZ3NDb21wb25lbnQgfSBmcm9tIFwiLi9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNldENvbXBvbmVudCB9IGZyb20gXCIuL3NldC9zZXQuY29tcG9uZW50XCI7XG5cblxuaW1wb3J0IHsgc2V0U3RhdHVzQmFyQ29sb3JzLCBCYWNrZW5kU2VydmljZSwgTG9naW5TZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkXCI7XG5pbXBvcnQgeyBEYXRhYmFzZVNlcnZpY2UgfSBmcm9tIFwiLi9kYXRhYmFzZS9zcWxpdGUuc2VydmljZVwiO1xuXG5zZXRTdGF0dXNCYXJDb2xvcnMoKTtcblxuQE5nTW9kdWxlKHtcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgYXV0aFByb3ZpZGVycyxcbiAgICAgICAgQmFja2VuZFNlcnZpY2UsXG4gICAgICAgIExvZ2luU2VydmljZSxcbiAgICAgICAgRGF0YWJhc2VTZXJ2aWNlXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3QoYXBwUm91dGVzKSxcbiAgXG5cbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxuICAgICAgICBTZXR0aW5nc0NvbXBvbmVudCxcbiAgICAgICAgU2V0Q29tcG9uZW50XG4gICAgXSxcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICAgIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=