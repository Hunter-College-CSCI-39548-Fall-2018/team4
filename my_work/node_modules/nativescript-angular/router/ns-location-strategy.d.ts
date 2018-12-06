import { LocationStrategy } from "@angular/common";
import { UrlSegmentGroup } from "@angular/router";
import { NavigationTransition, Frame } from "tns-core-modules/ui/frame";
import { FrameService } from "../platform-providers";
export declare class Outlet {
    showingModal: boolean;
    modalNavigationDepth: number;
    parent: Outlet;
    isPageNavigationBack: boolean;
    outletKeys: Array<string>;
    pathByOutlets: string;
    states: Array<LocationState>;
    frame: Frame;
    shouldDetach: boolean;
    constructor(outletKey: string, pathByOutlets: string, modalNavigationDepth?: number);
    peekState(): LocationState;
    containsTopState(stateUrl: string): boolean;
}
export interface NavigationOptions {
    clearHistory?: boolean;
    animated?: boolean;
    transition?: NavigationTransition;
}
export interface LocationState {
    segmentGroup: UrlSegmentGroup;
    isRootSegmentGroup: boolean;
    isPageNavigation: boolean;
}
export declare class NSLocationStrategy extends LocationStrategy {
    private frameService;
    private outlets;
    private currentOutlet;
    private popStateCallbacks;
    private _currentNavigationOptions;
    private currentUrlTree;
    _modalNavigationDepth: number;
    constructor(frameService: FrameService);
    path(): string;
    prepareExternalUrl(internal: string): string;
    pushState(state: any, title: string, url: string, queryParams: string): void;
    pushStateInternal(state: any, title: string, url: string, queryParams: string): void;
    replaceState(state: any, title: string, url: string, queryParams: string): void;
    forward(): void;
    back(outlet?: Outlet): void;
    canGoBack(outlet?: Outlet): boolean;
    onPopState(fn: (_: any) => any): void;
    getBaseHref(): string;
    private callPopState(state, pop?, outlet?);
    toString(): string;
    _beginBackPageNavigation(frame: Frame): void;
    _finishBackPageNavigation(frame: Frame): void;
    _beginModalNavigation(frame: Frame): void;
    _closeModalNavigation(): void;
    _beginPageNavigation(frame: Frame): NavigationOptions;
    _setNavigationOptions(options: NavigationOptions): void;
    _getOutlets(): Array<Outlet>;
    updateOutletFrame(outlet: Outlet, frame: Frame): void;
    clearOutlet(frame: Frame): void;
    getSegmentGroupFullPath(segmentGroup: UrlSegmentGroup): string;
    getRouteFullPath(currentRoute: any): string;
    getPathByOutlets(urlSegmentGroup: any): string;
    findOutletByModal(modalNavigation: number, isShowingModal?: boolean): Outlet;
    findOutletByOutletPath(pathByOutlets: string): Outlet;
    findOutletByKey(outletKey: string): Outlet;
    private getOutletByFrame(frame);
    private updateStates(outlet, currentSegmentGroup);
    private updateParentsStates(outlet, newSegmentGroup);
    private createOutlet(outletKey, segmentGroup, parent, modalNavigation?);
    private getSegmentGroup(pathByOutlets);
    private updateSegmentGroup(rootNode, oldSegmentGroup, newSegmentGroup);
    private upsertModalOutlet(parentOutlet, segmentedGroup);
}
