Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page");
var NSEmptyOutletComponent = /** @class */ (function () {
    function NSEmptyOutletComponent(page) {
        this.page = page;
        if (this.page) {
            this.page.actionBarHidden = true;
        }
    }
    NSEmptyOutletComponent.decorators = [
        { type: core_1.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: "ns-empty-outlet",
                    moduleId: module.id,
                    template: "<page-router-outlet isEmptyOutlet='true'></page-router-outlet>"
                },] },
    ];
    /** @nocollapse */
    NSEmptyOutletComponent.ctorParameters = function () { return [
        { type: page_1.Page }
    ]; };
    return NSEmptyOutletComponent;
}());
exports.NSEmptyOutletComponent = NSEmptyOutletComponent;
//# sourceMappingURL=ns-empty-outlet.component.js.map