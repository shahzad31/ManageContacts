/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import CreateDataSource from 'contactsdatasource';
import * as i0 from "@angular/core";
/** @type {?} */
var LOCAL_STORAGE = 'localStorage';
var ContactAddEditService = /** @class */ (function () {
    function ContactAddEditService() {
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
    ContactAddEditService.ctorParameters = function () { return []; };
    /** @nocollapse */ ContactAddEditService.ngInjectableDef = i0.defineInjectable({ factory: function ContactAddEditService_Factory() { return new ContactAddEditService(); }, token: ContactAddEditService, providedIn: "root" });
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
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9odC1jb250YWN0LWFkZC1lZGl0LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvY29udGFjdC1saXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxnQkFBZ0IsTUFBTSxvQkFBb0IsQ0FBQzs7O0FBQ2xELElBQU0sYUFBYSxHQUFHLGNBQWMsQ0FBQzs7SUFRbkM7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDNUM7Ozs7O0lBRUQsbUNBQUc7Ozs7SUFBSCxVQUFJLElBQUk7UUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekM7O2dCQWJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O2dDQVBEOztTQU9nQixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCBDcmVhdGVEYXRhU291cmNlIGZyb20gJ2NvbnRhY3RzZGF0YXNvdXJjZSc7XG5jb25zdCBMT0NBTF9TVE9SQUdFID0gJ2xvY2FsU3RvcmFnZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KSBleHBvcnQgY2xhc3MgQ29udGFjdEFkZEVkaXRTZXJ2aWNlIHtcbiAgY29udGFjdHM6IGFueTtcbiAgc3RvcmU6IGFueTtcbiAgZGF0YVNvdXJjZTogYW55O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBDcmVhdGVEYXRhU291cmNlKCdjb250YWN0cycsIExPQ0FMX1NUT1JBR0UpO1xuICAgIHRoaXMuc3RvcmUgPSB0aGlzLmRhdGFTb3VyY2UuY3JlYXRlU3RvcmUoKTtcbiAgfVxuXG4gIGFkZChkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZS5hZGRDb250YWN0KGRhdGEpO1xuICB9XG59XG4iXX0=