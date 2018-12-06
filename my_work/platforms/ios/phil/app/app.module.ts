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


import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { authProviders, appRoutes } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { LoginModule } from "./login/login.module";

import { AppRoutingModule } from "./app-routing.module";

import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { SettingsComponent } from "./settings/settings.component";
import { SetComponent } from "./set/set.component";


import { setStatusBarColors, BackendService, LoginService } from "./shared";
import { DatabaseService } from "./database/sqlite.service";
import { DeleteComponent } from "./delete/delete.component";
import { UpdateComponent} from "./update/update.component";
setStatusBarColors();

@NgModule({
    providers: [
        authProviders,
        BackendService,
        LoginService,
        DatabaseService
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(appRoutes),
  

    ],
    declarations: [
        AppComponent,
        LoginComponent,
        SettingsComponent,
        SetComponent,
        DeleteComponent,
        UpdateComponent
    ],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
