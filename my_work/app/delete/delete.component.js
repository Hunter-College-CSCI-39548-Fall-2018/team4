"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sqlite_service_1 = require("../database/sqlite.service");
var router_1 = require("nativescript-angular/router");
var shared_1 = require("../shared");
var application_settings_1 = require("application-settings");
var dialogs = require("tns-core-modules/ui/dialogs");
var DeleteComponent = /** @class */ (function () {
    function DeleteComponent(routerExtensions, userService, database) {
        this.routerExtensions = routerExtensions;
        this.userService = userService;
        this.database = database;
        this.infoMetro = [];
        this.layoutWidth = 400;
        this.layoutHeight = 300;
        this.user_id = application_settings_1.getString("user_id");
    }
    DeleteComponent.prototype.ngOnInit = function () {
        this.selectCard();
    };
    DeleteComponent.prototype.selectCard = function () {
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
    DeleteComponent.prototype.onItemTap = function (args) {
        var _this = this;
        //args.index
        console.log(args.index);
        dialogs.confirm({
            title: "Are you sure you want to Remove this?",
            message: "Once removed, It can not be recovered. ",
            okButtonText: "Confirm",
            cancelButtonText: "Cancel",
        }).then(function (result) {
            // result argument is boolean
            if (result == true) {
                console.log("Deleting card");
                //Delete Card here.
                var metrocard_1 = args.view.bindingContext;
                _this.db.execSQL("DELETE FROM metrocard WHERE id=?", [metrocard_1.id]).then(function () {
                    var index = _this.infoMetro.indexOf(metrocard_1);
                    _this.infoMetro.splice(index, 1);
                    console.log(" Item deleted successfully!");
                    console.log("Object that triggered the event: " + args.object);
                    console.log("View that triggered the event: " + args.view);
                    console.log("Event name: " + args.eventName);
                });
                _this.routerExtensions.navigate(["/home"], { clearHistory: true });
            }
            else {
                console.log("Cancel");
            }
        });
    };
    DeleteComponent = __decorate([
        core_1.Component({
            selector: "Delete",
            moduleId: module.id,
            templateUrl: "./delete.component.html"
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            shared_1.LoginService,
            sqlite_service_1.DatabaseService])
    ], DeleteComponent);
    return DeleteComponent;
}());
exports.DeleteComponent = DeleteComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlbGV0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxzQ0FBa0Q7QUFDbEQsNkRBQTZEO0FBQzdELHNEQUErRDtBQUMvRCxvQ0FBc0Q7QUFDdEQsNkRBQWlEO0FBQ2pELHFEQUF1RDtBQWF2RDtJQVlJLHlCQUNZLGdCQUFrQyxFQUNsQyxXQUF5QixFQUN6QixRQUF5QjtRQUZ6QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGdCQUFXLEdBQVgsV0FBVyxDQUFjO1FBQ3pCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBZHJDLGNBQVMsR0FBa0IsRUFBRSxDQUFDO1FBUTlCLGdCQUFXLEdBQVcsR0FBRyxDQUFDO1FBQzFCLGlCQUFZLEdBQVcsR0FBRyxDQUFDO1FBT3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsZ0NBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsb0NBQVUsR0FBVjtRQUFBLGlCQWdCQztRQWZHLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLENBQUMsSUFBSSxDQUNoQyxVQUFBLEVBQUU7WUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxFQUFDLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUM3RSxJQUFJLENBQUUsVUFBQSxJQUFJO2dCQUNQLEdBQUcsQ0FBQSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFBLENBQUM7b0JBQ2pCLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDdEksQ0FBQztnQkFDRCxLQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUNqQixDQUFDLEVBQ0csVUFBQSxLQUFLO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsQ0FDSixDQUFDO1FBQ0YsQ0FBQyxDQUNBLENBQUM7SUFDTixDQUFDO0lBRUQsbUNBQVMsR0FBVCxVQUFVLElBQUk7UUFBZCxpQkE0QkM7UUEzQkcsWUFBWTtRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDWixLQUFLLEVBQUUsdUNBQXVDO1lBQzlDLE9BQU8sRUFBRSx5Q0FBeUM7WUFDbEQsWUFBWSxFQUFFLFNBQVM7WUFDdkIsZ0JBQWdCLEVBQUUsUUFBUTtTQUM3QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNWLDZCQUE2QjtZQUM3QixFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDN0IsbUJBQW1CO2dCQUVuQixJQUFJLFdBQVMsR0FBUSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztnQkFDOUMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsa0NBQWtDLEVBQUUsQ0FBQyxXQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ3ZFLElBQUksS0FBSyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFdBQVMsQ0FBQyxDQUFDO29CQUM5QyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQTtvQkFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMzRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQy9DLENBQUMsQ0FBQyxDQUFDO2dCQUNILEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3JFLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pCLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUF0RVEsZUFBZTtRQUwzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx5QkFBeUI7U0FDekMsQ0FBQzt5Q0FjZ0MseUJBQWdCO1lBQ3JCLHFCQUFZO1lBQ2YsZ0NBQWU7T0FmNUIsZUFBZSxDQXdFM0I7SUFBRCxzQkFBQztDQUFBLEFBeEVELElBd0VDO0FBeEVZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERhdGFiYXNlU2VydmljZSB9IGZyb20gXCIuLi9kYXRhYmFzZS9zcWxpdGUuc2VydmljZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IGFsZXJ0LCBMb2dpblNlcnZpY2UsIFVzZXIgfSBmcm9tIFwiLi4vc2hhcmVkXCI7XG5pbXBvcnQgeyBnZXRTdHJpbmcgfSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzXCI7XG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSwgUmFkTGlzdFZpZXcgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3XCI7XG5pbXBvcnQgeyBHcmlkTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9ncmlkLWxheW91dFwiO1xuaW1wb3J0IHsgU3dpcGVHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXNcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJEZWxldGVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZGVsZXRlLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgRGVsZXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpbmZvTWV0cm86IEFycmF5PE9iamVjdD4gPSBbXTtcbiAgICBkYjogYW55O1xuICAgIGRhdGVPZlB1cmNoYXNlOiBEYXRlO1xuICAgIHRvdGFsX2Ftb3VudDogbnVtYmVyO1xuICAgIGV4cGlyYXRpb246IERhdGU7XG4gICAgdXNlcl9pZDogc3RyaW5nO1xuICAgIHR5cGU6IHN0cmluZztcblxuICAgIGxheW91dFdpZHRoOiBudW1iZXIgPSA0MDA7XG4gICAgbGF5b3V0SGVpZ2h0OiBudW1iZXIgPSAzMDA7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBMb2dpblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZGF0YWJhc2U6IERhdGFiYXNlU2VydmljZVxuICAgICkge1xuICAgICAgICB0aGlzLnVzZXJfaWQgPSBnZXRTdHJpbmcoXCJ1c2VyX2lkXCIpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNlbGVjdENhcmQoKTtcbiAgICB9XG5cbiAgICBzZWxlY3RDYXJkKCl7XG4gICAgICAgIHRoaXMuaW5mb01ldHJvID0gW107XG4gICAgICAgIHRoaXMuZGF0YWJhc2UuZ2V0ZGJDb25uZWN0aW9uKCkudGhlbihcbiAgICAgICAgICAgIGRiID0+IHsgZGIuYWxsKFwiU0VMRUNUICogRlJPTSBtZXRyb2NhcmQgV0hFUkUgdXNlcl9pZCA9ID9cIixbdGhpcy51c2VyX2lkXSlcbiAgICAgICAgLnRoZW4oIHJvd3MgPT4ge1xuICAgICAgICAgICAgZm9yKHZhciByb3cgaW4gcm93cyl7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmZvTWV0cm8ucHVzaCh7IGlkOiByb3dzW3Jvd11bMF0sIHR5cGU6IHJvd3Nbcm93XVsxXSwgZGF0ZTogcm93c1tyb3ddWzJdLCBhbW91bnQ6IHJvd3Nbcm93XVszXSwgZXhwaXJhdGlvbjogcm93c1tyb3ddWzRdIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kYiA9IGRiO1xuICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU0VMRUNUIEVSUk9SXCIsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uSXRlbVRhcChhcmdzKSB7XG4gICAgICAgIC8vYXJncy5pbmRleFxuICAgICAgICBjb25zb2xlLmxvZyhhcmdzLmluZGV4KTtcbiAgICAgICAgZGlhbG9ncy5jb25maXJtKHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBSZW1vdmUgdGhpcz9cIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiT25jZSByZW1vdmVkLCBJdCBjYW4gbm90IGJlIHJlY292ZXJlZC4gXCIsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiQ29uZmlybVwiLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgLy8gcmVzdWx0IGFyZ3VtZW50IGlzIGJvb2xlYW5cbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGVsZXRpbmcgY2FyZFwiKTtcbiAgICAgICAgICAgICAgICAvL0RlbGV0ZSBDYXJkIGhlcmUuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IG1ldHJvY2FyZCA9IDxhbnk+YXJncy52aWV3LmJpbmRpbmdDb250ZXh0O1xuICAgICAgICAgICAgICAgIHRoaXMuZGIuZXhlY1NRTChcIkRFTEVURSBGUk9NIG1ldHJvY2FyZCBXSEVSRSBpZD0/XCIsIFttZXRyb2NhcmQuaWRdKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuaW5mb01ldHJvLmluZGV4T2YobWV0cm9jYXJkKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaW5mb01ldHJvLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiBJdGVtIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5IVwiKVxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJPYmplY3QgdGhhdCB0cmlnZ2VyZWQgdGhlIGV2ZW50OiBcIiArIGFyZ3Mub2JqZWN0KTtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVmlldyB0aGF0IHRyaWdnZXJlZCB0aGUgZXZlbnQ6IFwiICsgYXJncy52aWV3KTtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXZlbnQgbmFtZTogXCIgKyBhcmdzLmV2ZW50TmFtZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9ob21lXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2FuY2VsXCIpO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXX0=