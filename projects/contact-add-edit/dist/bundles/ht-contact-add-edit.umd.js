(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('contactsdatasource'), require('@angular/cdk/table'), require('@angular/cdk/tree'), require('@angular/material'), require('ht-common-components/dist'), require('@angular/common'), require('@angular/platform-browser'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('ht-contact-add-edit', ['exports', '@angular/core', 'contactsdatasource', '@angular/cdk/table', '@angular/cdk/tree', '@angular/material', 'ht-common-components/dist', '@angular/common', '@angular/platform-browser', '@angular/forms'], factory) :
    (factory((global['ht-contact-add-edit'] = {}),global.ng.core,null,global.ng.cdk.table,global.ng.cdk.tree,global.ng.material,null,global.ng.common,global.ng.platformBrowser,global.ng.forms));
}(this, (function (exports,i0,CreateDataSource,table,tree,material,dist,common,platformBrowser,forms) { 'use strict';

    CreateDataSource = CreateDataSource && CreateDataSource.hasOwnProperty('default') ? CreateDataSource['default'] : CreateDataSource;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LOCAL_STORAGE = 'localStorage';
    var ContactAddEditService = (function () {
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        ContactAddEditService.ctorParameters = function () { return []; };
        /** @nocollapse */ ContactAddEditService.ngInjectableDef = i0.defineInjectable({ factory: function ContactAddEditService_Factory() { return new ContactAddEditService(); }, token: ContactAddEditService, providedIn: "root" });
        return ContactAddEditService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NewContactComponent = (function () {
        function NewContactComponent(contactsService) {
            this.contactsService = contactsService;
            this.saveContact = new i0.EventEmitter();
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
        NewContactComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @param {?} data
         * @return {?}
         */
        NewContactComponent.prototype.onContactSave = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                var _this = this;
                // this.store.dispatch(newContact(data));
                this.contactsService.add(data).then(function (result) {
                    if (result) {
                        _this.saveContact.emit(result);
                    }
                });
            };
        NewContactComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ht-new-contact',
                        template: "<div class=\"dynamic-form\">\n  <ht-dynamic-form [formSchema]=\"contact\" (submitForm)=\"onContactSave($event)\"></ht-dynamic-form>\n</div>\n<button class=\"go-back-btn\" mat-raised-button>\n  <mat-icon aria-label=\"Example icon-button with a heart icon\">arrow_back</mat-icon>\n  Go Back\n</button>",
                        styles: [".go-back-btn{position:absolute;bottom:25px}:host{text-align:center}.dynamic-form{width:600px}"],
                        providers: [ContactAddEditService]
                    },] },
        ];
        /** @nocollapse */
        NewContactComponent.ctorParameters = function () {
            return [
                { type: ContactAddEditService }
            ];
        };
        NewContactComponent.propDecorators = {
            saveContact: [{ type: i0.Output }]
        };
        return NewContactComponent;
    }());

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
    var ContactAddEditModule = (function () {
        function ContactAddEditModule() {
        }
        ContactAddEditModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            platformBrowser.BrowserModule,
                            forms.FormsModule,
                            MaterialModule,
                            dist.CommonComponentsModule
                        ],
                        declarations: [NewContactComponent],
                        exports: [NewContactComponent]
                    },] },
        ];
        return ContactAddEditModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.ContactAddEditService = ContactAddEditService;
    exports.NewContactComponent = NewContactComponent;
    exports.ContactAddEditModule = ContactAddEditModule;
    exports.ɵa = MaterialModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHQtY29udGFjdC1hZGQtZWRpdC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2h0LWNvbnRhY3QtYWRkLWVkaXQvbGliL3NlcnZpY2UvY29udGFjdC1saXN0LnNlcnZpY2UudHMiLCJuZzovL2h0LWNvbnRhY3QtYWRkLWVkaXQvbGliL25ldy1jb250YWN0L25ldy1jb250YWN0LmNvbXBvbmVudC50cyIsIm5nOi8vaHQtY29udGFjdC1hZGQtZWRpdC9saWIvbWF0ZXJpYWwubW9kdWxlLnRzIiwibmc6Ly9odC1jb250YWN0LWFkZC1lZGl0L2xpYi9jb250YWN0LWFkZC1lZGl0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCBDcmVhdGVEYXRhU291cmNlIGZyb20gJ2NvbnRhY3RzZGF0YXNvdXJjZSc7XG5jb25zdCBMT0NBTF9TVE9SQUdFID0gJ2xvY2FsU3RvcmFnZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KSBleHBvcnQgY2xhc3MgQ29udGFjdEFkZEVkaXRTZXJ2aWNlIHtcbiAgY29udGFjdHM6IGFueTtcbiAgc3RvcmU6IGFueTtcbiAgZGF0YVNvdXJjZTogYW55O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBDcmVhdGVEYXRhU291cmNlKCdjb250YWN0cycsIExPQ0FMX1NUT1JBR0UpO1xuICAgIHRoaXMuc3RvcmUgPSB0aGlzLmRhdGFTb3VyY2UuY3JlYXRlU3RvcmUoKTtcbiAgfVxuXG4gIGFkZChkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZS5hZGRDb250YWN0KGRhdGEpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRhY3RBZGRFZGl0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvY29udGFjdC1saXN0LnNlcnZpY2UnO1xuLy8gaW1wb3J0IHsgbmV3Q29udGFjdCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY29udGFjdHMuYWN0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2h0LW5ldy1jb250YWN0JyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZHluYW1pYy1mb3JtXCI+XG4gIDxodC1keW5hbWljLWZvcm0gW2Zvcm1TY2hlbWFdPVwiY29udGFjdFwiIChzdWJtaXRGb3JtKT1cIm9uQ29udGFjdFNhdmUoJGV2ZW50KVwiPjwvaHQtZHluYW1pYy1mb3JtPlxuPC9kaXY+XG48YnV0dG9uIGNsYXNzPVwiZ28tYmFjay1idG5cIiBtYXQtcmFpc2VkLWJ1dHRvbj5cbiAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggYSBoZWFydCBpY29uXCI+YXJyb3dfYmFjazwvbWF0LWljb24+XG4gIEdvIEJhY2tcbjwvYnV0dG9uPmAsXG4gIHN0eWxlczogW2AuZ28tYmFjay1idG57cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjI1cHh9Omhvc3R7dGV4dC1hbGlnbjpjZW50ZXJ9LmR5bmFtaWMtZm9ybXt3aWR0aDo2MDBweH1gXSxcbiAgcHJvdmlkZXJzOiBbQ29udGFjdEFkZEVkaXRTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBOZXdDb250YWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQE91dHB1dCgpIHNhdmVDb250YWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY29udGFjdCA9IHtcbiAgICBuYW1lOiB7XG4gICAgICBsYWJlbDogJ05hbWUnLFxuICAgICAgdmFsdWU6ICcnLFxuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgdmFsaWRhdG9yczoge1xuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgfVxuICAgIH0sXG4gICAgZ2VuZGVyOiB7XG4gICAgICBsYWJlbDogJ0dlbmRlcicsXG4gICAgICB2YWx1ZTogJ00nLFxuICAgICAgdHlwZTogJ3JhZGlvJyxcbiAgICAgIG9wdGlvbnM6IFt7IGxhYmVsOiAnTWFsZScsIHZhbHVlOiAnTScgfSwgeyBsYWJlbDogJ0ZlbWFsZScsIHZhbHVlOiAnRicgfV1cbiAgICB9LFxuICAgIGFnZToge1xuICAgICAgbGFiZWw6ICdBZ2UnLFxuICAgICAgdmFsdWU6ICcnLFxuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICB2YWxpZGF0b3JzOiB7XG4gICAgICAgIG1pbjogMThcbiAgICAgIH1cbiAgICB9LFxuICAgIGVtYWlsOiB7XG4gICAgICBsYWJlbDogJ0VtYWlsJyxcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIHR5cGU6ICdlbWFpbCcsXG4gICAgICB2YWxpZGF0b3JzOiB7XG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBlbWFpbDogdHJ1ZVxuICAgICAgfVxuICAgIH0sXG4gICAgY2l0eToge1xuICAgICAgbGFiZWw6ICdDaXR5JyxcbiAgICAgIHZhbHVlOiAnSVNMJyxcbiAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICB7IGxhYmVsOiAnLS1zZWxlY3QtLScsIHZhbHVlOiAnJyB9LFxuICAgICAgICB7IGxhYmVsOiAnSXNsYW1hYmFkJywgdmFsdWU6ICdJU0wnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdMYWhvcmUnLCB2YWx1ZTogJ0xIUicgfSxcbiAgICAgICAgeyBsYWJlbDogJ1Jhd2FscGluZGknLCB2YWx1ZTogJ1JXUCcgfVxuICAgICAgXVxuICAgIH0sXG4gICAgY291bnRyeToge1xuICAgICAgbGFiZWw6ICdDb3VudHJ5JyxcbiAgICAgIHZhbHVlOiAnUEsnLFxuICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIHsgbGFiZWw6ICctLXNlbGVjdC0tJywgdmFsdWU6ICcnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdQYWtpc3RhbicsIHZhbHVlOiAnUEsnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdVbml0ZWQgU3RhdGVzJywgdmFsdWU6ICdVU0EnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdHZXJtYW55JywgdmFsdWU6ICdHRVInIH1cbiAgICAgIF1cbiAgICB9XG4gIH07XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGFjdHNTZXJ2aWNlOiBDb250YWN0QWRkRWRpdFNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgb25Db250YWN0U2F2ZShkYXRhKSB7XG4gICAgLy8gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXdDb250YWN0KGRhdGEpKTtcblxuICAgIHRoaXMuY29udGFjdHNTZXJ2aWNlLmFkZChkYXRhKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHRoaXMuc2F2ZUNvbnRhY3QuZW1pdChyZXN1bHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENka1RhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IENka1RyZWVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XG5cbmltcG9ydCB7XG4gIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgTWF0QmFkZ2VNb2R1bGUsXG4gIE1hdEJvdHRvbVNoZWV0TW9kdWxlLFxuICBNYXRCdXR0b25Nb2R1bGUsXG4gIE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSxcbiAgTWF0Q2FyZE1vZHVsZSxcbiAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gIE1hdENoaXBzTW9kdWxlLFxuICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICBNYXREaWFsb2dNb2R1bGUsXG4gIE1hdERpdmlkZXJNb2R1bGUsXG4gIE1hdEV4cGFuc2lvbk1vZHVsZSxcbiAgTWF0R3JpZExpc3RNb2R1bGUsXG4gIE1hdEljb25Nb2R1bGUsXG4gIE1hdElucHV0TW9kdWxlLFxuICBNYXRMaXN0TW9kdWxlLFxuICBNYXRNZW51TW9kdWxlLFxuICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICBNYXRQYWdpbmF0b3JNb2R1bGUsXG4gIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxuICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gIE1hdFJhZGlvTW9kdWxlLFxuICBNYXRSaXBwbGVNb2R1bGUsXG4gIE1hdFNlbGVjdE1vZHVsZSxcbiAgTWF0U2lkZW5hdk1vZHVsZSxcbiAgTWF0U2xpZGVyTW9kdWxlLFxuICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgTWF0U25hY2tCYXJNb2R1bGUsXG4gIE1hdFNvcnRNb2R1bGUsXG4gIE1hdFN0ZXBwZXJNb2R1bGUsXG4gIE1hdFRhYmxlTW9kdWxlLFxuICBNYXRUYWJzTW9kdWxlLFxuICBNYXRUb29sYmFyTW9kdWxlLFxuICBNYXRUb29sdGlwTW9kdWxlLFxuICBNYXRUcmVlTW9kdWxlLFxuICBNYXRGb3JtRmllbGRNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENka1RhYmxlTW9kdWxlLFxuICAgIENka1RyZWVNb2R1bGUsXG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICAgIE1hdEJhZGdlTW9kdWxlLFxuICAgIE1hdEJvdHRvbVNoZWV0TW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRDaGlwc01vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBNYXREaXZpZGVyTW9kdWxlLFxuICAgIE1hdEV4cGFuc2lvbk1vZHVsZSxcbiAgICBNYXRHcmlkTGlzdE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgTWF0UmlwcGxlTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRTaWRlbmF2TW9kdWxlLFxuICAgIE1hdFNsaWRlck1vZHVsZSxcbiAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBNYXRTb3J0TW9kdWxlLFxuICAgIE1hdFN0ZXBwZXJNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgTWF0VGFic01vZHVsZSxcbiAgICBNYXRUb29sYmFyTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgTWF0VHJlZU1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENka1RhYmxlTW9kdWxlLFxuICAgIENka1RyZWVNb2R1bGUsXG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICAgIE1hdEJhZGdlTW9kdWxlLFxuICAgIE1hdEJvdHRvbVNoZWV0TW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRDaGlwc01vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBNYXREaXZpZGVyTW9kdWxlLFxuICAgIE1hdEV4cGFuc2lvbk1vZHVsZSxcbiAgICBNYXRHcmlkTGlzdE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgTWF0UmlwcGxlTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRTaWRlbmF2TW9kdWxlLFxuICAgIE1hdFNsaWRlck1vZHVsZSxcbiAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBNYXRTb3J0TW9kdWxlLFxuICAgIE1hdFN0ZXBwZXJNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgTWF0VGFic01vZHVsZSxcbiAgICBNYXRUb29sYmFyTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgTWF0VHJlZU1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmV3Q29udGFjdENvbXBvbmVudCB9IGZyb20gJy4vbmV3LWNvbnRhY3QvbmV3LWNvbnRhY3QuY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudHNNb2R1bGUgfSBmcm9tICdodC1jb21tb24tY29tcG9uZW50cy9kaXN0JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnLi9tYXRlcmlhbC5tb2R1bGUnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBNYXRlcmlhbE1vZHVsZSxcbiAgICBDb21tb25Db21wb25lbnRzTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW05ld0NvbnRhY3RDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTmV3Q29udGFjdENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQ29udGFjdEFkZEVkaXRNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkV2ZW50RW1pdHRlciIsIkNvbXBvbmVudCIsIk91dHB1dCIsIk5nTW9kdWxlIiwiQ2RrVGFibGVNb2R1bGUiLCJDZGtUcmVlTW9kdWxlIiwiTWF0QXV0b2NvbXBsZXRlTW9kdWxlIiwiTWF0QmFkZ2VNb2R1bGUiLCJNYXRCb3R0b21TaGVldE1vZHVsZSIsIk1hdEJ1dHRvbk1vZHVsZSIsIk1hdEJ1dHRvblRvZ2dsZU1vZHVsZSIsIk1hdENhcmRNb2R1bGUiLCJNYXRDaGVja2JveE1vZHVsZSIsIk1hdENoaXBzTW9kdWxlIiwiTWF0RGF0ZXBpY2tlck1vZHVsZSIsIk1hdERpYWxvZ01vZHVsZSIsIk1hdERpdmlkZXJNb2R1bGUiLCJNYXRFeHBhbnNpb25Nb2R1bGUiLCJNYXRHcmlkTGlzdE1vZHVsZSIsIk1hdEljb25Nb2R1bGUiLCJNYXRJbnB1dE1vZHVsZSIsIk1hdExpc3RNb2R1bGUiLCJNYXRNZW51TW9kdWxlIiwiTWF0TmF0aXZlRGF0ZU1vZHVsZSIsIk1hdFBhZ2luYXRvck1vZHVsZSIsIk1hdFByb2dyZXNzQmFyTW9kdWxlIiwiTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlIiwiTWF0UmFkaW9Nb2R1bGUiLCJNYXRSaXBwbGVNb2R1bGUiLCJNYXRTZWxlY3RNb2R1bGUiLCJNYXRTaWRlbmF2TW9kdWxlIiwiTWF0U2xpZGVyTW9kdWxlIiwiTWF0U2xpZGVUb2dnbGVNb2R1bGUiLCJNYXRTbmFja0Jhck1vZHVsZSIsIk1hdFNvcnRNb2R1bGUiLCJNYXRTdGVwcGVyTW9kdWxlIiwiTWF0VGFibGVNb2R1bGUiLCJNYXRUYWJzTW9kdWxlIiwiTWF0VG9vbGJhck1vZHVsZSIsIk1hdFRvb2x0aXBNb2R1bGUiLCJNYXRUcmVlTW9kdWxlIiwiTWF0Rm9ybUZpZWxkTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiQnJvd3Nlck1vZHVsZSIsIkZvcm1zTW9kdWxlIiwiQ29tbW9uQ29tcG9uZW50c01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7SUFHQSxJQUFNLGFBQWEsR0FBRyxjQUFjLENBQUM7O1FBUW5DO1lBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzVDOzs7OztRQUVELG1DQUFHOzs7O1lBQUgsVUFBSSxJQUFJO2dCQUNOLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDekM7O29CQWJGQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7OztvQ0FQRDs7Ozs7OztBQ0FBO1FBeUVFLDZCQUFvQixlQUFzQztZQUF0QyxvQkFBZSxHQUFmLGVBQWUsQ0FBdUI7K0JBeERmLElBQUlDLGVBQVksRUFBRTsyQkFDbkQ7Z0JBQ1IsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxNQUFNO29CQUNiLEtBQUssRUFBRSxFQUFFO29CQUNULElBQUksRUFBRSxNQUFNO29CQUNaLFVBQVUsRUFBRTt3QkFDVixRQUFRLEVBQUUsSUFBSTtxQkFDZjtpQkFDRjtnQkFDRCxNQUFNLEVBQUU7b0JBQ04sS0FB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