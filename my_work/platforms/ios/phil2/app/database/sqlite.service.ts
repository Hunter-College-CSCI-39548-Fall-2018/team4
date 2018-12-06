import { Injectable } from "@angular/core";
var Sqlite = require("nativescript-sqlite");

@Injectable()
export class DatabaseService {

    public getdbConnection() {
        return new Sqlite('metrotrack');
    }

    public closedbConnection() {
        new Sqlite('metrotrack')
            .then((db) => {
                db.close();
            })
    }
}