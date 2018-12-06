"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var backend_service_1 = require("./backend.service");
var sqlite_service_1 = require("../database/sqlite.service");
var LoginService = /** @class */ (function () {
    function LoginService(database) {
        this.database = database;
    }
    LoginService.prototype.register = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.database.getdbConnection()
                .then(function (db) {
                db.execSQL("INSERT INTO users (user_id,password) VALUES (?,?)", [user.email, user.password]).then(function (id) {
                    resolve({ status: true });
                }, function (err) {
                    reject({ status: false });
                });
            });
        });
    };
    LoginService.prototype.login = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.database.getdbConnection()
                .then(function (db) {
                db.all("SELECT * FROM users where user_id like'" + user.email + "' and password like '" + user.password + "'").then(function (rows) {
                    if (rows.length > 0) {
                        backend_service_1.BackendService.token = "dummy_token";
                        resolve({ status: true });
                    }
                    else {
                        reject({ status: false });
                    }
                });
            });
        });
    };
    LoginService.prototype.logout = function () {
        backend_service_1.BackendService.token = "";
        this.database.closedbConnection();
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [sqlite_service_1.DatabaseService])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFHM0MscURBQW1EO0FBQ25ELDZEQUE2RDtBQUc3RDtJQUNJLHNCQUFvQixRQUF5QjtRQUF6QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtJQUU3QyxDQUFDO0lBRUQsK0JBQVEsR0FBUixVQUFTLElBQVU7UUFBbkIsaUJBWUM7UUFYRyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQVMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUV2QyxLQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRTtpQkFDMUIsSUFBSSxDQUFDLFVBQUEsRUFBRTtnQkFDSixFQUFFLENBQUMsT0FBTyxDQUFDLG1EQUFtRCxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFO29CQUNoRyxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDOUIsQ0FBQyxFQUFFLFVBQUEsR0FBRztvQkFDRixNQUFNLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDOUIsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDRCQUFLLEdBQUwsVUFBTSxJQUFVO1FBQWhCLGlCQWdCQztRQWZHLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBUyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBRXZDLEtBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFO2lCQUMxQixJQUFJLENBQUMsVUFBQSxFQUFFO2dCQUNKLEVBQUUsQ0FBQyxHQUFHLENBQUMseUNBQXlDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUk7b0JBQ3BILEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbEIsZ0NBQWMsQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDO3dCQUNyQyxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztvQkFDOUIsQ0FBQztvQkFDRCxJQUFJLENBQUMsQ0FBQzt3QkFDRixNQUFNLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztvQkFDOUIsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsNkJBQU0sR0FBTjtRQUNJLGdDQUFjLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDdEMsQ0FBQztJQXhDUSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7eUNBRXFCLGdDQUFlO09BRHBDLFlBQVksQ0F5Q3hCO0lBQUQsbUJBQUM7Q0FBQSxBQXpDRCxJQXlDQztBQXpDWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi9iYWNrZW5kLnNlcnZpY2VcIjtcbmltcG9ydCB7IERhdGFiYXNlU2VydmljZSB9IGZyb20gXCIuLi9kYXRhYmFzZS9zcWxpdGUuc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGFiYXNlOiBEYXRhYmFzZVNlcnZpY2UpIHtcblxuICAgIH1cblxuICAgIHJlZ2lzdGVyKHVzZXI6IFVzZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPE9iamVjdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLmRhdGFiYXNlLmdldGRiQ29ubmVjdGlvbigpXG4gICAgICAgICAgICAgICAgLnRoZW4oZGIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkYi5leGVjU1FMKFwiSU5TRVJUIElOVE8gdXNlcnMgKHVzZXJfaWQscGFzc3dvcmQpIFZBTFVFUyAoPyw/KVwiLCBbdXNlci5lbWFpbCwgdXNlci5wYXNzd29yZF0pLnRoZW4oaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7IHN0YXR1czogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh7IHN0YXR1czogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2dpbih1c2VyOiBVc2VyKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxPYmplY3Q+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgICAgICAgdGhpcy5kYXRhYmFzZS5nZXRkYkNvbm5lY3Rpb24oKVxuICAgICAgICAgICAgICAgIC50aGVuKGRiID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGIuYWxsKFwiU0VMRUNUICogRlJPTSB1c2VycyB3aGVyZSB1c2VyX2lkIGxpa2UnXCIgKyB1c2VyLmVtYWlsICsgXCInIGFuZCBwYXNzd29yZCBsaWtlICdcIiArIHVzZXIucGFzc3dvcmQgKyBcIidcIikudGhlbihyb3dzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3dzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCYWNrZW5kU2VydmljZS50b2tlbiA9IFwiZHVtbXlfdG9rZW5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHsgc3RhdHVzOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHsgc3RhdHVzOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgQmFja2VuZFNlcnZpY2UudG9rZW4gPSBcIlwiO1xuICAgICAgICB0aGlzLmRhdGFiYXNlLmNsb3NlZGJDb25uZWN0aW9uKCk7XG4gICAgfVxufSJdfQ==