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
export class ContactListService {
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
ContactListService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
ContactListService.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ ContactListService.ngInjectableDef = i0.defineInjectable({ factory: function ContactListService_Factory() { return new ContactListService(i0.inject(i1.Store)); }, token: ContactListService, providedIn: "root" });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb250YWN0LWxpc3QvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9jb250YWN0LWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFVLE1BQU0sYUFBYSxDQUFDO0FBRTVDLE9BQU8sZ0JBQWdCLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFDbEQsTUFBTSxhQUFhLEdBQUcsY0FBYyxDQUFDO0FBSWxDLE1BQU07Ozs7SUFJUCxZQUFvQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ3JDLElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUM1Qzs7Ozs7SUFFRCxHQUFHLENBQUMsSUFBSTtRQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN6Qzs7O1lBYkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBUFEsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlLCBzZWxlY3QgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCBDcmVhdGVEYXRhU291cmNlIGZyb20gJ2NvbnRhY3RzZGF0YXNvdXJjZSc7XG5jb25zdCBMT0NBTF9TVE9SQUdFID0gJ2xvY2FsU3RvcmFnZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KSBleHBvcnQgY2xhc3MgQ29udGFjdExpc3RTZXJ2aWNlIHtcbiAgY29udGFjdHM6IGFueTtcbiAgc3RvcmU6IGFueTtcbiAgZGF0YVNvdXJjZTogYW55O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJ4U3RvcmU6IFN0b3JlPGFueT4pIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBDcmVhdGVEYXRhU291cmNlKCdjb250YWN0cycsIExPQ0FMX1NUT1JBR0UpO1xuICAgIHRoaXMuc3RvcmUgPSB0aGlzLmRhdGFTb3VyY2UuY3JlYXRlU3RvcmUoKTtcbiAgfVxuXG4gIGFkZChkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZS5hZGRDb250YWN0KGRhdGEpO1xuICB9XG59XG4iXX0=