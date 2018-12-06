Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var templated_items_comp_1 = require("./templated-items-comp");
var ListViewComponent = /** @class */ (function (_super) {
    __extends(ListViewComponent, _super);
    function ListViewComponent(_elementRef, _iterableDiffers) {
        return _super.call(this, _elementRef, _iterableDiffers) || this;
    }
    Object.defineProperty(ListViewComponent.prototype, "nativeElement", {
        get: function () {
            return this.templatedItemsView;
        },
        enumerable: true,
        configurable: true
    });
    ListViewComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ListView",
                    template: "\n        <DetachedContainer>\n            <Placeholder #loader></Placeholder>\n        </DetachedContainer>",
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: templated_items_comp_1.TEMPLATED_ITEMS_COMPONENT, useExisting: core_1.forwardRef(function () { return ListViewComponent; }) }]
                },] },
    ];
    /** @nocollapse */
    ListViewComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef },
        { type: core_1.IterableDiffers }
    ]; };
    return ListViewComponent;
}(templated_items_comp_1.TemplatedItemsComponent));
exports.ListViewComponent = ListViewComponent;
//# sourceMappingURL=list-view-comp.js.map