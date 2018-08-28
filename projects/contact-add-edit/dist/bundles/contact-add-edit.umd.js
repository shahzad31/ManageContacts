(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ngrx/store'), require('contactsdatasource'), require('@angular/router'), require('@angular/cdk/table'), require('@angular/cdk/tree'), require('@angular/material'), require('ht-common-components/dist'), require('@angular/common'), require('@angular/platform-browser'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('contact-add-edit', ['exports', '@angular/core', '@ngrx/store', 'contactsdatasource', '@angular/router', '@angular/cdk/table', '@angular/cdk/tree', '@angular/material', 'ht-common-components/dist', '@angular/common', '@angular/platform-browser', '@angular/forms'], factory) :
    (factory((global['contact-add-edit'] = {}),global.ng.core,null,null,global.ng.router,global.ng.cdk.table,global.ng.cdk.tree,global.ng.material,null,global.ng.common,global.ng.platformBrowser,global.ng.forms));
}(this, (function (exports,i0,i1,CreateDataSource,router,table,tree,material,dist,common,platformBrowser,forms) { 'use strict';

    CreateDataSource = CreateDataSource && CreateDataSource.hasOwnProperty('default') ? CreateDataSource['default'] : CreateDataSource;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ContactAddEditService = (function () {
        function ContactAddEditService() {
        }
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
    /** @type {?} */
    var LOCAL_STORAGE = 'localStorage';
    var ContactAddEditService$1 = (function () {
        function ContactAddEditService(rxStore) {
            this.rxStore = rxStore;
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
        ContactAddEditService.ctorParameters = function () {
            return [
                { type: i1.Store }
            ];
        };
        /** @nocollapse */ ContactAddEditService.ngInjectableDef = i0.defineInjectable({ factory: function ContactAddEditService_Factory() { return new ContactAddEditService(i0.inject(i1.Store)); }, token: ContactAddEditService, providedIn: "root" });
        return ContactAddEditService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NewContactComponent = (function () {
        function NewContactComponent(contactsService, router$$1, store) {
            this.contactsService = contactsService;
            this.router = router$$1;
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
                // this.router.navigate(['/contacts']);
                this.contactsService.add(data).then(function (result) {
                    if (result) {
                        _this.router.navigate(['/contacts']);
                    }
                });
            };
        NewContactComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ht-new-contact',
                        template: "<div class=\"dynamic-form\">\n  <ht-dynamic-form [formSchema]=\"contact\" (submitForm)=\"onContactSave($event)\"></ht-dynamic-form>\n</div>\n<button class=\"go-back-btn\" mat-raised-button routerLink=\"\">\n  <mat-icon aria-label=\"Example icon-button with a heart icon\">arrow_back</mat-icon>\n  Go Back\n</button>",
                        styles: [".go-back-btn{position:absolute;bottom:25px}:host{text-align:center}.dynamic-form{width:600px}"],
                        providers: [ContactAddEditService$1]
                    },] },
        ];
        /** @nocollapse */
        NewContactComponent.ctorParameters = function () {
            return [
                { type: ContactAddEditService$1 },
                { type: router.Router },
                { type: i1.Store }
            ];
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
                            router.RouterModule,
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
    exports.ɵb = MaterialModule;
    exports.ɵa = ContactAddEditService$1;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC1hZGQtZWRpdC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2NvbnRhY3QtYWRkLWVkaXQvbGliL2NvbnRhY3QtYWRkLWVkaXQuc2VydmljZS50cyIsIm5nOi8vY29udGFjdC1hZGQtZWRpdC9saWIvc2VydmljZS9jb250YWN0LWxpc3Quc2VydmljZS50cyIsIm5nOi8vY29udGFjdC1hZGQtZWRpdC9saWIvbmV3LWNvbnRhY3QvbmV3LWNvbnRhY3QuY29tcG9uZW50LnRzIiwibmc6Ly9jb250YWN0LWFkZC1lZGl0L2xpYi9tYXRlcmlhbC5tb2R1bGUudHMiLCJuZzovL2NvbnRhY3QtYWRkLWVkaXQvbGliL2NvbnRhY3QtYWRkLWVkaXQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29udGFjdEFkZEVkaXRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUsIHNlbGVjdCB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IENyZWF0ZURhdGFTb3VyY2UgZnJvbSAnY29udGFjdHNkYXRhc291cmNlJztcbmNvbnN0IExPQ0FMX1NUT1JBR0UgPSAnbG9jYWxTdG9yYWdlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pIGV4cG9ydCBjbGFzcyBDb250YWN0QWRkRWRpdFNlcnZpY2Uge1xuICBjb250YWN0czogYW55O1xuICBzdG9yZTogYW55O1xuICBkYXRhU291cmNlOiBhbnk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcnhTdG9yZTogU3RvcmU8YW55Pikge1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IENyZWF0ZURhdGFTb3VyY2UoJ2NvbnRhY3RzJywgTE9DQUxfU1RPUkFHRSk7XG4gICAgdGhpcy5zdG9yZSA9IHRoaXMuZGF0YVNvdXJjZS5jcmVhdGVTdG9yZSgpO1xuICB9XG5cbiAgYWRkKGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlLmFkZENvbnRhY3QoZGF0YSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250YWN0QWRkRWRpdFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2NvbnRhY3QtbGlzdC5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdG9yZSwgc2VsZWN0IH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuLy8gaW1wb3J0IHsgbmV3Q29udGFjdCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY29udGFjdHMuYWN0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2h0LW5ldy1jb250YWN0JyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZHluYW1pYy1mb3JtXCI+XG4gIDxodC1keW5hbWljLWZvcm0gW2Zvcm1TY2hlbWFdPVwiY29udGFjdFwiIChzdWJtaXRGb3JtKT1cIm9uQ29udGFjdFNhdmUoJGV2ZW50KVwiPjwvaHQtZHluYW1pYy1mb3JtPlxuPC9kaXY+XG48YnV0dG9uIGNsYXNzPVwiZ28tYmFjay1idG5cIiBtYXQtcmFpc2VkLWJ1dHRvbiByb3V0ZXJMaW5rPVwiXCI+XG4gIDxtYXQtaWNvbiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIGEgaGVhcnQgaWNvblwiPmFycm93X2JhY2s8L21hdC1pY29uPlxuICBHbyBCYWNrXG48L2J1dHRvbj5gLFxuICBzdHlsZXM6IFtgLmdvLWJhY2stYnRue3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbToyNXB4fTpob3N0e3RleHQtYWxpZ246Y2VudGVyfS5keW5hbWljLWZvcm17d2lkdGg6NjAwcHh9YF0sXG4gIHByb3ZpZGVyczogW0NvbnRhY3RBZGRFZGl0U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTmV3Q29udGFjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnRhY3QgPSB7XG4gICAgbmFtZToge1xuICAgICAgbGFiZWw6ICdOYW1lJyxcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHZhbGlkYXRvcnM6IHtcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgIH1cbiAgICB9LFxuICAgIGdlbmRlcjoge1xuICAgICAgbGFiZWw6ICdHZW5kZXInLFxuICAgICAgdmFsdWU6ICdNJyxcbiAgICAgIHR5cGU6ICdyYWRpbycsXG4gICAgICBvcHRpb25zOiBbeyBsYWJlbDogJ01hbGUnLCB2YWx1ZTogJ00nIH0sIHsgbGFiZWw6ICdGZW1hbGUnLCB2YWx1ZTogJ0YnIH1dXG4gICAgfSxcbiAgICBhZ2U6IHtcbiAgICAgIGxhYmVsOiAnQWdlJyxcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgdmFsaWRhdG9yczoge1xuICAgICAgICBtaW46IDE4XG4gICAgICB9XG4gICAgfSxcbiAgICBlbWFpbDoge1xuICAgICAgbGFiZWw6ICdFbWFpbCcsXG4gICAgICB2YWx1ZTogJycsXG4gICAgICB0eXBlOiAnZW1haWwnLFxuICAgICAgdmFsaWRhdG9yczoge1xuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgZW1haWw6IHRydWVcbiAgICAgIH1cbiAgICB9LFxuICAgIGNpdHk6IHtcbiAgICAgIGxhYmVsOiAnQ2l0eScsXG4gICAgICB2YWx1ZTogJ0lTTCcsXG4gICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgeyBsYWJlbDogJy0tc2VsZWN0LS0nLCB2YWx1ZTogJycgfSxcbiAgICAgICAgeyBsYWJlbDogJ0lzbGFtYWJhZCcsIHZhbHVlOiAnSVNMJyB9LFxuICAgICAgICB7IGxhYmVsOiAnTGFob3JlJywgdmFsdWU6ICdMSFInIH0sXG4gICAgICAgIHsgbGFiZWw6ICdSYXdhbHBpbmRpJywgdmFsdWU6ICdSV1AnIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIGNvdW50cnk6IHtcbiAgICAgIGxhYmVsOiAnQ291bnRyeScsXG4gICAgICB2YWx1ZTogJ1BLJyxcbiAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICB7IGxhYmVsOiAnLS1zZWxlY3QtLScsIHZhbHVlOiAnJyB9LFxuICAgICAgICB7IGxhYmVsOiAnUGFraXN0YW4nLCB2YWx1ZTogJ1BLJyB9LFxuICAgICAgICB7IGxhYmVsOiAnVW5pdGVkIFN0YXRlcycsIHZhbHVlOiAnVVNBJyB9LFxuICAgICAgICB7IGxhYmVsOiAnR2VybWFueScsIHZhbHVlOiAnR0VSJyB9XG4gICAgICBdXG4gICAgfVxuICB9O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRhY3RzU2VydmljZTogQ29udGFjdEFkZEVkaXRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9uQ29udGFjdFNhdmUoZGF0YSkge1xuICAgIC8vIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3Q29udGFjdChkYXRhKSk7XG4gICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvY29udGFjdHMnXSk7XG5cbiAgICB0aGlzLmNvbnRhY3RzU2VydmljZS5hZGQoZGF0YSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9jb250YWN0cyddKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZGtUYWJsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBDZGtUcmVlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xuXG5pbXBvcnQge1xuICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXG4gIE1hdEJhZGdlTW9kdWxlLFxuICBNYXRCb3R0b21TaGVldE1vZHVsZSxcbiAgTWF0QnV0dG9uTW9kdWxlLFxuICBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsXG4gIE1hdENhcmRNb2R1bGUsXG4gIE1hdENoZWNrYm94TW9kdWxlLFxuICBNYXRDaGlwc01vZHVsZSxcbiAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgTWF0RGlhbG9nTW9kdWxlLFxuICBNYXREaXZpZGVyTW9kdWxlLFxuICBNYXRFeHBhbnNpb25Nb2R1bGUsXG4gIE1hdEdyaWRMaXN0TW9kdWxlLFxuICBNYXRJY29uTW9kdWxlLFxuICBNYXRJbnB1dE1vZHVsZSxcbiAgTWF0TGlzdE1vZHVsZSxcbiAgTWF0TWVudU1vZHVsZSxcbiAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxuICBNYXRSYWRpb01vZHVsZSxcbiAgTWF0UmlwcGxlTW9kdWxlLFxuICBNYXRTZWxlY3RNb2R1bGUsXG4gIE1hdFNpZGVuYXZNb2R1bGUsXG4gIE1hdFNsaWRlck1vZHVsZSxcbiAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gIE1hdFNuYWNrQmFyTW9kdWxlLFxuICBNYXRTb3J0TW9kdWxlLFxuICBNYXRTdGVwcGVyTW9kdWxlLFxuICBNYXRUYWJsZU1vZHVsZSxcbiAgTWF0VGFic01vZHVsZSxcbiAgTWF0VG9vbGJhck1vZHVsZSxcbiAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgTWF0VHJlZU1vZHVsZSxcbiAgTWF0Rm9ybUZpZWxkTW9kdWxlXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDZGtUYWJsZU1vZHVsZSxcbiAgICBDZGtUcmVlTW9kdWxlLFxuICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICBNYXRCYWRnZU1vZHVsZSxcbiAgICBNYXRCb3R0b21TaGVldE1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0Q2hpcHNNb2R1bGUsXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgTWF0RGl2aWRlck1vZHVsZSxcbiAgICBNYXRFeHBhbnNpb25Nb2R1bGUsXG4gICAgTWF0R3JpZExpc3RNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRMaXN0TW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgICBNYXRQYWdpbmF0b3JNb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIE1hdFJpcHBsZU1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0U2lkZW5hdk1vZHVsZSxcbiAgICBNYXRTbGlkZXJNb2R1bGUsXG4gICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gICAgTWF0U25hY2tCYXJNb2R1bGUsXG4gICAgTWF0U29ydE1vZHVsZSxcbiAgICBNYXRTdGVwcGVyTW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgIE1hdFRhYnNNb2R1bGUsXG4gICAgTWF0VG9vbGJhck1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIE1hdFRyZWVNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDZGtUYWJsZU1vZHVsZSxcbiAgICBDZGtUcmVlTW9kdWxlLFxuICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICBNYXRCYWRnZU1vZHVsZSxcbiAgICBNYXRCb3R0b21TaGVldE1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0Q2hpcHNNb2R1bGUsXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgTWF0RGl2aWRlck1vZHVsZSxcbiAgICBNYXRFeHBhbnNpb25Nb2R1bGUsXG4gICAgTWF0R3JpZExpc3RNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRMaXN0TW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgICBNYXRQYWdpbmF0b3JNb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIE1hdFJpcHBsZU1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0U2lkZW5hdk1vZHVsZSxcbiAgICBNYXRTbGlkZXJNb2R1bGUsXG4gICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gICAgTWF0U25hY2tCYXJNb2R1bGUsXG4gICAgTWF0U29ydE1vZHVsZSxcbiAgICBNYXRTdGVwcGVyTW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgIE1hdFRhYnNNb2R1bGUsXG4gICAgTWF0VG9vbGJhck1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIE1hdFRyZWVNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5ld0NvbnRhY3RDb21wb25lbnQgfSBmcm9tICcuL25ldy1jb250YWN0L25ldy1jb250YWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnRzTW9kdWxlIH0gZnJvbSAnaHQtY29tbW9uLWNvbXBvbmVudHMvZGlzdCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICcuL21hdGVyaWFsLm1vZHVsZSc7XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBNYXRlcmlhbE1vZHVsZSxcbiAgICBDb21tb25Db21wb25lbnRzTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW05ld0NvbnRhY3RDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTmV3Q29udGFjdENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQ29udGFjdEFkZEVkaXRNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIlN0b3JlIiwicm91dGVyIiwiQ29tcG9uZW50IiwiQ29udGFjdEFkZEVkaXRTZXJ2aWNlIiwiUm91dGVyIiwiTmdNb2R1bGUiLCJDZGtUYWJsZU1vZHVsZSIsIkNka1RyZWVNb2R1bGUiLCJNYXRBdXRvY29tcGxldGVNb2R1bGUiLCJNYXRCYWRnZU1vZHVsZSIsIk1hdEJvdHRvbVNoZWV0TW9kdWxlIiwiTWF0QnV0dG9uTW9kdWxlIiwiTWF0QnV0dG9uVG9nZ2xlTW9kdWxlIiwiTWF0Q2FyZE1vZHVsZSIsIk1hdENoZWNrYm94TW9kdWxlIiwiTWF0Q2hpcHNNb2R1bGUiLCJNYXREYXRlcGlja2VyTW9kdWxlIiwiTWF0RGlhbG9nTW9kdWxlIiwiTWF0RGl2aWRlck1vZHVsZSIsIk1hdEV4cGFuc2lvbk1vZHVsZSIsIk1hdEdyaWRMaXN0TW9kdWxlIiwiTWF0SWNvbk1vZHVsZSIsIk1hdElucHV0TW9kdWxlIiwiTWF0TGlzdE1vZHVsZSIsIk1hdE1lbnVNb2R1bGUiLCJNYXROYXRpdmVEYXRlTW9kdWxlIiwiTWF0UGFnaW5hdG9yTW9kdWxlIiwiTWF0UHJvZ3Jlc3NCYXJNb2R1bGUiLCJNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUiLCJNYXRSYWRpb01vZHVsZSIsIk1hdFJpcHBsZU1vZHVsZSIsIk1hdFNlbGVjdE1vZHVsZSIsIk1hdFNpZGVuYXZNb2R1bGUiLCJNYXRTbGlkZXJNb2R1bGUiLCJNYXRTbGlkZVRvZ2dsZU1vZHVsZSIsIk1hdFNuYWNrQmFyTW9kdWxlIiwiTWF0U29ydE1vZHVsZSIsIk1hdFN0ZXBwZXJNb2R1bGUiLCJNYXRUYWJsZU1vZHVsZSIsIk1hdFRhYnNNb2R1bGUiLCJNYXRUb29sYmFyTW9kdWxlIiwiTWF0VG9vbHRpcE1vZHVsZSIsIk1hdFRyZWVNb2R1bGUiLCJNYXRGb3JtRmllbGRNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJCcm93c2VyTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJSb3V0ZXJNb2R1bGUiLCJDb21tb25Db21wb25lbnRzTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7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