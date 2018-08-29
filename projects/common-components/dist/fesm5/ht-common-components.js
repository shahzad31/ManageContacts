import { Injectable, Component, NgModule, ViewChild, Input, Output, EventEmitter, defineInjectable } from '@angular/core';
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
                    template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" class=\"dynamic-form-component\" #formId=\"ngForm\">\n\n  <div *ngFor=\"let prop of contactProps\">\n    <div [ngSwitch]=\"prop.type\">\n\n      <mat-form-field *ngSwitchCase=\"'text'\">\n        <input matInput placeholder=\"{{ prop.label }}\" [type]=\"prop.type\" [formControlName]=\"prop.key\">\n        <mat-error *ngIf=\"isInValid(prop.key)\">{{getErrorMessage(prop.key)}}</mat-error>\n      </mat-form-field>\n\n      <mat-form-field *ngSwitchCase=\"'number'\">\n        <input matInput placeholder=\"{{ prop.label }}\" [type]=\"prop.type\" [formControlName]=\"prop.key\">\n        <mat-error *ngIf=\"isInValid(prop.key)\">{{getErrorMessage(prop.key)}}</mat-error>\n      </mat-form-field>\n\n      <mat-form-field *ngSwitchCase=\"'email'\">\n        <input matInput placeholder=\"{{ prop.label }}\" [type]=\"prop.type\" [formControlName]=\"prop.key\">\n        <mat-error *ngIf=\"isInValid(prop.key)\">{{getErrorMessage(prop.key)}}</mat-error>\n      </mat-form-field>\n      <div  class=\"radio-group\">\n        <div *ngSwitchCase=\"'radio'\">\n          <label class=\"mat-input\">{{ prop.label }} : </label>\n          <mat-radio-group [formControlName]=\"prop.key\">\n            <mat-radio-button *ngFor=\"let option of prop.options\" [value]=\"option.value\">{{ option.label }}</mat-radio-button>\n          </mat-radio-group>\n        </div>\n      </div>\n\n      <mat-form-field *ngSwitchCase=\"'select'\">\n        <mat-select placeholder=\"{{ prop.label }}\" [formControlName]=\"prop.key\">\n          <mat-option *ngFor=\"let option of prop.options\" [value]=\"option.value\"> {{ option.label }}</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n  </div>\n\n  <div class=\"form-actions\">\n    <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]='!formId.form.valid'>Save</button>\n  </div>\n</form>",
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
        this.selectionChange = new EventEmitter();
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
        selectionChange: [{ type: Output }],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHQtY29tbW9uLWNvbXBvbmVudHMuanMubWFwIiwic291cmNlcyI6WyJuZzovL2h0LWNvbW1vbi1jb21wb25lbnRzL2xpYi9jb21tb24tY29tcG9uZW50cy5zZXJ2aWNlLnRzIiwibmc6Ly9odC1jb21tb24tY29tcG9uZW50cy9saWIvY29tbW9uLWNvbXBvbmVudHMuY29tcG9uZW50LnRzIiwibmc6Ly9odC1jb21tb24tY29tcG9uZW50cy9saWIvY29tcG9uZW50cy9keW5hbWljLWZvcm0vZHluYW1pYy1mb3JtLmNvbXBvbmVudC50cyIsIm5nOi8vaHQtY29tbW9uLWNvbXBvbmVudHMvbGliL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiLCJuZzovL2h0LWNvbW1vbi1jb21wb25lbnRzL2xpYi9jb21wb25lbnRzL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQudHMiLCJuZzovL2h0LWNvbW1vbi1jb21wb25lbnRzL2xpYi9tYXRlcmlhbC5tb2R1bGUudHMiLCJuZzovL2h0LWNvbW1vbi1jb21wb25lbnRzL2xpYi9jb21tb24tY29tcG9uZW50cy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb21tb25Db21wb25lbnRzU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2h0LWNvbW1vbi1jb21wb25lbnRzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIGNvbW1vbi1jb21wb25lbnRzIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBDb21tb25Db21wb25lbnRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgYXMgVmFsdWVWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdodC1keW5hbWljLWZvcm0nLFxuICB0ZW1wbGF0ZTogYDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCIgY2xhc3M9XCJkeW5hbWljLWZvcm0tY29tcG9uZW50XCIgI2Zvcm1JZD1cIm5nRm9ybVwiPlxuXG4gIDxkaXYgKm5nRm9yPVwibGV0IHByb3Agb2YgY29udGFjdFByb3BzXCI+XG4gICAgPGRpdiBbbmdTd2l0Y2hdPVwicHJvcC50eXBlXCI+XG5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdTd2l0Y2hDYXNlPVwiJ3RleHQnXCI+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInt7IHByb3AubGFiZWwgfX1cIiBbdHlwZV09XCJwcm9wLnR5cGVcIiBbZm9ybUNvbnRyb2xOYW1lXT1cInByb3Aua2V5XCI+XG4gICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJpc0luVmFsaWQocHJvcC5rZXkpXCI+e3tnZXRFcnJvck1lc3NhZ2UocHJvcC5rZXkpfX08L21hdC1lcnJvcj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdTd2l0Y2hDYXNlPVwiJ251bWJlcidcIj5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwie3sgcHJvcC5sYWJlbCB9fVwiIFt0eXBlXT1cInByb3AudHlwZVwiIFtmb3JtQ29udHJvbE5hbWVdPVwicHJvcC5rZXlcIj5cbiAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cImlzSW5WYWxpZChwcm9wLmtleSlcIj57e2dldEVycm9yTWVzc2FnZShwcm9wLmtleSl9fTwvbWF0LWVycm9yPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ1N3aXRjaENhc2U9XCInZW1haWwnXCI+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInt7IHByb3AubGFiZWwgfX1cIiBbdHlwZV09XCJwcm9wLnR5cGVcIiBbZm9ybUNvbnRyb2xOYW1lXT1cInByb3Aua2V5XCI+XG4gICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJpc0luVmFsaWQocHJvcC5rZXkpXCI+e3tnZXRFcnJvck1lc3NhZ2UocHJvcC5rZXkpfX08L21hdC1lcnJvcj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8ZGl2ICBjbGFzcz1cInJhZGlvLWdyb3VwXCI+XG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidyYWRpbydcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJtYXQtaW5wdXRcIj57eyBwcm9wLmxhYmVsIH19IDogPC9sYWJlbD5cbiAgICAgICAgICA8bWF0LXJhZGlvLWdyb3VwIFtmb3JtQ29udHJvbE5hbWVdPVwicHJvcC5rZXlcIj5cbiAgICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgcHJvcC5vcHRpb25zXCIgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiPnt7IG9wdGlvbi5sYWJlbCB9fTwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ1N3aXRjaENhc2U9XCInc2VsZWN0J1wiPlxuICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cInt7IHByb3AubGFiZWwgfX1cIiBbZm9ybUNvbnRyb2xOYW1lXT1cInByb3Aua2V5XCI+XG4gICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBwcm9wLm9wdGlvbnNcIiBbdmFsdWVdPVwib3B0aW9uLnZhbHVlXCI+IHt7IG9wdGlvbi5sYWJlbCB9fTwvbWF0LW9wdGlvbj5cbiAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImZvcm0tYWN0aW9uc1wiPlxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIFtkaXNhYmxlZF09JyFmb3JtSWQuZm9ybS52YWxpZCc+U2F2ZTwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvZm9ybT5gLFxuICBzdHlsZXM6IFtgLmR5bmFtaWMtZm9ybS1jb21wb25lbnQgLnJhZGlvLWdyb3Vwe3RleHQtYWxpZ246aW5pdGlhbDtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW4tYm90dG9tOjE1cHh9LmR5bmFtaWMtZm9ybS1jb21wb25lbnQgLnJhZGlvLWdyb3VwIG1hdC1yYWRpby1idXR0b257bWFyZ2luLWxlZnQ6MTBweH0uZHluYW1pYy1mb3JtLWNvbXBvbmVudCAucmFkaW8tZ3JvdXA+ZGl2e3dpZHRoOjMwMHB4fS5keW5hbWljLWZvcm0tY29tcG9uZW50IC5mb3JtLWFjdGlvbnt0ZXh0LWFsaWduOmxlZnR9LmR5bmFtaWMtZm9ybS1jb21wb25lbnQgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMwMHB4fWBdXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBmb3JtOiBGb3JtR3JvdXA7XG4gIGZvcm1GaWVsZENvbnRyb2xzID0ge307XG4gIGNvbnRhY3RQcm9wcyA9IFtdO1xuXG4gIEBJbnB1dCgpIGZvcm1TY2hlbWE7XG4gIEBPdXRwdXQoKSBzdWJtaXRGb3JtOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICBmb3IgKGNvbnN0IHByb3Agb2YgT2JqZWN0LmtleXModGhpcy5mb3JtU2NoZW1hKSkge1xuICAgICAgdGhpcy5mb3JtRmllbGRDb250cm9sc1twcm9wXSA9IG5ldyBGb3JtQ29udHJvbChcbiAgICAgICAgdGhpcy5mb3JtU2NoZW1hW3Byb3BdLnZhbHVlLFxuICAgICAgICB0aGlzLm1hcFZhbGlkYXRvcih0aGlzLmZvcm1TY2hlbWFbcHJvcF0udmFsaWRhdG9ycylcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuY29udGFjdFByb3BzLnB1c2goe1xuICAgICAgICBrZXk6IHByb3AsXG4gICAgICAgIGxhYmVsOiB0aGlzLmZvcm1TY2hlbWFbcHJvcF0ubGFiZWwsXG4gICAgICAgIHR5cGU6IHRoaXMuZm9ybVNjaGVtYVtwcm9wXS50eXBlLFxuICAgICAgICBvcHRpb25zOiB0aGlzLmZvcm1TY2hlbWFbcHJvcF0ub3B0aW9uc1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cCh0aGlzLmZvcm1GaWVsZENvbnRyb2xzKTtcbiAgfVxuXG4gIGlzSW5WYWxpZChrZXkpIHtcbiAgICBjb25zdCBmaWVsZENvbnRyb2wgPSB0aGlzLmZvcm1GaWVsZENvbnRyb2xzW2tleV07XG4gICAgcmV0dXJuIGZpZWxkQ29udHJvbC5pbnZhbGlkICYmIChmaWVsZENvbnRyb2wuZGlydHkgfHwgZmllbGRDb250cm9sLnRvdWNoZWQpO1xuICB9XG5cbiAgZ2V0RXJyb3JNZXNzYWdlKGtleSkge1xuICAgIHJldHVybiB0aGlzLmZvcm1GaWVsZENvbnRyb2xzW2tleV0uaGFzRXJyb3IoJ3JlcXVpcmVkJykgPyAnWW91IG11c3QgZW50ZXIgYSB2YWx1ZScgOlxuICAgICAgdGhpcy5mb3JtRmllbGRDb250cm9sc1trZXldLmhhc0Vycm9yKCdlbWFpbCcpID8gJ05vdCBhIHZhbGlkIGVtYWlsJyA6XG4gICAgICAgIHRoaXMuZm9ybUZpZWxkQ29udHJvbHNba2V5XS5oYXNFcnJvcignbWluJykgPyBgWW91IGhhdmUgdG8gcHJvdmlkZSBhIHZhbHVlIGdyZWF0ZXIgb3JcbiAgICAgIGVxdWFsIHRvICR7dGhpcy5mb3JtRmllbGRDb250cm9sc1trZXldLmVycm9ycy5taW4ubWlufWAgOlxuICAgICAgICAgICcnO1xuICB9XG5cbiAgbWFwVmFsaWRhdG9yKHZhbGlkYXRvcnMpOiBhbnkge1xuICAgIGlmICh2YWxpZGF0b3JzKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModmFsaWRhdG9ycykubWFwKHZhbGlkYXRpb25UeXBlID0+IHtcbiAgICAgICAgaWYgKHZhbGlkYXRpb25UeXBlID09PSAncmVxdWlyZWQnKSB7XG4gICAgICAgICAgcmV0dXJuIFZhbHVlVmFsaWRhdG9ycy5yZXF1aXJlZDtcbiAgICAgICAgfSBlbHNlIGlmICh2YWxpZGF0aW9uVHlwZSA9PT0gJ21pbicpIHtcbiAgICAgICAgICByZXR1cm4gVmFsdWVWYWxpZGF0b3JzLm1pbih2YWxpZGF0b3JzW3ZhbGlkYXRpb25UeXBlXSk7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsaWRhdGlvblR5cGUgPT09ICdlbWFpbCcpIHtcbiAgICAgICAgICByZXR1cm4gVmFsdWVWYWxpZGF0b3JzLmVtYWlsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxuXG4gIG9uU3VibWl0KCkge1xuICAgIHRoaXMuc3VibWl0Rm9ybS5lbWl0KHRoaXMuZm9ybS52YWx1ZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcmVha3BvaW50T2JzZXJ2ZXIsIEJyZWFrcG9pbnRzIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2h0LW5hdi1iYXInLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJuYXYtYmFyXCI+XG4gIDxtYXQtdG9vbGJhciBjb2xvcj1cInByaW1hcnlcIiBjbGFzcz1cImFwcC1iYXItY29udGFpbmVyXCI+XG4gICAgPGltZyBzcmM9XCJhc3NldHMvbG9nby5wbmdcIiBjbGFzcz1cImFwcC1sb2dvXCIgLz5cbiAgICA8bmF2IG1hdC10YWItbmF2LWJhciBjbGFzcz1cImFwcC10YWJzXCI+XG4gICAgICA8YSBtYXQtdGFiLWxpbmsgKm5nRm9yPVwibGV0IGxpbmsgb2YgWydDb250YWN0cycsICdOZXcgQ29udGFjdCddXCIgW3JvdXRlckxpbmtdPVwiZ2V0UGF0aChsaW5rKVwiIHJvdXRlckxpbmtBY3RpdmUgI3JsYT1cInJvdXRlckxpbmtBY3RpdmVcIlxuICAgICAgICBbYWN0aXZlXT1cInJsYS5pc0FjdGl2ZVwiPlxuICAgICAgICB7e2xpbmt9fVxuICAgICAgPC9hPlxuICAgIDwvbmF2PlxuICAgIDxkaXYgY2xhc3M9XCJ1c2VyLWJ1dHRvbnNcIj5cbiAgICAgIDxhIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwiYWNjZW50XCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9zaGFoemFkMzEvTWFuYWdlQ29udGFjdHNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgR2l0aHViXG4gICAgICAgIDxtYXQtaWNvbiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIGEgaGVhcnQgaWNvblwiPmZhY2U8L21hdC1pY29uPlxuICAgICAgPC9hPlxuICAgICAgPGEgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJhY2NlbnRcIiBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3NoYWh6YWQzMS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgTGlua2VkSW5cbiAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggYSBoZWFydCBpY29uXCI+bm90aWZpY2F0aW9uczwvbWF0LWljb24+XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gIDwvbWF0LXRvb2xiYXI+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgLm5hdi1iYXIgLmFwcC1iYXItY29udGFpbmVye2JhY2tncm91bmQ6IzZmNmU2ZTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2p1c3RpZnktY29udGVudDpjZW50ZXJ9Lm5hdi1iYXIgLmFwcC1iYXItY29udGFpbmVyIC5hcHAtdGFic3ttYXJnaW46MCAxMzBweDtmbGV4OjI7Ym9yZGVyLWJvdHRvbS13aWR0aDowfS5uYXYtYmFyIC5hcHAtYmFyLWNvbnRhaW5lciAuYXBwLXRhYnMgOjpuZy1kZWVwIC5tYXQtdGFiLWxpbmt7cGFkZGluZzowO21pbi13aWR0aDoxMTZweH0ubmF2LWJhciAuYXBwLWJhci1jb250YWluZXIgLnVzZXItYnV0dG9ucyBhe21hcmdpbi1sZWZ0OjE2cHh9YF1cbn0pXG5leHBvcnQgY2xhc3MgTmF2YmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBpc0hhbmRzZXQkOiBPYnNlcnZhYmxlPEJvb2xlYW4+ID0gdGhpcy5icmVha3BvaW50T2JzZXJ2ZXIub2JzZXJ2ZShCcmVha3BvaW50cy5IYW5kc2V0KVxuICAgIC5waXBlKFxuICAgICAgbWFwKHJlc3VsdCA9PiByZXN1bHQubWF0Y2hlcylcbiAgICApO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYnJlYWtwb2ludE9ic2VydmVyOiBCcmVha3BvaW50T2JzZXJ2ZXIpIHtcbiAgfVxuXG4gIGdldFBhdGgobGluaykge1xuICAgIHJldHVybiBsaW5rLnJlcGxhY2UoL1xccysvZywgJy0nKS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFBhZ2luYXRvciwgTWF0U29ydCwgTWF0VGFibGVEYXRhU291cmNlLCBTb3J0LCBNYXRTb3J0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IFNlbGVjdGlvbk1vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaHQtZGF0YS10YWJsZScsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImRhdGEtdGFibGUtY29tcG9uZW50XCI+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgKGtleXVwKT1cImFwcGx5RmlsdGVyKCRldmVudC50YXJnZXQudmFsdWUpXCIgcGxhY2Vob2xkZXI9XCJGaWx0ZXJcIj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cblxuICA8ZGl2IGNsYXNzPVwibWF0LWVsZXZhdGlvbi16OFwiPlxuICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWNvbnRhaW5lclwiICpuZ0lmPVwibG9hZGluZ1wiPlxuICAgICAgPG1hdC1zcGlubmVyIGNsYXNzPVwibG9hZGluZy1zcGlubmVyXCI+PC9tYXQtc3Bpbm5lcj5cbiAgICA8L2Rpdj5cbiAgICA8dGFibGUgKm5nSWY9XCIhbG9hZGluZ1wiICBtYXQtdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiXG4gICAgIG1hdFNvcnQgKG1hdFNvcnRDaGFuZ2UpPVwic29ydERhdGEoJGV2ZW50KVwiPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwic2VsZWN0XCI+XG4gICAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj5cbiAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCIkZXZlbnQgPyBtYXN0ZXJUb2dnbGUoKSA6IG51bGxcIiBbY2hlY2tlZF09XCJzZWxlY3Rpb24uaGFzVmFsdWUoKSAmJiBpc0FsbFNlbGVjdGVkKClcIiBbaW5kZXRlcm1pbmF0ZV09XCJzZWxlY3Rpb24uaGFzVmFsdWUoKSAmJiAhaXNBbGxTZWxlY3RlZCgpXCI+XG4gICAgICAgICAgICA8L21hdC1jaGVja2JveD5cbiAgICAgICAgICA8L3RoPlxuICAgICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCByb3dcIj5cbiAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiIChjaGFuZ2UpPVwiJGV2ZW50ID8gc2VsZWN0aW9uLnRvZ2dsZShyb3cpIDogbnVsbFwiIFtjaGVja2VkXT1cInNlbGVjdGlvbi5pc1NlbGVjdGVkKHJvdylcIj5cbiAgICAgICAgICAgIDwvbWF0LWNoZWNrYm94PlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjb2wgb2YgY29sdW1uc1wiIFttYXRDb2x1bW5EZWZdPVwiY29sLmlkXCI+XG4gICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgbWF0LXNvcnQtaGVhZGVyPiB7e2NvbC5sYWJlbH19IDwvdGg+XG4gICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCByb3dcIj4ge3tyb3dbY29sLmlkXX19IDwvdGQ+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC90cj5cbiAgICAgIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1wiPlxuICAgICAgPC90cj5cbiAgICA8L3RhYmxlPlxuXG4gICAgPG1hdC1wYWdpbmF0b3IgW3BhZ2VTaXplT3B0aW9uc109XCJbNSwgMTAsIDI1LCAxMDBdXCI+PC9tYXQtcGFnaW5hdG9yPlxuICA8L2Rpdj5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2AuZGF0YS10YWJsZS1jb21wb25lbnQsLmRhdGEtdGFibGUtY29tcG9uZW50IG1hdC1mb3JtLWZpZWxkLC5kYXRhLXRhYmxlLWNvbXBvbmVudCB0YWJsZXt3aWR0aDoxMDAlfS5kYXRhLXRhYmxlLWNvbXBvbmVudCAuc3Bpbm5lci1jb250YWluZXJ7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7aGVpZ2h0OjIwMHB4O2FsaWduLWl0ZW1zOmNlbnRlcn1gXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBkYXRhO1xuICBASW5wdXQoKSBsb2FkaW5nO1xuICBASW5wdXQoKSBkYXRhU291cmNlO1xuICBASW5wdXQoKSBlbmFibGVTZWxlY3Rpb24gPSB0cnVlO1xuXG4gIEBJbnB1dCgpIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gW107XG4gIEBJbnB1dCgpIGNvbHVtbnM6IGFueVtdID0gW107XG5cbiAgQE91dHB1dCgpIHNlbGVjdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgc29ydGVkRGF0YSA9IFtdO1xuXG4gIEBWaWV3Q2hpbGQoTWF0UGFnaW5hdG9yKSBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcbiAgQFZpZXdDaGlsZChNYXRTb3J0KSBzb3J0OiBNYXRTb3J0O1xuXG4gIHNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbDxhbnk+KHRydWUsIFtdKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICB0aGlzLnNlbGVjdGlvbi5vbkNoYW5nZS5zdWJzY3JpYmUoY2hhbmdlcyA9PiB7XG4gICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KGNoYW5nZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgYXBwbHlGaWx0ZXIoZmlsdGVyVmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5maWx0ZXIgPSBmaWx0ZXJWYWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmICh0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yKSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yLmZpcnN0UGFnZSgpO1xuICAgIH1cbiAgfVxuICBzb3J0RGF0YShzb3J0OiBTb3J0KSB7XG5cbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhU291cmNlLmZpbHRlcmVkRGF0YS5zbGljZSgpO1xuICAgIGlmICghc29ydC5hY3RpdmUgfHwgc29ydC5kaXJlY3Rpb24gPT09ICcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc29ydGVkRGF0YSA9IGRhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgY29uc3QgaXNBc2MgPSBzb3J0LmRpcmVjdGlvbiA9PT0gJ2FzYyc7XG4gICAgICBjb25zdCBhdHRyID0gc29ydC5hY3RpdmU7XG4gICAgICByZXR1cm4gY29tcGFyZShhW3NvcnQuYWN0aXZlXSwgYltzb3J0LmFjdGl2ZV0sIGlzQXNjKTtcbiAgICB9KTtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHNvcnRlZERhdGEgfHwgW10pO1xuICB9XG4gIGlzQWxsU2VsZWN0ZWQoKSB7XG4gICAgY29uc3QgbnVtU2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZC5sZW5ndGg7XG4gICAgY29uc3QgbnVtUm93cyA9IHRoaXMuZGF0YVNvdXJjZS5kYXRhLmxlbmd0aDtcbiAgICByZXR1cm4gbnVtU2VsZWN0ZWQgPT09IG51bVJvd3M7XG4gIH1cblxuICAvKiogU2VsZWN0cyBhbGwgcm93cyBpZiB0aGV5IGFyZSBub3QgYWxsIHNlbGVjdGVkOyBvdGhlcndpc2UgY2xlYXIgc2VsZWN0aW9uLiAqL1xuICBtYXN0ZXJUb2dnbGUoKSB7XG4gICAgdGhpcy5pc0FsbFNlbGVjdGVkKCkgP1xuICAgICAgdGhpcy5zZWxlY3Rpb24uY2xlYXIoKSA6XG4gICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YS5mb3JFYWNoKHJvdyA9PiB0aGlzLnNlbGVjdGlvbi5zZWxlY3Qocm93KSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29tcGFyZShhLCBiLCBpc0FzYykge1xuICByZXR1cm4gKGEgPCBiID8gLTEgOiAxKSAqIChpc0FzYyA/IDEgOiAtMSk7XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZGtUYWJsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBDZGtUcmVlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xuXG5pbXBvcnQge1xuICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXG4gIE1hdEJhZGdlTW9kdWxlLFxuICBNYXRCb3R0b21TaGVldE1vZHVsZSxcbiAgTWF0QnV0dG9uTW9kdWxlLFxuICBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsXG4gIE1hdENhcmRNb2R1bGUsXG4gIE1hdENoZWNrYm94TW9kdWxlLFxuICBNYXRDaGlwc01vZHVsZSxcbiAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgTWF0RGlhbG9nTW9kdWxlLFxuICBNYXREaXZpZGVyTW9kdWxlLFxuICBNYXRFeHBhbnNpb25Nb2R1bGUsXG4gIE1hdEdyaWRMaXN0TW9kdWxlLFxuICBNYXRJY29uTW9kdWxlLFxuICBNYXRJbnB1dE1vZHVsZSxcbiAgTWF0TGlzdE1vZHVsZSxcbiAgTWF0TWVudU1vZHVsZSxcbiAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxuICBNYXRSYWRpb01vZHVsZSxcbiAgTWF0UmlwcGxlTW9kdWxlLFxuICBNYXRTZWxlY3RNb2R1bGUsXG4gIE1hdFNpZGVuYXZNb2R1bGUsXG4gIE1hdFNsaWRlck1vZHVsZSxcbiAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gIE1hdFNuYWNrQmFyTW9kdWxlLFxuICBNYXRTb3J0TW9kdWxlLFxuICBNYXRTdGVwcGVyTW9kdWxlLFxuICBNYXRUYWJsZU1vZHVsZSxcbiAgTWF0VGFic01vZHVsZSxcbiAgTWF0VG9vbGJhck1vZHVsZSxcbiAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgTWF0VHJlZU1vZHVsZSxcbiAgTWF0Rm9ybUZpZWxkTW9kdWxlXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDZGtUYWJsZU1vZHVsZSxcbiAgICBDZGtUcmVlTW9kdWxlLFxuICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICBNYXRCYWRnZU1vZHVsZSxcbiAgICBNYXRCb3R0b21TaGVldE1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0Q2hpcHNNb2R1bGUsXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgTWF0RGl2aWRlck1vZHVsZSxcbiAgICBNYXRFeHBhbnNpb25Nb2R1bGUsXG4gICAgTWF0R3JpZExpc3RNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRMaXN0TW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgICBNYXRQYWdpbmF0b3JNb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIE1hdFJpcHBsZU1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0U2lkZW5hdk1vZHVsZSxcbiAgICBNYXRTbGlkZXJNb2R1bGUsXG4gICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gICAgTWF0U25hY2tCYXJNb2R1bGUsXG4gICAgTWF0U29ydE1vZHVsZSxcbiAgICBNYXRTdGVwcGVyTW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgIE1hdFRhYnNNb2R1bGUsXG4gICAgTWF0VG9vbGJhck1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIE1hdFRyZWVNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDZGtUYWJsZU1vZHVsZSxcbiAgICBDZGtUcmVlTW9kdWxlLFxuICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICBNYXRCYWRnZU1vZHVsZSxcbiAgICBNYXRCb3R0b21TaGVldE1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0Q2hpcHNNb2R1bGUsXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgTWF0RGl2aWRlck1vZHVsZSxcbiAgICBNYXRFeHBhbnNpb25Nb2R1bGUsXG4gICAgTWF0R3JpZExpc3RNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRMaXN0TW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgICBNYXRQYWdpbmF0b3JNb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIE1hdFJpcHBsZU1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0U2lkZW5hdk1vZHVsZSxcbiAgICBNYXRTbGlkZXJNb2R1bGUsXG4gICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gICAgTWF0U25hY2tCYXJNb2R1bGUsXG4gICAgTWF0U29ydE1vZHVsZSxcbiAgICBNYXRTdGVwcGVyTW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgIE1hdFRhYnNNb2R1bGUsXG4gICAgTWF0VG9vbGJhck1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIE1hdFRyZWVNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudHNDb21wb25lbnQgfSBmcm9tICcuL2NvbW1vbi1jb21wb25lbnRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEeW5hbWljRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9keW5hbWljLWZvcm0vZHluYW1pYy1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYXZiYXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICcuL21hdGVyaWFsLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE1hdGVyaWFsTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDb21tb25Db21wb25lbnRzQ29tcG9uZW50LFxuICAgIERhdGFUYWJsZUNvbXBvbmVudCxcbiAgICBEeW5hbWljRm9ybUNvbXBvbmVudCxcbiAgICBOYXZiYXJDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENvbW1vbkNvbXBvbmVudHNDb21wb25lbnQsXG4gICAgRGF0YVRhYmxlQ29tcG9uZW50LFxuICAgIER5bmFtaWNGb3JtQ29tcG9uZW50LFxuICAgIE5hdmJhckNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vbkNvbXBvbmVudHNNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX3ZhbHVlcyIsIlZhbHVlVmFsaWRhdG9ycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQU9FO0tBQWlCOztnQkFMbEIsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7a0NBSkQ7Ozs7Ozs7QUNBQTtJQWFFO0tBQWlCOzs7O0lBRWpCLDRDQUFROzs7SUFBUjtLQUNDOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsUUFBUSxFQUFFLHlEQUlUO29CQUNELE1BQU0sRUFBRSxFQUFFO2lCQUNYOzs7O29DQVZEOzs7Ozs7Ozs7aUNDa0RzQixFQUFFOzRCQUNQLEVBQUU7MEJBR3lCLElBQUksWUFBWSxFQUFFOzs7OztJQUU1RCx1Q0FBUTs7O0lBQVI7O1lBQ0UsS0FBbUIsSUFBQSxLQUFBQSxTQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBLGdCQUFBO2dCQUExQyxJQUFNLElBQUksV0FBQTtnQkFDYixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxXQUFXLENBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQ3BELENBQUM7Z0JBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7b0JBQ3JCLEdBQUcsRUFBRSxJQUFJO29CQUNULEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUs7b0JBQ2xDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUk7b0JBQ2hDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU87aUJBQ3ZDLENBQUMsQ0FBQzthQUNKOzs7Ozs7Ozs7UUFFRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDOztLQUNuRDs7Ozs7SUFFRCx3Q0FBUzs7OztJQUFULFVBQVUsR0FBRzs7UUFDWCxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakQsT0FBTyxZQUFZLENBQUMsT0FBTyxLQUFLLFlBQVksQ0FBQyxLQUFLLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzdFOzs7OztJQUVELDhDQUFlOzs7O0lBQWYsVUFBZ0IsR0FBRztRQUNqQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsd0JBQXdCO1lBQ2hGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsbUJBQW1CO2dCQUNqRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLDREQUNyQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFLO29CQUNuRCxFQUFFLENBQUM7S0FDVjs7Ozs7SUFFRCwyQ0FBWTs7OztJQUFaLFVBQWEsVUFBVTtRQUNyQixJQUFJLFVBQVUsRUFBRTtZQUNkLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxjQUFjO2dCQUMvQyxJQUFJLGNBQWMsS0FBSyxVQUFVLEVBQUU7b0JBQ2pDLE9BQU9DLFVBQWUsQ0FBQyxRQUFRLENBQUM7aUJBQ2pDO3FCQUFNLElBQUksY0FBYyxLQUFLLEtBQUssRUFBRTtvQkFDbkMsT0FBT0EsVUFBZSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztpQkFDeEQ7cUJBQU0sSUFBSSxjQUFjLEtBQUssT0FBTyxFQUFFO29CQUNyQyxPQUFPQSxVQUFlLENBQUMsS0FBSyxDQUFDO2lCQUM5QjthQUNGLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxPQUFPLEVBQUUsQ0FBQztTQUNYO0tBQ0Y7Ozs7SUFFRCx1Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3ZDOztnQkF0R0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSw2M0RBdUNKO29CQUNOLE1BQU0sRUFBRSxDQUFDLHNWQUFzVixDQUFDO2lCQUNqVzs7OzZCQU9FLEtBQUs7NkJBQ0wsTUFBTTs7K0JBdERUOzs7Ozs7O0FDQUE7SUFxQ0UseUJBQW9CLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9COzBCQUx4QixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7YUFDbkYsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxPQUFPLEdBQUEsQ0FBQyxDQUM5QjtLQUdGOzs7OztJQUVELGlDQUFPOzs7O0lBQVAsVUFBUSxJQUFJO1FBQ1YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNoRDs7OztJQUVELGtDQUFROzs7SUFBUjtLQUVDOztnQkF6Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsZzhCQW9CTDtvQkFDTCxNQUFNLEVBQUUsQ0FBQywrVUFBK1UsQ0FBQztpQkFDMVY7Ozs7Z0JBNUJRLGtCQUFrQjs7MEJBRDNCOzs7Ozs7O0FDQUE7SUE4REU7K0JBZDJCLElBQUk7Z0NBRU8sRUFBRTt1QkFDZCxFQUFFOytCQUVtQixJQUFJLFlBQVksRUFBRTswQkFFcEQsRUFBRTt5QkFLSCxJQUFJLGNBQWMsQ0FBTSxJQUFJLEVBQUUsRUFBRSxDQUFDO0tBRzVDOzs7O0lBRUQscUNBQVE7OztJQUFSO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQUEsT0FBTztZQUN2QyxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNwQyxDQUFDLENBQUM7S0FDSjs7Ozs7SUFFRCx3Q0FBVzs7OztJQUFYLFVBQVksV0FBbUI7UUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRTFELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDdkM7S0FDRjs7Ozs7SUFDRCxxQ0FBUTs7OztJQUFSLFVBQVMsSUFBVTs7UUFFakIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxFQUFFLEVBQUU7WUFDekMsT0FBTztTQUNSOztRQUVELElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQzs7WUFDaEMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUM7O1lBQ3ZDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDekIsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3ZELENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLENBQUM7S0FDNUQ7Ozs7SUFDRCwwQ0FBYTs7O0lBQWI7O1FBQ0UsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDOztRQUNuRCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUMsT0FBTyxXQUFXLEtBQUssT0FBTyxDQUFDO0tBQ2hDOzs7Ozs7SUFHRCx5Q0FBWTs7OztJQUFaO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFBLENBQUMsQ0FBQztLQUNuRTs7Z0JBckdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLHNqREFtQ0w7b0JBQ0wsTUFBTSxFQUFFLENBQUMsaU5BQWlOLENBQUM7aUJBQzVOOzs7Ozt1QkFFRSxLQUFLOzBCQUNMLEtBQUs7NkJBQ0wsS0FBSztrQ0FDTCxLQUFLO21DQUVMLEtBQUs7MEJBQ0wsS0FBSztrQ0FFTCxNQUFNOzRCQUlOLFNBQVMsU0FBQyxZQUFZO3VCQUN0QixTQUFTLFNBQUMsT0FBTzs7NkJBMURwQjs7Ozs7Ozs7QUE0R0EsaUJBQWlCLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSztJQUMxQixPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQzVDOzs7Ozs7QUM5R0Q7Ozs7Z0JBMkNDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsY0FBYzt3QkFDZCxhQUFhO3dCQUNiLHFCQUFxQjt3QkFDckIsY0FBYzt3QkFDZCxvQkFBb0I7d0JBQ3BCLGVBQWU7d0JBQ2YscUJBQXFCO3dCQUNyQixhQUFhO3dCQUNiLGlCQUFpQjt3QkFDakIsY0FBYzt3QkFDZCxtQkFBbUI7d0JBQ25CLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQixrQkFBa0I7d0JBQ2xCLGlCQUFpQjt3QkFDakIsYUFBYTt3QkFDYixjQUFjO3dCQUNkLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixtQkFBbUI7d0JBQ25CLGtCQUFrQjt3QkFDbEIsb0JBQW9CO3dCQUNwQix3QkFBd0I7d0JBQ3hCLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZixvQkFBb0I7d0JBQ3BCLGlCQUFpQjt3QkFDakIsYUFBYTt3QkFDYixnQkFBZ0I7d0JBQ2hCLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixnQkFBZ0I7d0JBQ2hCLGdCQUFnQjt3QkFDaEIsYUFBYTt3QkFDYixrQkFBa0I7cUJBQ25CO29CQUNELE9BQU8sRUFBRTt3QkFDUCxjQUFjO3dCQUNkLGFBQWE7d0JBQ2IscUJBQXFCO3dCQUNyQixjQUFjO3dCQUNkLG9CQUFvQjt3QkFDcEIsZUFBZTt3QkFDZixxQkFBcUI7d0JBQ3JCLGFBQWE7d0JBQ2IsaUJBQWlCO3dCQUNqQixjQUFjO3dCQUNkLG1CQUFtQjt3QkFDbkIsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLGtCQUFrQjt3QkFDbEIsaUJBQWlCO3dCQUNqQixhQUFhO3dCQUNiLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixhQUFhO3dCQUNiLG1CQUFtQjt3QkFDbkIsa0JBQWtCO3dCQUNsQixvQkFBb0I7d0JBQ3BCLHdCQUF3Qjt3QkFDeEIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQixlQUFlO3dCQUNmLG9CQUFvQjt3QkFDcEIsaUJBQWlCO3dCQUNqQixhQUFhO3dCQUNiLGdCQUFnQjt3QkFDaEIsY0FBYzt3QkFDZCxhQUFhO3dCQUNiLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3dCQUNoQixhQUFhO3dCQUNiLGtCQUFrQjtxQkFDbkI7aUJBQ0Y7O3lCQTVIRDs7Ozs7OztBQ0FBOzs7O2dCQVlDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixhQUFhO3dCQUNiLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixjQUFjO3dCQUNkLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLHlCQUF5Qjt3QkFDekIsa0JBQWtCO3dCQUNsQixvQkFBb0I7d0JBQ3BCLGVBQWU7cUJBQ2hCO29CQUNELE9BQU8sRUFBRTt3QkFDUCx5QkFBeUI7d0JBQ3pCLGtCQUFrQjt3QkFDbEIsb0JBQW9CO3dCQUNwQixlQUFlO3FCQUNoQjtpQkFDRjs7aUNBakNEOzs7Ozs7Ozs7Ozs7Ozs7In0=