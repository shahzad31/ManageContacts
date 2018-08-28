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
const LOCAL_STORAGE = 'localStorage';
export class ContactAddEditService {
    /**
     * @param {?} rxStore
     */
    constructor(rxStore) {
        this.rxStore = rxStore;
        this.dataSource = CreateDataSource('contacts', LOCAL_STORAGE);
        this.store = this.dataSource.createStore();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    add(data) {
        return this.dataSource.addContact(data);
    }
}
ContactAddEditService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
ContactAddEditService.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ ContactAddEditService.ngInjectableDef = i0.defineInjectable({ factory: function ContactAddEditService_Factory() { return new ContactAddEditService(i0.inject(i1.Store)); }, token: ContactAddEditService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ContactAddEditService.prototype.contacts;
    /** @type {?} */
    ContactAddEditService.prototype.store;
    /** @type {?} */
    ContactAddEditService.prototype.dataSource;
    /** @type {?} */
    ContactAddEditService.prototype.rxStore;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb250YWN0LWFkZC1lZGl0LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvY29udGFjdC1saXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBVSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLGdCQUFnQixNQUFNLG9CQUFvQixDQUFDOzs7O0FBQ2xELE1BQU0sYUFBYSxHQUFHLGNBQWMsQ0FBQztBQUlsQyxNQUFNOzs7O0lBSVAsWUFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDNUM7Ozs7O0lBRUQsR0FBRyxDQUFDLElBQUk7UUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekM7OztZQWJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVBRLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZSwgc2VsZWN0IH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgQ3JlYXRlRGF0YVNvdXJjZSBmcm9tICdjb250YWN0c2RhdGFzb3VyY2UnO1xuY29uc3QgTE9DQUxfU1RPUkFHRSA9ICdsb2NhbFN0b3JhZ2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSkgZXhwb3J0IGNsYXNzIENvbnRhY3RBZGRFZGl0U2VydmljZSB7XG4gIGNvbnRhY3RzOiBhbnk7XG4gIHN0b3JlOiBhbnk7XG4gIGRhdGFTb3VyY2U6IGFueTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByeFN0b3JlOiBTdG9yZTxhbnk+KSB7XG4gICAgdGhpcy5kYXRhU291cmNlID0gQ3JlYXRlRGF0YVNvdXJjZSgnY29udGFjdHMnLCBMT0NBTF9TVE9SQUdFKTtcbiAgICB0aGlzLnN0b3JlID0gdGhpcy5kYXRhU291cmNlLmNyZWF0ZVN0b3JlKCk7XG4gIH1cblxuICBhZGQoZGF0YSkge1xuICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2UuYWRkQ29udGFjdChkYXRhKTtcbiAgfVxufVxuIl19