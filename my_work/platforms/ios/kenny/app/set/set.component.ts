import { ListPicker } from "tns-core-modules/ui/list-picker";
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { TextField } from "tns-core-modules/ui/text-field";
import { ListViewEventData, RadListView } from "nativescript-ui-listview";
import { View } from "tns-core-modules/ui/core/view";
import { getString } from "application-settings";
import { alert, LoginService, User } from "../shared";
import { DatabaseService } from "../database/sqlite.service";
 
 
let asda = ["Pre-paid", "Weekly","Monthly"];
 
@Component({
    selector: "Set",
    moduleId: module.id,
    templateUrl: "./set.component.html"
})
export class SetComponent implements OnInit {
 
    public metrocards: Array<string> = [];
    public picked: string;
 
    infoMetro: Array<Object> = [];
    db: any;
    dateOfPurchase: string;
    total_amount: number;
    expiration: string;
    user_id: string;
    @ViewChild("metrocardTextField") metrocardTextField: ElementRef;

    ngOnInit(): void {
        this.selectCard();
    }
 
    constructor(
    private routerExtensions: RouterExtensions,
    private userService: LoginService,
    private database: DatabaseService
    ) {
        for (let i = 0; i < asda.length; i++) {
            this.metrocards.push(asda[i]);
        }
 
          {
                this.user_id = getString("user_id");
             }
    }
 
    public selectedIndexChanged(args) {
        let picker = <ListPicker>args.object;
        this.picked = this.metrocards[picker.selectedIndex];
    }


    selectCard(){
            this.infoMetro = [];
            this.database.getdbConnection().then(
                db => { db.all("SELECT id, metrocard_type, dateOfPurchase, total_amount, expiration FROM metrocard WHERE user_id = ?",[this.user_id])
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
 
    addcard(){
   
           let textField = <TextField>this.metrocardTextField.nativeElement;
           textField.dismissSoftInput();
   
           this.db.execSQL("INSERT INTO metrocard (metrocard_type, dateOfPurchase, total_amount, expiration, user_id) VALUES (?,?,?,?,?)",
           [ this.picked, this.dateOfPurchase, this.total_amount, this.expiration, this.user_id]).then(
               id => {
                   this.infoMetro.unshift({id: id, type: this.picked, date: this.dateOfPurchase, amount: this.total_amount, expiration: this.expiration});
                   console.log(id, this.picked, this.dateOfPurchase, this.total_amount, this.expiration, this.user_id);
               this.picked = "";
               this.dateOfPurchase = "";
               this.total_amount = 0;
               this.expiration = "";
                
               }, error => {
                   alert('An error occurred while adding an item to your list');
                   this.picked = "";
                   this.dateOfPurchase = "";
                   this.total_amount = 0;
                   this.expiration = "";
               }
               );
               this.routerExtensions.navigate(["/home"], { clearHistory: true });
               }
               
 
}

