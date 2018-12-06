import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ScheduleComponent } from "./schedule.component";

const routes: Routes = [
    { path: "schedule", component: ScheduleComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class scheduleRoutingModule { }
