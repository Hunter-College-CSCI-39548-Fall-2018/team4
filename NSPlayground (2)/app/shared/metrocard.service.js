"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var metrocard_model_1 = require("./metrocard.model");
var rxjs_1 = require("rxjs");
var editableProperties = [
    "metrocard_type",
    "date_of_purchase",
    "expiration",
    "total_amount"
];
var MetrocardService = /** @class */ (function () {
    function MetrocardService() {
        this.allItems = new rxjs_1.BehaviorSubject([]);
        this.allmetrocards = [];
        this.metrocardcardstore = kinvey_nativescript_sdk_1.Kinvey.DataStore.collection("Metrocard");
        // private MetrocardDataStore = Kinvey.DataStore.collection('metrocard');
        // addMetrocard(metrocard: Metrocard){
        //     const promise = this.MetrocardDataStore.save({
        //         metrocard_type: metrocard.metrocard_type,
        //         date_of_purchase: metrocard.date_of_purchase,
        //         expiration: metrocard.expiration,
        //         total_amount: metrocard.total_amount
        //     })
        //     .then(function(entity: {}){
        //         //..
        //     }).catch(function(error: Kinvey.BaseError){
        //         //..
        //     });
        // };
    }
    MetrocardService_1 = MetrocardService;
    MetrocardService.cloneUpdateModel = function (metrocard) {
        return editableProperties.reduce(function (prev, current) { return (prev[current] = metrocard[current], prev); }, {
            _id: metrocard.id
        });
    };
    MetrocardService.prototype.loadMetrocard = function () {
        var _this = this;
        this.load().subscribe((function (metrocardRaw) {
            var allmetrocards = [];
            metrocardRaw.forEach(function (metrocardData) {
                metrocardData.id = metrocardData._id;
                var metrocard = new metrocard_model_1.Metrocard(metrocardData);
                allmetrocards.push(metrocard);
            });
            _this.allItems.next(allmetrocards);
        }), function (err) {
            console.log(err);
        });
    };
    MetrocardService.prototype.getMetrocardbyID = function (id) {
        if (!id) {
            return;
        }
        var findQuery = this.metrocardcardstore.findById(id);
        return findQuery;
    };
    MetrocardService.prototype.sync = function () {
        return this.metrocardcardstore.sync();
    };
    MetrocardService.prototype.update = function (metrocardModel) {
        var _this = this;
        return new Promise(function (resolve) {
            var updateModel = MetrocardService_1.cloneUpdateModel(metrocardModel);
            var promise = _this.metrocardcardstore.save(updateModel).then(function () {
                _this.sync();
            });
        });
    };
    MetrocardService.prototype.load = function () {
        var sortByName = new kinvey_nativescript_sdk_1.Kinvey.Query();
        sortByName.ascending("metrocard_type");
        var findQuery = this.metrocardcardstore.find(sortByName);
        return findQuery;
    };
    MetrocardService = MetrocardService_1 = __decorate([
        core_1.Injectable()
    ], MetrocardService);
    return MetrocardService;
    var MetrocardService_1;
}());
exports.MetrocardService = MetrocardService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0cm9jYXJkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZXRyb2NhcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxtRUFBaUQ7QUFDakQscURBQThDO0FBRTlDLDZCQUFrRDtBQUlsRCxJQUFNLGtCQUFrQixHQUFHO0lBQ3ZCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGNBQWM7Q0FFakIsQ0FBQztBQUtGO0lBREE7UUFhSSxhQUFRLEdBQTBCLElBQUksc0JBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVsRCxrQkFBYSxHQUFxQixFQUFFLENBQUM7UUFDckMsdUJBQWtCLEdBQUcsZ0NBQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFNLFdBQVcsQ0FBQyxDQUFDO1FBcUQzRSx5RUFBeUU7UUFHekUsc0NBQXNDO1FBQ3RDLHFEQUFxRDtRQUNyRCxvREFBb0Q7UUFDcEQsd0RBQXdEO1FBQ3hELDRDQUE0QztRQUM1QywrQ0FBK0M7UUFDL0MsU0FBUztRQUNULGtDQUFrQztRQUNsQyxlQUFlO1FBQ2Ysa0RBQWtEO1FBQ2xELGVBQWU7UUFDZixVQUFVO1FBQ1YsS0FBSztJQUlULENBQUM7eUJBdkZZLGdCQUFnQjtJQUVWLGlDQUFnQixHQUEvQixVQUFnQyxTQUFvQjtRQUVoRCxNQUFNLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSSxFQUFFLE9BQU8sSUFBSyxPQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLENBQUUsRUFBM0MsQ0FBMkMsRUFDL0Y7WUFDSSxHQUFHLEVBQUcsU0FBUyxDQUFDLEVBQUU7U0FFckIsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQU9ELHdDQUFhLEdBQWI7UUFBQSxpQkFlQztRQWJHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFDLFlBQXdCO1lBQzVDLElBQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQztZQUN6QixZQUFZLENBQUMsT0FBTyxDQUFDLFVBQUMsYUFBa0I7Z0JBQ3BDLGFBQWEsQ0FBQyxFQUFFLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQztnQkFDckMsSUFBTSxTQUFTLEdBQUcsSUFBSSwyQkFBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUUvQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxDQUFDO1lBRUgsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLEVBQUUsVUFBQyxHQUFHO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwyQ0FBZ0IsR0FBaEIsVUFBaUIsRUFBVztRQUN4QixFQUFFLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFDSixNQUFNLENBQUM7UUFDWCxDQUFDO1FBRUQsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV2RCxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFRCwrQkFBSSxHQUFKO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsaUNBQU0sR0FBTixVQUFPLGNBQXlCO1FBQWhDLGlCQVFDO1FBUEcsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTztZQUN2QixJQUFNLFdBQVcsR0FBRyxrQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUV0RSxJQUFNLE9BQU8sR0FBRyxLQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDM0QsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sK0JBQUksR0FBWjtRQUNJLElBQU0sVUFBVSxHQUFHLElBQUksZ0NBQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QyxVQUFVLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDdkMsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUUzRCxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFoRVEsZ0JBQWdCO1FBRDVCLGlCQUFVLEVBQUU7T0FDQSxnQkFBZ0IsQ0F1RjVCO0lBQUQsdUJBQUM7O0NBQUEsQUF2RkQsSUF1RkM7QUF2RlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEtpbnZleSB9IGZyb20gXCJraW52ZXktbmF0aXZlc2NyaXB0LXNka1wiO1xyXG5pbXBvcnQgeyBNZXRyb2NhcmQgfSBmcm9tIFwiLi9tZXRyb2NhcmQubW9kZWxcIjtcclxuaW1wb3J0IHsgZ2V0Q3VycmVudERlYnVnQ29udGV4dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlL3NyYy92aWV3L3NlcnZpY2VzXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSBcInJ4anNcIjtcclxuXHJcblxyXG5cclxuY29uc3QgZWRpdGFibGVQcm9wZXJ0aWVzID0gWyBcclxuICAgIFwibWV0cm9jYXJkX3R5cGVcIixcclxuICAgIFwiZGF0ZV9vZl9wdXJjaGFzZVwiLFxyXG4gICAgXCJleHBpcmF0aW9uXCIsXHJcbiAgICBcInRvdGFsX2Ftb3VudFwiXHJcblxyXG5dO1xyXG5cclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNZXRyb2NhcmRTZXJ2aWNle1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGNsb25lVXBkYXRlTW9kZWwobWV0cm9jYXJkOiBNZXRyb2NhcmQpOiBvYmplY3Qge1xyXG5cclxuICAgICAgICByZXR1cm4gZWRpdGFibGVQcm9wZXJ0aWVzLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4gKHByZXZbY3VycmVudF0gPSBtZXRyb2NhcmRbY3VycmVudF0sIHByZXYgKSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9pZCA6IG1ldHJvY2FyZC5pZFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWxsSXRlbXM6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gIG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xyXG5cclxuICAgIHByaXZhdGUgYWxsbWV0cm9jYXJkczogQXJyYXk8TWV0cm9jYXJkPiA9IFtdO1xyXG4gICAgcHJpdmF0ZSBtZXRyb2NhcmRjYXJkc3RvcmUgPSBLaW52ZXkuRGF0YVN0b3JlLmNvbGxlY3Rpb248YW55PihcIk1ldHJvY2FyZFwiKTtcclxuXHJcbiAgICBsb2FkTWV0cm9jYXJkKCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5sb2FkKCkuc3Vic2NyaWJlKCgobWV0cm9jYXJkUmF3OiBBcnJheTxhbnk+KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsbG1ldHJvY2FyZHMgPSBbXTtcclxuICAgICAgICAgICAgbWV0cm9jYXJkUmF3LmZvckVhY2goKG1ldHJvY2FyZERhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbWV0cm9jYXJkRGF0YS5pZCA9IG1ldHJvY2FyZERhdGEuX2lkO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWV0cm9jYXJkID0gbmV3IE1ldHJvY2FyZChtZXRyb2NhcmREYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICBhbGxtZXRyb2NhcmRzLnB1c2gobWV0cm9jYXJkKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFsbEl0ZW1zLm5leHQoYWxsbWV0cm9jYXJkcyk7XHJcbiAgICAgICAgfSksIChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNZXRyb2NhcmRieUlEKGlkIDogc3RyaW5nKTogT2JzZXJ2YWJsZTxNZXRyb2NhcmQ+IHtcclxuICAgICAgICBpZighaWQpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBmaW5kUXVlcnkgPSB0aGlzLm1ldHJvY2FyZGNhcmRzdG9yZS5maW5kQnlJZChpZCk7XHJcblxyXG4gICAgICAgIHJldHVybiBmaW5kUXVlcnk7XHJcbiAgICB9XHJcblxyXG4gICAgc3luYygpOiBQcm9taXNlPGFueT57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWV0cm9jYXJkY2FyZHN0b3JlLnN5bmMoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUobWV0cm9jYXJkTW9kZWw6IE1ldHJvY2FyZCk6IFByb21pc2U8YW55PntcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVNb2RlbCA9IE1ldHJvY2FyZFNlcnZpY2UuY2xvbmVVcGRhdGVNb2RlbChtZXRyb2NhcmRNb2RlbCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5tZXRyb2NhcmRjYXJkc3RvcmUuc2F2ZSh1cGRhdGVNb2RlbCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN5bmMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkKCk6IE9ic2VydmFibGU8QXJyYXk8YW55Pj4ge1xyXG4gICAgICAgIGNvbnN0IHNvcnRCeU5hbWUgPSBuZXcgS2ludmV5LlF1ZXJ5KCk7XHJcbiAgICAgICAgc29ydEJ5TmFtZS5hc2NlbmRpbmcoXCJtZXRyb2NhcmRfdHlwZVwiKTtcclxuICAgICAgICBjb25zdCBmaW5kUXVlcnkgPSB0aGlzLm1ldHJvY2FyZGNhcmRzdG9yZS5maW5kKHNvcnRCeU5hbWUpO1xyXG5cclxuICAgICAgICByZXR1cm4gZmluZFF1ZXJ5O1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gcHJpdmF0ZSBNZXRyb2NhcmREYXRhU3RvcmUgPSBLaW52ZXkuRGF0YVN0b3JlLmNvbGxlY3Rpb24oJ21ldHJvY2FyZCcpO1xyXG5cclxuXHJcbiAgICAvLyBhZGRNZXRyb2NhcmQobWV0cm9jYXJkOiBNZXRyb2NhcmQpe1xyXG4gICAgLy8gICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLk1ldHJvY2FyZERhdGFTdG9yZS5zYXZlKHtcclxuICAgIC8vICAgICAgICAgbWV0cm9jYXJkX3R5cGU6IG1ldHJvY2FyZC5tZXRyb2NhcmRfdHlwZSxcclxuICAgIC8vICAgICAgICAgZGF0ZV9vZl9wdXJjaGFzZTogbWV0cm9jYXJkLmRhdGVfb2ZfcHVyY2hhc2UsXHJcbiAgICAvLyAgICAgICAgIGV4cGlyYXRpb246IG1ldHJvY2FyZC5leHBpcmF0aW9uLFxyXG4gICAgLy8gICAgICAgICB0b3RhbF9hbW91bnQ6IG1ldHJvY2FyZC50b3RhbF9hbW91bnRcclxuICAgIC8vICAgICB9KVxyXG4gICAgLy8gICAgIC50aGVuKGZ1bmN0aW9uKGVudGl0eToge30pe1xyXG4gICAgLy8gICAgICAgICAvLy4uXHJcbiAgICAvLyAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3I6IEtpbnZleS5CYXNlRXJyb3Ipe1xyXG4gICAgLy8gICAgICAgICAvLy4uXHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9O1xyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==