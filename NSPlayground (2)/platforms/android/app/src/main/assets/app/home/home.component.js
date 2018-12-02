"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var core_2 = require("@angular/core");
var metrocard_service_1 = require("../shared/metrocard.service");
var router_1 = require("nativescript-angular/router");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_metrocardService, _routerExtentions) {
        this._metrocardService = _metrocardService;
        this._routerExtentions = _routerExtentions;
        this.mainContentText = "SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. The component"
            + " has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
    }
    HomeComponent.prototype.onOpenDrawerTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    HomeComponent.prototype.onCloseDrawerTap = function () {
        this.drawerComponent.sideDrawer.closeDrawer();
    };
    HomeComponent.prototype.ngOnInit = function () {
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
        __metadata("design:paramtypes", [metrocard_service_1.MetrocardService,
            router_1.RouterExtensions])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyw4REFBNEY7QUFDNUYsc0NBQTBEO0FBRTFELGlFQUE2RDtBQUc3RCxzREFBK0Q7QUFRL0Q7SUFnQkksdUJBQ1ksaUJBQW1DLEVBQ25DLGlCQUFtQztRQURuQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ25DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFaL0Msb0JBQWUsR0FBVyx3SUFBd0k7Y0FDNUosNklBQTZJLENBQUM7SUFhakosQ0FBQztJQVpKLHVDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBQ0Qsd0NBQWdCLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEQsQ0FBQztJQWFELGdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBdEJrQztRQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDO2tDQUF5QixnQ0FBc0I7MERBQUM7SUFMekUsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDdEMsQ0FBQzt5Q0FrQmlDLG9DQUFnQjtZQUNoQix5QkFBZ0I7T0FsQnRDLGFBQWEsQ0E0QnpCO0lBQUQsb0JBQUM7Q0FBQSxBQTVCRCxJQTRCQztBQTVCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1ldHJvY2FyZCB9IGZyb20gXCIuLi9zaGFyZWQvbWV0cm9jYXJkLm1vZGVsXCI7XG5pbXBvcnQge01ldHJvY2FyZFNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvbWV0cm9jYXJkLnNlcnZpY2VcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheX0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBtZXRyb2NhcmQ6IE9ic2VydmFibGVBcnJheTxNZXRyb2NhcmQ+O1xuICAgIGlzTG9hZGluZyA6IGJvb2xlYW47XG4gICAgXG4gICAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuICAgIG1haW5Db250ZW50VGV4dDogc3RyaW5nID0gXCJTaWRlRHJhd2VyIGZvciBOYXRpdmVTY3JpcHQgY2FuIGJlIGVhc2lseSBzZXR1cCBpbiB0aGUgWE1MIGRlZmluaXRpb24gb2YgeW91ciBwYWdlIGJ5IGRlZmluaW5nIG1haW4tIGFuZCBkcmF3ZXItY29udGVudC4gVGhlIGNvbXBvbmVudFwiXG4gICAgICAgICsgXCIgaGFzIGEgZGVmYXVsdCB0cmFuc2l0aW9uIGFuZCBwb3NpdGlvbiBhbmQgYWxzbyBleHBvc2VzIG5vdGlmaWNhdGlvbnMgcmVsYXRlZCB0byBjaGFuZ2VzIGluIGl0cyBzdGF0ZS4gU3dpcGUgZnJvbSBsZWZ0IHRvIG9wZW4gc2lkZSBkcmF3ZXIuXCI7XG4gICAgb25PcGVuRHJhd2VyVGFwKCkge1xuICAgICAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG4gICAgb25DbG9zZURyYXdlclRhcCgpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5jbG9zZURyYXdlcigpO1xuICAgIH1cblxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX21ldHJvY2FyZFNlcnZpY2U6IE1ldHJvY2FyZFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlckV4dGVudGlvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG5cbiAgICApIHt9XG5cblxuXG5cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cbn1cbiJdfQ==