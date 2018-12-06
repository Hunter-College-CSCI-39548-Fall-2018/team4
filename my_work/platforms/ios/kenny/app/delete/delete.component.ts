import { ViewChild } from "@angular/core";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-ui-sidedrawer/angular";
import { Component, OnInit } from "@angular/core";
import { DatabaseService } from "../database/sqlite.service";
import { RouterExtensions } from "nativescript-angular/router";
import { alert, LoginService, User } from "../shared";
import { getString } from "application-settings";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { GestureEventData } from "tns-core-modules/ui/gestures";
import { ListViewEventData, RadListView } from "nativescript-ui-listview";
import { View } from "tns-core-modules/ui/core/view";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import { SwipeGestureEventData } from "tns-core-modules/ui/gestures";


@Component({
    selector: "Delete",
    moduleId: module.id,
    templateUrl: "./delete.component.html"
})
export class DeleteComponent implements OnInit {
    infoMetro: Array<Object> = [];
    db: any;
    dateOfPurchase: Date;
    total_amount: number;
    expiration: Date;
    user_id: string;
    type: string;

    layoutWidth: number = 400;
    layoutHeight: number = 300;

    constructor(
        private routerExtensions: RouterExtensions,
        private userService: LoginService,
        private database: DatabaseService
    ) {
        this.user_id = getString("user_id");
    }

    ngOnInit(): void {
        this.selectCard();
    }

    selectCard(){
        this.infoMetro = [];
        this.database.getdbConnection().then(
            db => { db.all("SELECT * FROM metrocard WHERE user_id = ?",[this.user_id])
        .then( rows => {
            for(var row in rows){
                this.infoMetro.push({ id: rows[row][0], type: rows[row][1], date: rows[row][2], amount: rows[row][3], expiration: rows[row][4] });
            }
            this.db = db;
        },
            error => {
                console.log("SELECT ERROR", error);
            }
        );
        }
        );
    }

    onItemTap(args) {
        //args.index
        console.log(args.index);
        dialogs.confirm({
            title: "Are you sure you want to Remove this?",
            message: "Once removed, It can not be recovered. ",
            okButtonText: "Confirm",
            cancelButtonText: "Cancel",
        }).then(result => {
            // result argument is boolean
            if (result == true) {
                console.log("Deleting card");
                //Delete Card here.
                let metrocard = <any>args.view.bindingContext;
                this.db.execSQL("DELETE FROM metrocard WHERE id=?", [metrocard.id]).then(() => {
                  let index = this.infoMetro.indexOf(metrocard);
                  this.infoMetro.splice(index, 1);
                  console.log(" Item deleted successfully!")
                  console.log("Object that triggered the event: " + args.object);
                  console.log("View that triggered the event: " + args.view);
                  console.log("Event name: " + args.eventName);
                });
                this.routerExtensions.navigate(["/home"], { clearHistory: true });
             } else {
                console.log("Cancel");
             }
        });
    }

}
