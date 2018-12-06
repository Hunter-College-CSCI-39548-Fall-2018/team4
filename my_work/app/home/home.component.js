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
    function HomeComponent(routerExtensions, userService, database, ngzone) {
        this.routerExtensions = routerExtensions;
        this.userService = userService;
        this.database = database;
        this.ngzone = ngzone;
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
            }).then(function (id) {
                _this.metrocard_id = id;
            });
        });
    };
    HomeComponent.prototype.onItemTap = function (args) {
        //args.index
    };
    HomeComponent.prototype.onLongPress = function (args) {
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
            sqlite_service_1.DatabaseService,
            core_1.NgZone])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCw4REFBNEY7QUFDNUYsc0NBQWtEO0FBQ2xELDZEQUE2RDtBQUM3RCxzREFBK0Q7QUFDL0Qsb0NBQXNEO0FBQ3RELDZEQUFpRDtBQWVqRDtJQTBCSSx1QkFDWSxnQkFBa0MsRUFDbEMsV0FBeUIsRUFDekIsUUFBeUIsRUFDekIsTUFBYztRQUhkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsZ0JBQVcsR0FBWCxXQUFXLENBQWM7UUFDekIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDekIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQTVCMUIsY0FBUyxHQUFrQixFQUFFLENBQUM7UUFTOUIsZ0JBQVcsR0FBVyxHQUFHLENBQUM7UUFDMUIsaUJBQVksR0FBVyxHQUFHLENBQUM7UUFLM0Isb0JBQWUsR0FBVyx3SUFBd0k7Y0FDNUosNklBQTZJLENBQUM7UUFjaEosSUFBSSxDQUFDLE9BQU8sR0FBRyxnQ0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFkRCx1Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDakQsQ0FBQztJQUNELHdDQUFnQixHQUFoQjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFXRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBQUEsaUJBbUJDO1FBbEJHLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLENBQUMsSUFBSSxDQUNoQyxVQUFBLEVBQUU7WUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxFQUFDLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUM3RSxJQUFJLENBQUUsVUFBQSxJQUFJO2dCQUNQLEdBQUcsQ0FBQSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFBLENBQUM7b0JBQ2pCLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDdEksQ0FBQztnQkFDRCxLQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUVqQixDQUFDLEVBQ0csVUFBQSxLQUFLO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsQ0FDSixDQUFDLElBQUksQ0FBQyxVQUFDLEVBQUU7Z0JBQ04sS0FBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxDQUFDLENBQ0EsQ0FBQztJQUNOLENBQUM7SUFFRCxpQ0FBUyxHQUFULFVBQVUsSUFBSTtRQUNWLFlBQVk7SUFFaEIsQ0FBQztJQUdELG1DQUFXLEdBQVgsVUFBWSxJQUFzQjtJQUdsQyxDQUFDO0lBdERrQztRQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDO2tDQUF5QixnQ0FBc0I7MERBQUM7SUFmekUsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDdEMsQ0FBQzt5Q0E0QmdDLHlCQUFnQjtZQUNyQixxQkFBWTtZQUNmLGdDQUFlO1lBQ2pCLGFBQU07T0E5QmpCLGFBQWEsQ0F5RXpCO0lBQUQsb0JBQUM7Q0FBQSxBQXpFRCxJQXlFQztBQXpFWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZpZXdDaGlsZCwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERhdGFiYXNlU2VydmljZSB9IGZyb20gXCIuLi9kYXRhYmFzZS9zcWxpdGUuc2VydmljZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IGFsZXJ0LCBMb2dpblNlcnZpY2UsIFVzZXIgfSBmcm9tIFwiLi4vc2hhcmVkXCI7XG5pbXBvcnQgeyBnZXRTdHJpbmcgfSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCB7IEdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlc1wiO1xuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiO1xuaW1wb3J0IHsgVmlldywgaWRQcm9wZXJ0eSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlld1wiO1xuaW1wb3J0IHsgR3JpZExheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvZ3JpZC1sYXlvdXRcIjtcbmltcG9ydCB7IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGluZm9NZXRybzogQXJyYXk8T2JqZWN0PiA9IFtdO1xuICAgIGRiOiBhbnk7XG4gICAgZGF0ZU9mUHVyY2hhc2U6IERhdGU7XG4gICAgdG90YWxfYW1vdW50OiBudW1iZXI7XG4gICAgZXhwaXJhdGlvbjogRGF0ZTtcbiAgICB1c2VyX2lkOiBzdHJpbmc7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIG1ldHJvY2FyZF9pZDogbnVtYmVyO1xuXG4gICAgbGF5b3V0V2lkdGg6IG51bWJlciA9IDQwMDtcbiAgICBsYXlvdXRIZWlnaHQ6IG51bWJlciA9IDMwMDtcblxuXG4gICAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuICAgIFxuICAgIG1haW5Db250ZW50VGV4dDogc3RyaW5nID0gXCJTaWRlRHJhd2VyIGZvciBOYXRpdmVTY3JpcHQgY2FuIGJlIGVhc2lseSBzZXR1cCBpbiB0aGUgWE1MIGRlZmluaXRpb24gb2YgeW91ciBwYWdlIGJ5IGRlZmluaW5nIG1haW4tIGFuZCBkcmF3ZXItY29udGVudC4gVGhlIGNvbXBvbmVudFwiXG4gICAgICAgICsgXCIgaGFzIGEgZGVmYXVsdCB0cmFuc2l0aW9uIGFuZCBwb3NpdGlvbiBhbmQgYWxzbyBleHBvc2VzIG5vdGlmaWNhdGlvbnMgcmVsYXRlZCB0byBjaGFuZ2VzIGluIGl0cyBzdGF0ZS4gU3dpcGUgZnJvbSBsZWZ0IHRvIG9wZW4gc2lkZSBkcmF3ZXIuXCI7XG4gICAgb25PcGVuRHJhd2VyVGFwKCkge1xuICAgICAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG4gICAgb25DbG9zZURyYXdlclRhcCgpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5jbG9zZURyYXdlcigpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IExvZ2luU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBkYXRhYmFzZTogRGF0YWJhc2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIG5nem9uZTogTmdab25lXG4gICAgKSB7XG4gICAgICAgIHRoaXMudXNlcl9pZCA9IGdldFN0cmluZyhcInVzZXJfaWRcIik7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VsZWN0Q2FyZCgpO1xuICAgIH1cblxuICAgIHNlbGVjdENhcmQoKXtcbiAgICAgICAgdGhpcy5pbmZvTWV0cm8gPSBbXTtcbiAgICAgICAgdGhpcy5kYXRhYmFzZS5nZXRkYkNvbm5lY3Rpb24oKS50aGVuKFxuICAgICAgICAgICAgZGIgPT4geyBkYi5hbGwoXCJTRUxFQ1QgKiBGUk9NIG1ldHJvY2FyZCBXSEVSRSB1c2VyX2lkID0gP1wiLFt0aGlzLnVzZXJfaWRdKVxuICAgICAgICAudGhlbiggcm93cyA9PiB7XG4gICAgICAgICAgICBmb3IodmFyIHJvdyBpbiByb3dzKXtcbiAgICAgICAgICAgICAgICB0aGlzLmluZm9NZXRyby5wdXNoKHsgaWQ6IHJvd3Nbcm93XVswXSwgdHlwZTogcm93c1tyb3ddWzFdLCBkYXRlOiByb3dzW3Jvd11bMl0sIGFtb3VudDogcm93c1tyb3ddWzNdLCBleHBpcmF0aW9uOiByb3dzW3Jvd11bNF0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRiID0gZGI7XG4gICAgICAgICAgICBcbiAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNFTEVDVCBFUlJPUlwiLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICkudGhlbigoaWQpID0+IHtcbiAgICAgICAgICAgIHRoaXMubWV0cm9jYXJkX2lkID0gaWQ7XG4gICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb25JdGVtVGFwKGFyZ3MpIHtcbiAgICAgICAgLy9hcmdzLmluZGV4XG4gICAgICBcbiAgICB9XG5cblxuICAgIG9uTG9uZ1ByZXNzKGFyZ3M6TGlzdFZpZXdFdmVudERhdGEpe1xuXG4gICAgXG4gICAgfVxuICAgIFxuXG5cbn1cblxuXG4iXX0=