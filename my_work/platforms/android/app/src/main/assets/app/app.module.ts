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
import {ScheduleComponent} from "./schedule/schedule.component"

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
        UpdateComponent,
        ScheduleComponent
    ],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
