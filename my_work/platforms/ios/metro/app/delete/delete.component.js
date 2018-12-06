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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlbGV0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxzQ0FBa0Q7QUFDbEQsNkRBQTZEO0FBQzdELHNEQUErRDtBQUMvRCxvQ0FBc0Q7QUFDdEQsNkRBQWlEO0FBQ2pELHFEQUF1RDtBQWF2RDtJQVlJLHlCQUNZLGdCQUFrQyxFQUNsQyxXQUF5QixFQUN6QixRQUF5QjtRQUZ6QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGdCQUFXLEdBQVgsV0FBVyxDQUFjO1FBQ3pCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBZHJDLGNBQVMsR0FBa0IsRUFBRSxDQUFDO1FBUTlCLGdCQUFXLEdBQVcsR0FBRyxDQUFDO1FBQzFCLGlCQUFZLEdBQVcsR0FBRyxDQUFDO1FBT3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsZ0NBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsb0NBQVUsR0FBVjtRQUFBLGlCQWdCQztRQWZHLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLENBQUMsSUFBSSxDQUNoQyxVQUFBLEVBQUU7WUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxFQUFDLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUM3RSxJQUFJLENBQUUsVUFBQSxJQUFJO2dCQUNQLEdBQUcsQ0FBQSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFBLENBQUM7b0JBQ2pCLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDdEksQ0FBQztnQkFDRCxLQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUNqQixDQUFDLEVBQ0csVUFBQSxLQUFLO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsQ0FDSixDQUFDO1FBQ0YsQ0FBQyxDQUNBLENBQUM7SUFDTixDQUFDO0lBRUQsbUNBQVMsR0FBVCxVQUFVLElBQUk7UUFDVixZQUFZO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNaLEtBQUssRUFBRSx1Q0FBdUM7WUFDOUMsT0FBTyxFQUFFLHlDQUF5QztZQUNsRCxZQUFZLEVBQUUsU0FBUztZQUN2QixnQkFBZ0IsRUFBRSxRQUFRO1NBQzdCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ1YsNkJBQTZCO1lBQzdCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUM3QixtQkFBbUI7WUFHdEIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekIsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTdEUSxlQUFlO1FBTDNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHlCQUF5QjtTQUN6QyxDQUFDO3lDQWNnQyx5QkFBZ0I7WUFDckIscUJBQVk7WUFDZixnQ0FBZTtPQWY1QixlQUFlLENBK0QzQjtJQUFELHNCQUFDO0NBQUEsQUEvREQsSUErREM7QUEvRFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRGF0YWJhc2VTZXJ2aWNlIH0gZnJvbSBcIi4uL2RhdGFiYXNlL3NxbGl0ZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgYWxlcnQsIExvZ2luU2VydmljZSwgVXNlciB9IGZyb20gXCIuLi9zaGFyZWRcIjtcbmltcG9ydCB7IGdldFN0cmluZyB9IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXNcIjtcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCB7IEdyaWRMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCI7XG5pbXBvcnQgeyBTd2lwZUdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlc1wiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkRlbGV0ZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9kZWxldGUuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBEZWxldGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGluZm9NZXRybzogQXJyYXk8T2JqZWN0PiA9IFtdO1xuICAgIGRiOiBhbnk7XG4gICAgZGF0ZU9mUHVyY2hhc2U6IERhdGU7XG4gICAgdG90YWxfYW1vdW50OiBudW1iZXI7XG4gICAgZXhwaXJhdGlvbjogRGF0ZTtcbiAgICB1c2VyX2lkOiBzdHJpbmc7XG4gICAgdHlwZTogc3RyaW5nO1xuXG4gICAgbGF5b3V0V2lkdGg6IG51bWJlciA9IDQwMDtcbiAgICBsYXlvdXRIZWlnaHQ6IG51bWJlciA9IDMwMDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IExvZ2luU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBkYXRhYmFzZTogRGF0YWJhc2VTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMudXNlcl9pZCA9IGdldFN0cmluZyhcInVzZXJfaWRcIik7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VsZWN0Q2FyZCgpO1xuICAgIH1cblxuICAgIHNlbGVjdENhcmQoKXtcbiAgICAgICAgdGhpcy5pbmZvTWV0cm8gPSBbXTtcbiAgICAgICAgdGhpcy5kYXRhYmFzZS5nZXRkYkNvbm5lY3Rpb24oKS50aGVuKFxuICAgICAgICAgICAgZGIgPT4geyBkYi5hbGwoXCJTRUxFQ1QgKiBGUk9NIG1ldHJvY2FyZCBXSEVSRSB1c2VyX2lkID0gP1wiLFt0aGlzLnVzZXJfaWRdKVxuICAgICAgICAudGhlbiggcm93cyA9PiB7XG4gICAgICAgICAgICBmb3IodmFyIHJvdyBpbiByb3dzKXtcbiAgICAgICAgICAgICAgICB0aGlzLmluZm9NZXRyby5wdXNoKHsgaWQ6IHJvd3Nbcm93XVswXSwgdHlwZTogcm93c1tyb3ddWzFdLCBkYXRlOiByb3dzW3Jvd11bMl0sIGFtb3VudDogcm93c1tyb3ddWzNdLCBleHBpcmF0aW9uOiByb3dzW3Jvd11bNF0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRiID0gZGI7XG4gICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTRUxFQ1QgRVJST1JcIiwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb25JdGVtVGFwKGFyZ3MpIHtcbiAgICAgICAgLy9hcmdzLmluZGV4XG4gICAgICAgIGNvbnNvbGUubG9nKGFyZ3MuaW5kZXgpO1xuICAgICAgICBkaWFsb2dzLmNvbmZpcm0oe1xuICAgICAgICAgICAgdGl0bGU6IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIFJlbW92ZSB0aGlzP1wiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJPbmNlIHJlbW92ZWQsIEl0IGNhbiBub3QgYmUgcmVjb3ZlcmVkLiBcIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJDb25maXJtXCIsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxuICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAvLyByZXN1bHQgYXJndW1lbnQgaXMgYm9vbGVhblxuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PSB0cnVlKSB7IFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGVsZXRpbmcgY2FyZFwiKTsgXG4gICAgICAgICAgICAgICAgLy9EZWxldGUgQ2FyZCBoZXJlLlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDYW5jZWxcIik7IFxuICAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXX0=