/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import CreateDataSource from 'contactsdatasource';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
/** @type {?} */
var LOCAL_STORAGE = 'localStorage';
var ContactListService = /** @class */ (function () {
    function ContactListService(rxStore) {
        this.rxStore = rxStore;
        this.dataSource = CreateDataSource('contacts', LOCAL_STORAGE);
        this.store = this.dataSource.createStore();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    ContactListService.prototype.add = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return this.dataSource.addContact(data);
    };
    ContactListService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    ContactListService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ ContactListService.ngInjectableDef = i0.defineInjectable({ factory: function ContactListService_Factory() { return new ContactListService(i0.inject(i1.Store)); }, token: ContactListService, providedIn: "root" });
    return ContactListService;
}());
export { ContactListService };
if (false) {
    /** @type {?} */
    ContactListService.prototype.contacts;
    /** @type {?} */
    ContactListService.prototype.store;
    /** @type {?} */
    ContactListService.prototype.dataSource;
    /** @type {?} */
    ContactListService.prototype.rxStore;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb250YWN0LWxpc3QvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9jb250YWN0LWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFVLE1BQU0sYUFBYSxDQUFDO0FBRTVDLE9BQU8sZ0JBQWdCLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFDbEQsSUFBTSxhQUFhLEdBQUcsY0FBYyxDQUFDOztJQVFuQyw0QkFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDNUM7Ozs7O0lBRUQsZ0NBQUc7Ozs7SUFBSCxVQUFJLElBQUk7UUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekM7O2dCQWJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUFEsS0FBSzs7OzZCQURkOztTQVFnQixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZSwgc2VsZWN0IH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgQ3JlYXRlRGF0YVNvdXJjZSBmcm9tICdjb250YWN0c2RhdGFzb3VyY2UnO1xuY29uc3QgTE9DQUxfU1RPUkFHRSA9ICdsb2NhbFN0b3JhZ2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSkgZXhwb3J0IGNsYXNzIENvbnRhY3RMaXN0U2VydmljZSB7XG4gIGNvbnRhY3RzOiBhbnk7XG4gIHN0b3JlOiBhbnk7XG4gIGRhdGFTb3VyY2U6IGFueTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByeFN0b3JlOiBTdG9yZTxhbnk+KSB7XG4gICAgdGhpcy5kYXRhU291cmNlID0gQ3JlYXRlRGF0YVNvdXJjZSgnY29udGFjdHMnLCBMT0NBTF9TVE9SQUdFKTtcbiAgICB0aGlzLnN0b3JlID0gdGhpcy5kYXRhU291cmNlLmNyZWF0ZVN0b3JlKCk7XG4gIH1cblxuICBhZGQoZGF0YSkge1xuICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2UuYWRkQ29udGFjdChkYXRhKTtcbiAgfVxufVxuIl19