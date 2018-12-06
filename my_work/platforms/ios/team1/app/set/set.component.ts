import { Component, OnInit, ViewChild } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { filter } from "rxjs/operators";
import * as app from "tns-core-modules/application";

@Component({
    selector: "Set",
    moduleId: module.id,
    templateUrl: "./set.component.html"
})
export class SetComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject services.
    }

    ngOnInit(): void {
        
    }


}
