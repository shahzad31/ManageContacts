(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/cdk/layout'), require('rxjs/operators'), require('@angular/material'), require('@angular/cdk/collections'), require('@angular/cdk/table'), require('@angular/cdk/tree'), require('@angular/common'), require('@angular/platform-browser'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('ht-common-components', ['exports', '@angular/core', '@angular/forms', '@angular/cdk/layout', 'rxjs/operators', '@angular/material', '@angular/cdk/collections', '@angular/cdk/table', '@angular/cdk/tree', '@angular/common', '@angular/platform-browser', '@angular/router'], factory) :
    (factory((global['ht-common-components'] = {}),global.ng.core,global.ng.forms,global.ng.cdk.layout,global.rxjs.operators,global.ng.material,global.ng.cdk.collections,global.ng.cdk.table,global.ng.cdk.tree,global.ng.common,global.ng.platformBrowser,global.ng.router));
}(this, (function (exports,i0,forms,layout,operators,material,collections,table,tree,common,platformBrowser,router) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CommonComponentsService = (function () {
        function CommonComponentsService() {
        }
        CommonComponentsService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        CommonComponentsService.ctorParameters = function () { return []; };
        /** @nocollapse */ CommonComponentsService.ngInjectableDef = i0.defineInjectable({ factory: function CommonComponentsService_Factory() { return new CommonComponentsService(); }, token: CommonComponentsService, providedIn: "root" });
        return CommonComponentsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CommonComponentsComponent = (function () {
        function CommonComponentsComponent() {
        }
        /**
         * @return {?}
         */
        CommonComponentsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        CommonComponentsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ht-common-components',
                        template: "\n    <p>\n      common-components works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        CommonComponentsComponent.ctorParameters = function () { return []; };
        return CommonComponentsComponent;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DynamicFormComponent = (function () {
        function DynamicFormComponent() {
            this.formFieldControls = {};
            this.contactProps = [];
            this.submitForm = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        DynamicFormComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                try {
                    for (var _a = __values(Object.keys(this.formSchema)), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var prop = _b.value;
                        this.formFieldControls[prop] = new forms.FormControl(this.formSchema[prop].value, this.mapValidator(this.formSchema[prop].validators));
                        this.contactProps.push({
                            key: prop,
                            label: this.formSchema[prop].label,
                            type: this.formSchema[prop].type,
                            options: this.formSchema[prop].options
                        });
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return))
                            _c.call(_a);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                this.form = new forms.FormGroup(this.formFieldControls);
                var e_1, _c;
            };
        /**
         * @param {?} key
         * @return {?}
         */
        DynamicFormComponent.prototype.isInValid = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                /** @type {?} */
                var fieldControl = this.formFieldControls[key];
                return fieldControl.invalid && (fieldControl.dirty || fieldControl.touched);
            };
        /**
         * @param {?} key
         * @return {?}
         */
        DynamicFormComponent.prototype.getErrorMessage = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                return this.formFieldControls[key].hasError('required') ? 'You must enter a value' :
                    this.formFieldControls[key].hasError('email') ? 'Not a valid email' :
                        this.formFieldControls[key].hasError('min') ? "You have to provide a value greater or\n      equal to " + this.formFieldControls[key].errors.min.min :
                            '';
            };
        /**
         * @param {?} validators
         * @return {?}
         */
        DynamicFormComponent.prototype.mapValidator = /**
         * @param {?} validators
         * @return {?}
         */
            function (validators) {
                if (validators) {
                    return Object.keys(validators).map(function (validationType) {
                        if (validationType === 'required') {
                            return forms.Validators.required;
                        }
                        else if (validationType === 'min') {
                            return forms.Validators.min(validators[validationType]);
                        }
                        else if (validationType === 'email') {
                            return forms.Validators.email;
                        }
                    });
                }
                else {
                    return [];
                }
            };
        /**
         * @return {?}
         */
        DynamicFormComponent.prototype.onSubmit = /**
         * @return {?}
         */
            function () {
                this.submitForm.emit(this.form.value);
            };
        DynamicFormComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ht-dynamic-form',
                        template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" class=\"dynamic-form-component\" #formId=\"ngForm\">\n\n  <div *ngFor=\"let prop of contactProps\">\n    <div [ngSwitch]=\"prop.type\">\n\n      <mat-form-field *ngSwitchCase=\"'text'\">\n        <input matInput placeholder=\"{{ prop.label }}\" [type]=\"prop.type\" [formControlName]=\"prop.key\">\n        <mat-error *ngIf=\"isInValid(prop.key)\">{{getErrorMessage(prop.key)}}</mat-error>\n      </mat-form-field>\n\n      <mat-form-field *ngSwitchCase=\"'number'\">\n        <input matInput placeholder=\"{{ prop.label }}\" [type]=\"prop.type\" [formControlName]=\"prop.key\">\n        <mat-error *ngIf=\"isInValid(prop.key)\">{{getErrorMessage(prop.key)}}</mat-error>\n      </mat-form-field>\n\n      <mat-form-field *ngSwitchCase=\"'email'\">\n        <input matInput placeholder=\"{{ prop.label }}\" [type]=\"prop.type\" [formControlName]=\"prop.key\">\n        <mat-error *ngIf=\"isInValid(prop.key)\">{{getErrorMessage(prop.key)}}</mat-error>\n      </mat-form-field>\n      <div  class=\"radio-group\">\n        <div *ngSwitchCase=\"'radio'\">\n          <label class=\"mat-input\">{{ prop.label }} : </label>\n          <mat-radio-group [formControlName]=\"prop.key\">\n            <mat-radio-button *ngFor=\"let option of prop.options\" [value]=\"option.value\">{{ option.label }}</mat-radio-button>\n          </mat-radio-group>\n        </div>\n      </div>\n\n      <mat-form-field *ngSwitchCase=\"'select'\">\n        <mat-select placeholder=\"{{ prop.label }}\" [formControlName]=\"prop.key\">\n          <mat-option *ngFor=\"let option of prop.options\" [value]=\"option.value\"> {{ option.label }}</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n  </div>\n\n  <div class=\"form-actions\">\n    <button type=\"submit\" mat-raised-button routerLink=\".\" color=\"primary\" [disabled]='!formId.form.valid'>Save</button>\n  </div>\n</form>",
                        styles: [".dynamic-form-component .radio-group{text-align:initial;display:flex;justify-content:center;margin-bottom:15px}.dynamic-form-component .radio-group mat-radio-button{margin-left:10px}.dynamic-form-component .radio-group>div{width:300px}.dynamic-form-component .form-action{text-align:left}.dynamic-form-component .mat-form-field{width:300px}"]
                    },] },
        ];
        DynamicFormComponent.propDecorators = {
            formSchema: [{ type: i0.Input }],
            submitForm: [{ type: i0.Output }]
        };
        return DynamicFormComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NavbarComponent = (function () {
        function NavbarComponent(breakpointObserver) {
            this.breakpointObserver = breakpointObserver;
            this.isHandset$ = this.breakpointObserver.observe(layout.Breakpoints.Handset)
                .pipe(operators.map(function (result) { return result.matches; }));
        }
        /**
         * @param {?} link
         * @return {?}
         */
        NavbarComponent.prototype.getPath = /**
         * @param {?} link
         * @return {?}
         */
            function (link) {
                return link.replace(/\s+/g, '-').toLowerCase();
            };
        /**
         * @return {?}
         */
        NavbarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        NavbarComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ht-nav-bar',
                        template: "<div class=\"nav-bar\">\n  <mat-toolbar color=\"primary\" class=\"app-bar-container\">\n    <img src=\"assets/logo.png\" class=\"app-logo\" />\n    <nav mat-tab-nav-bar class=\"app-tabs\">\n      <a mat-tab-link *ngFor=\"let link of ['Contacts', 'New Contact']\" [routerLink]=\"getPath(link)\" routerLinkActive #rla=\"routerLinkActive\"\n        [active]=\"rla.isActive\">\n        {{link}}\n      </a>\n    </nav>\n    <div class=\"user-buttons\">\n      <a mat-raised-button color=\"accent\" href=\"https://github.com/shahzad31/ManageContacts\" target=\"_blank\">\n        Github\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">face</mat-icon>\n      </a>\n      <a mat-raised-button color=\"accent\" href=\"https://www.linkedin.com/in/shahzad31/\" target=\"_blank\">\n        LinkedIn\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">notifications</mat-icon>\n      </a>\n    </div>\n  </mat-toolbar>\n</div>",
                        styles: [".nav-bar .app-bar-container{background:#6f6e6e;display:flex;flex-direction:row;justify-content:center}.nav-bar .app-bar-container .app-tabs{margin:0 130px;flex:2;border-bottom-width:0}.nav-bar .app-bar-container .app-tabs ::ng-deep .mat-tab-link{padding:0;min-width:116px}.nav-bar .app-bar-container .user-buttons a{margin-left:16px}"]
                    },] },
        ];
        /** @nocollapse */
        NavbarComponent.ctorParameters = function () {
            return [
                { type: layout.BreakpointObserver }
            ];
        };
        return NavbarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DataTableComponent = (function () {
        function DataTableComponent() {
            this.enableSelection = true;
            this.displayedColumns = [];
            this.columns = [];
            this.selectionChange = new i0.EventEmitter();
            this.sortedData = [];
            this.selection = new collections.SelectionModel(true, []);
        }
        /**
         * @return {?}
         */
        DataTableComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
                this.selection.onChange.subscribe(function (changes) {
                    _this.selectionChange.emit(changes);
                });
            };
        /**
         * @param {?} filterValue
         * @return {?}
         */
        DataTableComponent.prototype.applyFilter = /**
         * @param {?} filterValue
         * @return {?}
         */
            function (filterValue) {
                this.dataSource.filter = filterValue.trim().toLowerCase();
                if (this.dataSource.paginator) {
                    this.dataSource.paginator.firstPage();
                }
            };
        /**
         * @param {?} sort
         * @return {?}
         */
        DataTableComponent.prototype.sortData = /**
         * @param {?} sort
         * @return {?}
         */
            function (sort) {
                /** @type {?} */
                var data = this.dataSource.filteredData.slice();
                if (!sort.active || sort.direction === '') {
                    return;
                }
                /** @type {?} */
                var sortedData = data.sort(function (a, b) {
                    /** @type {?} */
                    var isAsc = sort.direction === 'asc';
                    /** @type {?} */
                    var attr = sort.active;
                    return compare(a[sort.active], b[sort.active], isAsc);
                });
                this.dataSource = new material.MatTableDataSource(sortedData || []);
            };
        /**
         * @return {?}
         */
        DataTableComponent.prototype.isAllSelected = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var numSelected = this.selection.selected.length;
                /** @type {?} */
                var numRows = this.dataSource.data.length;
                return numSelected === numRows;
            };
        /** Selects all rows if they are not all selected; otherwise clear selection. */
        /**
         * Selects all rows if they are not all selected; otherwise clear selection.
         * @return {?}
         */
        DataTableComponent.prototype.masterToggle = /**
         * Selects all rows if they are not all selected; otherwise clear selection.
         * @return {?}
         */
            function () {
                var _this = this;
                this.isAllSelected() ?
                    this.selection.clear() :
                    this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
            };
        DataTableComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ht-data-table',
                        template: "<div class=\"data-table-component\">\n  <mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n\n  <div class=\"mat-elevation-z8\">\n    <div class=\"spinner-container\" *ngIf=\"loading\">\n      <mat-spinner class=\"loading-spinner\"></mat-spinner>\n    </div>\n    <table *ngIf=\"!loading\"  mat-table [dataSource]=\"dataSource\"\n     matSort (matSortChange)=\"sortData($event)\">\n\n        <ng-container matColumnDef=\"select\">\n          <th mat-header-cell *matHeaderCellDef>\n            <mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\" [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n            </mat-checkbox>\n          </th>\n          <td mat-cell *matCellDef=\"let row\">\n            <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\n            </mat-checkbox>\n          </td>\n        </ng-container>\n\n      <ng-container *ngFor=\"let col of columns\" [matColumnDef]=\"col.id\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> {{col.label}} </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row[col.id]}} </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </tr>\n    </table>\n\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n</div>",
                        styles: [".data-table-component,.data-table-component mat-form-field,.data-table-component table{width:100%}.data-table-component .spinner-container{display:flex;justify-content:center;height:200px;align-items:center}"]
                    },] },
        ];
        /** @nocollapse */
        DataTableComponent.ctorParameters = function () { return []; };
        DataTableComponent.propDecorators = {
            data: [{ type: i0.Input }],
            loading: [{ type: i0.Input }],
            dataSource: [{ type: i0.Input }],
            enableSelection: [{ type: i0.Input }],
            displayedColumns: [{ type: i0.Input }],
            columns: [{ type: i0.Input }],
            selectionChange: [{ type: i0.Output }],
            paginator: [{ type: i0.ViewChild, args: [material.MatPaginator,] }],
            sort: [{ type: i0.ViewChild, args: [material.MatSort,] }]
        };
        return DataTableComponent;
    }());
    /**
     * @param {?} a
     * @param {?} b
     * @param {?} isAsc
     * @return {?}
     */
    function compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MaterialModule = (function () {
        function MaterialModule() {
        }
        MaterialModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            table.CdkTableModule,
                            tree.CdkTreeModule,
                            material.MatAutocompleteModule,
                            material.MatBadgeModule,
                            material.MatBottomSheetModule,
                            material.MatButtonModule,
                            material.MatButtonToggleModule,
                            material.MatCardModule,
                            material.MatCheckboxModule,
                            material.MatChipsModule,
                            material.MatDatepickerModule,
                            material.MatDialogModule,
                            material.MatDividerModule,
                            material.MatExpansionModule,
                            material.MatGridListModule,
                            material.MatIconModule,
                            material.MatInputModule,
                            material.MatListModule,
                            material.MatMenuModule,
                            material.MatNativeDateModule,
                            material.MatPaginatorModule,
                            material.MatProgressBarModule,
                            material.MatProgressSpinnerModule,
                            material.MatRadioModule,
                            material.MatRippleModule,
                            material.MatSelectModule,
                            material.MatSidenavModule,
                            material.MatSliderModule,
                            material.MatSlideToggleModule,
                            material.MatSnackBarModule,
                            material.MatSortModule,
                            material.MatStepperModule,
                            material.MatTableModule,
                            material.MatTabsModule,
                            material.MatToolbarModule,
                            material.MatTooltipModule,
                            material.MatTreeModule,
                            material.MatFormFieldModule
                        ],
                        exports: [
                            table.CdkTableModule,
                            tree.CdkTreeModule,
                            material.MatAutocompleteModule,
                            material.MatBadgeModule,
                            material.MatBottomSheetModule,
                            material.MatButtonModule,
                            material.MatButtonToggleModule,
                            material.MatCardModule,
                            material.MatCheckboxModule,
                            material.MatChipsModule,
                            material.MatDatepickerModule,
                            material.MatDialogModule,
                            material.MatDividerModule,
                            material.MatExpansionModule,
                            material.MatGridListModule,
                            material.MatIconModule,
                            material.MatInputModule,
                            material.MatListModule,
                            material.MatMenuModule,
                            material.MatNativeDateModule,
                            material.MatPaginatorModule,
                            material.MatProgressBarModule,
                            material.MatProgressSpinnerModule,
                            material.MatRadioModule,
                            material.MatRippleModule,
                            material.MatSelectModule,
                            material.MatSidenavModule,
                            material.MatSliderModule,
                            material.MatSlideToggleModule,
                            material.MatSnackBarModule,
                            material.MatSortModule,
                            material.MatStepperModule,
                            material.MatTableModule,
                            material.MatTabsModule,
                            material.MatToolbarModule,
                            material.MatTooltipModule,
                            material.MatTreeModule,
                            material.MatFormFieldModule,
                        ]
                    },] },
        ];
        return MaterialModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CommonComponentsModule = (function () {
        function CommonComponentsModule() {
        }
        CommonComponentsModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            platformBrowser.BrowserModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            MaterialModule,
                            router.RouterModule
                        ],
                        declarations: [
                            CommonComponentsComponent,
                            DataTableComponent,
                            DynamicFormComponent,
                            NavbarComponent
                        ],
                        exports: [
                            CommonComponentsComponent,
                            DataTableComponent,
                            DynamicFormComponent,
                            NavbarComponent
                        ]
                    },] },
        ];
        return CommonComponentsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.CommonComponentsService = CommonComponentsService;
    exports.CommonComponentsComponent = CommonComponentsComponent;
    exports.CommonComponentsModule = CommonComponentsModule;
    exports.ɵb = DataTableComponent;
    exports.ɵc = DynamicFormComponent;
    exports.ɵd = NavbarComponent;
    exports.ɵa = MaterialModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHQtY29tbW9uLWNvbXBvbmVudHMudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9odC1jb21tb24tY29tcG9uZW50cy9saWIvY29tbW9uLWNvbXBvbmVudHMuc2VydmljZS50cyIsIm5nOi8vaHQtY29tbW9uLWNvbXBvbmVudHMvbGliL2NvbW1vbi1jb21wb25lbnRzLmNvbXBvbmVudC50cyIsbnVsbCwibmc6Ly9odC1jb21tb24tY29tcG9uZW50cy9saWIvY29tcG9uZW50cy9keW5hbWljLWZvcm0vZHluYW1pYy1mb3JtLmNvbXBvbmVudC50cyIsIm5nOi8vaHQtY29tbW9uLWNvbXBvbmVudHMvbGliL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiLCJuZzovL2h0LWNvbW1vbi1jb21wb25lbnRzL2xpYi9jb21wb25lbnRzL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQudHMiLCJuZzovL2h0LWNvbW1vbi1jb21wb25lbnRzL2xpYi9tYXRlcmlhbC5tb2R1bGUudHMiLCJuZzovL2h0LWNvbW1vbi1jb21wb25lbnRzL2xpYi9jb21tb24tY29tcG9uZW50cy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb21tb25Db21wb25lbnRzU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2h0LWNvbW1vbi1jb21wb25lbnRzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIGNvbW1vbi1jb21wb25lbnRzIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBDb21tb25Db21wb25lbnRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyBhcyBWYWx1ZVZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2h0LWR5bmFtaWMtZm9ybScsXG4gIHRlbXBsYXRlOiBgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIiBjbGFzcz1cImR5bmFtaWMtZm9ybS1jb21wb25lbnRcIiAjZm9ybUlkPVwibmdGb3JtXCI+XG5cbiAgPGRpdiAqbmdGb3I9XCJsZXQgcHJvcCBvZiBjb250YWN0UHJvcHNcIj5cbiAgICA8ZGl2IFtuZ1N3aXRjaF09XCJwcm9wLnR5cGVcIj5cblxuICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ1N3aXRjaENhc2U9XCIndGV4dCdcIj5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwie3sgcHJvcC5sYWJlbCB9fVwiIFt0eXBlXT1cInByb3AudHlwZVwiIFtmb3JtQ29udHJvbE5hbWVdPVwicHJvcC5rZXlcIj5cbiAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cImlzSW5WYWxpZChwcm9wLmtleSlcIj57e2dldEVycm9yTWVzc2FnZShwcm9wLmtleSl9fTwvbWF0LWVycm9yPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ1N3aXRjaENhc2U9XCInbnVtYmVyJ1wiPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJ7eyBwcm9wLmxhYmVsIH19XCIgW3R5cGVdPVwicHJvcC50eXBlXCIgW2Zvcm1Db250cm9sTmFtZV09XCJwcm9wLmtleVwiPlxuICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwiaXNJblZhbGlkKHByb3Aua2V5KVwiPnt7Z2V0RXJyb3JNZXNzYWdlKHByb3Aua2V5KX19PC9tYXQtZXJyb3I+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgICA8bWF0LWZvcm0tZmllbGQgKm5nU3dpdGNoQ2FzZT1cIidlbWFpbCdcIj5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwie3sgcHJvcC5sYWJlbCB9fVwiIFt0eXBlXT1cInByb3AudHlwZVwiIFtmb3JtQ29udHJvbE5hbWVdPVwicHJvcC5rZXlcIj5cbiAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cImlzSW5WYWxpZChwcm9wLmtleSlcIj57e2dldEVycm9yTWVzc2FnZShwcm9wLmtleSl9fTwvbWF0LWVycm9yPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDxkaXYgIGNsYXNzPVwicmFkaW8tZ3JvdXBcIj5cbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ3JhZGlvJ1wiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cIm1hdC1pbnB1dFwiPnt7IHByb3AubGFiZWwgfX0gOiA8L2xhYmVsPlxuICAgICAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgW2Zvcm1Db250cm9sTmFtZV09XCJwcm9wLmtleVwiPlxuICAgICAgICAgICAgPG1hdC1yYWRpby1idXR0b24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBwcm9wLm9wdGlvbnNcIiBbdmFsdWVdPVwib3B0aW9uLnZhbHVlXCI+e3sgb3B0aW9uLmxhYmVsIH19PC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8bWF0LWZvcm0tZmllbGQgKm5nU3dpdGNoQ2FzZT1cIidzZWxlY3QnXCI+XG4gICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwie3sgcHJvcC5sYWJlbCB9fVwiIFtmb3JtQ29udHJvbE5hbWVdPVwicHJvcC5rZXlcIj5cbiAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIHByb3Aub3B0aW9uc1wiIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIj4ge3sgb3B0aW9uLmxhYmVsIH19PC9tYXQtb3B0aW9uPlxuICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiZm9ybS1hY3Rpb25zXCI+XG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgbWF0LXJhaXNlZC1idXR0b24gcm91dGVyTGluaz1cIi5cIiBjb2xvcj1cInByaW1hcnlcIiBbZGlzYWJsZWRdPSchZm9ybUlkLmZvcm0udmFsaWQnPlNhdmU8L2J1dHRvbj5cbiAgPC9kaXY+XG48L2Zvcm0+YCxcbiAgc3R5bGVzOiBbYC5keW5hbWljLWZvcm0tY29tcG9uZW50IC5yYWRpby1ncm91cHt0ZXh0LWFsaWduOmluaXRpYWw7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7bWFyZ2luLWJvdHRvbToxNXB4fS5keW5hbWljLWZvcm0tY29tcG9uZW50IC5yYWRpby1ncm91cCBtYXQtcmFkaW8tYnV0dG9ue21hcmdpbi1sZWZ0OjEwcHh9LmR5bmFtaWMtZm9ybS1jb21wb25lbnQgLnJhZGlvLWdyb3VwPmRpdnt3aWR0aDozMDBweH0uZHluYW1pYy1mb3JtLWNvbXBvbmVudCAuZm9ybS1hY3Rpb257dGV4dC1hbGlnbjpsZWZ0fS5keW5hbWljLWZvcm0tY29tcG9uZW50IC5tYXQtZm9ybS1maWVsZHt3aWR0aDozMDBweH1gXVxufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgZm9ybTogRm9ybUdyb3VwO1xuICBmb3JtRmllbGRDb250cm9scyA9IHt9O1xuICBjb250YWN0UHJvcHMgPSBbXTtcblxuICBASW5wdXQoKSBmb3JtU2NoZW1hO1xuICBAT3V0cHV0KCkgc3VibWl0Rm9ybTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgZm9yIChjb25zdCBwcm9wIG9mIE9iamVjdC5rZXlzKHRoaXMuZm9ybVNjaGVtYSkpIHtcbiAgICAgIHRoaXMuZm9ybUZpZWxkQ29udHJvbHNbcHJvcF0gPSBuZXcgRm9ybUNvbnRyb2woXG4gICAgICAgIHRoaXMuZm9ybVNjaGVtYVtwcm9wXS52YWx1ZSxcbiAgICAgICAgdGhpcy5tYXBWYWxpZGF0b3IodGhpcy5mb3JtU2NoZW1hW3Byb3BdLnZhbGlkYXRvcnMpXG4gICAgICApO1xuXG4gICAgICB0aGlzLmNvbnRhY3RQcm9wcy5wdXNoKHtcbiAgICAgICAga2V5OiBwcm9wLFxuICAgICAgICBsYWJlbDogdGhpcy5mb3JtU2NoZW1hW3Byb3BdLmxhYmVsLFxuICAgICAgICB0eXBlOiB0aGlzLmZvcm1TY2hlbWFbcHJvcF0udHlwZSxcbiAgICAgICAgb3B0aW9uczogdGhpcy5mb3JtU2NoZW1hW3Byb3BdLm9wdGlvbnNcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAodGhpcy5mb3JtRmllbGRDb250cm9scyk7XG4gIH1cblxuICBpc0luVmFsaWQoa2V5KSB7XG4gICAgY29uc3QgZmllbGRDb250cm9sID0gdGhpcy5mb3JtRmllbGRDb250cm9sc1trZXldO1xuICAgIHJldHVybiBmaWVsZENvbnRyb2wuaW52YWxpZCAmJiAoZmllbGRDb250cm9sLmRpcnR5IHx8IGZpZWxkQ29udHJvbC50b3VjaGVkKTtcbiAgfVxuXG4gIGdldEVycm9yTWVzc2FnZShrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtRmllbGRDb250cm9sc1trZXldLmhhc0Vycm9yKCdyZXF1aXJlZCcpID8gJ1lvdSBtdXN0IGVudGVyIGEgdmFsdWUnIDpcbiAgICAgIHRoaXMuZm9ybUZpZWxkQ29udHJvbHNba2V5XS5oYXNFcnJvcignZW1haWwnKSA/ICdOb3QgYSB2YWxpZCBlbWFpbCcgOlxuICAgICAgICB0aGlzLmZvcm1GaWVsZENvbnRyb2xzW2tleV0uaGFzRXJyb3IoJ21pbicpID8gYFlvdSBoYXZlIHRvIHByb3ZpZGUgYSB2YWx1ZSBncmVhdGVyIG9yXG4gICAgICBlcXVhbCB0byAke3RoaXMuZm9ybUZpZWxkQ29udHJvbHNba2V5XS5lcnJvcnMubWluLm1pbn1gIDpcbiAgICAgICAgICAnJztcbiAgfVxuXG4gIG1hcFZhbGlkYXRvcih2YWxpZGF0b3JzKTogYW55IHtcbiAgICBpZiAodmFsaWRhdG9ycykge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbGlkYXRvcnMpLm1hcCh2YWxpZGF0aW9uVHlwZSA9PiB7XG4gICAgICAgIGlmICh2YWxpZGF0aW9uVHlwZSA9PT0gJ3JlcXVpcmVkJykge1xuICAgICAgICAgIHJldHVybiBWYWx1ZVZhbGlkYXRvcnMucmVxdWlyZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsaWRhdGlvblR5cGUgPT09ICdtaW4nKSB7XG4gICAgICAgICAgcmV0dXJuIFZhbHVlVmFsaWRhdG9ycy5taW4odmFsaWRhdG9yc1t2YWxpZGF0aW9uVHlwZV0pO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbGlkYXRpb25UeXBlID09PSAnZW1haWwnKSB7XG4gICAgICAgICAgcmV0dXJuIFZhbHVlVmFsaWRhdG9ycy5lbWFpbDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICBvblN1Ym1pdCgpIHtcbiAgICB0aGlzLnN1Ym1pdEZvcm0uZW1pdCh0aGlzLmZvcm0udmFsdWUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJlYWtwb2ludE9ic2VydmVyLCBCcmVha3BvaW50cyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdodC1uYXYtYmFyJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibmF2LWJhclwiPlxuICA8bWF0LXRvb2xiYXIgY29sb3I9XCJwcmltYXJ5XCIgY2xhc3M9XCJhcHAtYmFyLWNvbnRhaW5lclwiPlxuICAgIDxpbWcgc3JjPVwiYXNzZXRzL2xvZ28ucG5nXCIgY2xhc3M9XCJhcHAtbG9nb1wiIC8+XG4gICAgPG5hdiBtYXQtdGFiLW5hdi1iYXIgY2xhc3M9XCJhcHAtdGFic1wiPlxuICAgICAgPGEgbWF0LXRhYi1saW5rICpuZ0Zvcj1cImxldCBsaW5rIG9mIFsnQ29udGFjdHMnLCAnTmV3IENvbnRhY3QnXVwiIFtyb3V0ZXJMaW5rXT1cImdldFBhdGgobGluaylcIiByb3V0ZXJMaW5rQWN0aXZlICNybGE9XCJyb3V0ZXJMaW5rQWN0aXZlXCJcbiAgICAgICAgW2FjdGl2ZV09XCJybGEuaXNBY3RpdmVcIj5cbiAgICAgICAge3tsaW5rfX1cbiAgICAgIDwvYT5cbiAgICA8L25hdj5cbiAgICA8ZGl2IGNsYXNzPVwidXNlci1idXR0b25zXCI+XG4gICAgICA8YSBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cImFjY2VudFwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc2hhaHphZDMxL01hbmFnZUNvbnRhY3RzXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgIEdpdGh1YlxuICAgICAgICA8bWF0LWljb24gYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBhIGhlYXJ0IGljb25cIj5mYWNlPC9tYXQtaWNvbj5cbiAgICAgIDwvYT5cbiAgICAgIDxhIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwiYWNjZW50XCIgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9zaGFoemFkMzEvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgIExpbmtlZEluXG4gICAgICAgIDxtYXQtaWNvbiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIGEgaGVhcnQgaWNvblwiPm5vdGlmaWNhdGlvbnM8L21hdC1pY29uPlxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICA8L21hdC10b29sYmFyPlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYC5uYXYtYmFyIC5hcHAtYmFyLWNvbnRhaW5lcntiYWNrZ3JvdW5kOiM2ZjZlNmU7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5uYXYtYmFyIC5hcHAtYmFyLWNvbnRhaW5lciAuYXBwLXRhYnN7bWFyZ2luOjAgMTMwcHg7ZmxleDoyO2JvcmRlci1ib3R0b20td2lkdGg6MH0ubmF2LWJhciAuYXBwLWJhci1jb250YWluZXIgLmFwcC10YWJzIDo6bmctZGVlcCAubWF0LXRhYi1saW5re3BhZGRpbmc6MDttaW4td2lkdGg6MTE2cHh9Lm5hdi1iYXIgLmFwcC1iYXItY29udGFpbmVyIC51c2VyLWJ1dHRvbnMgYXttYXJnaW4tbGVmdDoxNnB4fWBdXG59KVxuZXhwb3J0IGNsYXNzIE5hdmJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgaXNIYW5kc2V0JDogT2JzZXJ2YWJsZTxCb29sZWFuPiA9IHRoaXMuYnJlYWtwb2ludE9ic2VydmVyLm9ic2VydmUoQnJlYWtwb2ludHMuSGFuZHNldClcbiAgICAucGlwZShcbiAgICAgIG1hcChyZXN1bHQgPT4gcmVzdWx0Lm1hdGNoZXMpXG4gICAgKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJyZWFrcG9pbnRPYnNlcnZlcjogQnJlYWtwb2ludE9ic2VydmVyKSB7XG4gIH1cblxuICBnZXRQYXRoKGxpbmspIHtcbiAgICByZXR1cm4gbGluay5yZXBsYWNlKC9cXHMrL2csICctJykudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRQYWdpbmF0b3IsIE1hdFNvcnQsIE1hdFRhYmxlRGF0YVNvdXJjZSwgU29ydCwgTWF0U29ydGFibGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBTZWxlY3Rpb25Nb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2h0LWRhdGEtdGFibGUnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJkYXRhLXRhYmxlLWNvbXBvbmVudFwiPlxuICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPGlucHV0IG1hdElucHV0IChrZXl1cCk9XCJhcHBseUZpbHRlcigkZXZlbnQudGFyZ2V0LnZhbHVlKVwiIHBsYWNlaG9sZGVyPVwiRmlsdGVyXCI+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgPGRpdiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejhcIj5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1jb250YWluZXJcIiAqbmdJZj1cImxvYWRpbmdcIj5cbiAgICAgIDxtYXQtc3Bpbm5lciBjbGFzcz1cImxvYWRpbmctc3Bpbm5lclwiPjwvbWF0LXNwaW5uZXI+XG4gICAgPC9kaXY+XG4gICAgPHRhYmxlICpuZ0lmPVwiIWxvYWRpbmdcIiAgbWF0LXRhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIlxuICAgICBtYXRTb3J0IChtYXRTb3J0Q2hhbmdlKT1cInNvcnREYXRhKCRldmVudClcIj5cblxuICAgICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInNlbGVjdFwiPlxuICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+XG4gICAgICAgICAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiJGV2ZW50ID8gbWFzdGVyVG9nZ2xlKCkgOiBudWxsXCIgW2NoZWNrZWRdPVwic2VsZWN0aW9uLmhhc1ZhbHVlKCkgJiYgaXNBbGxTZWxlY3RlZCgpXCIgW2luZGV0ZXJtaW5hdGVdPVwic2VsZWN0aW9uLmhhc1ZhbHVlKCkgJiYgIWlzQWxsU2VsZWN0ZWQoKVwiPlxuICAgICAgICAgICAgPC9tYXQtY2hlY2tib3g+XG4gICAgICAgICAgPC90aD5cbiAgICAgICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgcm93XCI+XG4gICAgICAgICAgICA8bWF0LWNoZWNrYm94IChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIiAoY2hhbmdlKT1cIiRldmVudCA/IHNlbGVjdGlvbi50b2dnbGUocm93KSA6IG51bGxcIiBbY2hlY2tlZF09XCJzZWxlY3Rpb24uaXNTZWxlY3RlZChyb3cpXCI+XG4gICAgICAgICAgICA8L21hdC1jaGVja2JveD5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgY29sIG9mIGNvbHVtbnNcIiBbbWF0Q29sdW1uRGVmXT1cImNvbC5pZFwiPlxuICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlcj4ge3tjb2wubGFiZWx9fSA8L3RoPlxuICAgICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgcm93XCI+IHt7cm93W2NvbC5pZF19fSA8L3RkPlxuICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiPjwvdHI+XG4gICAgICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIj5cbiAgICAgIDwvdHI+XG4gICAgPC90YWJsZT5cblxuICAgIDxtYXQtcGFnaW5hdG9yIFtwYWdlU2l6ZU9wdGlvbnNdPVwiWzUsIDEwLCAyNSwgMTAwXVwiPjwvbWF0LXBhZ2luYXRvcj5cbiAgPC9kaXY+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgLmRhdGEtdGFibGUtY29tcG9uZW50LC5kYXRhLXRhYmxlLWNvbXBvbmVudCBtYXQtZm9ybS1maWVsZCwuZGF0YS10YWJsZS1jb21wb25lbnQgdGFibGV7d2lkdGg6MTAwJX0uZGF0YS10YWJsZS1jb21wb25lbnQgLnNwaW5uZXItY29udGFpbmVye2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2hlaWdodDoyMDBweDthbGlnbi1pdGVtczpjZW50ZXJ9YF1cbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZGF0YTtcbiAgQElucHV0KCkgbG9hZGluZztcbiAgQElucHV0KCkgZGF0YVNvdXJjZTtcbiAgQElucHV0KCkgZW5hYmxlU2VsZWN0aW9uID0gdHJ1ZTtcblxuICBASW5wdXQoKSBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFtdO1xuICBASW5wdXQoKSBjb2x1bW5zOiBhbnlbXSA9IFtdO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHNvcnRlZERhdGEgPSBbXTtcblxuICBAVmlld0NoaWxkKE1hdFBhZ2luYXRvcikgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XG4gIEBWaWV3Q2hpbGQoTWF0U29ydCkgc29ydDogTWF0U29ydDtcblxuICBzZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWw8YW55Pih0cnVlLCBbXSk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgdGhpcy5zZWxlY3Rpb24ub25DaGFuZ2Uuc3Vic2NyaWJlKGNoYW5nZXMgPT4ge1xuICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChjaGFuZ2VzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGx5RmlsdGVyKGZpbHRlclZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyID0gZmlsdGVyVmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAodGhpcy5kYXRhU291cmNlLnBhZ2luYXRvcikge1xuICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvci5maXJzdFBhZ2UoKTtcbiAgICB9XG4gIH1cbiAgc29ydERhdGEoc29ydDogU29ydCkge1xuXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJlZERhdGEuc2xpY2UoKTtcbiAgICBpZiAoIXNvcnQuYWN0aXZlIHx8IHNvcnQuZGlyZWN0aW9uID09PSAnJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNvcnRlZERhdGEgPSBkYXRhLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGNvbnN0IGlzQXNjID0gc29ydC5kaXJlY3Rpb24gPT09ICdhc2MnO1xuICAgICAgY29uc3QgYXR0ciA9IHNvcnQuYWN0aXZlO1xuICAgICAgcmV0dXJuIGNvbXBhcmUoYVtzb3J0LmFjdGl2ZV0sIGJbc29ydC5hY3RpdmVdLCBpc0FzYyk7XG4gICAgfSk7XG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShzb3J0ZWREYXRhIHx8IFtdKTtcbiAgfVxuICBpc0FsbFNlbGVjdGVkKCkge1xuICAgIGNvbnN0IG51bVNlbGVjdGVkID0gdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQubGVuZ3RoO1xuICAgIGNvbnN0IG51bVJvd3MgPSB0aGlzLmRhdGFTb3VyY2UuZGF0YS5sZW5ndGg7XG4gICAgcmV0dXJuIG51bVNlbGVjdGVkID09PSBudW1Sb3dzO1xuICB9XG5cbiAgLyoqIFNlbGVjdHMgYWxsIHJvd3MgaWYgdGhleSBhcmUgbm90IGFsbCBzZWxlY3RlZDsgb3RoZXJ3aXNlIGNsZWFyIHNlbGVjdGlvbi4gKi9cbiAgbWFzdGVyVG9nZ2xlKCkge1xuICAgIHRoaXMuaXNBbGxTZWxlY3RlZCgpID9cbiAgICAgIHRoaXMuc2VsZWN0aW9uLmNsZWFyKCkgOlxuICAgICAgdGhpcy5kYXRhU291cmNlLmRhdGEuZm9yRWFjaChyb3cgPT4gdGhpcy5zZWxlY3Rpb24uc2VsZWN0KHJvdykpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXBhcmUoYSwgYiwgaXNBc2MpIHtcbiAgcmV0dXJuIChhIDwgYiA/IC0xIDogMSkgKiAoaXNBc2MgPyAxIDogLTEpO1xufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2RrVGFibGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgQ2RrVHJlZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcblxuaW1wb3J0IHtcbiAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICBNYXRCYWRnZU1vZHVsZSxcbiAgTWF0Qm90dG9tU2hlZXRNb2R1bGUsXG4gIE1hdEJ1dHRvbk1vZHVsZSxcbiAgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlLFxuICBNYXRDYXJkTW9kdWxlLFxuICBNYXRDaGVja2JveE1vZHVsZSxcbiAgTWF0Q2hpcHNNb2R1bGUsXG4gIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gIE1hdERpYWxvZ01vZHVsZSxcbiAgTWF0RGl2aWRlck1vZHVsZSxcbiAgTWF0RXhwYW5zaW9uTW9kdWxlLFxuICBNYXRHcmlkTGlzdE1vZHVsZSxcbiAgTWF0SWNvbk1vZHVsZSxcbiAgTWF0SW5wdXRNb2R1bGUsXG4gIE1hdExpc3RNb2R1bGUsXG4gIE1hdE1lbnVNb2R1bGUsXG4gIE1hdE5hdGl2ZURhdGVNb2R1bGUsXG4gIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgTWF0UmFkaW9Nb2R1bGUsXG4gIE1hdFJpcHBsZU1vZHVsZSxcbiAgTWF0U2VsZWN0TW9kdWxlLFxuICBNYXRTaWRlbmF2TW9kdWxlLFxuICBNYXRTbGlkZXJNb2R1bGUsXG4gIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxuICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgTWF0U29ydE1vZHVsZSxcbiAgTWF0U3RlcHBlck1vZHVsZSxcbiAgTWF0VGFibGVNb2R1bGUsXG4gIE1hdFRhYnNNb2R1bGUsXG4gIE1hdFRvb2xiYXJNb2R1bGUsXG4gIE1hdFRvb2x0aXBNb2R1bGUsXG4gIE1hdFRyZWVNb2R1bGUsXG4gIE1hdEZvcm1GaWVsZE1vZHVsZVxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ2RrVGFibGVNb2R1bGUsXG4gICAgQ2RrVHJlZU1vZHVsZSxcbiAgICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXG4gICAgTWF0QmFkZ2VNb2R1bGUsXG4gICAgTWF0Qm90dG9tU2hlZXRNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSxcbiAgICBNYXRDYXJkTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdENoaXBzTW9kdWxlLFxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIE1hdERpdmlkZXJNb2R1bGUsXG4gICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxuICAgIE1hdEdyaWRMaXN0TW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0TGlzdE1vZHVsZSxcbiAgICBNYXRNZW51TW9kdWxlLFxuICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXG4gICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgICBNYXRSYWRpb01vZHVsZSxcbiAgICBNYXRSaXBwbGVNb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIE1hdFNpZGVuYXZNb2R1bGUsXG4gICAgTWF0U2xpZGVyTW9kdWxlLFxuICAgIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxuICAgIE1hdFNuYWNrQmFyTW9kdWxlLFxuICAgIE1hdFNvcnRNb2R1bGUsXG4gICAgTWF0U3RlcHBlck1vZHVsZSxcbiAgICBNYXRUYWJsZU1vZHVsZSxcbiAgICBNYXRUYWJzTW9kdWxlLFxuICAgIE1hdFRvb2xiYXJNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBNYXRUcmVlTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ2RrVGFibGVNb2R1bGUsXG4gICAgQ2RrVHJlZU1vZHVsZSxcbiAgICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXG4gICAgTWF0QmFkZ2VNb2R1bGUsXG4gICAgTWF0Qm90dG9tU2hlZXRNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSxcbiAgICBNYXRDYXJkTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdENoaXBzTW9kdWxlLFxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIE1hdERpdmlkZXJNb2R1bGUsXG4gICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxuICAgIE1hdEdyaWRMaXN0TW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0TGlzdE1vZHVsZSxcbiAgICBNYXRNZW51TW9kdWxlLFxuICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXG4gICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgICBNYXRSYWRpb01vZHVsZSxcbiAgICBNYXRSaXBwbGVNb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIE1hdFNpZGVuYXZNb2R1bGUsXG4gICAgTWF0U2xpZGVyTW9kdWxlLFxuICAgIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxuICAgIE1hdFNuYWNrQmFyTW9kdWxlLFxuICAgIE1hdFNvcnRNb2R1bGUsXG4gICAgTWF0U3RlcHBlck1vZHVsZSxcbiAgICBNYXRUYWJsZU1vZHVsZSxcbiAgICBNYXRUYWJzTW9kdWxlLFxuICAgIE1hdFRvb2xiYXJNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBNYXRUcmVlTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbE1vZHVsZSB7IH1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBDb21tb25Db21wb25lbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21tb24tY29tcG9uZW50cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZHluYW1pYy1mb3JtL2R5bmFtaWMtZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmF2YmFyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kYXRhLXRhYmxlL2RhdGEtdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnLi9tYXRlcmlhbC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRlcmlhbE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ29tbW9uQ29tcG9uZW50c0NvbXBvbmVudCxcbiAgICBEYXRhVGFibGVDb21wb25lbnQsXG4gICAgRHluYW1pY0Zvcm1Db21wb25lbnQsXG4gICAgTmF2YmFyQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDb21tb25Db21wb25lbnRzQ29tcG9uZW50LFxuICAgIERhdGFUYWJsZUNvbXBvbmVudCxcbiAgICBEeW5hbWljRm9ybUNvbXBvbmVudCxcbiAgICBOYXZiYXJDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb21tb25Db21wb25lbnRzTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJFdmVudEVtaXR0ZXIiLCJ0c2xpYl8xLl9fdmFsdWVzIiwiRm9ybUNvbnRyb2wiLCJGb3JtR3JvdXAiLCJWYWx1ZVZhbGlkYXRvcnMiLCJJbnB1dCIsIk91dHB1dCIsIkJyZWFrcG9pbnRzIiwibWFwIiwiQnJlYWtwb2ludE9ic2VydmVyIiwiU2VsZWN0aW9uTW9kZWwiLCJNYXRUYWJsZURhdGFTb3VyY2UiLCJWaWV3Q2hpbGQiLCJNYXRQYWdpbmF0b3IiLCJNYXRTb3J0IiwiTmdNb2R1bGUiLCJDZGtUYWJsZU1vZHVsZSIsIkNka1RyZWVNb2R1bGUiLCJNYXRBdXRvY29tcGxldGVNb2R1bGUiLCJNYXRCYWRnZU1vZHVsZSIsIk1hdEJvdHRvbVNoZWV0TW9kdWxlIiwiTWF0QnV0dG9uTW9kdWxlIiwiTWF0QnV0dG9uVG9nZ2xlTW9kdWxlIiwiTWF0Q2FyZE1vZHVsZSIsIk1hdENoZWNrYm94TW9kdWxlIiwiTWF0Q2hpcHNNb2R1bGUiLCJNYXREYXRlcGlja2VyTW9kdWxlIiwiTWF0RGlhbG9nTW9kdWxlIiwiTWF0RGl2aWRlck1vZHVsZSIsIk1hdEV4cGFuc2lvbk1vZHVsZSIsIk1hdEdyaWRMaXN0TW9kdWxlIiwiTWF0SWNvbk1vZHVsZSIsIk1hdElucHV0TW9kdWxlIiwiTWF0TGlzdE1vZHVsZSIsIk1hdE1lbnVNb2R1bGUiLCJNYXROYXRpdmVEYXRlTW9kdWxlIiwiTWF0UGFnaW5hdG9yTW9kdWxlIiwiTWF0UHJvZ3Jlc3NCYXJNb2R1bGUiLCJNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUiLCJNYXRSYWRpb01vZHVsZSIsIk1hdFJpcHBsZU1vZHVsZSIsIk1hdFNlbGVjdE1vZHVsZSIsIk1hdFNpZGVuYXZNb2R1bGUiLCJNYXRTbGlkZXJNb2R1bGUiLCJNYXRTbGlkZVRvZ2dsZU1vZHVsZSIsIk1hdFNuYWNrQmFyTW9kdWxlIiwiTWF0U29ydE1vZHVsZSIsIk1hdFN0ZXBwZXJNb2R1bGUiLCJNYXRUYWJsZU1vZHVsZSIsIk1hdFRhYnNNb2R1bGUiLCJNYXRUb29sYmFyTW9kdWxlIiwiTWF0VG9vbHRpcE1vZHVsZSIsIk1hdFRyZWVNb2R1bGUiLCJNYXRGb3JtRmllbGRNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJCcm93c2VyTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJSZWFjdGl2ZUZvcm1zTW9kdWxlIiwiUm91dGVyTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7OztzQ0FKRDs7Ozs7OztBQ0FBO1FBYUU7U0FBaUI7Ozs7UUFFakIsNENBQVE7OztZQUFSO2FBQ0M7O29CQWRGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjt3QkFDaEMsUUFBUSxFQUFFLHlEQUlUO3dCQUNELE1BQU0sRUFBRSxFQUFFO3FCQUNYOzs7O3dDQVZEOzs7SUNBQTs7Ozs7Ozs7Ozs7Ozs7QUFjQSxzQkE0RnlCLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJ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