/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import CreateDataSource from 'contactsdatasource';
import * as i0 from "@angular/core";
/** @type {?} */
const LOCAL_STORAGE = 'localStorage';
export class ContactListService {
    constructor() {
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
ContactListService.ctorParameters = () => [];
/** @nocollapse */ ContactListService.ngInjectableDef = i0.defineInjectable({ factory: function ContactListService_Factory() { return new ContactListService(); }, token: ContactListService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ContactListService.prototype.store;
    /** @type {?} */
    ContactListService.prototype.dataSource;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9odC1jb250YWN0LWxpc3QvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9jb250YWN0LWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLGdCQUFnQixNQUFNLG9CQUFvQixDQUFDOzs7QUFDbEQsTUFBTSxhQUFhLEdBQUcsY0FBYyxDQUFDO0FBSWxDLE1BQU07SUFHUDtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUM1Qzs7Ozs7SUFFRCxHQUFHLENBQUMsSUFBSTtRQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN6Qzs7O1lBWkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgQ3JlYXRlRGF0YVNvdXJjZSBmcm9tICdjb250YWN0c2RhdGFzb3VyY2UnO1xuY29uc3QgTE9DQUxfU1RPUkFHRSA9ICdsb2NhbFN0b3JhZ2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSkgZXhwb3J0IGNsYXNzIENvbnRhY3RMaXN0U2VydmljZSB7XG4gIHN0b3JlOiBhbnk7XG4gIGRhdGFTb3VyY2U6IGFueTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kYXRhU291cmNlID0gQ3JlYXRlRGF0YVNvdXJjZSgnY29udGFjdHMnLCBMT0NBTF9TVE9SQUdFKTtcbiAgICB0aGlzLnN0b3JlID0gdGhpcy5kYXRhU291cmNlLmNyZWF0ZVN0b3JlKCk7XG4gIH1cblxuICBhZGQoZGF0YSkge1xuICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2UuYWRkQ29udGFjdChkYXRhKTtcbiAgfVxufVxuIl19