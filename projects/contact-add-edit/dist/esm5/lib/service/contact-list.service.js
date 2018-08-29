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
var ContactAddEditService = /** @class */ (function () {
    function ContactAddEditService(rxStore) {
        this.rxStore = rxStore;
        this.dataSource = CreateDataSource('contacts', LOCAL_STORAGE);
        this.store = this.dataSource.createStore();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    ContactAddEditService.prototype.add = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return this.dataSource.addContact(data);
    };
    ContactAddEditService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    ContactAddEditService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ ContactAddEditService.ngInjectableDef = i0.defineInjectable({ factory: function ContactAddEditService_Factory() { return new ContactAddEditService(i0.inject(i1.Store)); }, token: ContactAddEditService, providedIn: "root" });
    return ContactAddEditService;
}());
export { ContactAddEditService };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb250YWN0LWFkZC1lZGl0LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvY29udGFjdC1saXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBVSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLGdCQUFnQixNQUFNLG9CQUFvQixDQUFDOzs7O0FBQ2xELElBQU0sYUFBYSxHQUFHLGNBQWMsQ0FBQzs7SUFRbkMsK0JBQW9CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQzVDOzs7OztJQUVELG1DQUFHOzs7O0lBQUgsVUFBSSxJQUFJO1FBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3pDOztnQkFiRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVBRLEtBQUs7OztnQ0FEZDs7U0FRZ0IscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUsIHNlbGVjdCB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IENyZWF0ZURhdGFTb3VyY2UgZnJvbSAnY29udGFjdHNkYXRhc291cmNlJztcbmNvbnN0IExPQ0FMX1NUT1JBR0UgPSAnbG9jYWxTdG9yYWdlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pIGV4cG9ydCBjbGFzcyBDb250YWN0QWRkRWRpdFNlcnZpY2Uge1xuICBjb250YWN0czogYW55O1xuICBzdG9yZTogYW55O1xuICBkYXRhU291cmNlOiBhbnk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcnhTdG9yZTogU3RvcmU8YW55Pikge1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IENyZWF0ZURhdGFTb3VyY2UoJ2NvbnRhY3RzJywgTE9DQUxfU1RPUkFHRSk7XG4gICAgdGhpcy5zdG9yZSA9IHRoaXMuZGF0YVNvdXJjZS5jcmVhdGVTdG9yZSgpO1xuICB9XG5cbiAgYWRkKGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlLmFkZENvbnRhY3QoZGF0YSk7XG4gIH1cbn1cbiJdfQ==