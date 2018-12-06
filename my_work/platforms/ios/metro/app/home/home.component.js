"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var core_2 = require("@angular/core");
var sqlite_service_1 = require("../database/sqlite.service");
var router_1 = require("nativescript-angular/router");
var shared_1 = require("../shared");
var application_settings_1 = require("application-settings");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(routerExtensions, userService, database) {
        this.routerExtensions = routerExtensions;
        this.userService = userService;
        this.database = database;
        this.infoMetro = [];
        this.layoutWidth = 400;
        this.layoutHeight = 300;
        this.mainContentText = "SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. The component"
            + " has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
        this.user_id = application_settings_1.getString("user_id");
    }
    HomeComponent.prototype.onOpenDrawerTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    HomeComponent.prototype.onCloseDrawerTap = function () {
        this.drawerComponent.sideDrawer.closeDrawer();
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.selectCard();
    };
    HomeComponent.prototype.selectCard = function () {
        var _this = this;
        this.infoMetro = [];
        this.database.getdbConnection().then(function (db) {
            db.all("SELECT * FROM metrocard WHERE user_id = ?", [_this.user_id])
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
    HomeComponent.prototype.onItemTap = function (args) {
        //args.index
        console.log(args.index);
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], HomeComponent.prototype, "drawerComponent", void 0);
    HomeComponent = __decorate([
        core_2.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            shared_1.LoginService,
            sqlite_service_1.DatabaseService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyw4REFBNEY7QUFDNUYsc0NBQWtEO0FBQ2xELDZEQUE2RDtBQUM3RCxzREFBK0Q7QUFDL0Qsb0NBQXNEO0FBQ3RELDZEQUFpRDtBQWVqRDtJQXdCSSx1QkFDWSxnQkFBa0MsRUFDbEMsV0FBeUIsRUFDekIsUUFBeUI7UUFGekIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYztRQUN6QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQXpCckMsY0FBUyxHQUFrQixFQUFFLENBQUM7UUFROUIsZ0JBQVcsR0FBVyxHQUFHLENBQUM7UUFDMUIsaUJBQVksR0FBVyxHQUFHLENBQUM7UUFJM0Isb0JBQWUsR0FBVyx3SUFBd0k7Y0FDNUosNklBQTZJLENBQUM7UUFhaEosSUFBSSxDQUFDLE9BQU8sR0FBRyxnQ0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFiRCx1Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDakQsQ0FBQztJQUNELHdDQUFnQixHQUFoQjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFVRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBQUEsaUJBZ0JDO1FBZkcsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxJQUFJLENBQ2hDLFVBQUEsRUFBRTtZQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsMkNBQTJDLEVBQUMsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQzdFLElBQUksQ0FBRSxVQUFBLElBQUk7Z0JBQ1AsR0FBRyxDQUFBLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUEsQ0FBQztvQkFDakIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN0SSxDQUFDO2dCQUNELEtBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLENBQUMsRUFDRyxVQUFBLEtBQUs7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdkMsQ0FBQyxDQUNKLENBQUM7UUFDRixDQUFDLENBQ0EsQ0FBQztJQUNOLENBQUM7SUFFRCxpQ0FBUyxHQUFULFVBQVUsSUFBSTtRQUNWLFlBQVk7UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBM0NrQztRQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDO2tDQUF5QixnQ0FBc0I7MERBQUM7SUFkekUsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDdEMsQ0FBQzt5Q0EwQmdDLHlCQUFnQjtZQUNyQixxQkFBWTtZQUNmLGdDQUFlO09BM0I1QixhQUFhLENBNkR6QjtJQUFELG9CQUFDO0NBQUEsQUE3REQsSUE2REM7QUE3RFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRGF0YWJhc2VTZXJ2aWNlIH0gZnJvbSBcIi4uL2RhdGFiYXNlL3NxbGl0ZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgYWxlcnQsIExvZ2luU2VydmljZSwgVXNlciB9IGZyb20gXCIuLi9zaGFyZWRcIjtcbmltcG9ydCB7IGdldFN0cmluZyB9IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzXCI7XG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSwgUmFkTGlzdFZpZXcgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3XCI7XG5pbXBvcnQgeyBHcmlkTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9ncmlkLWxheW91dFwiO1xuaW1wb3J0IHsgU3dpcGVHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXNcIjtcblxuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgaW5mb01ldHJvOiBBcnJheTxPYmplY3Q+ID0gW107XG4gICAgZGI6IGFueTtcbiAgICBkYXRlT2ZQdXJjaGFzZTogRGF0ZTtcbiAgICB0b3RhbF9hbW91bnQ6IG51bWJlcjtcbiAgICBleHBpcmF0aW9uOiBEYXRlO1xuICAgIHVzZXJfaWQ6IHN0cmluZztcbiAgICB0eXBlOiBzdHJpbmc7XG5cbiAgICBsYXlvdXRXaWR0aDogbnVtYmVyID0gNDAwO1xuICAgIGxheW91dEhlaWdodDogbnVtYmVyID0gMzAwO1xuXG5cbiAgICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG4gICAgbWFpbkNvbnRlbnRUZXh0OiBzdHJpbmcgPSBcIlNpZGVEcmF3ZXIgZm9yIE5hdGl2ZVNjcmlwdCBjYW4gYmUgZWFzaWx5IHNldHVwIGluIHRoZSBYTUwgZGVmaW5pdGlvbiBvZiB5b3VyIHBhZ2UgYnkgZGVmaW5pbmcgbWFpbi0gYW5kIGRyYXdlci1jb250ZW50LiBUaGUgY29tcG9uZW50XCJcbiAgICAgICAgKyBcIiBoYXMgYSBkZWZhdWx0IHRyYW5zaXRpb24gYW5kIHBvc2l0aW9uIGFuZCBhbHNvIGV4cG9zZXMgbm90aWZpY2F0aW9ucyByZWxhdGVkIHRvIGNoYW5nZXMgaW4gaXRzIHN0YXRlLiBTd2lwZSBmcm9tIGxlZnQgdG8gb3BlbiBzaWRlIGRyYXdlci5cIjtcbiAgICBvbk9wZW5EcmF3ZXJUYXAoKSB7XG4gICAgICAgIHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cbiAgICBvbkNsb3NlRHJhd2VyVGFwKCkge1xuICAgICAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLmNsb3NlRHJhd2VyKCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogTG9naW5TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGRhdGFiYXNlOiBEYXRhYmFzZVNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgdGhpcy51c2VyX2lkID0gZ2V0U3RyaW5nKFwidXNlcl9pZFwiKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZWxlY3RDYXJkKCk7XG4gICAgfVxuXG4gICAgc2VsZWN0Q2FyZCgpe1xuICAgICAgICB0aGlzLmluZm9NZXRybyA9IFtdO1xuICAgICAgICB0aGlzLmRhdGFiYXNlLmdldGRiQ29ubmVjdGlvbigpLnRoZW4oXG4gICAgICAgICAgICBkYiA9PiB7IGRiLmFsbChcIlNFTEVDVCAqIEZST00gbWV0cm9jYXJkIFdIRVJFIHVzZXJfaWQgPSA/XCIsW3RoaXMudXNlcl9pZF0pXG4gICAgICAgIC50aGVuKCByb3dzID0+IHtcbiAgICAgICAgICAgIGZvcih2YXIgcm93IGluIHJvd3Mpe1xuICAgICAgICAgICAgICAgIHRoaXMuaW5mb01ldHJvLnB1c2goeyBpZDogcm93c1tyb3ddWzBdLCB0eXBlOiByb3dzW3Jvd11bMV0sIGRhdGU6IHJvd3Nbcm93XVsyXSwgYW1vdW50OiByb3dzW3Jvd11bM10sIGV4cGlyYXRpb246IHJvd3Nbcm93XVs0XSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGIgPSBkYjtcbiAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNFTEVDVCBFUlJPUlwiLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvbkl0ZW1UYXAoYXJncykge1xuICAgICAgICAvL2FyZ3MuaW5kZXhcbiAgICAgICAgY29uc29sZS5sb2coYXJncy5pbmRleCk7XG4gICAgfVxuICAgIFxuXG5cbn1cblxuXG4iXX0=