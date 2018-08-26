(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/actions/contacts.actions.ts":
/*!*********************************************!*\
  !*** ./src/app/actions/contacts.actions.ts ***!
  \*********************************************/
/*! exports provided: NEW_CONTACT, UPDATE_CONTACT, REMOVE_CONTACT, SET_CONTACTS, newContact, updateContact, removeContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_CONTACT", function() { return NEW_CONTACT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CONTACT", function() { return UPDATE_CONTACT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_CONTACT", function() { return REMOVE_CONTACT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CONTACTS", function() { return SET_CONTACTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newContact", function() { return newContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateContact", function() { return updateContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeContact", function() { return removeContact; });
var NEW_CONTACT = 'NEW_CONTACT';
var UPDATE_CONTACT = 'UPDATE_CONTACT';
var REMOVE_CONTACT = 'REMOVE_CONTACT';
var SET_CONTACTS = 'SET_CONTACTS';
function newContact(payload) {
    return {
        type: NEW_CONTACT,
        payload: payload
    };
}
function updateContact(payload) {
    return {
        type: UPDATE_CONTACT,
        payload: payload
    };
}
function removeContact(payload) {
    return {
        type: REMOVE_CONTACT,
        payload: payload
    };
}


/***/ }),

/***/ "./src/app/add-edit-contacts/add-contact/add-contact.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/add-edit-contacts/add-contact/add-contact.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dynamic-form\">\n  <app-dynamic-form [formSchema]=\"contact\" (submitForm)=\"onContactSave($event)\"></app-dynamic-form>\n</div>\n<button class=\"go-back-btn\" mat-raised-button routerLink=\"\">\n  <mat-icon aria-label=\"Example icon-button with a heart icon\">arrow_back</mat-icon>\n  Go Back\n</button>"

/***/ }),

/***/ "./src/app/add-edit-contacts/add-contact/add-contact.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/add-edit-contacts/add-contact/add-contact.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".go-back-btn {\n  position: absolute;\n  bottom: 25px; }\n\n:host {\n  text-align: center; }\n\n.dynamic-form {\n  width: 600px; }\n"

/***/ }),

/***/ "./src/app/add-edit-contacts/add-contact/add-contact.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/add-edit-contacts/add-contact/add-contact.component.ts ***!
  \************************************************************************/
/*! exports provided: AddContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddContactComponent", function() { return AddContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_contacts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/contacts.service */ "./src/app/services/contacts.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_contacts_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/contacts.actions */ "./src/app/actions/contacts.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddContactComponent = /** @class */ (function () {
    function AddContactComponent(contactsService, router, store) {
        this.contactsService = contactsService;
        this.router = router;
        this.store = store;
        this.contact = {
            name: {
                label: 'Name',
                value: '',
                type: 'text',
                validators: {
                    required: true
                }
            },
            gender: {
                label: 'Gender',
                value: 'M',
                type: 'radio',
                options: [{ label: 'Male', value: 'M' }, { label: 'Female', value: 'F' }]
            },
            age: {
                label: 'Age',
                value: '',
                type: 'number',
                validators: {
                    min: 18
                }
            },
            email: {
                label: 'Email',
                value: '',
                type: 'email',
                validators: {
                    required: true,
                    email: true
                }
            },
            city: {
                label: 'City',
                value: 'ISL',
                type: 'select',
                options: [
                    { label: '--select--', value: '' },
                    { label: 'Islamabad', value: 'ISL' },
                    { label: 'Lahore', value: 'LHR' },
                    { label: 'Rawalpindi', value: 'RWP' }
                ]
            },
            country: {
                label: 'Country',
                value: 'PK',
                type: 'select',
                options: [
                    { label: '--select--', value: '' },
                    { label: 'Pakistan', value: 'PK' },
                    { label: 'United States', value: 'USA' },
                    { label: 'Germany', value: 'GER' }
                ]
            }
        };
    }
    AddContactComponent.prototype.ngOnInit = function () {
    };
    AddContactComponent.prototype.onContactSave = function (data) {
        this.store.dispatch(Object(_actions_contacts_actions__WEBPACK_IMPORTED_MODULE_4__["newContact"])(data));
        this.router.navigate(['/contacts']);
        // this.contactsService.add(data).then(result => {
        //   if (result) {
        //     this.router.navigate(['/contacts']);
        //   }
        // });
    };
    AddContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-contact',
            template: __webpack_require__(/*! ./add-contact.component.html */ "./src/app/add-edit-contacts/add-contact/add-contact.component.html"),
            styles: [__webpack_require__(/*! ./add-contact.component.scss */ "./src/app/add-edit-contacts/add-contact/add-contact.component.scss")],
            providers: [_services_contacts_service__WEBPACK_IMPORTED_MODULE_1__["ContactsService"]]
        }),
        __metadata("design:paramtypes", [_services_contacts_service__WEBPACK_IMPORTED_MODULE_1__["ContactsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], AddContactComponent);
    return AddContactComponent;
}());



/***/ }),

/***/ "./src/app/add-edit-contacts/add-edit-contacts.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/add-edit-contacts/add-edit-contacts.module.ts ***!
  \***************************************************************/
/*! exports provided: AddEditContactsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditContactsModule", function() { return AddEditContactsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _add_contact_add_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-contact/add-contact.component */ "./src/app/add-edit-contacts/add-contact/add-contact.component.ts");
/* harmony import */ var _components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/dynamic-form/dynamic-form.component */ "./src/app/components/dynamic-form/dynamic-form.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AddEditContactsModule = /** @class */ (function () {
    function AddEditContactsModule() {
    }
    AddEditContactsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
            ],
            declarations: [_add_contact_add_contact_component__WEBPACK_IMPORTED_MODULE_4__["AddContactComponent"], _components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_5__["DynamicFormComponent"]]
        })
    ], AddEditContactsModule);
    return AddEditContactsModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_contacts_view_contacts_component_view_contacts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-contacts/view-contacts-component/view-contacts.component */ "./src/app/view-contacts/view-contacts-component/view-contacts.component.ts");
/* harmony import */ var _add_edit_contacts_add_contact_add_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-contacts/add-contact/add-contact.component */ "./src/app/add-edit-contacts/add-contact/add-contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'new-contact', component: _add_edit_contacts_add_contact_add_contact_component__WEBPACK_IMPORTED_MODULE_3__["AddContactComponent"] },
    { path: 'contacts', component: _view_contacts_view_contacts_component_view_contacts_component__WEBPACK_IMPORTED_MODULE_2__["ViewContactsComponent"] },
    { path: '', redirectTo: '/contacts', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"app-container mat-app-background basic-container\">\n  <app-nav-bar></app-nav-bar>\n  <h1 class=\"mat-display-1 app-title\">Welcome to {{ title }}!</h1>  \n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-container {\n  height: 100%;\n  padding: 20px; }\n  .app-container .app-title {\n    margin-top: 25px;\n    margin-bottom: 25px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Manage Contacts';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _view_contacts_view_contacts_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-contacts/view-contacts.module */ "./src/app/view-contacts/view-contacts.module.ts");
/* harmony import */ var _add_edit_contacts_add_edit_contacts_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-edit-contacts/add-edit-contacts.module */ "./src/app/add-edit-contacts/add-edit-contacts.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _view_contacts_view_contacts_module__WEBPACK_IMPORTED_MODULE_4__["ViewContactsModule"],
                _add_edit_contacts_add_edit_contacts_module__WEBPACK_IMPORTED_MODULE_5__["AddEditContactsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot({ app: _reducers__WEBPACK_IMPORTED_MODULE_10__["default"] }),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"].instrument({ maxAge: 10, }),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/data-table/data-table.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/data-table/data-table.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"data-table-component\">\n  <mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n\n  <div class=\"mat-elevation-z8\">\n    <div class=\"spinner-container\" *ngIf=\"loading\">\n      <mat-spinner class=\"loading-spinner\"></mat-spinner>\n    </div>\n    <table *ngIf=\"!loading\"  mat-table [dataSource]=\"dataSource\"\n     matSort (matSortChange)=\"sortData($event)\">\n\n        <ng-container matColumnDef=\"select\">\n          <th mat-header-cell *matHeaderCellDef>\n            <mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\" [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n            </mat-checkbox>\n          </th>\n          <td mat-cell *matCellDef=\"let row\">\n            <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\n            </mat-checkbox>\n          </td>\n        </ng-container>\n\n      <ng-container *ngFor=\"let col of columns\" [matColumnDef]=\"col.id\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> {{col.label}} </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row[col.id]}} </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </tr>\n    </table>\n\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/data-table/data-table.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/data-table/data-table.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".data-table-component {\n  width: 100%; }\n  .data-table-component table {\n    width: 100%; }\n  .data-table-component mat-form-field {\n    width: 100%; }\n  .data-table-component .spinner-container {\n    display: flex;\n    justify-content: center;\n    height: 200px;\n    align-items: center; }\n"

/***/ }),

/***/ "./src/app/components/data-table/data-table.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/data-table/data-table.component.ts ***!
  \***************************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataTableComponent = /** @class */ (function () {
    function DataTableComponent() {
        this.enableSelection = true;
        this.displayedColumns = [];
        this.columns = [];
        this.sortedData = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
    }
    DataTableComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    DataTableComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    DataTableComponent.prototype.sortData = function (sort) {
        var data = this.dataSource.filteredData.slice();
        if (!sort.active || sort.direction === '') {
            return;
        }
        var sortedData = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            var attr = sort.active;
            return compare(a[sort.active], b[sort.active], isAsc);
        });
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](sortedData || []);
    };
    DataTableComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    DataTableComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataTableComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataTableComponent.prototype, "loading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataTableComponent.prototype, "dataSource", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DataTableComponent.prototype, "enableSelection", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DataTableComponent.prototype, "displayedColumns", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DataTableComponent.prototype, "columns", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], DataTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], DataTableComponent.prototype, "sort", void 0);
    DataTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-data-table',
            template: __webpack_require__(/*! ./data-table.component.html */ "./src/app/components/data-table/data-table.component.html"),
            styles: [__webpack_require__(/*! ./data-table.component.scss */ "./src/app/components/data-table/data-table.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DataTableComponent);
    return DataTableComponent;
}());

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/components/dynamic-form/dynamic-form.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/dynamic-form/dynamic-form.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" class=\"dynamic-form-component\" #formId=\"ngForm\">\n\n  <div *ngFor=\"let prop of contactProps\">\n    <div [ngSwitch]=\"prop.type\">\n\n      <mat-form-field *ngSwitchCase=\"'text'\">\n        <input matInput placeholder=\"{{ prop.label }}\" [type]=\"prop.type\" [formControlName]=\"prop.key\">\n        <mat-error *ngIf=\"isInValid(prop.key)\">{{getErrorMessage(prop.key)}}</mat-error>\n      </mat-form-field>\n\n      <mat-form-field *ngSwitchCase=\"'number'\">\n        <input matInput placeholder=\"{{ prop.label }}\" [type]=\"prop.type\" [formControlName]=\"prop.key\">\n        <mat-error *ngIf=\"isInValid(prop.key)\">{{getErrorMessage(prop.key)}}</mat-error>\n      </mat-form-field>\n\n      <mat-form-field *ngSwitchCase=\"'email'\">\n        <input matInput placeholder=\"{{ prop.label }}\" [type]=\"prop.type\" [formControlName]=\"prop.key\">\n        <mat-error *ngIf=\"isInValid(prop.key)\">{{getErrorMessage(prop.key)}}</mat-error>\n      </mat-form-field>\n      <div  class=\"radio-group\">\n        <div *ngSwitchCase=\"'radio'\">\n          <label class=\"mat-input\">{{ prop.label }} : </label>\n          <mat-radio-group [formControlName]=\"prop.key\">\n            <mat-radio-button *ngFor=\"let option of prop.options\" [value]=\"option.value\">{{ option.label }}</mat-radio-button>\n          </mat-radio-group>\n        </div>\n      </div>\n\n      <mat-form-field *ngSwitchCase=\"'select'\">\n        <mat-select placeholder=\"{{ prop.label }}\" [formControlName]=\"prop.key\">\n          <mat-option *ngFor=\"let option of prop.options\" [value]=\"option.value\"> {{ option.label }}</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n  </div>\n\n  <div class=\"form-actions\">\n    <button type=\"submit\" mat-raised-button routerLink=\".\" color=\"primary\" [disabled]='!formId.form.valid'>Save</button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/components/dynamic-form/dynamic-form.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/dynamic-form/dynamic-form.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dynamic-form-component .radio-group {\n  text-align: initial;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 15px; }\n  .dynamic-form-component .radio-group mat-radio-button {\n    margin-left: 10px; }\n  .dynamic-form-component .radio-group > div {\n    width: 300px; }\n  .dynamic-form-component .form-action {\n  text-align: left; }\n  .dynamic-form-component .mat-form-field {\n  width: 300px; }\n"

/***/ }),

/***/ "./src/app/components/dynamic-form/dynamic-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/dynamic-form/dynamic-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: DynamicFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormComponent", function() { return DynamicFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DynamicFormComponent = /** @class */ (function () {
    function DynamicFormComponent() {
        this.formFieldControls = {};
        this.contactProps = [];
        this.submitForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DynamicFormComponent.prototype.ngOnInit = function () {
        for (var _i = 0, _a = Object.keys(this.formSchema); _i < _a.length; _i++) {
            var prop = _a[_i];
            this.formFieldControls[prop] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.formSchema[prop].value, this.mapValidator(this.formSchema[prop].validators));
            this.contactProps.push({
                key: prop,
                label: this.formSchema[prop].label,
                type: this.formSchema[prop].type,
                options: this.formSchema[prop].options
            });
        }
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](this.formFieldControls);
    };
    DynamicFormComponent.prototype.isInValid = function (key) {
        var fieldControl = this.formFieldControls[key];
        return fieldControl.invalid && (fieldControl.dirty || fieldControl.touched);
    };
    DynamicFormComponent.prototype.getErrorMessage = function (key) {
        return this.formFieldControls[key].hasError('required') ? 'You must enter a value' :
            this.formFieldControls[key].hasError('email') ? 'Not a valid email' :
                this.formFieldControls[key].hasError('min') ? "You have to provide a value greater or\n      equal to " + this.formFieldControls[key].errors.min.min :
                    '';
    };
    DynamicFormComponent.prototype.mapValidator = function (validators) {
        if (validators) {
            return Object.keys(validators).map(function (validationType) {
                if (validationType === 'required') {
                    return _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required;
                }
                else if (validationType === 'min') {
                    return _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(validators[validationType]);
                }
                else if (validationType === 'email') {
                    return _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email;
                }
            });
        }
        else {
            return [];
        }
    };
    DynamicFormComponent.prototype.onSubmit = function () {
        this.submitForm.emit(this.form.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DynamicFormComponent.prototype, "formSchema", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DynamicFormComponent.prototype, "submitForm", void 0);
    DynamicFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dynamic-form',
            template: __webpack_require__(/*! ./dynamic-form.component.html */ "./src/app/components/dynamic-form/dynamic-form.component.html"),
            styles: [__webpack_require__(/*! ./dynamic-form.component.scss */ "./src/app/components/dynamic-form/dynamic-form.component.scss")]
        })
    ], DynamicFormComponent);
    return DynamicFormComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-bar\">\n  <mat-toolbar color=\"primary\" class=\"app-bar-container\">\n    <img src=\"assets/logo.png\" class=\"app-logo\" />\n    <nav mat-tab-nav-bar class=\"app-tabs\">\n      <a mat-tab-link *ngFor=\"let link of ['Contacts', 'New Contact']\" [routerLink]=\"getPath(link)\" routerLinkActive #rla=\"routerLinkActive\"\n        [active]=\"rla.isActive\">\n        {{link}}\n      </a>\n    </nav>\n    <div class=\"user-buttons\">\n      <a mat-raised-button color=\"accent\" href=\"https://github.com/shahzad31/ManageContacts\" target=\"_blank\">\n        Github\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">face</mat-icon>\n      </a>\n      <a mat-raised-button color=\"accent\" href=\"https://www.linkedin.com/in/shahzad31/\" target=\"_blank\">\n        LinkedIn\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">notifications</mat-icon>\n      </a>\n    </div>\n  </mat-toolbar>\n</div>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-bar .app-bar-container {\n  background: #6f6e6e;\n  display: flex;\n  flex-direction: row;\n  justify-content: center; }\n  .nav-bar .app-bar-container .app-tabs {\n    margin: 0 130px;\n    flex: 2;\n    border-bottom-width: 0; }\n  .nav-bar .app-bar-container .app-tabs ::ng-deep .mat-tab-link {\n      padding: 0;\n      min-width: 116px; }\n  .nav-bar .app-bar-container .user-buttons a {\n    margin-left: 16px; }\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
    }
    NavbarComponent.prototype.getPath = function (link) {
        return link.replace(/\s+/g, '-').toLowerCase();
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["CdkTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"]
            ],
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["CdkTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/reducers/contacts.ts":
/*!**************************************!*\
  !*** ./src/app/reducers/contacts.ts ***!
  \**************************************/
/*! exports provided: RESET, contactReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET", function() { return RESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactReducer", function() { return contactReducer; });
/* harmony import */ var _actions_contacts_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/contacts.actions */ "./src/app/actions/contacts.actions.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/app/reducers/utils.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var RESET = 'RESET';
var initialState = {
    list: []
};
function contactReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_contacts_actions__WEBPACK_IMPORTED_MODULE_0__["SET_CONTACTS"]:
            return __assign({}, state, { list: action.payload });
        case _actions_contacts_actions__WEBPACK_IMPORTED_MODULE_0__["NEW_CONTACT"]:
            var newContact = action.payload;
            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["addContactToStorage"])(newContact);
            return {};
        case _actions_contacts_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_CONTACT"]:
            return state;
        case _actions_contacts_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_CONTACT"]:
            return state;
        case RESET:
            return 0;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacts */ "./src/app/reducers/contacts.ts");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ "./src/app/reducers/ui.ts");



var appReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    contact: _contacts__WEBPACK_IMPORTED_MODULE_1__["contactReducer"],
    ui: _ui__WEBPACK_IMPORTED_MODULE_2__["uiReducer"],
});
/* harmony default export */ __webpack_exports__["default"] = (appReducer);


/***/ }),

/***/ "./src/app/reducers/ui.ts":
/*!********************************!*\
  !*** ./src/app/reducers/ui.ts ***!
  \********************************/
/*! exports provided: INCREMENT, DECREMENT, RESET, uiReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT", function() { return INCREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECREMENT", function() { return DECREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET", function() { return RESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uiReducer", function() { return uiReducer; });
var INCREMENT = 'INCREMENT';
var DECREMENT = 'DECREMENT';
var RESET = 'RESET';
var initialState = 0;
function uiReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        case RESET:
            return 0;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/reducers/utils.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/utils.ts ***!
  \***********************************/
/*! exports provided: addContactToStorage, getContactsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addContactToStorage", function() { return addContactToStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContactsList", function() { return getContactsList; });
/* harmony import */ var contactsdatasource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! contactsdatasource */ "./node_modules/contactsdatasource/index.js");
// import CreateDataSource from '../../../libs/contactdatasource'

var LOCAL_STORAGE = 'localStorage';
var dataSource = Object(contactsdatasource__WEBPACK_IMPORTED_MODULE_0__["default"])('contacts', LOCAL_STORAGE);
var store = dataSource.createStore();
var addContactToStorage = function (data) {
    dataSource.addContact(data);
};
var getContactsList = function (data) {
};


/***/ }),

/***/ "./src/app/services/contacts.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/contacts.service.ts ***!
  \**********************************************/
/*! exports provided: ContactsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsService", function() { return ContactsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var contactsdatasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! contactsdatasource */ "./node_modules/contactsdatasource/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import CreateDataSource from '../../../libs/contactdatasource'

var LOCAL_STORAGE = 'localStorage';
var ContactsService = /** @class */ (function () {
    function ContactsService(rxStore) {
        this.rxStore = rxStore;
        this.dataSource = Object(contactsdatasource__WEBPACK_IMPORTED_MODULE_2__["default"])('contacts', LOCAL_STORAGE);
        this.store = this.dataSource.createStore();
    }
    ContactsService.prototype.add = function (data) {
        return this.dataSource.addContact(data);
    };
    ContactsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], ContactsService);
    return ContactsService;
}());



/***/ }),

/***/ "./src/app/view-contacts/view-contacts-component/view-contacts.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/view-contacts/view-contacts-component/view-contacts.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-list\">\n  <app-data-table [loading]='loading' [columns]=\"columns\" [dataSource]=\"dataSource\" [displayedColumns]='displayedColumns'></app-data-table>\n  <button class=\"new-btn\" mat-raised-button color=\"warn\">Delete Contacts\n    <mat-icon>delete</mat-icon>\n  </button>\n  <button class=\"new-btn\" mat-raised-button color=\"accent\" [routerLink]=\"['/new-contact']\">Edit Contact\n    <mat-icon>edit</mat-icon>\n  </button>\n  <button class=\"new-btn\" mat-raised-button color=\"primary\" [routerLink]=\"['/new-contact']\">New Contact\n    <mat-icon>create_new_folder</mat-icon>\n  </button>\n</div>"

/***/ }),

/***/ "./src/app/view-contacts/view-contacts-component/view-contacts.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/view-contacts/view-contacts-component/view-contacts.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\ntd,\nth {\n  width: 25%; }\n\n.new-btn {\n  margin-top: 15px;\n  margin-left: 15px;\n  float: right; }\n"

/***/ }),

/***/ "./src/app/view-contacts/view-contacts-component/view-contacts.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/view-contacts/view-contacts-component/view-contacts.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ViewContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewContactsComponent", function() { return ViewContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_contacts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/contacts.service */ "./src/app/services/contacts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewContactsComponent = /** @class */ (function () {
    function ViewContactsComponent(contactsService) {
        this.contactsService = contactsService;
        this.displayedColumns = ['select', 'id', 'name', 'age', 'email', 'city'];
        this.loading = true;
        this.columns = [
            { id: 'id', label: 'ID' },
            { id: 'name', label: 'Name' },
            { id: 'age', label: 'Age' },
            { id: 'gender', label: 'Gender' },
            { id: 'address', label: 'Address' },
            { id: 'city', label: 'City' },
            { id: 'country', label: 'Country' },
            { id: 'email', label: 'Email' }
        ];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]([]);
    }
    ViewContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // TODO: show and hide loader on contacts loading
        this.contactsService.store.then(function (result) {
            _this.loading = false;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](result.contacts || []);
        });
    };
    ViewContactsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ViewContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-contacts',
            template: __webpack_require__(/*! ./view-contacts.component.html */ "./src/app/view-contacts/view-contacts-component/view-contacts.component.html"),
            styles: [__webpack_require__(/*! ./view-contacts.component.scss */ "./src/app/view-contacts/view-contacts-component/view-contacts.component.scss")],
            providers: [_services_contacts_service__WEBPACK_IMPORTED_MODULE_2__["ContactsService"]]
        }),
        __metadata("design:paramtypes", [_services_contacts_service__WEBPACK_IMPORTED_MODULE_2__["ContactsService"]])
    ], ViewContactsComponent);
    return ViewContactsComponent;
}());



/***/ }),

/***/ "./src/app/view-contacts/view-contacts.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/view-contacts/view-contacts.module.ts ***!
  \*******************************************************/
/*! exports provided: ViewContactsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewContactsModule", function() { return ViewContactsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _view_contacts_component_view_contacts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-contacts-component/view-contacts.component */ "./src/app/view-contacts/view-contacts-component/view-contacts.component.ts");
/* harmony import */ var _components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/data-table/data-table.component */ "./src/app/components/data-table/data-table.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ViewContactsModule = /** @class */ (function () {
    function ViewContactsModule() {
    }
    ViewContactsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
            ],
            declarations: [_view_contacts_component_view_contacts_component__WEBPACK_IMPORTED_MODULE_3__["ViewContactsComponent"], _components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_4__["DataTableComponent"]]
        })
    ], ViewContactsModule);
    return ViewContactsModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/shahzadbhatti/humanitec/ManageContacts/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map