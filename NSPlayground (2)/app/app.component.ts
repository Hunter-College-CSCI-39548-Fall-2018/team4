import { Component } from "@angular/core";

import { DatabaseService } from "./database/sqlite.service";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {
    constructor(private database: DatabaseService) {
        this.database.getdbConnection()
            .then(db => {
                db.execSQL("CREATE TABLE IF NOT EXISTS metrocard (id INTEGER PRIMARY KEY AUTOINCREMENT,  user_id TEXT, metrocard_type TEXT, dateOfPurchase DATE, total_amount DOUBLE, expiration DATE)").then(() => {
                }, error => {
                    console.log("CREATE TABLE ERROR", error);
                    });
                db.execSQL("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id TEXT UNIQUE, password TEXT, number TEXT)").then(() => {
                }, error => {
                    console.log("CREATE TABLE ERROR", error);
                });
            });
}
}
