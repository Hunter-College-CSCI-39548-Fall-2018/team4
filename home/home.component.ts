import { ViewChild } from "@angular/core";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-ui-sidedrawer/angular";
import { Component, OnInit, NgZone } from "@angular/core";
import { Metrocard } from "../shared/Metrocard.model";
import {MetrocardService} from "../shared/metrocard.service";
import { Observable } from "tns-core-modules/ui/page/page";
import { ObservableArray} from "data/observable-array";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    metrocard: ObservableArray<Metrocard>;
    isLoading : boolean;
    
    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    mainContentText: string = "SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. The component"
        + " has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
    onOpenDrawerTap() {
        this.drawerComponent.sideDrawer.showDrawer();
    }
    onCloseDrawerTap() {
        this.drawerComponent.sideDrawer.closeDrawer();
    }


    constructor(
        private _metrocardService: MetrocardService,
        private _routerExtentions: RouterExtensions,

    ) {}

    



    ngOnInit(): void {
    }
}
