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
var login_module_1 = require("./login/login.module");
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
                login_module_1.LoginModule,
            ],
            declarations: [
                app_component_1.AppComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFGQUFxRjtBQUNyRixpRkFBaUY7QUFDakYsbUZBQW1GO0FBQ25GLHdFQUF3RTtBQUN4RSwwRUFBMEU7QUFDMUUsMkRBQTJEO0FBQzNELGtEQUFrRDtBQUNsRCw0REFBNEQ7QUFDNUQsd0RBQXdEO0FBQ3hELCtEQUErRDtBQUMvRCwrRUFBK0U7QUFDL0UsbUVBQW1FO0FBQ25FLHNEQUFzRDs7QUFFdEQsY0FBYztBQUNkLG1CQUFtQjtBQUNuQix1QkFBdUI7QUFDdkIsU0FBUztBQUNULGlCQUFpQjtBQUNqQiw4QkFBOEI7QUFDOUIsbUNBQW1DO0FBQ25DLHdDQUF3QztBQUN4Qyx1REFBdUQ7QUFDdkQsc0JBQXNCO0FBQ3RCLFNBQVM7QUFDVCxzQkFBc0I7QUFDdEIsd0JBQXdCO0FBQ3hCLHlCQUF5QjtBQUN6QixTQUFTO0FBQ1QsbUJBQW1CO0FBQ25CLHlCQUF5QjtBQUN6QiwwQkFBMEI7QUFDMUIsMkJBQTJCO0FBQzNCLHVCQUF1QjtBQUN2QixTQUFTO0FBQ1QsaUJBQWlCO0FBQ2pCLDJCQUEyQjtBQUMzQixRQUFRO0FBQ1IsS0FBSztBQUNMLDZCQUE2QjtBQUc3QixnRkFBOEU7QUFDOUUsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSxvREFBcUU7QUFFckUsMkRBQWdFO0FBQ2hFLGlEQUErQztBQUUvQyxxREFBbUQ7QUFFbkQsbUNBQTRFO0FBQzVFLDREQUE0RDtBQUU1RCwyQkFBa0IsRUFBRSxDQUFDO0FBdUJyQjtJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBckJyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1Asa0NBQWE7Z0JBQ2IsdUJBQWM7Z0JBQ2QscUJBQVk7Z0JBQ1osZ0NBQWU7YUFDbEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiwrQkFBdUI7Z0JBQ3ZCLGlDQUF3QjtnQkFDeEIsaUNBQXdCLENBQUMsT0FBTyxDQUFDLDhCQUFTLENBQUM7Z0JBQzNDLDBCQUFXO2FBRWQ7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7YUFDZjtZQUNELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDekIsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7U0FDOUIsQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IE5nTW9kdWxlLCBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG4vLyBpbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG4vLyBpbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG4vLyBpbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuLy8gaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvaG9tZS5jb21wb25lbnRcIlxuLy8gaW1wb3J0IHsgRGF0YWJhc2VTZXJ2aWNlIH0gZnJvbSBcIi4vZGF0YWJhc2Uvc3FsaXRlLnNlcnZpY2VcIjtcbi8vIGltcG9ydCB7IHNldFN0YXR1c0JhckNvbG9ycywgQmFja2VuZFNlcnZpY2UsIExvZ2luU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZFwiO1xuLy8gaW1wb3J0IHsgYXV0aFByb3ZpZGVycywgYXBwUm91dGVzIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG4vLyBpbXBvcnQgeyBMb2dpbk1vZHVsZSB9IGZyb20gXCIuL2xvZ2luL2xvZ2luLm1vZHVsZVwiO1xuXG4vLyBATmdNb2R1bGUoe1xuLy8gICAgIGJvb3RzdHJhcDogW1xuLy8gICAgICAgICBBcHBDb21wb25lbnRcbi8vICAgICBdLFxuLy8gICAgIGltcG9ydHM6IFtcbi8vICAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuLy8gICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbi8vICAgICAgICAgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSxcbi8vICAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3QoYXBwUm91dGVzKSxcbi8vICAgICAgICAgTG9naW5Nb2R1bGVcbi8vICAgICBdLFxuLy8gICAgIGRlY2xhcmF0aW9uczogW1xuLy8gICAgICAgICBBcHBDb21wb25lbnQsXG4vLyAgICAgICAgIExvZ2luQ29tcG9uZW50XG4vLyAgICAgXSxcbi8vICAgICBwcm92aWRlcnM6IFtcbi8vICAgICAgICAgYXV0aFByb3ZpZGVycyxcbi8vICAgICAgICAgQmFja2VuZFNlcnZpY2UsXG4vLyAgICAgICAgIERhdGFiYXNlU2VydmljZSxcbi8vICAgICAgICAgTG9naW5TZXJ2aWNlXG4vLyAgICAgXSxcbi8vICAgICBzY2hlbWFzOiBbXG4vLyAgICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbi8vICAgICBdXG4vLyB9KVxuLy8gZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cblxuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuaW1wb3J0IHsgYXV0aFByb3ZpZGVycywgYXBwUm91dGVzIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IExvZ2luTW9kdWxlIH0gZnJvbSBcIi4vbG9naW4vbG9naW4ubW9kdWxlXCI7XG5cbmltcG9ydCB7IHNldFN0YXR1c0JhckNvbG9ycywgQmFja2VuZFNlcnZpY2UsIExvZ2luU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZFwiO1xuaW1wb3J0IHsgRGF0YWJhc2VTZXJ2aWNlIH0gZnJvbSBcIi4vZGF0YWJhc2Uvc3FsaXRlLnNlcnZpY2VcIjtcblxuc2V0U3RhdHVzQmFyQ29sb3JzKCk7XG5cbkBOZ01vZHVsZSh7XG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIGF1dGhQcm92aWRlcnMsXG4gICAgICAgIEJhY2tlbmRTZXJ2aWNlLFxuICAgICAgICBMb2dpblNlcnZpY2UsXG4gICAgICAgIERhdGFiYXNlU2VydmljZVxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KGFwcFJvdXRlcyksXG4gICAgICAgIExvZ2luTW9kdWxlLFxuICAgICAgIFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19