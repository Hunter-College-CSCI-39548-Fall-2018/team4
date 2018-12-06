"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var application_settings_1 = require("application-settings");
var shared_1 = require("../shared");
var sqlite_service_1 = require("../database/sqlite.service");
var asda = ["Pre-paid", "Weekly", "Monthly"];
var SetComponent = /** @class */ (function () {
    function SetComponent(routerExtensions, userService, database) {
        this.routerExtensions = routerExtensions;
        this.userService = userService;
        this.database = database;
        this.metrocards = [];
        this.infoMetro = [];
        for (var i = 0; i < asda.length; i++) {
            this.metrocards.push(asda[i]);
        }
        {
            this.user_id = application_settings_1.getString("user_id");
        }
    }
    SetComponent.prototype.ngOnInit = function () {
        this.selectCard();
    };
    SetComponent.prototype.selectedIndexChanged = function (args) {
        var picker = args.object;
        this.picked = this.metrocards[picker.selectedIndex];
    };
    SetComponent.prototype.selectCard = function () {
        var _this = this;
        this.infoMetro = [];
        this.database.getdbConnection().then(function (db) {
            db.all("SELECT id, metrocard_type, dateOfPurchase, total_amount, expiration FROM metrocard WHERE user_id = ?", [_this.user_id])
                .then(function (rows) {
                for (var row in rows) {
                    _this.infoMetro.push({ id: rows[row][0], type: rows[row][1], date: rows[row][2], amount: rows[row][3], expiration: rows[row][4] });
                }
                _this.db = db;
            }, function (error) {
                console.log("SELECT ERROR", error);
            });
        });
    };
    SetComponent.prototype.addcard = function () {
        var _this = this;
        var textField = this.metrocardTextField.nativeElement;
        textField.dismissSoftInput();
        this.db.execSQL("INSERT INTO metrocard (metrocard_type, dateOfPurchase, total_amount, expiration, user_id) VALUES (?,?,?,?,?)", [this.picked, this.dateOfPurchase, this.total_amount, this.expiration, this.user_id]).then(function (id) {
            _this.infoMetro.unshift({ id: id, type: _this.picked, date: _this.dateOfPurchase, amount: _this.total_amount, expiration: _this.expiration });
            console.log(id, _this.picked, _this.dateOfPurchase, _this.total_amount, _this.expiration, _this.user_id);
            _this.picked = "";
            _this.dateOfPurchase = "";
            _this.total_amount = 0;
            _this.expiration = "";
        }, function (error) {
            shared_1.alert('An error occurred while adding an item to your list');
            _this.picked = "";
            _this.dateOfPurchase = "";
            _this.total_amount = 0;
            _this.expiration = "";
        });
        this.routerExtensions.navigate(["/home"], { clearHistory: true });
    };
    __decorate([
        core_1.ViewChild("metrocardTextField"),
        __metadata("design:type", core_1.ElementRef)
    ], SetComponent.prototype, "metrocardTextField", void 0);
    SetComponent = __decorate([
        core_1.Component({
            selector: "Set",
            moduleId: module.id,
            templateUrl: "./set.component.html"
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            shared_1.LoginService,
            sqlite_service_1.DatabaseService])
    ], SetComponent);
    return SetComponent;
}());
exports.SetComponent = SetComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBeUU7QUFDekUsc0RBQStEO0FBSS9ELDZEQUFpRDtBQUNqRCxvQ0FBc0Q7QUFDdEQsNkRBQTZEO0FBRzdELElBQUksSUFBSSxHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBQyxTQUFTLENBQUMsQ0FBQztBQU81QztJQWlCSSxzQkFDUSxnQkFBa0MsRUFDbEMsV0FBeUIsRUFDekIsUUFBeUI7UUFGekIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYztRQUN6QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQWxCMUIsZUFBVSxHQUFrQixFQUFFLENBQUM7UUFHdEMsY0FBUyxHQUFrQixFQUFFLENBQUM7UUFpQjFCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7UUFFQyxDQUFDO1lBQ0ssSUFBSSxDQUFDLE9BQU8sR0FBRyxnQ0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7SUFDVixDQUFDO0lBaEJELCtCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQWdCTSwyQ0FBb0IsR0FBM0IsVUFBNEIsSUFBSTtRQUM1QixJQUFJLE1BQU0sR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUdELGlD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RUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBcEVxQjtRQUFoQyxnQkFBUyxDQUFDLG9CQUFvQixDQUFDO2tDQUFxQixpQkFBVTs0REFBQztJQVh2RCxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsS0FBSztZQUNmLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsc0JBQXNCO1NBQ3RDLENBQUM7eUNBbUI0Qix5QkFBZ0I7WUFDckIscUJBQVk7WUFDZixnQ0FBZTtPQXBCeEIsWUFBWSxDQWtGeEI7SUFBRCxtQkFBQztDQUFBLEFBbEZELElBa0ZDO0FBbEZZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdFBpY2tlciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3QtcGlja2VyXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWZpZWxkXCI7XG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSwgUmFkTGlzdFZpZXcgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3XCI7XG5pbXBvcnQgeyBnZXRTdHJpbmcgfSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCB7IGFsZXJ0LCBMb2dpblNlcnZpY2UsIFVzZXIgfSBmcm9tIFwiLi4vc2hhcmVkXCI7XG5pbXBvcnQgeyBEYXRhYmFzZVNlcnZpY2UgfSBmcm9tIFwiLi4vZGF0YWJhc2Uvc3FsaXRlLnNlcnZpY2VcIjtcbiBcbiBcbmxldCBhc2RhID0gW1wiUHJlLXBhaWRcIiwgXCJXZWVrbHlcIixcIk1vbnRobHlcIl07XG4gXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJTZXRcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2V0LmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgU2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiBcbiAgICBwdWJsaWMgbWV0cm9jYXJkczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgIHB1YmxpYyBwaWNrZWQ6IHN0cmluZztcbiBcbiAgICBpbmZvTWV0cm86IEFycmF5PE9iamVjdD4gPSBbXTtcbiAgICBkYjogYW55O1xuICAgIGRhdGVPZlB1cmNoYXNlOiBzdHJpbmc7XG4gICAgdG90YWxfYW1vdW50OiBudW1iZXI7XG4gICAgZXhwaXJhdGlvbjogc3RyaW5nO1xuICAgIHVzZXJfaWQ6IHN0cmluZztcbiAgICBAVmlld0NoaWxkKFwibWV0cm9jYXJkVGV4dEZpZWxkXCIpIG1ldHJvY2FyZFRleHRGaWVsZDogRWxlbWVudFJlZjtcblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNlbGVjdENhcmQoKTtcbiAgICB9XG4gXG4gICAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IExvZ2luU2VydmljZSxcbiAgICBwcml2YXRlIGRhdGFiYXNlOiBEYXRhYmFzZVNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhc2RhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLm1ldHJvY2FyZHMucHVzaChhc2RhW2ldKTtcbiAgICAgICAgfVxuIFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJfaWQgPSBnZXRTdHJpbmcoXCJ1c2VyX2lkXCIpO1xuICAgICAgICAgICAgIH1cbiAgICB9XG4gXG4gICAgcHVibGljIHNlbGVjdGVkSW5kZXhDaGFuZ2VkKGFyZ3MpIHtcbiAgICAgICAgbGV0IHBpY2tlciA9IDxMaXN0UGlja2VyPmFyZ3Mub2JqZWN0O1xuICAgICAgICB0aGlzLnBpY2tlZCA9IHRoaXMubWV0cm9jYXJkc1twaWNrZXIuc2VsZWN0ZWRJbmRleF07XG4gICAgfVxuXG5cbiAgICBzZWxlY3RDYXJkKCl7XG4gICAgICAgICAgICB0aGlzLmluZm9NZXRybyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5kYXRhYmFzZS5nZXRkYkNvbm5lY3Rpb24oKS50aGVuKFxuICAgICAgICAgICAgICAgIGRiID0+IHsgZGIuYWxsKFwiU0VMRUNUIGlkLCBtZXRyb2NhcmRfdHlwZSwgZGF0ZU9mUHVyY2hhc2UsIHRvdGFsX2Ftb3VudCwgZXhwaXJhdGlvbiBGUk9NIG1ldHJvY2FyZCBXSEVSRSB1c2VyX2lkID0gP1wiLFt0aGlzLnVzZXJfaWRdKVxuICAgICAgICAgICAgLnRoZW4oIHJvd3MgPT4ge1xuICAgICAgICAgICAgICAgIGZvcih2YXIgcm93IGluIHJvd3Mpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZm9NZXRyby5wdXNoKHsgaWQ6IHJvd3Nbcm93XVswXSwgdHlwZTogcm93c1tyb3ddWzFdLCBkYXRlOiByb3dzW3Jvd11bMl0sIGFtb3VudDogcm93c1tyb3ddWzNdLCBleHBpcmF0aW9uOiByb3dzW3Jvd11bNF0gfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZGIgPSBkYjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNFTEVDVCBFUlJPUlwiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfVxuIFxuICAgIGFkZGNhcmQoKXtcbiAgIFxuICAgICAgICAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD50aGlzLm1ldHJvY2FyZFRleHRGaWVsZC5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgICB0ZXh0RmllbGQuZGlzbWlzc1NvZnRJbnB1dCgpO1xuICAgXG4gICAgICAgICAgIHRoaXMuZGIuZXhlY1NRTChcIklOU0VSVCBJTlRPIG1ldHJvY2FyZCAobWV0cm9jYXJkX3R5cGUsIGRhdGVPZlB1cmNoYXNlLCB0b3RhbF9hbW91bnQsIGV4cGlyYXRpb24sIHVzZXJfaWQpIFZBTFVFUyAoPyw/LD8sPyw/KVwiLFxuICAgICAgICAgICBbIHRoaXMucGlja2VkLCB0aGlzLmRhdGVPZlB1cmNoYXNlLCB0aGlzLnRvdGFsX2Ftb3VudCwgdGhpcy5leHBpcmF0aW9uLCB0aGlzLnVzZXJfaWRdKS50aGVuKFxuICAgICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgIHRoaXMuaW5mb01ldHJvLnVuc2hpZnQoe2lkOiBpZCwgdHlwZTogdGhpcy5waWNrZWQsIGRhdGU6IHRoaXMuZGF0ZU9mUHVyY2hhc2UsIGFtb3VudDogdGhpcy50b3RhbF9hbW91bnQsIGV4cGlyYXRpb246IHRoaXMuZXhwaXJhdGlvbn0pO1xuICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkLCB0aGlzLnBpY2tlZCwgdGhpcy5kYXRlT2ZQdXJjaGFzZSwgdGhpcy50b3RhbF9hbW91bnQsIHRoaXMuZXhwaXJhdGlvbiwgdGhpcy51c2VyX2lkKTtcbiAgICAgICAgICAgICAgIHRoaXMucGlja2VkID0gXCJcIjtcbiAgICAgICAgICAgICAgIHRoaXMuZGF0ZU9mUHVyY2hhc2UgPSBcIlwiO1xuICAgICAgICAgICAgICAgdGhpcy50b3RhbF9hbW91bnQgPSAwO1xuICAgICAgICAgICAgICAgdGhpcy5leHBpcmF0aW9uID0gXCJcIjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICBhbGVydCgnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgYWRkaW5nIGFuIGl0ZW0gdG8geW91ciBsaXN0Jyk7XG4gICAgICAgICAgICAgICAgICAgdGhpcy5waWNrZWQgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZU9mUHVyY2hhc2UgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxfYW1vdW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICB0aGlzLmV4cGlyYXRpb24gPSBcIlwiO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBcbiBcbn1cblxuIl19