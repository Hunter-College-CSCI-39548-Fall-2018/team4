import { Component, OnInit, ViewChild } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { filter } from "rxjs/operators";
import * as app from "tns-core-modules/application";
import {HomeComponent} from '../home/home.component'

@Component({
    selector: "schedule",
    moduleId: module.id,
    templateUrl: "./schedule.component.html"
})
export class ScheduleComponent implements OnInit {
    notifications: any

    constructor() {
        // Use the component constructor to inject services.
    }

    ngOnInit(): void {
        this.notifications = 'Text Notifications'
    }

}
