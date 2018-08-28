import { Injectable, NgModule, Component, defineInjectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import CreateDataSource from 'contactsdatasource';
import { Router, RouterModule } from '@angular/router';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule, MatFormFieldModule } from '@angular/material';
import { CommonComponentsModule } from 'ht-common-components/dist';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ContactAddEditService {
    constructor() { }
}
ContactAddEditService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
ContactAddEditService.ctorParameters = () => [];
/** @nocollapse */ ContactAddEditService.ngInjectableDef = defineInjectable({ factory: function ContactAddEditService_Factory() { return new ContactAddEditService(); }, token: ContactAddEditService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const LOCAL_STORAGE = 'localStorage';
class ContactAddEditService$1 {
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
ContactAddEditService$1.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
ContactAddEditService$1.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ ContactAddEditService$1.ngInjectableDef = defineInjectable({ factory: function ContactAddEditService_Factory() { return new ContactAddEditService$1(inject(Store)); }, token: ContactAddEditService$1, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NewContactComponent {
    /**
     * @param {?} contactsService
     * @param {?} router
     * @param {?} store
     */
    constructor(contactsService, router, store) {
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
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onContactSave(data) {
        // this.store.dispatch(newContact(data));
        // this.router.navigate(['/contacts']);
        this.contactsService.add(data).then(result => {
            if (result) {
                this.router.navigate(['/contacts']);
            }
        });
    }
}
NewContactComponent.decorators = [
    { type: Component, args: [{
                selector: 'ht-new-contact',
                template: `<div class="dynamic-form">
  <ht-dynamic-form [formSchema]="contact" (submitForm)="onContactSave($event)"></ht-dynamic-form>
</div>
<button class="go-back-btn" mat-raised-button routerLink="">
  <mat-icon aria-label="Example icon-button with a heart icon">arrow_back</mat-icon>
  Go Back
</button>`,
                styles: [`.go-back-btn{position:absolute;bottom:25px}:host{text-align:center}.dynamic-form{width:600px}`],
                providers: [ContactAddEditService$1]
            },] },
];
/** @nocollapse */
NewContactComponent.ctorParameters = () => [
    { type: ContactAddEditService$1 },
    { type: Router },
    { type: Store }
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
class ContactAddEditModule {
}
ContactAddEditModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    BrowserModule,
                    FormsModule,
                    RouterModule,
                    MaterialModule,
                    CommonComponentsModule
                ],
                declarations: [NewContactComponent],
                exports: [NewContactComponent]
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

export { ContactAddEditService, NewContactComponent, ContactAddEditModule, MaterialModule as ɵb, ContactAddEditService$1 as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC1hZGQtZWRpdC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vY29udGFjdC1hZGQtZWRpdC9saWIvY29udGFjdC1hZGQtZWRpdC5zZXJ2aWNlLnRzIiwibmc6Ly9jb250YWN0LWFkZC1lZGl0L2xpYi9zZXJ2aWNlL2NvbnRhY3QtbGlzdC5zZXJ2aWNlLnRzIiwibmc6Ly9jb250YWN0LWFkZC1lZGl0L2xpYi9uZXctY29udGFjdC9uZXctY29udGFjdC5jb21wb25lbnQudHMiLCJuZzovL2NvbnRhY3QtYWRkLWVkaXQvbGliL21hdGVyaWFsLm1vZHVsZS50cyIsIm5nOi8vY29udGFjdC1hZGQtZWRpdC9saWIvY29udGFjdC1hZGQtZWRpdC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb250YWN0QWRkRWRpdFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZSwgc2VsZWN0IH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgQ3JlYXRlRGF0YVNvdXJjZSBmcm9tICdjb250YWN0c2RhdGFzb3VyY2UnO1xuY29uc3QgTE9DQUxfU1RPUkFHRSA9ICdsb2NhbFN0b3JhZ2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSkgZXhwb3J0IGNsYXNzIENvbnRhY3RBZGRFZGl0U2VydmljZSB7XG4gIGNvbnRhY3RzOiBhbnk7XG4gIHN0b3JlOiBhbnk7XG4gIGRhdGFTb3VyY2U6IGFueTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByeFN0b3JlOiBTdG9yZTxhbnk+KSB7XG4gICAgdGhpcy5kYXRhU291cmNlID0gQ3JlYXRlRGF0YVNvdXJjZSgnY29udGFjdHMnLCBMT0NBTF9TVE9SQUdFKTtcbiAgICB0aGlzLnN0b3JlID0gdGhpcy5kYXRhU291cmNlLmNyZWF0ZVN0b3JlKCk7XG4gIH1cblxuICBhZGQoZGF0YSkge1xuICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2UuYWRkQ29udGFjdChkYXRhKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRhY3RBZGRFZGl0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvY29udGFjdC1saXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN0b3JlLCBzZWxlY3QgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG4vLyBpbXBvcnQgeyBuZXdDb250YWN0IH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jb250YWN0cy5hY3Rpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaHQtbmV3LWNvbnRhY3QnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJkeW5hbWljLWZvcm1cIj5cbiAgPGh0LWR5bmFtaWMtZm9ybSBbZm9ybVNjaGVtYV09XCJjb250YWN0XCIgKHN1Ym1pdEZvcm0pPVwib25Db250YWN0U2F2ZSgkZXZlbnQpXCI+PC9odC1keW5hbWljLWZvcm0+XG48L2Rpdj5cbjxidXR0b24gY2xhc3M9XCJnby1iYWNrLWJ0blwiIG1hdC1yYWlzZWQtYnV0dG9uIHJvdXRlckxpbms9XCJcIj5cbiAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggYSBoZWFydCBpY29uXCI+YXJyb3dfYmFjazwvbWF0LWljb24+XG4gIEdvIEJhY2tcbjwvYnV0dG9uPmAsXG4gIHN0eWxlczogW2AuZ28tYmFjay1idG57cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjI1cHh9Omhvc3R7dGV4dC1hbGlnbjpjZW50ZXJ9LmR5bmFtaWMtZm9ybXt3aWR0aDo2MDBweH1gXSxcbiAgcHJvdmlkZXJzOiBbQ29udGFjdEFkZEVkaXRTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBOZXdDb250YWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29udGFjdCA9IHtcbiAgICBuYW1lOiB7XG4gICAgICBsYWJlbDogJ05hbWUnLFxuICAgICAgdmFsdWU6ICcnLFxuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgdmFsaWRhdG9yczoge1xuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgfVxuICAgIH0sXG4gICAgZ2VuZGVyOiB7XG4gICAgICBsYWJlbDogJ0dlbmRlcicsXG4gICAgICB2YWx1ZTogJ00nLFxuICAgICAgdHlwZTogJ3JhZGlvJyxcbiAgICAgIG9wdGlvbnM6IFt7IGxhYmVsOiAnTWFsZScsIHZhbHVlOiAnTScgfSwgeyBsYWJlbDogJ0ZlbWFsZScsIHZhbHVlOiAnRicgfV1cbiAgICB9LFxuICAgIGFnZToge1xuICAgICAgbGFiZWw6ICdBZ2UnLFxuICAgICAgdmFsdWU6ICcnLFxuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICB2YWxpZGF0b3JzOiB7XG4gICAgICAgIG1pbjogMThcbiAgICAgIH1cbiAgICB9LFxuICAgIGVtYWlsOiB7XG4gICAgICBsYWJlbDogJ0VtYWlsJyxcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIHR5cGU6ICdlbWFpbCcsXG4gICAgICB2YWxpZGF0b3JzOiB7XG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBlbWFpbDogdHJ1ZVxuICAgICAgfVxuICAgIH0sXG4gICAgY2l0eToge1xuICAgICAgbGFiZWw6ICdDaXR5JyxcbiAgICAgIHZhbHVlOiAnSVNMJyxcbiAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICB7IGxhYmVsOiAnLS1zZWxlY3QtLScsIHZhbHVlOiAnJyB9LFxuICAgICAgICB7IGxhYmVsOiAnSXNsYW1hYmFkJywgdmFsdWU6ICdJU0wnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdMYWhvcmUnLCB2YWx1ZTogJ0xIUicgfSxcbiAgICAgICAgeyBsYWJlbDogJ1Jhd2FscGluZGknLCB2YWx1ZTogJ1JXUCcgfVxuICAgICAgXVxuICAgIH0sXG4gICAgY291bnRyeToge1xuICAgICAgbGFiZWw6ICdDb3VudHJ5JyxcbiAgICAgIHZhbHVlOiAnUEsnLFxuICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIHsgbGFiZWw6ICctLXNlbGVjdC0tJywgdmFsdWU6ICcnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdQYWtpc3RhbicsIHZhbHVlOiAnUEsnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdVbml0ZWQgU3RhdGVzJywgdmFsdWU6ICdVU0EnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdHZXJtYW55JywgdmFsdWU6ICdHRVInIH1cbiAgICAgIF1cbiAgICB9XG4gIH07XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGFjdHNTZXJ2aWNlOiBDb250YWN0QWRkRWRpdFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgb25Db250YWN0U2F2ZShkYXRhKSB7XG4gICAgLy8gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXdDb250YWN0KGRhdGEpKTtcbiAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9jb250YWN0cyddKTtcblxuICAgIHRoaXMuY29udGFjdHNTZXJ2aWNlLmFkZChkYXRhKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2NvbnRhY3RzJ10pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENka1RhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IENka1RyZWVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XG5cbmltcG9ydCB7XG4gIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgTWF0QmFkZ2VNb2R1bGUsXG4gIE1hdEJvdHRvbVNoZWV0TW9kdWxlLFxuICBNYXRCdXR0b25Nb2R1bGUsXG4gIE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSxcbiAgTWF0Q2FyZE1vZHVsZSxcbiAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gIE1hdENoaXBzTW9kdWxlLFxuICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICBNYXREaWFsb2dNb2R1bGUsXG4gIE1hdERpdmlkZXJNb2R1bGUsXG4gIE1hdEV4cGFuc2lvbk1vZHVsZSxcbiAgTWF0R3JpZExpc3RNb2R1bGUsXG4gIE1hdEljb25Nb2R1bGUsXG4gIE1hdElucHV0TW9kdWxlLFxuICBNYXRMaXN0TW9kdWxlLFxuICBNYXRNZW51TW9kdWxlLFxuICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICBNYXRQYWdpbmF0b3JNb2R1bGUsXG4gIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxuICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gIE1hdFJhZGlvTW9kdWxlLFxuICBNYXRSaXBwbGVNb2R1bGUsXG4gIE1hdFNlbGVjdE1vZHVsZSxcbiAgTWF0U2lkZW5hdk1vZHVsZSxcbiAgTWF0U2xpZGVyTW9kdWxlLFxuICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgTWF0U25hY2tCYXJNb2R1bGUsXG4gIE1hdFNvcnRNb2R1bGUsXG4gIE1hdFN0ZXBwZXJNb2R1bGUsXG4gIE1hdFRhYmxlTW9kdWxlLFxuICBNYXRUYWJzTW9kdWxlLFxuICBNYXRUb29sYmFyTW9kdWxlLFxuICBNYXRUb29sdGlwTW9kdWxlLFxuICBNYXRUcmVlTW9kdWxlLFxuICBNYXRGb3JtRmllbGRNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENka1RhYmxlTW9kdWxlLFxuICAgIENka1RyZWVNb2R1bGUsXG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICAgIE1hdEJhZGdlTW9kdWxlLFxuICAgIE1hdEJvdHRvbVNoZWV0TW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRDaGlwc01vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBNYXREaXZpZGVyTW9kdWxlLFxuICAgIE1hdEV4cGFuc2lvbk1vZHVsZSxcbiAgICBNYXRHcmlkTGlzdE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgTWF0UmlwcGxlTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRTaWRlbmF2TW9kdWxlLFxuICAgIE1hdFNsaWRlck1vZHVsZSxcbiAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBNYXRTb3J0TW9kdWxlLFxuICAgIE1hdFN0ZXBwZXJNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgTWF0VGFic01vZHVsZSxcbiAgICBNYXRUb29sYmFyTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgTWF0VHJlZU1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENka1RhYmxlTW9kdWxlLFxuICAgIENka1RyZWVNb2R1bGUsXG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICAgIE1hdEJhZGdlTW9kdWxlLFxuICAgIE1hdEJvdHRvbVNoZWV0TW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRDaGlwc01vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBNYXREaXZpZGVyTW9kdWxlLFxuICAgIE1hdEV4cGFuc2lvbk1vZHVsZSxcbiAgICBNYXRHcmlkTGlzdE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgTWF0UmlwcGxlTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRTaWRlbmF2TW9kdWxlLFxuICAgIE1hdFNsaWRlck1vZHVsZSxcbiAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBNYXRTb3J0TW9kdWxlLFxuICAgIE1hdFN0ZXBwZXJNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgTWF0VGFic01vZHVsZSxcbiAgICBNYXRUb29sYmFyTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgTWF0VHJlZU1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmV3Q29udGFjdENvbXBvbmVudCB9IGZyb20gJy4vbmV3LWNvbnRhY3QvbmV3LWNvbnRhY3QuY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudHNNb2R1bGUgfSBmcm9tICdodC1jb21tb24tY29tcG9uZW50cy9kaXN0JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNYXRlcmlhbE1vZHVsZSB9IGZyb20gJy4vbWF0ZXJpYWwubW9kdWxlJztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIE1hdGVyaWFsTW9kdWxlLFxuICAgIENvbW1vbkNvbXBvbmVudHNNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTmV3Q29udGFjdENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtOZXdDb250YWN0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBDb250YWN0QWRkRWRpdE1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJDb250YWN0QWRkRWRpdFNlcnZpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQU9FLGlCQUFpQjs7O1lBTGxCLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7OztBQ0pEO0FBSUEsTUFBTSxhQUFhLEdBQUcsY0FBYyxDQUFDO0FBSWxDOzs7O0lBSUQsWUFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDNUM7Ozs7O0lBRUQsR0FBRyxDQUFDLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3pDOzs7WUFiRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFQUSxLQUFLOzs7Ozs7OztBQ0RkOzs7Ozs7SUEwRUUsWUFBb0IsZUFBc0MsRUFBVSxNQUFjLEVBQVUsS0FBaUI7UUFBekYsb0JBQWUsR0FBZixlQUFlLENBQXVCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQVk7dUJBdkRuRztZQUNSLElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUUsTUFBTTtnQkFDYixLQUFLLEVBQUUsRUFBRTtnQkFDVCxJQUFJLEVBQUUsTUFBTTtnQkFDWixVQUFVLEVBQUU7b0JBQ1YsUUFBUSxFQUFFLElBQUk7aUJBQ2Y7YUFDRjtZQUNELE1BQU0sRUFBRTtnQkFDTixLQUFLLEVBQUUsUUFBUTtnQkFDZixLQUFLLEVBQUUsR0FBRztnQkFDVixJQUFJLEVBQUUsT0FBTztnQkFDYixPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUM7YUFDMUU7WUFDRCxHQUFHLEVBQUU7Z0JBQ0gsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsVUFBVSxFQUFFO29CQUNWLEdBQUcsRUFBRSxFQUFFO2lCQUNSO2FBQ0Y7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsVUFBVSxFQUFFO29CQUNWLFFBQVEsRUFBRSxJQUFJO29CQUNkLEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osS0FBSyxFQUFFLE1BQU07Z0JBQ2IsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsT0FBTyxFQUFFO29CQUNQLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO29CQUNsQyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtvQkFDcEMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7b0JBQ2pDLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO2lCQUN0QzthQUNGO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLEtBQUssRUFBRSxTQUFTO2dCQUNoQixLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxPQUFPLEVBQUU7b0JBQ1AsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7b0JBQ2xDLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO29CQUNsQyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtvQkFDeEMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7aUJBQ25DO2FBQ0Y7U0FDRjtLQUNpSDs7OztJQUVsSCxRQUFRO0tBQ1A7Ozs7O0lBRUQsYUFBYSxDQUFDLElBQUk7OztRQUloQixJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUN4QyxJQUFJLE1BQU0sRUFBRTtnQkFDVixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7YUFDckM7U0FDRixDQUFDLENBQUM7S0FDSjs7O1lBbEZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUU7Ozs7OztVQU1GO2dCQUNSLE1BQU0sRUFBRSxDQUFDLCtGQUErRixDQUFDO2dCQUN6RyxTQUFTLEVBQUUsQ0FBQ0EsdUJBQXFCLENBQUM7YUFDbkM7Ozs7WUFoQlFBLHVCQUFxQjtZQUNyQixNQUFNO1lBQ04sS0FBSzs7Ozs7OztBQ0hkOzs7WUEyQ0MsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxjQUFjO29CQUNkLGFBQWE7b0JBQ2IscUJBQXFCO29CQUNyQixjQUFjO29CQUNkLG9CQUFvQjtvQkFDcEIsZUFBZTtvQkFDZixxQkFBcUI7b0JBQ3JCLGFBQWE7b0JBQ2IsaUJBQWlCO29CQUNqQixjQUFjO29CQUNkLG1CQUFtQjtvQkFDbkIsZUFBZTtvQkFDZixnQkFBZ0I7b0JBQ2hCLGtCQUFrQjtvQkFDbEIsaUJBQWlCO29CQUNqQixhQUFhO29CQUNiLGNBQWM7b0JBQ2QsYUFBYTtvQkFDYixhQUFhO29CQUNiLG1CQUFtQjtvQkFDbkIsa0JBQWtCO29CQUNsQixvQkFBb0I7b0JBQ3BCLHdCQUF3QjtvQkFDeEIsY0FBYztvQkFDZCxlQUFlO29CQUNmLGVBQWU7b0JBQ2YsZ0JBQWdCO29CQUNoQixlQUFlO29CQUNmLG9CQUFvQjtvQkFDcEIsaUJBQWlCO29CQUNqQixhQUFhO29CQUNiLGdCQUFnQjtvQkFDaEIsY0FBYztvQkFDZCxhQUFhO29CQUNiLGdCQUFnQjtvQkFDaEIsZ0JBQWdCO29CQUNoQixhQUFhO29CQUNiLGtCQUFrQjtpQkFDbkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGNBQWM7b0JBQ2QsYUFBYTtvQkFDYixxQkFBcUI7b0JBQ3JCLGNBQWM7b0JBQ2Qsb0JBQW9CO29CQUNwQixlQUFlO29CQUNmLHFCQUFxQjtvQkFDckIsYUFBYTtvQkFDYixpQkFBaUI7b0JBQ2pCLGNBQWM7b0JBQ2QsbUJBQW1CO29CQUNuQixlQUFlO29CQUNmLGdCQUFnQjtvQkFDaEIsa0JBQWtCO29CQUNsQixpQkFBaUI7b0JBQ2pCLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxhQUFhO29CQUNiLGFBQWE7b0JBQ2IsbUJBQW1CO29CQUNuQixrQkFBa0I7b0JBQ2xCLG9CQUFvQjtvQkFDcEIsd0JBQXdCO29CQUN4QixjQUFjO29CQUNkLGVBQWU7b0JBQ2YsZUFBZTtvQkFDZixnQkFBZ0I7b0JBQ2hCLGVBQWU7b0JBQ2Ysb0JBQW9CO29CQUNwQixpQkFBaUI7b0JBQ2pCLGFBQWE7b0JBQ2IsZ0JBQWdCO29CQUNoQixjQUFjO29CQUNkLGFBQWE7b0JBQ2IsZ0JBQWdCO29CQUNoQixnQkFBZ0I7b0JBQ2hCLGFBQWE7b0JBQ2Isa0JBQWtCO2lCQUNuQjthQUNGOzs7Ozs7O0FDNUhEOzs7WUFVQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixXQUFXO29CQUNYLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxzQkFBc0I7aUJBQ3ZCO2dCQUNELFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUNuQyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzthQUMvQjs7Ozs7Ozs7Ozs7Ozs7OyJ9