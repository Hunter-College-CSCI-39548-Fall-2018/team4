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
var delete_component_1 = require("./delete/delete.component");
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
                delete_component_1.DeleteComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFGQUFxRjtBQUNyRixpRkFBaUY7QUFDakYsbUZBQW1GO0FBQ25GLHdFQUF3RTtBQUN4RSwwRUFBMEU7QUFDMUUsMkRBQTJEO0FBQzNELGtEQUFrRDtBQUNsRCw0REFBNEQ7QUFDNUQsd0RBQXdEO0FBQ3hELCtEQUErRDtBQUMvRCwrRUFBK0U7QUFDL0UsbUVBQW1FO0FBQ25FLHNEQUFzRDs7QUFFdEQsY0FBYztBQUNkLG1CQUFtQjtBQUNuQix1QkFBdUI7QUFDdkIsU0FBUztBQUNULGlCQUFpQjtBQUNqQiw4QkFBOEI7QUFDOUIsbUNBQW1DO0FBQ25DLHdDQUF3QztBQUN4Qyx1REFBdUQ7QUFDdkQsc0JBQXNCO0FBQ3RCLFNBQVM7QUFDVCxzQkFBc0I7QUFDdEIsd0JBQXdCO0FBQ3hCLHlCQUF5QjtBQUN6QixTQUFTO0FBQ1QsbUJBQW1CO0FBQ25CLHlCQUF5QjtBQUN6QiwwQkFBMEI7QUFDMUIsMkJBQTJCO0FBQzNCLHVCQUF1QjtBQUN2QixTQUFTO0FBQ1QsaUJBQWlCO0FBQ2pCLDJCQUEyQjtBQUMzQixRQUFRO0FBQ1IsS0FBSztBQUNMLDZCQUE2QjtBQUc3QixnRkFBOEU7QUFDOUUsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSxvREFBcUU7QUFFckUsMkRBQWdFO0FBQ2hFLGlEQUErQztBQU0vQywyREFBeUQ7QUFFekQsb0VBQWtFO0FBQ2xFLHFEQUFtRDtBQUduRCxtQ0FBNEU7QUFDNUUsNERBQTREO0FBQzVELDhEQUE0RDtBQUU1RCwyQkFBa0IsRUFBRSxDQUFDO0FBMkJyQjtJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBekJyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1Asa0NBQWE7Z0JBQ2IsdUJBQWM7Z0JBQ2QscUJBQVk7Z0JBQ1osZ0NBQWU7YUFDbEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiwrQkFBdUI7Z0JBQ3ZCLGlDQUF3QjtnQkFDeEIsaUNBQXdCLENBQUMsT0FBTyxDQUFDLDhCQUFTLENBQUM7YUFHOUM7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osZ0NBQWM7Z0JBQ2Qsc0NBQWlCO2dCQUNqQiw0QkFBWTtnQkFDWixrQ0FBZTthQUNsQjtZQUNELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDekIsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7U0FDOUIsQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IE5nTW9kdWxlLCBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG4vLyBpbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG4vLyBpbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG4vLyBpbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuLy8gaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvaG9tZS5jb21wb25lbnRcIlxuLy8gaW1wb3J0IHsgRGF0YWJhc2VTZXJ2aWNlIH0gZnJvbSBcIi4vZGF0YWJhc2Uvc3FsaXRlLnNlcnZpY2VcIjtcbi8vIGltcG9ydCB7IHNldFN0YXR1c0JhckNvbG9ycywgQmFja2VuZFNlcnZpY2UsIExvZ2luU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZFwiO1xuLy8gaW1wb3J0IHsgYXV0aFByb3ZpZGVycywgYXBwUm91dGVzIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG4vLyBpbXBvcnQgeyBMb2dpbk1vZHVsZSB9IGZyb20gXCIuL2xvZ2luL2xvZ2luLm1vZHVsZVwiO1xuXG4vLyBATmdNb2R1bGUoe1xuLy8gICAgIGJvb3RzdHJhcDogW1xuLy8gICAgICAgICBBcHBDb21wb25lbnRcbi8vICAgICBdLFxuLy8gICAgIGltcG9ydHM6IFtcbi8vICAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuLy8gICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbi8vICAgICAgICAgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSxcbi8vICAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3QoYXBwUm91dGVzKSxcbi8vICAgICAgICAgTG9naW5Nb2R1bGVcbi8vICAgICBdLFxuLy8gICAgIGRlY2xhcmF0aW9uczogW1xuLy8gICAgICAgICBBcHBDb21wb25lbnQsXG4vLyAgICAgICAgIExvZ2luQ29tcG9uZW50XG4vLyAgICAgXSxcbi8vICAgICBwcm92aWRlcnM6IFtcbi8vICAgICAgICAgYXV0aFByb3ZpZGVycyxcbi8vICAgICAgICAgQmFja2VuZFNlcnZpY2UsXG4vLyAgICAgICAgIERhdGFiYXNlU2VydmljZSxcbi8vICAgICAgICAgTG9naW5TZXJ2aWNlXG4vLyAgICAgXSxcbi8vICAgICBzY2hlbWFzOiBbXG4vLyAgICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbi8vICAgICBdXG4vLyB9KVxuLy8gZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cblxuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuaW1wb3J0IHsgYXV0aFByb3ZpZGVycywgYXBwUm91dGVzIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IExvZ2luTW9kdWxlIH0gZnJvbSBcIi4vbG9naW4vbG9naW4ubW9kdWxlXCI7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcblxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTZXR0aW5nc0NvbXBvbmVudCB9IGZyb20gXCIuL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2V0Q29tcG9uZW50IH0gZnJvbSBcIi4vc2V0L3NldC5jb21wb25lbnRcIjtcblxuXG5pbXBvcnQgeyBzZXRTdGF0dXNCYXJDb2xvcnMsIEJhY2tlbmRTZXJ2aWNlLCBMb2dpblNlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWRcIjtcbmltcG9ydCB7IERhdGFiYXNlU2VydmljZSB9IGZyb20gXCIuL2RhdGFiYXNlL3NxbGl0ZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEZWxldGVDb21wb25lbnQgfSBmcm9tIFwiLi9kZWxldGUvZGVsZXRlLmNvbXBvbmVudFwiO1xuXG5zZXRTdGF0dXNCYXJDb2xvcnMoKTtcblxuQE5nTW9kdWxlKHtcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgYXV0aFByb3ZpZGVycyxcbiAgICAgICAgQmFja2VuZFNlcnZpY2UsXG4gICAgICAgIExvZ2luU2VydmljZSxcbiAgICAgICAgRGF0YWJhc2VTZXJ2aWNlXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3QoYXBwUm91dGVzKSxcbiAgXG5cbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxuICAgICAgICBTZXR0aW5nc0NvbXBvbmVudCxcbiAgICAgICAgU2V0Q29tcG9uZW50LFxuICAgICAgICBEZWxldGVDb21wb25lbnRcbiAgICBdLFxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gICAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==