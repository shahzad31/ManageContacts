(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ngrx/store'), require('contactsdatasource'), require('@angular/material'), require('@angular/cdk/table'), require('@angular/cdk/tree'), require('@angular/common'), require('@angular/platform-browser'), require('@angular/forms'), require('@angular/router'), require('ht-common-components/dist')) :
    typeof define === 'function' && define.amd ? define('contact-list', ['exports', '@angular/core', '@ngrx/store', 'contactsdatasource', '@angular/material', '@angular/cdk/table', '@angular/cdk/tree', '@angular/common', '@angular/platform-browser', '@angular/forms', '@angular/router', 'ht-common-components/dist'], factory) :
    (factory((global['contact-list'] = {}),global.ng.core,null,null,global.ng.material,global.ng.cdk.table,global.ng.cdk.tree,global.ng.common,global.ng.platformBrowser,global.ng.forms,global.ng.router,null));
}(this, (function (exports,i0,i1,CreateDataSource,material,table,tree,common,platformBrowser,forms,router,dist) { 'use strict';

    CreateDataSource = CreateDataSource && CreateDataSource.hasOwnProperty('default') ? CreateDataSource['default'] : CreateDataSource;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LOCAL_STORAGE = 'localStorage';
    var ContactListService = (function () {
        function ContactListService(rxStore) {
            this.rxStore = rxStore;
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        ContactListService.ctorParameters = function () {
            return [
                { type: i1.Store }
            ];
        };
        /** @nocollapse */ ContactListService.ngInjectableDef = i0.defineInjectable({ factory: function ContactListService_Factory() { return new ContactListService(i0.inject(i1.Store)); }, token: ContactListService, providedIn: "root" });
        return ContactListService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ContactListComponent = (function () {
        function ContactListComponent(contactsService) {
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
            this.dataSource = new material.MatTableDataSource([]);
        }
        /**
         * @return {?}
         */
        ContactListComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // TODO: show and hide loader on contacts loading
                this.contactsService.store.then(function (result) {
                    _this.loading = false;
                    _this.dataSource = new material.MatTableDataSource(result.contacts || []);
                });
            };
        /**
         * @param {?} filterValue
         * @return {?}
         */
        ContactListComponent.prototype.applyFilter = /**
         * @param {?} filterValue
         * @return {?}
         */
            function (filterValue) {
                this.dataSource.filter = filterValue.trim().toLowerCase();
                if (this.dataSource.paginator) {
                    this.dataSource.paginator.firstPage();
                }
            };
        ContactListComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ht-contact-list',
                        template: "<div class=\"contact-list\">\n  <ht-data-table [loading]='loading' [columns]=\"columns\" [dataSource]=\"dataSource\" [displayedColumns]='displayedColumns'></ht-data-table>\n  <button class=\"new-btn\" mat-raised-button color=\"warn\">Delete Contacts\n    <mat-icon>delete</mat-icon>\n  </button>\n  <button class=\"new-btn\" mat-raised-button color=\"accent\" [routerLink]=\"['/new-contact']\">Edit Contact\n    <mat-icon>edit</mat-icon>\n  </button>\n  <button class=\"new-btn\" mat-raised-button color=\"primary\" [routerLink]=\"['/new-contact']\">New Contact\n    <mat-icon>create_new_folder</mat-icon>\n  </button>\n</div>",
                        styles: ["table{width:100%}.mat-form-field{font-size:14px;width:100%}td,th{width:25%}.new-btn{margin-top:15px;margin-left:15px;float:right}"],
                        providers: [ContactListService]
                    },] },
        ];
        /** @nocollapse */
        ContactListComponent.ctorParameters = function () {
            return [
                { type: ContactListService }
            ];
        };
        return ContactListComponent;
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
    var ContactListModule = (function () {
        function ContactListModule() {
        }
        ContactListModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            platformBrowser.BrowserModule,
                            forms.FormsModule,
                            router.RouterModule,
                            MaterialModule,
                            dist.CommonComponentsModule
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

    exports.ContactListService = ContactListService;
    exports.ContactListComponent = ContactListComponent;
    exports.ContactListModule = ContactListModule;
    exports.ɵa = MaterialModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC1saXN0LnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vY29udGFjdC1saXN0L2xpYi9zZXJ2aWNlL2NvbnRhY3QtbGlzdC5zZXJ2aWNlLnRzIiwibmc6Ly9jb250YWN0LWxpc3QvbGliL2NvbnRhY3QtbGlzdC1jb21wb25lbnQvY29udGFjdC1saXN0LmNvbXBvbmVudC50cyIsIm5nOi8vY29udGFjdC1saXN0L2xpYi9tYXRlcmlhbC5tb2R1bGUudHMiLCJuZzovL2NvbnRhY3QtbGlzdC9saWIvY29udGFjdC1saXN0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZSwgc2VsZWN0IH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgQ3JlYXRlRGF0YVNvdXJjZSBmcm9tICdjb250YWN0c2RhdGFzb3VyY2UnO1xuY29uc3QgTE9DQUxfU1RPUkFHRSA9ICdsb2NhbFN0b3JhZ2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSkgZXhwb3J0IGNsYXNzIENvbnRhY3RMaXN0U2VydmljZSB7XG4gIGNvbnRhY3RzOiBhbnk7XG4gIHN0b3JlOiBhbnk7XG4gIGRhdGFTb3VyY2U6IGFueTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByeFN0b3JlOiBTdG9yZTxhbnk+KSB7XG4gICAgdGhpcy5kYXRhU291cmNlID0gQ3JlYXRlRGF0YVNvdXJjZSgnY29udGFjdHMnLCBMT0NBTF9TVE9SQUdFKTtcbiAgICB0aGlzLnN0b3JlID0gdGhpcy5kYXRhU291cmNlLmNyZWF0ZVN0b3JlKCk7XG4gIH1cblxuICBhZGQoZGF0YSkge1xuICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2UuYWRkQ29udGFjdChkYXRhKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7ICBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBDb250YWN0TGlzdFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2NvbnRhY3QtbGlzdC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnRhY3QgfSBmcm9tICcuLi9tb2RlbC9jb250YWN0Lm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaHQtY29udGFjdC1saXN0JyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiY29udGFjdC1saXN0XCI+XG4gIDxodC1kYXRhLXRhYmxlIFtsb2FkaW5nXT0nbG9hZGluZycgW2NvbHVtbnNdPVwiY29sdW1uc1wiIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBbZGlzcGxheWVkQ29sdW1uc109J2Rpc3BsYXllZENvbHVtbnMnPjwvaHQtZGF0YS10YWJsZT5cbiAgPGJ1dHRvbiBjbGFzcz1cIm5ldy1idG5cIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cIndhcm5cIj5EZWxldGUgQ29udGFjdHNcbiAgICA8bWF0LWljb24+ZGVsZXRlPC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG4gIDxidXR0b24gY2xhc3M9XCJuZXctYnRuXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJhY2NlbnRcIiBbcm91dGVyTGlua109XCJbJy9uZXctY29udGFjdCddXCI+RWRpdCBDb250YWN0XG4gICAgPG1hdC1pY29uPmVkaXQ8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvbiBjbGFzcz1cIm5ldy1idG5cIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBbcm91dGVyTGlua109XCJbJy9uZXctY29udGFjdCddXCI+TmV3IENvbnRhY3RcbiAgICA8bWF0LWljb24+Y3JlYXRlX25ld19mb2xkZXI8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2B0YWJsZXt3aWR0aDoxMDAlfS5tYXQtZm9ybS1maWVsZHtmb250LXNpemU6MTRweDt3aWR0aDoxMDAlfXRkLHRoe3dpZHRoOjI1JX0ubmV3LWJ0bnttYXJnaW4tdG9wOjE1cHg7bWFyZ2luLWxlZnQ6MTVweDtmbG9hdDpyaWdodH1gXSxcbiAgcHJvdmlkZXJzOiBbQ29udGFjdExpc3RTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBDb250YWN0TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ3NlbGVjdCcsICdpZCcsICduYW1lJywgJ2FnZScsICdlbWFpbCcsICdjaXR5J107XG4gIGxvYWRpbmcgPSB0cnVlO1xuXG4gIGNvbHVtbnMgPSBbXG4gICAgeyBpZDogJ2lkJywgbGFiZWw6ICdJRCcgfSxcbiAgICB7IGlkOiAnbmFtZScsIGxhYmVsOiAnTmFtZScgfSxcbiAgICB7IGlkOiAnYWdlJywgbGFiZWw6ICdBZ2UnIH0sXG4gICAgeyBpZDogJ2dlbmRlcicsIGxhYmVsOiAnR2VuZGVyJyB9LFxuICAgIHsgaWQ6ICdhZGRyZXNzJywgbGFiZWw6ICdBZGRyZXNzJyB9LFxuICAgIHsgaWQ6ICdjaXR5JywgbGFiZWw6ICdDaXR5JyB9LFxuICAgIHsgaWQ6ICdjb3VudHJ5JywgbGFiZWw6ICdDb3VudHJ5JyB9LFxuICAgIHsgaWQ6ICdlbWFpbCcsIGxhYmVsOiAnRW1haWwnIH1cbiAgXTtcblxuICBkYXRhU291cmNlOiBNYXRUYWJsZURhdGFTb3VyY2U8Q29udGFjdD47XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRhY3RzU2VydmljZTogQ29udGFjdExpc3RTZXJ2aWNlKSB7XG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShbXSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBUT0RPOiBzaG93IGFuZCBoaWRlIGxvYWRlciBvbiBjb250YWN0cyBsb2FkaW5nXG4gICAgdGhpcy5jb250YWN0c1NlcnZpY2Uuc3RvcmUudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UocmVzdWx0LmNvbnRhY3RzIHx8IFtdKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGx5RmlsdGVyKGZpbHRlclZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyID0gZmlsdGVyVmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAodGhpcy5kYXRhU291cmNlLnBhZ2luYXRvcikge1xuICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvci5maXJzdFBhZ2UoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENka1RhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IENka1RyZWVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XG5cbmltcG9ydCB7XG4gIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgTWF0QmFkZ2VNb2R1bGUsXG4gIE1hdEJvdHRvbVNoZWV0TW9kdWxlLFxuICBNYXRCdXR0b25Nb2R1bGUsXG4gIE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSxcbiAgTWF0Q2FyZE1vZHVsZSxcbiAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gIE1hdENoaXBzTW9kdWxlLFxuICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICBNYXREaWFsb2dNb2R1bGUsXG4gIE1hdERpdmlkZXJNb2R1bGUsXG4gIE1hdEV4cGFuc2lvbk1vZHVsZSxcbiAgTWF0R3JpZExpc3RNb2R1bGUsXG4gIE1hdEljb25Nb2R1bGUsXG4gIE1hdElucHV0TW9kdWxlLFxuICBNYXRMaXN0TW9kdWxlLFxuICBNYXRNZW51TW9kdWxlLFxuICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICBNYXRQYWdpbmF0b3JNb2R1bGUsXG4gIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxuICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gIE1hdFJhZGlvTW9kdWxlLFxuICBNYXRSaXBwbGVNb2R1bGUsXG4gIE1hdFNlbGVjdE1vZHVsZSxcbiAgTWF0U2lkZW5hdk1vZHVsZSxcbiAgTWF0U2xpZGVyTW9kdWxlLFxuICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgTWF0U25hY2tCYXJNb2R1bGUsXG4gIE1hdFNvcnRNb2R1bGUsXG4gIE1hdFN0ZXBwZXJNb2R1bGUsXG4gIE1hdFRhYmxlTW9kdWxlLFxuICBNYXRUYWJzTW9kdWxlLFxuICBNYXRUb29sYmFyTW9kdWxlLFxuICBNYXRUb29sdGlwTW9kdWxlLFxuICBNYXRUcmVlTW9kdWxlLFxuICBNYXRGb3JtRmllbGRNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENka1RhYmxlTW9kdWxlLFxuICAgIENka1RyZWVNb2R1bGUsXG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICAgIE1hdEJhZGdlTW9kdWxlLFxuICAgIE1hdEJvdHRvbVNoZWV0TW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRDaGlwc01vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBNYXREaXZpZGVyTW9kdWxlLFxuICAgIE1hdEV4cGFuc2lvbk1vZHVsZSxcbiAgICBNYXRHcmlkTGlzdE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgTWF0UmlwcGxlTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRTaWRlbmF2TW9kdWxlLFxuICAgIE1hdFNsaWRlck1vZHVsZSxcbiAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBNYXRTb3J0TW9kdWxlLFxuICAgIE1hdFN0ZXBwZXJNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgTWF0VGFic01vZHVsZSxcbiAgICBNYXRUb29sYmFyTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgTWF0VHJlZU1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENka1RhYmxlTW9kdWxlLFxuICAgIENka1RyZWVNb2R1bGUsXG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICAgIE1hdEJhZGdlTW9kdWxlLFxuICAgIE1hdEJvdHRvbVNoZWV0TW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRDaGlwc01vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBNYXREaXZpZGVyTW9kdWxlLFxuICAgIE1hdEV4cGFuc2lvbk1vZHVsZSxcbiAgICBNYXRHcmlkTGlzdE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgTWF0UmlwcGxlTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRTaWRlbmF2TW9kdWxlLFxuICAgIE1hdFNsaWRlck1vZHVsZSxcbiAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBNYXRTb3J0TW9kdWxlLFxuICAgIE1hdFN0ZXBwZXJNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgTWF0VGFic01vZHVsZSxcbiAgICBNYXRUb29sYmFyTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgTWF0VHJlZU1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQ29udGFjdExpc3RDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhY3QtbGlzdC1jb21wb25lbnQvY29udGFjdC1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRlcmlhbE1vZHVsZSB9IGZyb20gJy4vbWF0ZXJpYWwubW9kdWxlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudHNNb2R1bGUgfSBmcm9tICdodC1jb21tb24tY29tcG9uZW50cy9kaXN0JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBNYXRlcmlhbE1vZHVsZSxcbiAgICBDb21tb25Db21wb25lbnRzTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0NvbnRhY3RMaXN0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NvbnRhY3RMaXN0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBDb250YWN0TGlzdE1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiU3RvcmUiLCJNYXRUYWJsZURhdGFTb3VyY2UiLCJDb21wb25lbnQiLCJOZ01vZHVsZSIsIkNka1RhYmxlTW9kdWxlIiwiQ2RrVHJlZU1vZHVsZSIsIk1hdEF1dG9jb21wbGV0ZU1vZHVsZSIsIk1hdEJhZGdlTW9kdWxlIiwiTWF0Qm90dG9tU2hlZXRNb2R1bGUiLCJNYXRCdXR0b25Nb2R1bGUiLCJNYXRCdXR0b25Ub2dnbGVNb2R1bGUiLCJNYXRDYXJkTW9kdWxlIiwiTWF0Q2hlY2tib3hNb2R1bGUiLCJNYXRDaGlwc01vZHVsZSIsIk1hdERhdGVwaWNrZXJNb2R1bGUiLCJNYXREaWFsb2dNb2R1bGUiLCJNYXREaXZpZGVyTW9kdWxlIiwiTWF0RXhwYW5zaW9uTW9kdWxlIiwiTWF0R3JpZExpc3RNb2R1bGUiLCJNYXRJY29uTW9kdWxlIiwiTWF0SW5wdXRNb2R1bGUiLCJNYXRMaXN0TW9kdWxlIiwiTWF0TWVudU1vZHVsZSIsIk1hdE5hdGl2ZURhdGVNb2R1bGUiLCJNYXRQYWdpbmF0b3JNb2R1bGUiLCJNYXRQcm9ncmVzc0Jhck1vZHVsZSIsIk1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSIsIk1hdFJhZGlvTW9kdWxlIiwiTWF0UmlwcGxlTW9kdWxlIiwiTWF0U2VsZWN0TW9kdWxlIiwiTWF0U2lkZW5hdk1vZHVsZSIsIk1hdFNsaWRlck1vZHVsZSIsIk1hdFNsaWRlVG9nZ2xlTW9kdWxlIiwiTWF0U25hY2tCYXJNb2R1bGUiLCJNYXRTb3J0TW9kdWxlIiwiTWF0U3RlcHBlck1vZHVsZSIsIk1hdFRhYmxlTW9kdWxlIiwiTWF0VGFic01vZHVsZSIsIk1hdFRvb2xiYXJNb2R1bGUiLCJNYXRUb29sdGlwTW9kdWxlIiwiTWF0VHJlZU1vZHVsZSIsIk1hdEZvcm1GaWVsZE1vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkJyb3dzZXJNb2R1bGUiLCJGb3Jtc01vZHVsZSIsIlJvdXRlck1vZHVsZSIsIkNvbW1vbkNvbXBvbmVudHNNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0lBSUEsSUFBTSxhQUFhLEdBQUcsY0FBYyxDQUFDOztRQVFuQyw0QkFBb0IsT0FBbUI7WUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtZQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDNUM7Ozs7O1FBRUQsZ0NBQUc7Ozs7WUFBSCxVQUFJLElBQUk7Z0JBQ04sT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN6Qzs7b0JBYkZBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7O3dCQVBRQyxRQUFLOzs7O2lDQURkOzs7Ozs7O0FDQUE7UUF5Q0UsOEJBQW9CLGVBQW1DO1lBQW5DLG9CQUFlLEdBQWYsZUFBZSxDQUFvQjtvQ0FqQjFCLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUM7MkJBQ25FLElBQUk7MkJBRUo7Z0JBQ1IsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7Z0JBQ3pCLEVBQUUsRUFB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