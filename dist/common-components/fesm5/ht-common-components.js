import { Injectable, Component, NgModule, ViewChild, Input, EventEmitter, Output, defineInjectable } from '@angular/core';
import { __values } from 'tslib';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { MatPaginator, MatSort, MatTableDataSource, MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule, MatFormFieldModule } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CommonComponentsService = /** @class */ (function () {
    function CommonComponentsService() {
    }
    CommonComponentsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    CommonComponentsService.ctorParameters = function () { return []; };
    /** @nocollapse */ CommonComponentsService.ngInjectableDef = defineInjectable({ factory: function CommonComponentsService_Factory() { return new CommonComponentsService(); }, token: CommonComponentsService, providedIn: "root" });
    return CommonComponentsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CommonComponentsComponent = /** @class */ (function () {
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
        { type: Component, args: [{
                    selector: 'ht-common-components',
                    template: "\n    <p>\n      common-components works!\n    </p>\n  ",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    CommonComponentsComponent.ctorParameters = function () { return []; };
    return CommonComponentsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DynamicFormComponent = /** @class */ (function () {
    function DynamicFormComponent() {
        this.formFieldControls = {};
        this.contactProps = [];
        this.submitForm = new EventEmitter();
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
                this.formFieldControls[prop] = new FormControl(this.formSchema[prop].value, this.mapValidator(this.formSchema[prop].validators));
                this.contactProps.push({
                    key: prop,
                    label: this.formSchema[prop].label,
                    type: this.formSchema[prop].type,
                    options: this.formSchema[prop].options
                });
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.form = new FormGroup(this.formFieldControls);
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
                    return Validators.required;
                }
                else if (validationType === 'min') {
                    return Validators.min(validators[validationType]);
                }
                else if (validationType === 'email') {
                    return Validators.email;
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
        { type: Component, args: [{
                    selector: 'ht-dynamic-form',
                    template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" class=\"dynamic-form-component\" #formId=\"ngForm\">\n\n  <div *ngFor=\"let prop of contactProps\">\n    <div [ngSwitch]=\"prop.type\">\n\n      <mat-form-field *ngSwitchCase=\"'text'\">\n        <input matInput placeholder=\"{{ prop.label }}\" [type]=\"prop.type\" [formControlName]=\"prop.key\">\n        <mat-error *ngIf=\"isInValid(prop.key)\">{{getErrorMessage(prop.key)}}</mat-error>\n      </mat-form-field>\n\n      <mat-form-field *ngSwitchCase=\"'number'\">\n        <input matInput placeholder=\"{{ prop.label }}\" [type]=\"prop.type\" [formControlName]=\"prop.key\">\n        <mat-error *ngIf=\"isInValid(prop.key)\">{{getErrorMessage(prop.key)}}</mat-error>\n      </mat-form-field>\n\n      <mat-form-field *ngSwitchCase=\"'email'\">\n        <input matInput placeholder=\"{{ prop.label }}\" [type]=\"prop.type\" [formControlName]=\"prop.key\">\n        <mat-error *ngIf=\"isInValid(prop.key)\">{{getErrorMessage(prop.key)}}</mat-error>\n      </mat-form-field>\n      <div  class=\"radio-group\">\n        <div *ngSwitchCase=\"'radio'\">\n          <label class=\"mat-input\">{{ prop.label }} : </label>\n          <mat-radio-group [formControlName]=\"prop.key\">\n            <mat-radio-button *ngFor=\"let option of prop.options\" [value]=\"option.value\">{{ option.label }}</mat-radio-button>\n          </mat-radio-group>\n        </div>\n      </div>\n\n      <mat-form-field *ngSwitchCase=\"'select'\">\n        <mat-select placeholder=\"{{ prop.label }}\" [formControlName]=\"prop.key\">\n          <mat-option *ngFor=\"let option of prop.options\" [value]=\"option.value\"> {{ option.label }}</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n  </div>\n\n  <div class=\"form-actions\">\n    <button type=\"submit\" mat-raised-button routerLink=\".\" color=\"primary\" [disabled]='!formId.form.valid'>Save</button>\n  </div>\n</form>",
                    styles: [".dynamic-form-component .radio-group{text-align:initial;display:flex;justify-content:center;margin-bottom:15px}.dynamic-form-component .radio-group mat-radio-button{margin-left:10px}.dynamic-form-component .radio-group>div{width:300px}.dynamic-form-component .form-action{text-align:left}.dynamic-form-component .mat-form-field{width:300px}"]
                },] },
    ];
    DynamicFormComponent.propDecorators = {
        formSchema: [{ type: Input }],
        submitForm: [{ type: Output }]
    };
    return DynamicFormComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
            .pipe(map(function (result) { return result.matches; }));
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
        { type: Component, args: [{
                    selector: 'ht-nav-bar',
                    template: "<div class=\"nav-bar\">\n  <mat-toolbar color=\"primary\" class=\"app-bar-container\">\n    <img src=\"assets/logo.png\" class=\"app-logo\" />\n    <nav mat-tab-nav-bar class=\"app-tabs\">\n      <a mat-tab-link *ngFor=\"let link of ['Contacts', 'New Contact']\" [routerLink]=\"getPath(link)\" routerLinkActive #rla=\"routerLinkActive\"\n        [active]=\"rla.isActive\">\n        {{link}}\n      </a>\n    </nav>\n    <div class=\"user-buttons\">\n      <a mat-raised-button color=\"accent\" href=\"https://github.com/shahzad31/ManageContacts\" target=\"_blank\">\n        Github\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">face</mat-icon>\n      </a>\n      <a mat-raised-button color=\"accent\" href=\"https://www.linkedin.com/in/shahzad31/\" target=\"_blank\">\n        LinkedIn\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">notifications</mat-icon>\n      </a>\n    </div>\n  </mat-toolbar>\n</div>",
                    styles: [".nav-bar .app-bar-container{background:#6f6e6e;display:flex;flex-direction:row;justify-content:center}.nav-bar .app-bar-container .app-tabs{margin:0 130px;flex:2;border-bottom-width:0}.nav-bar .app-bar-container .app-tabs ::ng-deep .mat-tab-link{padding:0;min-width:116px}.nav-bar .app-bar-container .user-buttons a{margin-left:16px}"]
                },] },
    ];
    /** @nocollapse */
    NavbarComponent.ctorParameters = function () { return [
        { type: BreakpointObserver }
    ]; };
    return NavbarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DataTableComponent = /** @class */ (function () {
    function DataTableComponent() {
        this.enableSelection = true;
        this.displayedColumns = [];
        this.columns = [];
        this.sortedData = [];
        this.selection = new SelectionModel(true, []);
    }
    /**
     * @return {?}
     */
    DataTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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
        this.dataSource = new MatTableDataSource(sortedData || []);
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
        { type: Component, args: [{
                    selector: 'ht-data-table',
                    template: "<div class=\"data-table-component\">\n  <mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n\n  <div class=\"mat-elevation-z8\">\n    <div class=\"spinner-container\" *ngIf=\"loading\">\n      <mat-spinner class=\"loading-spinner\"></mat-spinner>\n    </div>\n    <table *ngIf=\"!loading\"  mat-table [dataSource]=\"dataSource\"\n     matSort (matSortChange)=\"sortData($event)\">\n\n        <ng-container matColumnDef=\"select\">\n          <th mat-header-cell *matHeaderCellDef>\n            <mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\" [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n            </mat-checkbox>\n          </th>\n          <td mat-cell *matCellDef=\"let row\">\n            <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\n            </mat-checkbox>\n          </td>\n        </ng-container>\n\n      <ng-container *ngFor=\"let col of columns\" [matColumnDef]=\"col.id\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> {{col.label}} </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row[col.id]}} </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </tr>\n    </table>\n\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n</div>",
                    styles: [".data-table-component,.data-table-component mat-form-field,.data-table-component table{width:100%}.data-table-component .spinner-container{display:flex;justify-content:center;height:200px;align-items:center}"]
                },] },
    ];
    /** @nocollapse */
    DataTableComponent.ctorParameters = function () { return []; };
    DataTableComponent.propDecorators = {
        data: [{ type: Input }],
        loading: [{ type: Input }],
        dataSource: [{ type: Input }],
        enableSelection: [{ type: Input }],
        displayedColumns: [{ type: Input }],
        columns: [{ type: Input }],
        paginator: [{ type: ViewChild, args: [MatPaginator,] }],
        sort: [{ type: ViewChild, args: [MatSort,] }]
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
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CdkTableModule,
                        CdkTreeModule,
                        MatAutocompleteModule,
                        MatBadgeModule,
                        MatBottomSheetModule,
                        MatButtonModule,
                        MatButtonToggleModule,
                        MatCardModule,
                        MatCheckboxModule,
                        MatChipsModule,
                        MatDatepickerModule,
                        MatDialogModule,
                        MatDividerModule,
                        MatExpansionModule,
                        MatGridListModule,
                        MatIconModule,
                        MatInputModule,
                        MatListModule,
                        MatMenuModule,
                        MatNativeDateModule,
                        MatPaginatorModule,
                        MatProgressBarModule,
                        MatProgressSpinnerModule,
                        MatRadioModule,
                        MatRippleModule,
                        MatSelectModule,
                        MatSidenavModule,
                        MatSliderModule,
                        MatSlideToggleModule,
                        MatSnackBarModule,
                        MatSortModule,
                        MatStepperModule,
                        MatTableModule,
                        MatTabsModule,
                        MatToolbarModule,
                        MatTooltipModule,
                        MatTreeModule,
                        MatFormFieldModule
                    ],
                    exports: [
                        CdkTableModule,
                        CdkTreeModule,
                        MatAutocompleteModule,
                        MatBadgeModule,
                        MatBottomSheetModule,
                        MatButtonModule,
                        MatButtonToggleModule,
                        MatCardModule,
                        MatCheckboxModule,
                        MatChipsModule,
                        MatDatepickerModule,
                        MatDialogModule,
                        MatDividerModule,
                        MatExpansionModule,
                        MatGridListModule,
                        MatIconModule,
                        MatInputModule,
                        MatListModule,
                        MatMenuModule,
                        MatNativeDateModule,
                        MatPaginatorModule,
                        MatProgressBarModule,
                        MatProgressSpinnerModule,
                        MatRadioModule,
                        MatRippleModule,
                        MatSelectModule,
                        MatSidenavModule,
                        MatSliderModule,
                        MatSlideToggleModule,
                        MatSnackBarModule,
                        MatSortModule,
                        MatStepperModule,
                        MatTableModule,
                        MatTabsModule,
                        MatToolbarModule,
                        MatTooltipModule,
                        MatTreeModule,
                        MatFormFieldModule,
                    ]
                },] },
    ];
    return MaterialModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CommonComponentsModule = /** @class */ (function () {
    function CommonComponentsModule() {
    }
    CommonComponentsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        BrowserModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MaterialModule,
                        RouterModule
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

export { CommonComponentsService, CommonComponentsComponent, CommonComponentsModule, DataTableComponent as ɵb, DynamicFormComponent as ɵc, NavbarComponent as ɵd, MaterialModule as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHQtY29tbW9uLWNvbXBvbmVudHMuanMubWFwIiwic291cmNlcyI6WyJuZzovL2h0LWNvbW1vbi1jb21wb25lbnRzL2xpYi9jb21tb24tY29tcG9uZW50cy5zZXJ2aWNlLnRzIiwibmc6Ly9odC1jb21tb24tY29tcG9uZW50cy9saWIvY29tbW9uLWNvbXBvbmVudHMuY29tcG9uZW50LnRzIiwibmc6Ly9odC1jb21tb24tY29tcG9uZW50cy9saWIvY29tcG9uZW50cy9keW5hbWljLWZvcm0vZHluYW1pYy1mb3JtLmNvbXBvbmVudC50cyIsIm5nOi8vaHQtY29tbW9uLWNvbXBvbmVudHMvbGliL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiLCJuZzovL2h0LWNvbW1vbi1jb21wb25lbnRzL2xpYi9jb21wb25lbnRzL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQudHMiLCJuZzovL2h0LWNvbW1vbi1jb21wb25lbnRzL2xpYi9tYXRlcmlhbC5tb2R1bGUudHMiLCJuZzovL2h0LWNvbW1vbi1jb21wb25lbnRzL2xpYi9jb21tb24tY29tcG9uZW50cy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb21tb25Db21wb25lbnRzU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2h0LWNvbW1vbi1jb21wb25lbnRzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIGNvbW1vbi1jb21wb25lbnRzIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBDb21tb25Db21wb25lbnRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgYXMgVmFsdWVWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdodC1keW5hbWljLWZvcm0nLFxuICB0ZW1wbGF0ZTogYDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCIgY2xhc3M9XCJkeW5hbWljLWZvcm0tY29tcG9uZW50XCIgI2Zvcm1JZD1cIm5nRm9ybVwiPlxuXG4gIDxkaXYgKm5nRm9yPVwibGV0IHByb3Agb2YgY29udGFjdFByb3BzXCI+XG4gICAgPGRpdiBbbmdTd2l0Y2hdPVwicHJvcC50eXBlXCI+XG5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdTd2l0Y2hDYXNlPVwiJ3RleHQnXCI+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInt7IHByb3AubGFiZWwgfX1cIiBbdHlwZV09XCJwcm9wLnR5cGVcIiBbZm9ybUNvbnRyb2xOYW1lXT1cInByb3Aua2V5XCI+XG4gICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJpc0luVmFsaWQocHJvcC5rZXkpXCI+e3tnZXRFcnJvck1lc3NhZ2UocHJvcC5rZXkpfX08L21hdC1lcnJvcj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdTd2l0Y2hDYXNlPVwiJ251bWJlcidcIj5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwie3sgcHJvcC5sYWJlbCB9fVwiIFt0eXBlXT1cInByb3AudHlwZVwiIFtmb3JtQ29udHJvbE5hbWVdPVwicHJvcC5rZXlcIj5cbiAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cImlzSW5WYWxpZChwcm9wLmtleSlcIj57e2dldEVycm9yTWVzc2FnZShwcm9wLmtleSl9fTwvbWF0LWVycm9yPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ1N3aXRjaENhc2U9XCInZW1haWwnXCI+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInt7IHByb3AubGFiZWwgfX1cIiBbdHlwZV09XCJwcm9wLnR5cGVcIiBbZm9ybUNvbnRyb2xOYW1lXT1cInByb3Aua2V5XCI+XG4gICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJpc0luVmFsaWQocHJvcC5rZXkpXCI+e3tnZXRFcnJvck1lc3NhZ2UocHJvcC5rZXkpfX08L21hdC1lcnJvcj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8ZGl2ICBjbGFzcz1cInJhZGlvLWdyb3VwXCI+XG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidyYWRpbydcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJtYXQtaW5wdXRcIj57eyBwcm9wLmxhYmVsIH19IDogPC9sYWJlbD5cbiAgICAgICAgICA8bWF0LXJhZGlvLWdyb3VwIFtmb3JtQ29udHJvbE5hbWVdPVwicHJvcC5rZXlcIj5cbiAgICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgcHJvcC5vcHRpb25zXCIgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiPnt7IG9wdGlvbi5sYWJlbCB9fTwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ1N3aXRjaENhc2U9XCInc2VsZWN0J1wiPlxuICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cInt7IHByb3AubGFiZWwgfX1cIiBbZm9ybUNvbnRyb2xOYW1lXT1cInByb3Aua2V5XCI+XG4gICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBwcm9wLm9wdGlvbnNcIiBbdmFsdWVdPVwib3B0aW9uLnZhbHVlXCI+IHt7IG9wdGlvbi5sYWJlbCB9fTwvbWF0LW9wdGlvbj5cbiAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImZvcm0tYWN0aW9uc1wiPlxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG1hdC1yYWlzZWQtYnV0dG9uIHJvdXRlckxpbms9XCIuXCIgY29sb3I9XCJwcmltYXJ5XCIgW2Rpc2FibGVkXT0nIWZvcm1JZC5mb3JtLnZhbGlkJz5TYXZlPC9idXR0b24+XG4gIDwvZGl2PlxuPC9mb3JtPmAsXG4gIHN0eWxlczogW2AuZHluYW1pYy1mb3JtLWNvbXBvbmVudCAucmFkaW8tZ3JvdXB7dGV4dC1hbGlnbjppbml0aWFsO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbi1ib3R0b206MTVweH0uZHluYW1pYy1mb3JtLWNvbXBvbmVudCAucmFkaW8tZ3JvdXAgbWF0LXJhZGlvLWJ1dHRvbnttYXJnaW4tbGVmdDoxMHB4fS5keW5hbWljLWZvcm0tY29tcG9uZW50IC5yYWRpby1ncm91cD5kaXZ7d2lkdGg6MzAwcHh9LmR5bmFtaWMtZm9ybS1jb21wb25lbnQgLmZvcm0tYWN0aW9ue3RleHQtYWxpZ246bGVmdH0uZHluYW1pYy1mb3JtLWNvbXBvbmVudCAubWF0LWZvcm0tZmllbGR7d2lkdGg6MzAwcHh9YF1cbn0pXG5leHBvcnQgY2xhc3MgRHluYW1pY0Zvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGZvcm06IEZvcm1Hcm91cDtcbiAgZm9ybUZpZWxkQ29udHJvbHMgPSB7fTtcbiAgY29udGFjdFByb3BzID0gW107XG5cbiAgQElucHV0KCkgZm9ybVNjaGVtYTtcbiAgQE91dHB1dCgpIHN1Ym1pdEZvcm06IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIGZvciAoY29uc3QgcHJvcCBvZiBPYmplY3Qua2V5cyh0aGlzLmZvcm1TY2hlbWEpKSB7XG4gICAgICB0aGlzLmZvcm1GaWVsZENvbnRyb2xzW3Byb3BdID0gbmV3IEZvcm1Db250cm9sKFxuICAgICAgICB0aGlzLmZvcm1TY2hlbWFbcHJvcF0udmFsdWUsXG4gICAgICAgIHRoaXMubWFwVmFsaWRhdG9yKHRoaXMuZm9ybVNjaGVtYVtwcm9wXS52YWxpZGF0b3JzKVxuICAgICAgKTtcblxuICAgICAgdGhpcy5jb250YWN0UHJvcHMucHVzaCh7XG4gICAgICAgIGtleTogcHJvcCxcbiAgICAgICAgbGFiZWw6IHRoaXMuZm9ybVNjaGVtYVtwcm9wXS5sYWJlbCxcbiAgICAgICAgdHlwZTogdGhpcy5mb3JtU2NoZW1hW3Byb3BdLnR5cGUsXG4gICAgICAgIG9wdGlvbnM6IHRoaXMuZm9ybVNjaGVtYVtwcm9wXS5vcHRpb25zXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKHRoaXMuZm9ybUZpZWxkQ29udHJvbHMpO1xuICB9XG5cbiAgaXNJblZhbGlkKGtleSkge1xuICAgIGNvbnN0IGZpZWxkQ29udHJvbCA9IHRoaXMuZm9ybUZpZWxkQ29udHJvbHNba2V5XTtcbiAgICByZXR1cm4gZmllbGRDb250cm9sLmludmFsaWQgJiYgKGZpZWxkQ29udHJvbC5kaXJ0eSB8fCBmaWVsZENvbnRyb2wudG91Y2hlZCk7XG4gIH1cblxuICBnZXRFcnJvck1lc3NhZ2Uoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybUZpZWxkQ29udHJvbHNba2V5XS5oYXNFcnJvcigncmVxdWlyZWQnKSA/ICdZb3UgbXVzdCBlbnRlciBhIHZhbHVlJyA6XG4gICAgICB0aGlzLmZvcm1GaWVsZENvbnRyb2xzW2tleV0uaGFzRXJyb3IoJ2VtYWlsJykgPyAnTm90IGEgdmFsaWQgZW1haWwnIDpcbiAgICAgICAgdGhpcy5mb3JtRmllbGRDb250cm9sc1trZXldLmhhc0Vycm9yKCdtaW4nKSA/IGBZb3UgaGF2ZSB0byBwcm92aWRlIGEgdmFsdWUgZ3JlYXRlciBvclxuICAgICAgZXF1YWwgdG8gJHt0aGlzLmZvcm1GaWVsZENvbnRyb2xzW2tleV0uZXJyb3JzLm1pbi5taW59YCA6XG4gICAgICAgICAgJyc7XG4gIH1cblxuICBtYXBWYWxpZGF0b3IodmFsaWRhdG9ycyk6IGFueSB7XG4gICAgaWYgKHZhbGlkYXRvcnMpIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWxpZGF0b3JzKS5tYXAodmFsaWRhdGlvblR5cGUgPT4ge1xuICAgICAgICBpZiAodmFsaWRhdGlvblR5cGUgPT09ICdyZXF1aXJlZCcpIHtcbiAgICAgICAgICByZXR1cm4gVmFsdWVWYWxpZGF0b3JzLnJlcXVpcmVkO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbGlkYXRpb25UeXBlID09PSAnbWluJykge1xuICAgICAgICAgIHJldHVybiBWYWx1ZVZhbGlkYXRvcnMubWluKHZhbGlkYXRvcnNbdmFsaWRhdGlvblR5cGVdKTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWxpZGF0aW9uVHlwZSA9PT0gJ2VtYWlsJykge1xuICAgICAgICAgIHJldHVybiBWYWx1ZVZhbGlkYXRvcnMuZW1haWw7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgdGhpcy5zdWJtaXRGb3JtLmVtaXQodGhpcy5mb3JtLnZhbHVlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyZWFrcG9pbnRPYnNlcnZlciwgQnJlYWtwb2ludHMgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaHQtbmF2LWJhcicsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm5hdi1iYXJcIj5cbiAgPG1hdC10b29sYmFyIGNvbG9yPVwicHJpbWFyeVwiIGNsYXNzPVwiYXBwLWJhci1jb250YWluZXJcIj5cbiAgICA8aW1nIHNyYz1cImFzc2V0cy9sb2dvLnBuZ1wiIGNsYXNzPVwiYXBwLWxvZ29cIiAvPlxuICAgIDxuYXYgbWF0LXRhYi1uYXYtYmFyIGNsYXNzPVwiYXBwLXRhYnNcIj5cbiAgICAgIDxhIG1hdC10YWItbGluayAqbmdGb3I9XCJsZXQgbGluayBvZiBbJ0NvbnRhY3RzJywgJ05ldyBDb250YWN0J11cIiBbcm91dGVyTGlua109XCJnZXRQYXRoKGxpbmspXCIgcm91dGVyTGlua0FjdGl2ZSAjcmxhPVwicm91dGVyTGlua0FjdGl2ZVwiXG4gICAgICAgIFthY3RpdmVdPVwicmxhLmlzQWN0aXZlXCI+XG4gICAgICAgIHt7bGlua319XG4gICAgICA8L2E+XG4gICAgPC9uYXY+XG4gICAgPGRpdiBjbGFzcz1cInVzZXItYnV0dG9uc1wiPlxuICAgICAgPGEgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJhY2NlbnRcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3NoYWh6YWQzMS9NYW5hZ2VDb250YWN0c1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICBHaXRodWJcbiAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggYSBoZWFydCBpY29uXCI+ZmFjZTwvbWF0LWljb24+XG4gICAgICA8L2E+XG4gICAgICA8YSBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cImFjY2VudFwiIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vc2hhaHphZDMxL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICBMaW5rZWRJblxuICAgICAgICA8bWF0LWljb24gYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBhIGhlYXJ0IGljb25cIj5ub3RpZmljYXRpb25zPC9tYXQtaWNvbj5cbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgPC9tYXQtdG9vbGJhcj5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2AubmF2LWJhciAuYXBwLWJhci1jb250YWluZXJ7YmFja2dyb3VuZDojNmY2ZTZlO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7anVzdGlmeS1jb250ZW50OmNlbnRlcn0ubmF2LWJhciAuYXBwLWJhci1jb250YWluZXIgLmFwcC10YWJze21hcmdpbjowIDEzMHB4O2ZsZXg6Mjtib3JkZXItYm90dG9tLXdpZHRoOjB9Lm5hdi1iYXIgLmFwcC1iYXItY29udGFpbmVyIC5hcHAtdGFicyA6Om5nLWRlZXAgLm1hdC10YWItbGlua3twYWRkaW5nOjA7bWluLXdpZHRoOjExNnB4fS5uYXYtYmFyIC5hcHAtYmFyLWNvbnRhaW5lciAudXNlci1idXR0b25zIGF7bWFyZ2luLWxlZnQ6MTZweH1gXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGlzSGFuZHNldCQ6IE9ic2VydmFibGU8Qm9vbGVhbj4gPSB0aGlzLmJyZWFrcG9pbnRPYnNlcnZlci5vYnNlcnZlKEJyZWFrcG9pbnRzLkhhbmRzZXQpXG4gICAgLnBpcGUoXG4gICAgICBtYXAocmVzdWx0ID0+IHJlc3VsdC5tYXRjaGVzKVxuICAgICk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBicmVha3BvaW50T2JzZXJ2ZXI6IEJyZWFrcG9pbnRPYnNlcnZlcikge1xuICB9XG5cbiAgZ2V0UGF0aChsaW5rKSB7XG4gICAgcmV0dXJuIGxpbmsucmVwbGFjZSgvXFxzKy9nLCAnLScpLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRQYWdpbmF0b3IsIE1hdFNvcnQsIE1hdFRhYmxlRGF0YVNvdXJjZSwgU29ydCwgTWF0U29ydGFibGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBTZWxlY3Rpb25Nb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5leHBvcnQgaW50ZXJmYWNlIFVzZXJEYXRhIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBwcm9ncmVzczogc3RyaW5nO1xuICBjb2xvcjogc3RyaW5nO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaHQtZGF0YS10YWJsZScsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImRhdGEtdGFibGUtY29tcG9uZW50XCI+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgKGtleXVwKT1cImFwcGx5RmlsdGVyKCRldmVudC50YXJnZXQudmFsdWUpXCIgcGxhY2Vob2xkZXI9XCJGaWx0ZXJcIj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cblxuICA8ZGl2IGNsYXNzPVwibWF0LWVsZXZhdGlvbi16OFwiPlxuICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWNvbnRhaW5lclwiICpuZ0lmPVwibG9hZGluZ1wiPlxuICAgICAgPG1hdC1zcGlubmVyIGNsYXNzPVwibG9hZGluZy1zcGlubmVyXCI+PC9tYXQtc3Bpbm5lcj5cbiAgICA8L2Rpdj5cbiAgICA8dGFibGUgKm5nSWY9XCIhbG9hZGluZ1wiICBtYXQtdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiXG4gICAgIG1hdFNvcnQgKG1hdFNvcnRDaGFuZ2UpPVwic29ydERhdGEoJGV2ZW50KVwiPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwic2VsZWN0XCI+XG4gICAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj5cbiAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCIkZXZlbnQgPyBtYXN0ZXJUb2dnbGUoKSA6IG51bGxcIiBbY2hlY2tlZF09XCJzZWxlY3Rpb24uaGFzVmFsdWUoKSAmJiBpc0FsbFNlbGVjdGVkKClcIiBbaW5kZXRlcm1pbmF0ZV09XCJzZWxlY3Rpb24uaGFzVmFsdWUoKSAmJiAhaXNBbGxTZWxlY3RlZCgpXCI+XG4gICAgICAgICAgICA8L21hdC1jaGVja2JveD5cbiAgICAgICAgICA8L3RoPlxuICAgICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCByb3dcIj5cbiAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiIChjaGFuZ2UpPVwiJGV2ZW50ID8gc2VsZWN0aW9uLnRvZ2dsZShyb3cpIDogbnVsbFwiIFtjaGVja2VkXT1cInNlbGVjdGlvbi5pc1NlbGVjdGVkKHJvdylcIj5cbiAgICAgICAgICAgIDwvbWF0LWNoZWNrYm94PlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjb2wgb2YgY29sdW1uc1wiIFttYXRDb2x1bW5EZWZdPVwiY29sLmlkXCI+XG4gICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgbWF0LXNvcnQtaGVhZGVyPiB7e2NvbC5sYWJlbH19IDwvdGg+XG4gICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCByb3dcIj4ge3tyb3dbY29sLmlkXX19IDwvdGQ+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC90cj5cbiAgICAgIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1wiPlxuICAgICAgPC90cj5cbiAgICA8L3RhYmxlPlxuXG4gICAgPG1hdC1wYWdpbmF0b3IgW3BhZ2VTaXplT3B0aW9uc109XCJbNSwgMTAsIDI1LCAxMDBdXCI+PC9tYXQtcGFnaW5hdG9yPlxuICA8L2Rpdj5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2AuZGF0YS10YWJsZS1jb21wb25lbnQsLmRhdGEtdGFibGUtY29tcG9uZW50IG1hdC1mb3JtLWZpZWxkLC5kYXRhLXRhYmxlLWNvbXBvbmVudCB0YWJsZXt3aWR0aDoxMDAlfS5kYXRhLXRhYmxlLWNvbXBvbmVudCAuc3Bpbm5lci1jb250YWluZXJ7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7aGVpZ2h0OjIwMHB4O2FsaWduLWl0ZW1zOmNlbnRlcn1gXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBkYXRhO1xuICBASW5wdXQoKSBsb2FkaW5nO1xuICBASW5wdXQoKSBkYXRhU291cmNlO1xuICBASW5wdXQoKSBlbmFibGVTZWxlY3Rpb24gPSB0cnVlO1xuXG4gIEBJbnB1dCgpIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gW107XG4gIEBJbnB1dCgpIGNvbHVtbnM6IGFueVtdID0gW107XG4gIHNvcnRlZERhdGEgPSBbXTtcblxuICBAVmlld0NoaWxkKE1hdFBhZ2luYXRvcikgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XG4gIEBWaWV3Q2hpbGQoTWF0U29ydCkgc29ydDogTWF0U29ydDtcblxuICBzZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWw8YW55Pih0cnVlLCBbXSk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gIH1cblxuICBhcHBseUZpbHRlcihmaWx0ZXJWYWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5kYXRhU291cmNlLmZpbHRlciA9IGZpbHRlclZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IpIHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IuZmlyc3RQYWdlKCk7XG4gICAgfVxuICB9XG4gIHNvcnREYXRhKHNvcnQ6IFNvcnQpIHtcblxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyZWREYXRhLnNsaWNlKCk7XG4gICAgaWYgKCFzb3J0LmFjdGl2ZSB8fCBzb3J0LmRpcmVjdGlvbiA9PT0gJycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzb3J0ZWREYXRhID0gZGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBjb25zdCBpc0FzYyA9IHNvcnQuZGlyZWN0aW9uID09PSAnYXNjJztcbiAgICAgIGNvbnN0IGF0dHIgPSBzb3J0LmFjdGl2ZTtcbiAgICAgIHJldHVybiBjb21wYXJlKGFbc29ydC5hY3RpdmVdLCBiW3NvcnQuYWN0aXZlXSwgaXNBc2MpO1xuICAgIH0pO1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2Uoc29ydGVkRGF0YSB8fCBbXSk7XG4gIH1cbiAgaXNBbGxTZWxlY3RlZCgpIHtcbiAgICBjb25zdCBudW1TZWxlY3RlZCA9IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLmxlbmd0aDtcbiAgICBjb25zdCBudW1Sb3dzID0gdGhpcy5kYXRhU291cmNlLmRhdGEubGVuZ3RoO1xuICAgIHJldHVybiBudW1TZWxlY3RlZCA9PT0gbnVtUm93cztcbiAgfVxuXG4gIC8qKiBTZWxlY3RzIGFsbCByb3dzIGlmIHRoZXkgYXJlIG5vdCBhbGwgc2VsZWN0ZWQ7IG90aGVyd2lzZSBjbGVhciBzZWxlY3Rpb24uICovXG4gIG1hc3RlclRvZ2dsZSgpIHtcbiAgICB0aGlzLmlzQWxsU2VsZWN0ZWQoKSA/XG4gICAgICB0aGlzLnNlbGVjdGlvbi5jbGVhcigpIDpcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhLmZvckVhY2gocm93ID0+IHRoaXMuc2VsZWN0aW9uLnNlbGVjdChyb3cpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb21wYXJlKGEsIGIsIGlzQXNjKSB7XG4gIHJldHVybiAoYSA8IGIgPyAtMSA6IDEpICogKGlzQXNjID8gMSA6IC0xKTtcbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENka1RhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IENka1RyZWVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XG5cbmltcG9ydCB7XG4gIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgTWF0QmFkZ2VNb2R1bGUsXG4gIE1hdEJvdHRvbVNoZWV0TW9kdWxlLFxuICBNYXRCdXR0b25Nb2R1bGUsXG4gIE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSxcbiAgTWF0Q2FyZE1vZHVsZSxcbiAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gIE1hdENoaXBzTW9kdWxlLFxuICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICBNYXREaWFsb2dNb2R1bGUsXG4gIE1hdERpdmlkZXJNb2R1bGUsXG4gIE1hdEV4cGFuc2lvbk1vZHVsZSxcbiAgTWF0R3JpZExpc3RNb2R1bGUsXG4gIE1hdEljb25Nb2R1bGUsXG4gIE1hdElucHV0TW9kdWxlLFxuICBNYXRMaXN0TW9kdWxlLFxuICBNYXRNZW51TW9kdWxlLFxuICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICBNYXRQYWdpbmF0b3JNb2R1bGUsXG4gIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxuICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gIE1hdFJhZGlvTW9kdWxlLFxuICBNYXRSaXBwbGVNb2R1bGUsXG4gIE1hdFNlbGVjdE1vZHVsZSxcbiAgTWF0U2lkZW5hdk1vZHVsZSxcbiAgTWF0U2xpZGVyTW9kdWxlLFxuICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgTWF0U25hY2tCYXJNb2R1bGUsXG4gIE1hdFNvcnRNb2R1bGUsXG4gIE1hdFN0ZXBwZXJNb2R1bGUsXG4gIE1hdFRhYmxlTW9kdWxlLFxuICBNYXRUYWJzTW9kdWxlLFxuICBNYXRUb29sYmFyTW9kdWxlLFxuICBNYXRUb29sdGlwTW9kdWxlLFxuICBNYXRUcmVlTW9kdWxlLFxuICBNYXRGb3JtRmllbGRNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENka1RhYmxlTW9kdWxlLFxuICAgIENka1RyZWVNb2R1bGUsXG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICAgIE1hdEJhZGdlTW9kdWxlLFxuICAgIE1hdEJvdHRvbVNoZWV0TW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRDaGlwc01vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBNYXREaXZpZGVyTW9kdWxlLFxuICAgIE1hdEV4cGFuc2lvbk1vZHVsZSxcbiAgICBNYXRHcmlkTGlzdE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgTWF0UmlwcGxlTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRTaWRlbmF2TW9kdWxlLFxuICAgIE1hdFNsaWRlck1vZHVsZSxcbiAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBNYXRTb3J0TW9kdWxlLFxuICAgIE1hdFN0ZXBwZXJNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgTWF0VGFic01vZHVsZSxcbiAgICBNYXRUb29sYmFyTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgTWF0VHJlZU1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENka1RhYmxlTW9kdWxlLFxuICAgIENka1RyZWVNb2R1bGUsXG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICAgIE1hdEJhZGdlTW9kdWxlLFxuICAgIE1hdEJvdHRvbVNoZWV0TW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRDaGlwc01vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBNYXREaXZpZGVyTW9kdWxlLFxuICAgIE1hdEV4cGFuc2lvbk1vZHVsZSxcbiAgICBNYXRHcmlkTGlzdE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgTWF0UmlwcGxlTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRTaWRlbmF2TW9kdWxlLFxuICAgIE1hdFNsaWRlck1vZHVsZSxcbiAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBNYXRTb3J0TW9kdWxlLFxuICAgIE1hdFN0ZXBwZXJNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgTWF0VGFic01vZHVsZSxcbiAgICBNYXRUb29sYmFyTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgTWF0VHJlZU1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50c0NvbXBvbmVudCB9IGZyb20gJy4vY29tbW9uLWNvbXBvbmVudHMuY29tcG9uZW50JztcbmltcG9ydCB7IER5bmFtaWNGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2R5bmFtaWMtZm9ybS9keW5hbWljLWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IE5hdmJhckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhVGFibGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGF0YS10YWJsZS9kYXRhLXRhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRlcmlhbE1vZHVsZSB9IGZyb20gJy4vbWF0ZXJpYWwubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTWF0ZXJpYWxNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENvbW1vbkNvbXBvbmVudHNDb21wb25lbnQsXG4gICAgRGF0YVRhYmxlQ29tcG9uZW50LFxuICAgIER5bmFtaWNGb3JtQ29tcG9uZW50LFxuICAgIE5hdmJhckNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ29tbW9uQ29tcG9uZW50c0NvbXBvbmVudCxcbiAgICBEYXRhVGFibGVDb21wb25lbnQsXG4gICAgRHluYW1pY0Zvcm1Db21wb25lbnQsXG4gICAgTmF2YmFyQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29tbW9uQ29tcG9uZW50c01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fdmFsdWVzIiwiVmFsdWVWYWxpZGF0b3JzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBT0U7S0FBaUI7O2dCQUxsQixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OztrQ0FKRDs7Ozs7OztBQ0FBO0lBYUU7S0FBaUI7Ozs7SUFFakIsNENBQVE7OztJQUFSO0tBQ0M7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUUseURBSVQ7b0JBQ0QsTUFBTSxFQUFFLEVBQUU7aUJBQ1g7Ozs7b0NBVkQ7Ozs7Ozs7OztpQ0NrRHNCLEVBQUU7NEJBQ1AsRUFBRTswQkFHeUIsSUFBSSxZQUFZLEVBQUU7Ozs7O0lBRTVELHVDQUFROzs7SUFBUjs7WUFDRSxLQUFtQixJQUFBLEtBQUFBLFNBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUEsZ0JBQUE7Z0JBQTFDLElBQU0sSUFBSSxXQUFBO2dCQUNiLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLFdBQVcsQ0FDNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FDcEQsQ0FBQztnQkFFRixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztvQkFDckIsR0FBRyxFQUFFLElBQUk7b0JBQ1QsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSztvQkFDbEMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSTtvQkFDaEMsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTztpQkFDdkMsQ0FBQyxDQUFDO2FBQ0o7Ozs7Ozs7OztRQUVELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7O0tBQ25EOzs7OztJQUVELHdDQUFTOzs7O0lBQVQsVUFBVSxHQUFHOztRQUNYLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqRCxPQUFPLFlBQVksQ0FBQyxPQUFPLEtBQUssWUFBWSxDQUFDLEtBQUssSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDN0U7Ozs7O0lBRUQsOENBQWU7Ozs7SUFBZixVQUFnQixHQUFHO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsR0FBRyx3QkFBd0I7WUFDaEYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxtQkFBbUI7Z0JBQ2pFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsNERBQ3JDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUs7b0JBQ25ELEVBQUUsQ0FBQztLQUNWOzs7OztJQUVELDJDQUFZOzs7O0lBQVosVUFBYSxVQUFVO1FBQ3JCLElBQUksVUFBVSxFQUFFO1lBQ2QsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLGNBQWM7Z0JBQy9DLElBQUksY0FBYyxLQUFLLFVBQVUsRUFBRTtvQkFDakMsT0FBT0MsVUFBZSxDQUFDLFFBQVEsQ0FBQztpQkFDakM7cUJBQU0sSUFBSSxjQUFjLEtBQUssS0FBSyxFQUFFO29CQUNuQyxPQUFPQSxVQUFlLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2lCQUN4RDtxQkFBTSxJQUFJLGNBQWMsS0FBSyxPQUFPLEVBQUU7b0JBQ3JDLE9BQU9BLFVBQWUsQ0FBQyxLQUFLLENBQUM7aUJBQzlCO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLE9BQU8sRUFBRSxDQUFDO1NBQ1g7S0FDRjs7OztJQUVELHVDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdkM7O2dCQXRHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLDg0REF1Q0o7b0JBQ04sTUFBTSxFQUFFLENBQUMsc1ZBQXNWLENBQUM7aUJBQ2pXOzs7NkJBT0UsS0FBSzs2QkFDTCxNQUFNOzsrQkF0RFQ7Ozs7Ozs7QUNBQTtJQXFDRSx5QkFBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7MEJBTHhCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQzthQUNuRixJQUFJLENBQ0gsR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sR0FBQSxDQUFDLENBQzlCO0tBR0Y7Ozs7O0lBRUQsaUNBQU87Ozs7SUFBUCxVQUFRLElBQUk7UUFDVixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ2hEOzs7O0lBRUQsa0NBQVE7OztJQUFSO0tBRUM7O2dCQXpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxnOEJBb0JMO29CQUNMLE1BQU0sRUFBRSxDQUFDLCtVQUErVSxDQUFDO2lCQUMxVjs7OztnQkE1QlEsa0JBQWtCOzswQkFEM0I7Ozs7Ozs7QUNBQTtJQWdFRTsrQkFYMkIsSUFBSTtnQ0FFTyxFQUFFO3VCQUNkLEVBQUU7MEJBQ2YsRUFBRTt5QkFLSCxJQUFJLGNBQWMsQ0FBTSxJQUFJLEVBQUUsRUFBRSxDQUFDO0tBRzVDOzs7O0lBRUQscUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0tBQ2xDOzs7OztJQUVELHdDQUFXOzs7O0lBQVgsVUFBWSxXQUFtQjtRQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFMUQsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRTtZQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUN2QztLQUNGOzs7OztJQUNELHFDQUFROzs7O0lBQVIsVUFBUyxJQUFVOztRQUVqQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLEVBQUUsRUFBRTtZQUN6QyxPQUFPO1NBQ1I7O1FBRUQsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDOztZQUNoQyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQzs7WUFDdkMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN6QixPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDdkQsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGtCQUFrQixDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsQ0FBQztLQUM1RDs7OztJQUNELDBDQUFhOzs7SUFBYjs7UUFDRSxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7O1FBQ25ELElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM1QyxPQUFPLFdBQVcsS0FBSyxPQUFPLENBQUM7S0FDaEM7Ozs7OztJQUdELHlDQUFZOzs7O0lBQVo7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUEsQ0FBQyxDQUFDO0tBQ25FOztnQkEvRkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsc2pEQW1DTDtvQkFDTCxNQUFNLEVBQUUsQ0FBQyxpTkFBaU4sQ0FBQztpQkFDNU47Ozs7O3VCQUVFLEtBQUs7MEJBQ0wsS0FBSzs2QkFDTCxLQUFLO2tDQUNMLEtBQUs7bUNBRUwsS0FBSzswQkFDTCxLQUFLOzRCQUdMLFNBQVMsU0FBQyxZQUFZO3VCQUN0QixTQUFTLFNBQUMsT0FBTzs7NkJBNURwQjs7Ozs7Ozs7QUEyR0EsaUJBQWlCLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSztJQUMxQixPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQzVDOzs7Ozs7QUM3R0Q7Ozs7Z0JBMkNDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsY0FBYzt3QkFDZCxhQUFhO3dCQUNiLHFCQUFxQjt3QkFDckIsY0FBYzt3QkFDZCxvQkFBb0I7d0JBQ3BCLGVBQWU7d0JBQ2YscUJBQXFCO3dCQUNyQixhQUFhO3dCQUNiLGlCQUFpQjt3QkFDakIsY0FBYzt3QkFDZCxtQkFBbUI7d0JBQ25CLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQixrQkFBa0I7d0JBQ2xCLGlCQUFpQjt3QkFDakIsYUFBYTt3QkFDYixjQUFjO3dCQUNkLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixtQkFBbUI7d0JBQ25CLGtCQUFrQjt3QkFDbEIsb0JBQW9CO3dCQUNwQix3QkFBd0I7d0JBQ3hCLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZixvQkFBb0I7d0JBQ3BCLGlCQUFpQjt3QkFDakIsYUFBYTt3QkFDYixnQkFBZ0I7d0JBQ2hCLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixnQkFBZ0I7d0JBQ2hCLGdCQUFnQjt3QkFDaEIsYUFBYTt3QkFDYixrQkFBa0I7cUJBQ25CO29CQUNELE9BQU8sRUFBRTt3QkFDUCxjQUFjO3dCQUNkLGFBQWE7d0JBQ2IscUJBQXFCO3dCQUNyQixjQUFjO3dCQUNkLG9CQUFvQjt3QkFDcEIsZUFBZTt3QkFDZixxQkFBcUI7d0JBQ3JCLGFBQWE7d0JBQ2IsaUJBQWlCO3dCQUNqQixjQUFjO3dCQUNkLG1CQUFtQjt3QkFDbkIsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLGtCQUFrQjt3QkFDbEIsaUJBQWlCO3dCQUNqQixhQUFhO3dCQUNiLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixhQUFhO3dCQUNiLG1CQUFtQjt3QkFDbkIsa0JBQWtCO3dCQUNsQixvQkFBb0I7d0JBQ3BCLHdCQUF3Qjt3QkFDeEIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQixlQUFlO3dCQUNmLG9CQUFvQjt3QkFDcEIsaUJBQWlCO3dCQUNqQixhQUFhO3dCQUNiLGdCQUFnQjt3QkFDaEIsY0FBYzt3QkFDZCxhQUFhO3dCQUNiLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3dCQUNoQixhQUFhO3dCQUNiLGtCQUFrQjtxQkFDbkI7aUJBQ0Y7O3lCQTVIRDs7Ozs7OztBQ0FBOzs7O2dCQVlDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixhQUFhO3dCQUNiLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixjQUFjO3dCQUNkLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLHlCQUF5Qjt3QkFDekIsa0JBQWtCO3dCQUNsQixvQkFBb0I7d0JBQ3BCLGVBQWU7cUJBQ2hCO29CQUNELE9BQU8sRUFBRTt3QkFDUCx5QkFBeUI7d0JBQ3pCLGtCQUFrQjt3QkFDbEIsb0JBQW9CO3dCQUNwQixlQUFlO3FCQUNoQjtpQkFDRjs7aUNBakNEOzs7Ozs7Ozs7Ozs7Ozs7In0=