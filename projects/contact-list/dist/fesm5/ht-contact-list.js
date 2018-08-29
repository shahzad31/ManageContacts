import { Injectable, NgModule, Component, EventEmitter, Output, defineInjectable } from '@angular/core';
import CreateDataSource from 'contactsdatasource';
import { MatTableDataSource, MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule, MatFormFieldModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonComponentsModule } from 'ht-common-components/dist';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var LOCAL_STORAGE = 'localStorage';
var ContactListService = /** @class */ (function () {
    function ContactListService() {
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
    ContactListService.ctorParameters = function () { return []; };
    /** @nocollapse */ ContactListService.ngInjectableDef = defineInjectable({ factory: function ContactListService_Factory() { return new ContactListService(); }, token: ContactListService, providedIn: "root" });
    return ContactListService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ContactListComponent = /** @class */ (function () {
    function ContactListComponent(contactsService) {
        this.contactsService = contactsService;
        this.addAction = new EventEmitter();
        this.editAction = new EventEmitter();
        this.deleteAction = new EventEmitter();
        this.displayedColumns = ['select', 'id', 'name', 'age', 'email', 'city'];
        this.loading = true;
        this.selected = [];
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
        this.dataSource = new MatTableDataSource([]);
    }
    /**
     * @return {?}
     */
    ContactListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.contactsService.store.then(function (result) {
            _this.loading = false;
            _this.dataSource = new MatTableDataSource(result.contacts || []);
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ContactListComponent.prototype.onSelectionChange = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.selected = changes.source.selected;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ContactListComponent.prototype.onAdd = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.addAction.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ContactListComponent.prototype.onEdit = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.editAction.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ContactListComponent.prototype.onDelete = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.deleteAction.emit(event);
    };
    ContactListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ht-contact-list',
                    template: "<div class=\"contact-list\">\n  <ht-data-table [loading]='loading' [columns]=\"columns\" [dataSource]=\"dataSource\" [displayedColumns]='displayedColumns' (selectionChange)=\"onSelectionChange($event)\"></ht-data-table>\n  <button class=\"new-btn\" mat-raised-button color=\"warn\" (click)=\"onDelete($event)\" [disabled]=\"selected.length === 0\">Delete Contacts\n    <mat-icon>delete</mat-icon>\n  </button>\n  <button class=\"new-btn\" mat-raised-button color=\"accent\" (click)=\"onEdit($event)\" [disabled]=\"selected.length !== 1\">Edit Contact\n    <mat-icon>edit</mat-icon>\n  </button>\n  <button class=\"new-btn\" mat-raised-button color=\"primary\" (click)=\"onAdd($event)\">New Contact\n    <mat-icon>create_new_folder</mat-icon>\n  </button>\n</div>",
                    styles: ["table{width:100%}.mat-form-field{font-size:14px;width:100%}td,th{width:25%}.new-btn{margin-top:15px;margin-left:15px;float:right}"],
                    providers: [ContactListService]
                },] },
    ];
    /** @nocollapse */
    ContactListComponent.ctorParameters = function () { return [
        { type: ContactListService }
    ]; };
    ContactListComponent.propDecorators = {
        addAction: [{ type: Output }],
        editAction: [{ type: Output }],
        deleteAction: [{ type: Output }]
    };
    return ContactListComponent;
}());

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
var ContactListModule = /** @class */ (function () {
    function ContactListModule() {
    }
    ContactListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        BrowserModule,
                        FormsModule,
                        RouterModule,
                        MaterialModule,
                        CommonComponentsModule
                    ],
                    declarations: [ContactListComponent],
                    exports: [ContactListComponent]
                },] },
    ];
    return ContactListModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { ContactListService, ContactListComponent, ContactListModule, MaterialModule as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHQtY29udGFjdC1saXN0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9odC1jb250YWN0LWxpc3QvbGliL3NlcnZpY2UvY29udGFjdC1saXN0LnNlcnZpY2UudHMiLCJuZzovL2h0LWNvbnRhY3QtbGlzdC9saWIvY29udGFjdC1saXN0LWNvbXBvbmVudC9jb250YWN0LWxpc3QuY29tcG9uZW50LnRzIiwibmc6Ly9odC1jb250YWN0LWxpc3QvbGliL21hdGVyaWFsLm1vZHVsZS50cyIsIm5nOi8vaHQtY29udGFjdC1saXN0L2xpYi9jb250YWN0LWxpc3QubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IENyZWF0ZURhdGFTb3VyY2UgZnJvbSAnY29udGFjdHNkYXRhc291cmNlJztcbmNvbnN0IExPQ0FMX1NUT1JBR0UgPSAnbG9jYWxTdG9yYWdlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pIGV4cG9ydCBjbGFzcyBDb250YWN0TGlzdFNlcnZpY2Uge1xuICBzdG9yZTogYW55O1xuICBkYXRhU291cmNlOiBhbnk7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IENyZWF0ZURhdGFTb3VyY2UoJ2NvbnRhY3RzJywgTE9DQUxfU1RPUkFHRSk7XG4gICAgdGhpcy5zdG9yZSA9IHRoaXMuZGF0YVNvdXJjZS5jcmVhdGVTdG9yZSgpO1xuICB9XG5cbiAgYWRkKGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlLmFkZENvbnRhY3QoZGF0YSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgQ29udGFjdExpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9jb250YWN0LWxpc3Quc2VydmljZSc7XG5pbXBvcnQgeyBDb250YWN0IH0gZnJvbSAnLi4vbW9kZWwvY29udGFjdC5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2h0LWNvbnRhY3QtbGlzdCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImNvbnRhY3QtbGlzdFwiPlxuICA8aHQtZGF0YS10YWJsZSBbbG9hZGluZ109J2xvYWRpbmcnIFtjb2x1bW5zXT1cImNvbHVtbnNcIiBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgW2Rpc3BsYXllZENvbHVtbnNdPSdkaXNwbGF5ZWRDb2x1bW5zJyAoc2VsZWN0aW9uQ2hhbmdlKT1cIm9uU2VsZWN0aW9uQ2hhbmdlKCRldmVudClcIj48L2h0LWRhdGEtdGFibGU+XG4gIDxidXR0b24gY2xhc3M9XCJuZXctYnRuXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJ3YXJuXCIgKGNsaWNrKT1cIm9uRGVsZXRlKCRldmVudClcIiBbZGlzYWJsZWRdPVwic2VsZWN0ZWQubGVuZ3RoID09PSAwXCI+RGVsZXRlIENvbnRhY3RzXG4gICAgPG1hdC1pY29uPmRlbGV0ZTwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIGNsYXNzPVwibmV3LWJ0blwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwiYWNjZW50XCIgKGNsaWNrKT1cIm9uRWRpdCgkZXZlbnQpXCIgW2Rpc2FibGVkXT1cInNlbGVjdGVkLmxlbmd0aCAhPT0gMVwiPkVkaXQgQ29udGFjdFxuICAgIDxtYXQtaWNvbj5lZGl0PC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG4gIDxidXR0b24gY2xhc3M9XCJuZXctYnRuXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cIm9uQWRkKCRldmVudClcIj5OZXcgQ29udGFjdFxuICAgIDxtYXQtaWNvbj5jcmVhdGVfbmV3X2ZvbGRlcjwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYHRhYmxle3dpZHRoOjEwMCV9Lm1hdC1mb3JtLWZpZWxke2ZvbnQtc2l6ZToxNHB4O3dpZHRoOjEwMCV9dGQsdGh7d2lkdGg6MjUlfS5uZXctYnRue21hcmdpbi10b3A6MTVweDttYXJnaW4tbGVmdDoxNXB4O2Zsb2F0OnJpZ2h0fWBdLFxuICBwcm92aWRlcnM6IFtDb250YWN0TGlzdFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIENvbnRhY3RMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAT3V0cHV0KCkgYWRkQWN0aW9uOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGVkaXRBY3Rpb246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZGVsZXRlQWN0aW9uOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsnc2VsZWN0JywgJ2lkJywgJ25hbWUnLCAnYWdlJywgJ2VtYWlsJywgJ2NpdHknXTtcbiAgbG9hZGluZyA9IHRydWU7XG4gIHNlbGVjdGVkID0gW107XG5cbiAgY29sdW1ucyA9IFtcbiAgICB7IGlkOiAnaWQnLCBsYWJlbDogJ0lEJyB9LFxuICAgIHsgaWQ6ICduYW1lJywgbGFiZWw6ICdOYW1lJyB9LFxuICAgIHsgaWQ6ICdhZ2UnLCBsYWJlbDogJ0FnZScgfSxcbiAgICB7IGlkOiAnZ2VuZGVyJywgbGFiZWw6ICdHZW5kZXInIH0sXG4gICAgeyBpZDogJ2FkZHJlc3MnLCBsYWJlbDogJ0FkZHJlc3MnIH0sXG4gICAgeyBpZDogJ2NpdHknLCBsYWJlbDogJ0NpdHknIH0sXG4gICAgeyBpZDogJ2NvdW50cnknLCBsYWJlbDogJ0NvdW50cnknIH0sXG4gICAgeyBpZDogJ2VtYWlsJywgbGFiZWw6ICdFbWFpbCcgfVxuICBdO1xuXG4gIGRhdGFTb3VyY2U6IE1hdFRhYmxlRGF0YVNvdXJjZTxDb250YWN0PjtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGFjdHNTZXJ2aWNlOiBDb250YWN0TGlzdFNlcnZpY2UpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKFtdKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY29udGFjdHNTZXJ2aWNlLnN0b3JlLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHJlc3VsdC5jb250YWN0cyB8fCBbXSk7XG4gICAgfSk7XG4gIH1cblxuICBvblNlbGVjdGlvbkNoYW5nZShjaGFuZ2VzKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGNoYW5nZXMuc291cmNlLnNlbGVjdGVkO1xuICB9XG5cbiAgb25BZGQoZXZlbnQpIHtcbiAgICB0aGlzLmFkZEFjdGlvbi5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIG9uRWRpdChldmVudCkge1xuICAgIHRoaXMuZWRpdEFjdGlvbi5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIG9uRGVsZXRlKGV2ZW50KSB7XG4gICAgdGhpcy5kZWxldGVBY3Rpb24uZW1pdChldmVudCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENka1RhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IENka1RyZWVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XG5cbmltcG9ydCB7XG4gIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgTWF0QmFkZ2VNb2R1bGUsXG4gIE1hdEJvdHRvbVNoZWV0TW9kdWxlLFxuICBNYXRCdXR0b25Nb2R1bGUsXG4gIE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSxcbiAgTWF0Q2FyZE1vZHVsZSxcbiAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gIE1hdENoaXBzTW9kdWxlLFxuICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICBNYXREaWFsb2dNb2R1bGUsXG4gIE1hdERpdmlkZXJNb2R1bGUsXG4gIE1hdEV4cGFuc2lvbk1vZHVsZSxcbiAgTWF0R3JpZExpc3RNb2R1bGUsXG4gIE1hdEljb25Nb2R1bGUsXG4gIE1hdElucHV0TW9kdWxlLFxuICBNYXRMaXN0TW9kdWxlLFxuICBNYXRNZW51TW9kdWxlLFxuICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICBNYXRQYWdpbmF0b3JNb2R1bGUsXG4gIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxuICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gIE1hdFJhZGlvTW9kdWxlLFxuICBNYXRSaXBwbGVNb2R1bGUsXG4gIE1hdFNlbGVjdE1vZHVsZSxcbiAgTWF0U2lkZW5hdk1vZHVsZSxcbiAgTWF0U2xpZGVyTW9kdWxlLFxuICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgTWF0U25hY2tCYXJNb2R1bGUsXG4gIE1hdFNvcnRNb2R1bGUsXG4gIE1hdFN0ZXBwZXJNb2R1bGUsXG4gIE1hdFRhYmxlTW9kdWxlLFxuICBNYXRUYWJzTW9kdWxlLFxuICBNYXRUb29sYmFyTW9kdWxlLFxuICBNYXRUb29sdGlwTW9kdWxlLFxuICBNYXRUcmVlTW9kdWxlLFxuICBNYXRGb3JtRmllbGRNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENka1RhYmxlTW9kdWxlLFxuICAgIENka1RyZWVNb2R1bGUsXG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICAgIE1hdEJhZGdlTW9kdWxlLFxuICAgIE1hdEJvdHRvbVNoZWV0TW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRDaGlwc01vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBNYXREaXZpZGVyTW9kdWxlLFxuICAgIE1hdEV4cGFuc2lvbk1vZHVsZSxcbiAgICBNYXRHcmlkTGlzdE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgTWF0UmlwcGxlTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRTaWRlbmF2TW9kdWxlLFxuICAgIE1hdFNsaWRlck1vZHVsZSxcbiAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBNYXRTb3J0TW9kdWxlLFxuICAgIE1hdFN0ZXBwZXJNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgTWF0VGFic01vZHVsZSxcbiAgICBNYXRUb29sYmFyTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgTWF0VHJlZU1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENka1RhYmxlTW9kdWxlLFxuICAgIENka1RyZWVNb2R1bGUsXG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICAgIE1hdEJhZGdlTW9kdWxlLFxuICAgIE1hdEJvdHRvbVNoZWV0TW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRDaGlwc01vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBNYXREaXZpZGVyTW9kdWxlLFxuICAgIE1hdEV4cGFuc2lvbk1vZHVsZSxcbiAgICBNYXRHcmlkTGlzdE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgTWF0UmlwcGxlTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRTaWRlbmF2TW9kdWxlLFxuICAgIE1hdFNsaWRlck1vZHVsZSxcbiAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBNYXRTb3J0TW9kdWxlLFxuICAgIE1hdFN0ZXBwZXJNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgTWF0VGFic01vZHVsZSxcbiAgICBNYXRUb29sYmFyTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgTWF0VHJlZU1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnLi9tYXRlcmlhbC5tb2R1bGUnO1xuXG5cbmltcG9ydCB7IENvbnRhY3RMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb250YWN0LWxpc3QtY29tcG9uZW50L2NvbnRhY3QtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50c01vZHVsZSB9IGZyb20gJ2h0LWNvbW1vbi1jb21wb25lbnRzL2Rpc3QnO1xuXG4vLyBpbXBvcnQgeyBDb21tb25Db21wb25lbnRzTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uLWNvbXBvbmVudHMvc3JjL3B1YmxpY19hcGknO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIE1hdGVyaWFsTW9kdWxlLFxuICAgIENvbW1vbkNvbXBvbmVudHNNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ29udGFjdExpc3RDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQ29udGFjdExpc3RDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIENvbnRhY3RMaXN0TW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0EsSUFBTSxhQUFhLEdBQUcsY0FBYyxDQUFDOztJQU9uQztRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUM1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