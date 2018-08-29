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
const LOCAL_STORAGE = 'localStorage';
class ContactListService {
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
/** @nocollapse */ ContactListService.ngInjectableDef = defineInjectable({ factory: function ContactListService_Factory() { return new ContactListService(); }, token: ContactListService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ContactListComponent {
    /**
     * @param {?} contactsService
     */
    constructor(contactsService) {
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
    ngOnInit() {
        this.contactsService.store.then((result) => {
            this.loading = false;
            this.dataSource = new MatTableDataSource(result.contacts || []);
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    onSelectionChange(changes) {
        this.selected = changes.source.selected;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onAdd(event) {
        this.addAction.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onEdit(event) {
        this.editAction.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDelete(event) {
        this.deleteAction.emit(event);
    }
}
ContactListComponent.decorators = [
    { type: Component, args: [{
                selector: 'ht-contact-list',
                template: `<div class="contact-list">
  <ht-data-table [loading]='loading' [columns]="columns" [dataSource]="dataSource" [displayedColumns]='displayedColumns' (selectionChange)="onSelectionChange($event)"></ht-data-table>
  <button class="new-btn" mat-raised-button color="warn" (click)="onDelete($event)" [disabled]="selected.length === 0">Delete Contacts
    <mat-icon>delete</mat-icon>
  </button>
  <button class="new-btn" mat-raised-button color="accent" (click)="onEdit($event)" [disabled]="selected.length !== 1">Edit Contact
    <mat-icon>edit</mat-icon>
  </button>
  <button class="new-btn" mat-raised-button color="primary" (click)="onAdd($event)">New Contact
    <mat-icon>create_new_folder</mat-icon>
  </button>
</div>`,
                styles: [`table{width:100%}.mat-form-field{font-size:14px;width:100%}td,th{width:25%}.new-btn{margin-top:15px;margin-left:15px;float:right}`],
                providers: [ContactListService]
            },] },
];
/** @nocollapse */
ContactListComponent.ctorParameters = () => [
    { type: ContactListService }
];
ContactListComponent.propDecorators = {
    addAction: [{ type: Output }],
    editAction: [{ type: Output }],
    deleteAction: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MaterialModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ContactListModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { ContactListService, ContactListComponent, ContactListModule, MaterialModule as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHQtY29udGFjdC1saXN0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9odC1jb250YWN0LWxpc3QvbGliL3NlcnZpY2UvY29udGFjdC1saXN0LnNlcnZpY2UudHMiLCJuZzovL2h0LWNvbnRhY3QtbGlzdC9saWIvY29udGFjdC1saXN0LWNvbXBvbmVudC9jb250YWN0LWxpc3QuY29tcG9uZW50LnRzIiwibmc6Ly9odC1jb250YWN0LWxpc3QvbGliL21hdGVyaWFsLm1vZHVsZS50cyIsIm5nOi8vaHQtY29udGFjdC1saXN0L2xpYi9jb250YWN0LWxpc3QubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IENyZWF0ZURhdGFTb3VyY2UgZnJvbSAnY29udGFjdHNkYXRhc291cmNlJztcbmNvbnN0IExPQ0FMX1NUT1JBR0UgPSAnbG9jYWxTdG9yYWdlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pIGV4cG9ydCBjbGFzcyBDb250YWN0TGlzdFNlcnZpY2Uge1xuICBzdG9yZTogYW55O1xuICBkYXRhU291cmNlOiBhbnk7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IENyZWF0ZURhdGFTb3VyY2UoJ2NvbnRhY3RzJywgTE9DQUxfU1RPUkFHRSk7XG4gICAgdGhpcy5zdG9yZSA9IHRoaXMuZGF0YVNvdXJjZS5jcmVhdGVTdG9yZSgpO1xuICB9XG5cbiAgYWRkKGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlLmFkZENvbnRhY3QoZGF0YSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgQ29udGFjdExpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9jb250YWN0LWxpc3Quc2VydmljZSc7XG5pbXBvcnQgeyBDb250YWN0IH0gZnJvbSAnLi4vbW9kZWwvY29udGFjdC5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2h0LWNvbnRhY3QtbGlzdCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImNvbnRhY3QtbGlzdFwiPlxuICA8aHQtZGF0YS10YWJsZSBbbG9hZGluZ109J2xvYWRpbmcnIFtjb2x1bW5zXT1cImNvbHVtbnNcIiBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgW2Rpc3BsYXllZENvbHVtbnNdPSdkaXNwbGF5ZWRDb2x1bW5zJyAoc2VsZWN0aW9uQ2hhbmdlKT1cIm9uU2VsZWN0aW9uQ2hhbmdlKCRldmVudClcIj48L2h0LWRhdGEtdGFibGU+XG4gIDxidXR0b24gY2xhc3M9XCJuZXctYnRuXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJ3YXJuXCIgKGNsaWNrKT1cIm9uRGVsZXRlKCRldmVudClcIiBbZGlzYWJsZWRdPVwic2VsZWN0ZWQubGVuZ3RoID09PSAwXCI+RGVsZXRlIENvbnRhY3RzXG4gICAgPG1hdC1pY29uPmRlbGV0ZTwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIGNsYXNzPVwibmV3LWJ0blwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwiYWNjZW50XCIgKGNsaWNrKT1cIm9uRWRpdCgkZXZlbnQpXCIgW2Rpc2FibGVkXT1cInNlbGVjdGVkLmxlbmd0aCAhPT0gMVwiPkVkaXQgQ29udGFjdFxuICAgIDxtYXQtaWNvbj5lZGl0PC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG4gIDxidXR0b24gY2xhc3M9XCJuZXctYnRuXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cIm9uQWRkKCRldmVudClcIj5OZXcgQ29udGFjdFxuICAgIDxtYXQtaWNvbj5jcmVhdGVfbmV3X2ZvbGRlcjwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYHRhYmxle3dpZHRoOjEwMCV9Lm1hdC1mb3JtLWZpZWxke2ZvbnQtc2l6ZToxNHB4O3dpZHRoOjEwMCV9dGQsdGh7d2lkdGg6MjUlfS5uZXctYnRue21hcmdpbi10b3A6MTVweDttYXJnaW4tbGVmdDoxNXB4O2Zsb2F0OnJpZ2h0fWBdLFxuICBwcm92aWRlcnM6IFtDb250YWN0TGlzdFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIENvbnRhY3RMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAT3V0cHV0KCkgYWRkQWN0aW9uOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGVkaXRBY3Rpb246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZGVsZXRlQWN0aW9uOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsnc2VsZWN0JywgJ2lkJywgJ25hbWUnLCAnYWdlJywgJ2VtYWlsJywgJ2NpdHknXTtcbiAgbG9hZGluZyA9IHRydWU7XG4gIHNlbGVjdGVkID0gW107XG5cbiAgY29sdW1ucyA9IFtcbiAgICB7IGlkOiAnaWQnLCBsYWJlbDogJ0lEJyB9LFxuICAgIHsgaWQ6ICduYW1lJywgbGFiZWw6ICdOYW1lJyB9LFxuICAgIHsgaWQ6ICdhZ2UnLCBsYWJlbDogJ0FnZScgfSxcbiAgICB7IGlkOiAnZ2VuZGVyJywgbGFiZWw6ICdHZW5kZXInIH0sXG4gICAgeyBpZDogJ2FkZHJlc3MnLCBsYWJlbDogJ0FkZHJlc3MnIH0sXG4gICAgeyBpZDogJ2NpdHknLCBsYWJlbDogJ0NpdHknIH0sXG4gICAgeyBpZDogJ2NvdW50cnknLCBsYWJlbDogJ0NvdW50cnknIH0sXG4gICAgeyBpZDogJ2VtYWlsJywgbGFiZWw6ICdFbWFpbCcgfVxuICBdO1xuXG4gIGRhdGFTb3VyY2U6IE1hdFRhYmxlRGF0YVNvdXJjZTxDb250YWN0PjtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGFjdHNTZXJ2aWNlOiBDb250YWN0TGlzdFNlcnZpY2UpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKFtdKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY29udGFjdHNTZXJ2aWNlLnN0b3JlLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHJlc3VsdC5jb250YWN0cyB8fCBbXSk7XG4gICAgfSk7XG4gIH1cblxuICBvblNlbGVjdGlvbkNoYW5nZShjaGFuZ2VzKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGNoYW5nZXMuc291cmNlLnNlbGVjdGVkO1xuICB9XG5cbiAgb25BZGQoZXZlbnQpIHtcbiAgICB0aGlzLmFkZEFjdGlvbi5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIG9uRWRpdChldmVudCkge1xuICAgIHRoaXMuZWRpdEFjdGlvbi5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIG9uRGVsZXRlKGV2ZW50KSB7XG4gICAgdGhpcy5kZWxldGVBY3Rpb24uZW1pdChldmVudCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENka1RhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IENka1RyZWVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XG5cbmltcG9ydCB7XG4gIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgTWF0QmFkZ2VNb2R1bGUsXG4gIE1hdEJvdHRvbVNoZWV0TW9kdWxlLFxuICBNYXRCdXR0b25Nb2R1bGUsXG4gIE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSxcbiAgTWF0Q2FyZE1vZHVsZSxcbiAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gIE1hdENoaXBzTW9kdWxlLFxuICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICBNYXREaWFsb2dNb2R1bGUsXG4gIE1hdERpdmlkZXJNb2R1bGUsXG4gIE1hdEV4cGFuc2lvbk1vZHVsZSxcbiAgTWF0R3JpZExpc3RNb2R1bGUsXG4gIE1hdEljb25Nb2R1bGUsXG4gIE1hdElucHV0TW9kdWxlLFxuICBNYXRMaXN0TW9kdWxlLFxuICBNYXRNZW51TW9kdWxlLFxuICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICBNYXRQYWdpbmF0b3JNb2R1bGUsXG4gIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxuICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gIE1hdFJhZGlvTW9kdWxlLFxuICBNYXRSaXBwbGVNb2R1bGUsXG4gIE1hdFNlbGVjdE1vZHVsZSxcbiAgTWF0U2lkZW5hdk1vZHVsZSxcbiAgTWF0U2xpZGVyTW9kdWxlLFxuICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgTWF0U25hY2tCYXJNb2R1bGUsXG4gIE1hdFNvcnRNb2R1bGUsXG4gIE1hdFN0ZXBwZXJNb2R1bGUsXG4gIE1hdFRhYmxlTW9kdWxlLFxuICBNYXRUYWJzTW9kdWxlLFxuICBNYXRUb29sYmFyTW9kdWxlLFxuICBNYXRUb29sdGlwTW9kdWxlLFxuICBNYXRUcmVlTW9kdWxlLFxuICBNYXRGb3JtRmllbGRNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENka1RhYmxlTW9kdWxlLFxuICAgIENka1RyZWVNb2R1bGUsXG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICAgIE1hdEJhZGdlTW9kdWxlLFxuICAgIE1hdEJvdHRvbVNoZWV0TW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRDaGlwc01vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBNYXREaXZpZGVyTW9kdWxlLFxuICAgIE1hdEV4cGFuc2lvbk1vZHVsZSxcbiAgICBNYXRHcmlkTGlzdE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgTWF0UmlwcGxlTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRTaWRlbmF2TW9kdWxlLFxuICAgIE1hdFNsaWRlck1vZHVsZSxcbiAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBNYXRTb3J0TW9kdWxlLFxuICAgIE1hdFN0ZXBwZXJNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgTWF0VGFic01vZHVsZSxcbiAgICBNYXRUb29sYmFyTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgTWF0VHJlZU1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENka1RhYmxlTW9kdWxlLFxuICAgIENka1RyZWVNb2R1bGUsXG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICAgIE1hdEJhZGdlTW9kdWxlLFxuICAgIE1hdEJvdHRvbVNoZWV0TW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRDaGlwc01vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBNYXREaXZpZGVyTW9kdWxlLFxuICAgIE1hdEV4cGFuc2lvbk1vZHVsZSxcbiAgICBNYXRHcmlkTGlzdE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgTWF0UmlwcGxlTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRTaWRlbmF2TW9kdWxlLFxuICAgIE1hdFNsaWRlck1vZHVsZSxcbiAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBNYXRTb3J0TW9kdWxlLFxuICAgIE1hdFN0ZXBwZXJNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgTWF0VGFic01vZHVsZSxcbiAgICBNYXRUb29sYmFyTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgTWF0VHJlZU1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnLi9tYXRlcmlhbC5tb2R1bGUnO1xuXG5cbmltcG9ydCB7IENvbnRhY3RMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb250YWN0LWxpc3QtY29tcG9uZW50L2NvbnRhY3QtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50c01vZHVsZSB9IGZyb20gJ2h0LWNvbW1vbi1jb21wb25lbnRzL2Rpc3QnO1xuXG4vLyBpbXBvcnQgeyBDb21tb25Db21wb25lbnRzTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uLWNvbXBvbmVudHMvc3JjL3B1YmxpY19hcGknO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIE1hdGVyaWFsTW9kdWxlLFxuICAgIENvbW1vbkNvbXBvbmVudHNNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ29udGFjdExpc3RDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQ29udGFjdExpc3RDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIENvbnRhY3RMaXN0TW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0EsTUFBTSxhQUFhLEdBQUcsY0FBYyxDQUFDO0FBSWxDO0lBR0Q7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7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