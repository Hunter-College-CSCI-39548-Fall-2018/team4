import { Injectable } from "@angular/core";
import { Kinvey } from "kinvey-nativescript-sdk";

export class BackendService {
    static kinveyAppKey = "kid_rk-cVokRX";
    static kinveyAppSecret = "f3554986b2224849ae0146c8f57e1bbe";
    static kinveyUsername = "admin";
    static kinveyPassword = "admin";

    static setup() {
        Kinvey.init({
            appKey: BackendService.kinveyAppKey,
            appSecret: BackendService.kinveyAppSecret
        });
    }
}
