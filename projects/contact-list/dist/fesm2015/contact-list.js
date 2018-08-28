import { Injectable, NgModule, Component, defineInjectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
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
/** @nocollapse */ ContactListService.ngInjectableDef = defineInjectable({ factory: function ContactListService_Factory() { return new ContactListService(inject(Store)); }, token: ContactListService, providedIn: "root" });

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
        this.dataSource = new MatTableDataSource([]);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // TODO: show and hide loader on contacts loading
        this.contactsService.store.then((result) => {
            this.loading = false;
            this.dataSource = new MatTableDataSource(result.contacts || []);
        });
    }
    /**
     * @param {?} filterValue
     * @return {?}
     */
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
ContactListComponent.decorators = [
    { type: Component, args: [{
                selector: 'ht-contact-list',
                template: `<div class="contact-list">
  <ht-data-table [loading]='loading' [columns]="columns" [dataSource]="dataSource" [displayedColumns]='displayedColumns'></ht-data-table>
  <button class="new-btn" mat-raised-button color="warn">Delete Contacts
    <mat-icon>delete</mat-icon>
  </button>
  <button class="new-btn" mat-raised-button color="accent" [routerLink]="['/new-contact']">Edit Contact
    <mat-icon>edit</mat-icon>
  </button>
  <button class="new-btn" mat-raised-button color="primary" [routerLink]="['/new-contact']">New Contact
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC1saXN0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9jb250YWN0LWxpc3QvbGliL3NlcnZpY2UvY29udGFjdC1saXN0LnNlcnZpY2UudHMiLCJuZzovL2NvbnRhY3QtbGlzdC9saWIvY29udGFjdC1saXN0LWNvbXBvbmVudC9jb250YWN0LWxpc3QuY29tcG9uZW50LnRzIiwibmc6Ly9jb250YWN0LWxpc3QvbGliL21hdGVyaWFsLm1vZHVsZS50cyIsIm5nOi8vY29udGFjdC1saXN0L2xpYi9jb250YWN0LWxpc3QubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlLCBzZWxlY3QgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCBDcmVhdGVEYXRhU291cmNlIGZyb20gJ2NvbnRhY3RzZGF0YXNvdXJjZSc7XG5jb25zdCBMT0NBTF9TVE9SQUdFID0gJ2xvY2FsU3RvcmFnZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KSBleHBvcnQgY2xhc3MgQ29udGFjdExpc3RTZXJ2aWNlIHtcbiAgY29udGFjdHM6IGFueTtcbiAgc3RvcmU6IGFueTtcbiAgZGF0YVNvdXJjZTogYW55O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJ4U3RvcmU6IFN0b3JlPGFueT4pIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBDcmVhdGVEYXRhU291cmNlKCdjb250YWN0cycsIExPQ0FMX1NUT1JBR0UpO1xuICAgIHRoaXMuc3RvcmUgPSB0aGlzLmRhdGFTb3VyY2UuY3JlYXRlU3RvcmUoKTtcbiAgfVxuXG4gIGFkZChkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZS5hZGRDb250YWN0KGRhdGEpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgIE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IENvbnRhY3RMaXN0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvY29udGFjdC1saXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29udGFjdCB9IGZyb20gJy4uL21vZGVsL2NvbnRhY3QubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdodC1jb250YWN0LWxpc3QnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJjb250YWN0LWxpc3RcIj5cbiAgPGh0LWRhdGEtdGFibGUgW2xvYWRpbmddPSdsb2FkaW5nJyBbY29sdW1uc109XCJjb2x1bW5zXCIgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIFtkaXNwbGF5ZWRDb2x1bW5zXT0nZGlzcGxheWVkQ29sdW1ucyc+PC9odC1kYXRhLXRhYmxlPlxuICA8YnV0dG9uIGNsYXNzPVwibmV3LWJ0blwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwid2FyblwiPkRlbGV0ZSBDb250YWN0c1xuICAgIDxtYXQtaWNvbj5kZWxldGU8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvbiBjbGFzcz1cIm5ldy1idG5cIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cImFjY2VudFwiIFtyb3V0ZXJMaW5rXT1cIlsnL25ldy1jb250YWN0J11cIj5FZGl0IENvbnRhY3RcbiAgICA8bWF0LWljb24+ZWRpdDwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIGNsYXNzPVwibmV3LWJ0blwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIFtyb3V0ZXJMaW5rXT1cIlsnL25ldy1jb250YWN0J11cIj5OZXcgQ29udGFjdFxuICAgIDxtYXQtaWNvbj5jcmVhdGVfbmV3X2ZvbGRlcjwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYHRhYmxle3dpZHRoOjEwMCV9Lm1hdC1mb3JtLWZpZWxke2ZvbnQtc2l6ZToxNHB4O3dpZHRoOjEwMCV9dGQsdGh7d2lkdGg6MjUlfS5uZXctYnRue21hcmdpbi10b3A6MTVweDttYXJnaW4tbGVmdDoxNXB4O2Zsb2F0OnJpZ2h0fWBdLFxuICBwcm92aWRlcnM6IFtDb250YWN0TGlzdFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIENvbnRhY3RMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsnc2VsZWN0JywgJ2lkJywgJ25hbWUnLCAnYWdlJywgJ2VtYWlsJywgJ2NpdHknXTtcbiAgbG9hZGluZyA9IHRydWU7XG5cbiAgY29sdW1ucyA9IFtcbiAgICB7IGlkOiAnaWQnLCBsYWJlbDogJ0lEJyB9LFxuICAgIHsgaWQ6ICduYW1lJywgbGFiZWw6ICdOYW1lJyB9LFxuICAgIHsgaWQ6ICdhZ2UnLCBsYWJlbDogJ0FnZScgfSxcbiAgICB7IGlkOiAnZ2VuZGVyJywgbGFiZWw6ICdHZW5kZXInIH0sXG4gICAgeyBpZDogJ2FkZHJlc3MnLCBsYWJlbDogJ0FkZHJlc3MnIH0sXG4gICAgeyBpZDogJ2NpdHknLCBsYWJlbDogJ0NpdHknIH0sXG4gICAgeyBpZDogJ2NvdW50cnknLCBsYWJlbDogJ0NvdW50cnknIH0sXG4gICAgeyBpZDogJ2VtYWlsJywgbGFiZWw6ICdFbWFpbCcgfVxuICBdO1xuXG4gIGRhdGFTb3VyY2U6IE1hdFRhYmxlRGF0YVNvdXJjZTxDb250YWN0PjtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGFjdHNTZXJ2aWNlOiBDb250YWN0TGlzdFNlcnZpY2UpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKFtdKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIFRPRE86IHNob3cgYW5kIGhpZGUgbG9hZGVyIG9uIGNvbnRhY3RzIGxvYWRpbmdcbiAgICB0aGlzLmNvbnRhY3RzU2VydmljZS5zdG9yZS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShyZXN1bHQuY29udGFjdHMgfHwgW10pO1xuICAgIH0pO1xuICB9XG5cbiAgYXBwbHlGaWx0ZXIoZmlsdGVyVmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5maWx0ZXIgPSBmaWx0ZXJWYWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmICh0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yKSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yLmZpcnN0UGFnZSgpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2RrVGFibGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgQ2RrVHJlZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcblxuaW1wb3J0IHtcbiAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICBNYXRCYWRnZU1vZHVsZSxcbiAgTWF0Qm90dG9tU2hlZXRNb2R1bGUsXG4gIE1hdEJ1dHRvbk1vZHVsZSxcbiAgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlLFxuICBNYXRDYXJkTW9kdWxlLFxuICBNYXRDaGVja2JveE1vZHVsZSxcbiAgTWF0Q2hpcHNNb2R1bGUsXG4gIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gIE1hdERpYWxvZ01vZHVsZSxcbiAgTWF0RGl2aWRlck1vZHVsZSxcbiAgTWF0RXhwYW5zaW9uTW9kdWxlLFxuICBNYXRHcmlkTGlzdE1vZHVsZSxcbiAgTWF0SWNvbk1vZHVsZSxcbiAgTWF0SW5wdXRNb2R1bGUsXG4gIE1hdExpc3RNb2R1bGUsXG4gIE1hdE1lbnVNb2R1bGUsXG4gIE1hdE5hdGl2ZURhdGVNb2R1bGUsXG4gIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgTWF0UmFkaW9Nb2R1bGUsXG4gIE1hdFJpcHBsZU1vZHVsZSxcbiAgTWF0U2VsZWN0TW9kdWxlLFxuICBNYXRTaWRlbmF2TW9kdWxlLFxuICBNYXRTbGlkZXJNb2R1bGUsXG4gIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxuICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgTWF0U29ydE1vZHVsZSxcbiAgTWF0U3RlcHBlck1vZHVsZSxcbiAgTWF0VGFibGVNb2R1bGUsXG4gIE1hdFRhYnNNb2R1bGUsXG4gIE1hdFRvb2xiYXJNb2R1bGUsXG4gIE1hdFRvb2x0aXBNb2R1bGUsXG4gIE1hdFRyZWVNb2R1bGUsXG4gIE1hdEZvcm1GaWVsZE1vZHVsZVxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ2RrVGFibGVNb2R1bGUsXG4gICAgQ2RrVHJlZU1vZHVsZSxcbiAgICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXG4gICAgTWF0QmFkZ2VNb2R1bGUsXG4gICAgTWF0Qm90dG9tU2hlZXRNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSxcbiAgICBNYXRDYXJkTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdENoaXBzTW9kdWxlLFxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIE1hdERpdmlkZXJNb2R1bGUsXG4gICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxuICAgIE1hdEdyaWRMaXN0TW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0TGlzdE1vZHVsZSxcbiAgICBNYXRNZW51TW9kdWxlLFxuICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXG4gICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgICBNYXRSYWRpb01vZHVsZSxcbiAgICBNYXRSaXBwbGVNb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIE1hdFNpZGVuYXZNb2R1bGUsXG4gICAgTWF0U2xpZGVyTW9kdWxlLFxuICAgIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxuICAgIE1hdFNuYWNrQmFyTW9kdWxlLFxuICAgIE1hdFNvcnRNb2R1bGUsXG4gICAgTWF0U3RlcHBlck1vZHVsZSxcbiAgICBNYXRUYWJsZU1vZHVsZSxcbiAgICBNYXRUYWJzTW9kdWxlLFxuICAgIE1hdFRvb2xiYXJNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBNYXRUcmVlTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ2RrVGFibGVNb2R1bGUsXG4gICAgQ2RrVHJlZU1vZHVsZSxcbiAgICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXG4gICAgTWF0QmFkZ2VNb2R1bGUsXG4gICAgTWF0Qm90dG9tU2hlZXRNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSxcbiAgICBNYXRDYXJkTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdENoaXBzTW9kdWxlLFxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIE1hdERpdmlkZXJNb2R1bGUsXG4gICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxuICAgIE1hdEdyaWRMaXN0TW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0TGlzdE1vZHVsZSxcbiAgICBNYXRNZW51TW9kdWxlLFxuICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXG4gICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgICBNYXRSYWRpb01vZHVsZSxcbiAgICBNYXRSaXBwbGVNb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIE1hdFNpZGVuYXZNb2R1bGUsXG4gICAgTWF0U2xpZGVyTW9kdWxlLFxuICAgIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxuICAgIE1hdFNuYWNrQmFyTW9kdWxlLFxuICAgIE1hdFNvcnRNb2R1bGUsXG4gICAgTWF0U3RlcHBlck1vZHVsZSxcbiAgICBNYXRUYWJsZU1vZHVsZSxcbiAgICBNYXRUYWJzTW9kdWxlLFxuICAgIE1hdFRvb2xiYXJNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBNYXRUcmVlTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbE1vZHVsZSB7IH1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBDb250YWN0TGlzdENvbXBvbmVudCB9IGZyb20gJy4vY29udGFjdC1saXN0LWNvbXBvbmVudC9jb250YWN0LWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnLi9tYXRlcmlhbC5tb2R1bGUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50c01vZHVsZSB9IGZyb20gJ2h0LWNvbW1vbi1jb21wb25lbnRzL2Rpc3QnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIE1hdGVyaWFsTW9kdWxlLFxuICAgIENvbW1vbkNvbXBvbmVudHNNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ29udGFjdExpc3RDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQ29udGFjdExpc3RDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIENvbnRhY3RMaXN0TW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBLE1BQU0sYUFBYSxHQUFHLGNBQWMsQ0FBQztBQUlsQzs7OztJQUlELFlBQW9CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQzVDOzs7OztJQUVELEdBQUcsQ0FBQyxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN6Qzs7O1lBYkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBUFEsS0FBSzs7Ozs7Ozs7QUNEZDs7OztJQXlDRSxZQUFvQixlQUFtQztRQUFuQyxvQkFBZSxHQUFmLGVBQWUsQ0FBb0I7Z0NBakIxQixDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDO3VCQUNuRSxJQUFJO3VCQUVKO1lBQ1IsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7WUFDekIs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