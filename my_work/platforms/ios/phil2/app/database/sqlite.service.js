"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Sqlite = require("nativescript-sqlite");
var DatabaseService = /** @class */ (function () {
    function DatabaseService() {
    }
    DatabaseService.prototype.getdbConnection = function () {
        return new Sqlite('metrotrack');
    };
    DatabaseService.prototype.closedbConnection = function () {
        new Sqlite('metrotrack')
            .then(function (db) {
            db.close();
        });
    };
    DatabaseService = __decorate([
        core_1.Injectable()
    ], DatabaseService);
    return DatabaseService;
}());
exports.DatabaseService = DatabaseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3FsaXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcWxpdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUc1QztJQUFBO0lBWUEsQ0FBQztJQVZVLHlDQUFlLEdBQXRCO1FBQ0ksTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSwyQ0FBaUIsR0FBeEI7UUFDSSxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUM7YUFDbkIsSUFBSSxDQUFDLFVBQUMsRUFBRTtZQUNMLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFBO0lBQ1YsQ0FBQztJQVhRLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTtPQUNBLGVBQWUsQ0FZM0I7SUFBRCxzQkFBQztDQUFBLEFBWkQsSUFZQztBQVpZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG52YXIgU3FsaXRlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zcWxpdGVcIik7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRhYmFzZVNlcnZpY2Uge1xuXG4gICAgcHVibGljIGdldGRiQ29ubmVjdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTcWxpdGUoJ21ldHJvdHJhY2snKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2VkYkNvbm5lY3Rpb24oKSB7XG4gICAgICAgIG5ldyBTcWxpdGUoJ21ldHJvdHJhY2snKVxuICAgICAgICAgICAgLnRoZW4oKGRiKSA9PiB7XG4gICAgICAgICAgICAgICAgZGIuY2xvc2UoKTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxufSJdfQ==