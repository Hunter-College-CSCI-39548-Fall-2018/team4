import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';
import { SetComponent } from "./set/set.component";

import { AuthGuard } from "./auth-guard.service";
import { DeleteComponent } from "./delete/delete.component";
import { UpdateComponent } from "./update/update.component";
import {ScheduleComponent } from "./schedule/schedule.component"
export const authProviders = [
    AuthGuard
];

export const appRoutes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "logout", component: LoginComponent},
    { path: "settings", component: SettingsComponent},
    { path: "set", component: SetComponent},
    { path: "delete", component: DeleteComponent},
    { path: "update", component: UpdateComponent},
    { path: "schedule", component: ScheduleComponent}
];

export class AppRoutingModule { }
