import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { SetComponent } from "./set.component";
import { AuthGuard } from "../auth-guard.service";
const routes: Routes = [
    { path: "add", component: SetComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class SetRoutingModule { }
