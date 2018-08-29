(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('contactsdatasource'), require('@angular/material'), require('@angular/cdk/table'), require('@angular/cdk/tree'), require('@angular/common'), require('@angular/platform-browser'), require('@angular/forms'), require('@angular/router'), require('ht-common-components/dist')) :
    typeof define === 'function' && define.amd ? define('ht-contact-list', ['exports', '@angular/core', 'contactsdatasource', '@angular/material', '@angular/cdk/table', '@angular/cdk/tree', '@angular/common', '@angular/platform-browser', '@angular/forms', '@angular/router', 'ht-common-components/dist'], factory) :
    (factory((global['ht-contact-list'] = {}),global.ng.core,null,global.ng.material,global.ng.cdk.table,global.ng.cdk.tree,global.ng.common,global.ng.platformBrowser,global.ng.forms,global.ng.router,null));
}(this, (function (exports,i0,CreateDataSource,material,table,tree,common,platformBrowser,forms,router,dist) { 'use strict';

    CreateDataSource = CreateDataSource && CreateDataSource.hasOwnProperty('default') ? CreateDataSource['default'] : CreateDataSource;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LOCAL_STORAGE = 'localStorage';
    var ContactListService = (function () {
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        ContactListService.ctorParameters = function () { return []; };
        /** @nocollapse */ ContactListService.ngInjectableDef = i0.defineInjectable({ factory: function ContactListService_Factory() { return new ContactListService(); }, token: ContactListService, providedIn: "root" });
        return ContactListService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ContactListComponent = (function () {
        function ContactListComponent(contactsService) {
            this.contactsService = contactsService;
            this.addAction = new i0.EventEmitter();
            this.editAction = new i0.EventEmitter();
            this.deleteAction = new i0.EventEmitter();
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
                this.contactsService.store.then(function (result) {
                    _this.loading = false;
                    _this.dataSource = new material.MatTableDataSource(result.contacts || []);
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
            { type: i0.Component, args: [{
                        selector: 'ht-contact-list',
                        template: "<div class=\"contact-list\">\n  <ht-data-table [loading]='loading' [columns]=\"columns\" [dataSource]=\"dataSource\" [displayedColumns]='displayedColumns' (selectionChange)=\"onSelectionChange($event)\"></ht-data-table>\n  <button class=\"new-btn\" mat-raised-button color=\"warn\" (click)=\"onDelete($event)\" [disabled]=\"selected.length === 0\">Delete Contacts\n    <mat-icon>delete</mat-icon>\n  </button>\n  <button class=\"new-btn\" mat-raised-button color=\"accent\" (click)=\"onEdit($event)\" [disabled]=\"selected.length !== 1\">Edit Contact\n    <mat-icon>edit</mat-icon>\n  </button>\n  <button class=\"new-btn\" mat-raised-button color=\"primary\" (click)=\"onAdd($event)\">New Contact\n    <mat-icon>create_new_folder</mat-icon>\n  </button>\n</div>",
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
        ContactListComponent.propDecorators = {
            addAction: [{ type: i0.Output }],
            editAction: [{ type: i0.Output }],
            deleteAction: [{ type: i0.Output }]
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHQtY29udGFjdC1saXN0LnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vaHQtY29udGFjdC1saXN0L2xpYi9zZXJ2aWNlL2NvbnRhY3QtbGlzdC5zZXJ2aWNlLnRzIiwibmc6Ly9odC1jb250YWN0LWxpc3QvbGliL2NvbnRhY3QtbGlzdC1jb21wb25lbnQvY29udGFjdC1saXN0LmNvbXBvbmVudC50cyIsIm5nOi8vaHQtY29udGFjdC1saXN0L2xpYi9tYXRlcmlhbC5tb2R1bGUudHMiLCJuZzovL2h0LWNvbnRhY3QtbGlzdC9saWIvY29udGFjdC1saXN0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCBDcmVhdGVEYXRhU291cmNlIGZyb20gJ2NvbnRhY3RzZGF0YXNvdXJjZSc7XG5jb25zdCBMT0NBTF9TVE9SQUdFID0gJ2xvY2FsU3RvcmFnZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KSBleHBvcnQgY2xhc3MgQ29udGFjdExpc3RTZXJ2aWNlIHtcbiAgc3RvcmU6IGFueTtcbiAgZGF0YVNvdXJjZTogYW55O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBDcmVhdGVEYXRhU291cmNlKCdjb250YWN0cycsIExPQ0FMX1NUT1JBR0UpO1xuICAgIHRoaXMuc3RvcmUgPSB0aGlzLmRhdGFTb3VyY2UuY3JlYXRlU3RvcmUoKTtcbiAgfVxuXG4gIGFkZChkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZS5hZGRDb250YWN0KGRhdGEpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IENvbnRhY3RMaXN0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvY29udGFjdC1saXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29udGFjdCB9IGZyb20gJy4uL21vZGVsL2NvbnRhY3QubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdodC1jb250YWN0LWxpc3QnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJjb250YWN0LWxpc3RcIj5cbiAgPGh0LWRhdGEtdGFibGUgW2xvYWRpbmddPSdsb2FkaW5nJyBbY29sdW1uc109XCJjb2x1bW5zXCIgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIFtkaXNwbGF5ZWRDb2x1bW5zXT0nZGlzcGxheWVkQ29sdW1ucycgKHNlbGVjdGlvbkNoYW5nZSk9XCJvblNlbGVjdGlvbkNoYW5nZSgkZXZlbnQpXCI+PC9odC1kYXRhLXRhYmxlPlxuICA8YnV0dG9uIGNsYXNzPVwibmV3LWJ0blwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwid2FyblwiIChjbGljayk9XCJvbkRlbGV0ZSgkZXZlbnQpXCIgW2Rpc2FibGVkXT1cInNlbGVjdGVkLmxlbmd0aCA9PT0gMFwiPkRlbGV0ZSBDb250YWN0c1xuICAgIDxtYXQtaWNvbj5kZWxldGU8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvbiBjbGFzcz1cIm5ldy1idG5cIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cImFjY2VudFwiIChjbGljayk9XCJvbkVkaXQoJGV2ZW50KVwiIFtkaXNhYmxlZF09XCJzZWxlY3RlZC5sZW5ndGggIT09IDFcIj5FZGl0IENvbnRhY3RcbiAgICA8bWF0LWljb24+ZWRpdDwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIGNsYXNzPVwibmV3LWJ0blwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJvbkFkZCgkZXZlbnQpXCI+TmV3IENvbnRhY3RcbiAgICA8bWF0LWljb24+Y3JlYXRlX25ld19mb2xkZXI8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2B0YWJsZXt3aWR0aDoxMDAlfS5tYXQtZm9ybS1maWVsZHtmb250LXNpemU6MTRweDt3aWR0aDoxMDAlfXRkLHRoe3dpZHRoOjI1JX0ubmV3LWJ0bnttYXJnaW4tdG9wOjE1cHg7bWFyZ2luLWxlZnQ6MTVweDtmbG9hdDpyaWdodH1gXSxcbiAgcHJvdmlkZXJzOiBbQ29udGFjdExpc3RTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBDb250YWN0TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQE91dHB1dCgpIGFkZEFjdGlvbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBlZGl0QWN0aW9uOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGRlbGV0ZUFjdGlvbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ3NlbGVjdCcsICdpZCcsICduYW1lJywgJ2FnZScsICdlbWFpbCcsICdjaXR5J107XG4gIGxvYWRpbmcgPSB0cnVlO1xuICBzZWxlY3RlZCA9IFtdO1xuXG4gIGNvbHVtbnMgPSBbXG4gICAgeyBpZDogJ2lkJywgbGFiZWw6ICdJRCcgfSxcbiAgICB7IGlkOiAnbmFtZScsIGxhYmVsOiAnTmFtZScgfSxcbiAgICB7IGlkOiAnYWdlJywgbGFiZWw6ICdBZ2UnIH0sXG4gICAgeyBpZDogJ2dlbmRlcicsIGxhYmVsOiAnR2VuZGVyJyB9LFxuICAgIHsgaWQ6ICdhZGRyZXNzJywgbGFiZWw6ICdBZGRyZXNzJyB9LFxuICAgIHsgaWQ6ICdjaXR5JywgbGFiZWw6ICdDaXR5JyB9LFxuICAgIHsgaWQ6ICdjb3VudHJ5JywgbGFiZWw6ICdDb3VudHJ5JyB9LFxuICAgIHsgaWQ6ICdlbWFpbCcsIGxhYmVsOiAnRW1haWwnIH1cbiAgXTtcblxuICBkYXRhU291cmNlOiBNYXRUYWJsZURhdGFTb3VyY2U8Q29udGFjdD47XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRhY3RzU2VydmljZTogQ29udGFjdExpc3RTZXJ2aWNlKSB7XG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShbXSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNvbnRhY3RzU2VydmljZS5zdG9yZS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShyZXN1bHQuY29udGFjdHMgfHwgW10pO1xuICAgIH0pO1xuICB9XG5cbiAgb25TZWxlY3Rpb25DaGFuZ2UoY2hhbmdlcykge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBjaGFuZ2VzLnNvdXJjZS5zZWxlY3RlZDtcbiAgfVxuXG4gIG9uQWRkKGV2ZW50KSB7XG4gICAgdGhpcy5hZGRBY3Rpb24uZW1pdChldmVudCk7XG4gIH1cblxuICBvbkVkaXQoZXZlbnQpIHtcbiAgICB0aGlzLmVkaXRBY3Rpb24uZW1pdChldmVudCk7XG4gIH1cblxuICBvbkRlbGV0ZShldmVudCkge1xuICAgIHRoaXMuZGVsZXRlQWN0aW9uLmVtaXQoZXZlbnQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZGtUYWJsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBDZGtUcmVlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xuXG5pbXBvcnQge1xuICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXG4gIE1hdEJhZGdlTW9kdWxlLFxuICBNYXRCb3R0b21TaGVldE1vZHVsZSxcbiAgTWF0QnV0dG9uTW9kdWxlLFxuICBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsXG4gIE1hdENhcmRNb2R1bGUsXG4gIE1hdENoZWNrYm94TW9kdWxlLFxuICBNYXRDaGlwc01vZHVsZSxcbiAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgTWF0RGlhbG9nTW9kdWxlLFxuICBNYXREaXZpZGVyTW9kdWxlLFxuICBNYXRFeHBhbnNpb25Nb2R1bGUsXG4gIE1hdEdyaWRMaXN0TW9kdWxlLFxuICBNYXRJY29uTW9kdWxlLFxuICBNYXRJbnB1dE1vZHVsZSxcbiAgTWF0TGlzdE1vZHVsZSxcbiAgTWF0TWVudU1vZHVsZSxcbiAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxuICBNYXRSYWRpb01vZHVsZSxcbiAgTWF0UmlwcGxlTW9kdWxlLFxuICBNYXRTZWxlY3RNb2R1bGUsXG4gIE1hdFNpZGVuYXZNb2R1bGUsXG4gIE1hdFNsaWRlck1vZHVsZSxcbiAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gIE1hdFNuYWNrQmFyTW9kdWxlLFxuICBNYXRTb3J0TW9kdWxlLFxuICBNYXRTdGVwcGVyTW9kdWxlLFxuICBNYXRUYWJsZU1vZHVsZSxcbiAgTWF0VGFic01vZHVsZSxcbiAgTWF0VG9vbGJhck1vZHVsZSxcbiAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgTWF0VHJlZU1vZHVsZSxcbiAgTWF0Rm9ybUZpZWxkTW9kdWxlXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDZGtUYWJsZU1vZHVsZSxcbiAgICBDZGtUcmVlTW9kdWxlLFxuICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICBNYXRCYWRnZU1vZHVsZSxcbiAgICBNYXRCb3R0b21TaGVldE1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0Q2hpcHNNb2R1bGUsXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgTWF0RGl2aWRlck1vZHVsZSxcbiAgICBNYXRFeHBhbnNpb25Nb2R1bGUsXG4gICAgTWF0R3JpZExpc3RNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRMaXN0TW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgICBNYXRQYWdpbmF0b3JNb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIE1hdFJpcHBsZU1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0U2lkZW5hdk1vZHVsZSxcbiAgICBNYXRTbGlkZXJNb2R1bGUsXG4gICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gICAgTWF0U25hY2tCYXJNb2R1bGUsXG4gICAgTWF0U29ydE1vZHVsZSxcbiAgICBNYXRTdGVwcGVyTW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgIE1hdFRhYnNNb2R1bGUsXG4gICAgTWF0VG9vbGJhck1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIE1hdFRyZWVNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDZGtUYWJsZU1vZHVsZSxcbiAgICBDZGtUcmVlTW9kdWxlLFxuICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICBNYXRCYWRnZU1vZHVsZSxcbiAgICBNYXRCb3R0b21TaGVldE1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0Q2hpcHNNb2R1bGUsXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgTWF0RGl2aWRlck1vZHVsZSxcbiAgICBNYXRFeHBhbnNpb25Nb2R1bGUsXG4gICAgTWF0R3JpZExpc3RNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRMaXN0TW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgICBNYXRQYWdpbmF0b3JNb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIE1hdFJpcHBsZU1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0U2lkZW5hdk1vZHVsZSxcbiAgICBNYXRTbGlkZXJNb2R1bGUsXG4gICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gICAgTWF0U25hY2tCYXJNb2R1bGUsXG4gICAgTWF0U29ydE1vZHVsZSxcbiAgICBNYXRTdGVwcGVyTW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgIE1hdFRhYnNNb2R1bGUsXG4gICAgTWF0VG9vbGJhck1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIE1hdFRyZWVNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNYXRlcmlhbE1vZHVsZSB9IGZyb20gJy4vbWF0ZXJpYWwubW9kdWxlJztcblxuXG5pbXBvcnQgeyBDb250YWN0TGlzdENvbXBvbmVudCB9IGZyb20gJy4vY29udGFjdC1saXN0LWNvbXBvbmVudC9jb250YWN0LWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudHNNb2R1bGUgfSBmcm9tICdodC1jb21tb24tY29tcG9uZW50cy9kaXN0JztcblxuLy8gaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50c01vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi1jb21wb25lbnRzL3NyYy9wdWJsaWNfYXBpJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBNYXRlcmlhbE1vZHVsZSxcbiAgICBDb21tb25Db21wb25lbnRzTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0NvbnRhY3RMaXN0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NvbnRhY3RMaXN0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBDb250YWN0TGlzdE1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiRXZlbnRFbWl0dGVyIiwiTWF0VGFibGVEYXRhU291cmNlIiwiQ29tcG9uZW50IiwiT3V0cHV0IiwiTmdNb2R1bGUiLCJDZGtUYWJsZU1vZHVsZSIsIkNka1RyZWVNb2R1bGUiLCJNYXRBdXRvY29tcGxldGVNb2R1bGUiLCJNYXRCYWRnZU1vZHVsZSIsIk1hdEJvdHRvbVNoZWV0TW9kdWxlIiwiTWF0QnV0dG9uTW9kdWxlIiwiTWF0QnV0dG9uVG9nZ2xlTW9kdWxlIiwiTWF0Q2FyZE1vZHVsZSIsIk1hdENoZWNrYm94TW9kdWxlIiwiTWF0Q2hpcHNNb2R1bGUiLCJNYXREYXRlcGlja2VyTW9kdWxlIiwiTWF0RGlhbG9nTW9kdWxlIiwiTWF0RGl2aWRlck1vZHVsZSIsIk1hdEV4cGFuc2lvbk1vZHVsZSIsIk1hdEdyaWRMaXN0TW9kdWxlIiwiTWF0SWNvbk1vZHVsZSIsIk1hdElucHV0TW9kdWxlIiwiTWF0TGlzdE1vZHVsZSIsIk1hdE1lbnVNb2R1bGUiLCJNYXROYXRpdmVEYXRlTW9kdWxlIiwiTWF0UGFnaW5hdG9yTW9kdWxlIiwiTWF0UHJvZ3Jlc3NCYXJNb2R1bGUiLCJNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUiLCJNYXRSYWRpb01vZHVsZSIsIk1hdFJpcHBsZU1vZHVsZSIsIk1hdFNlbGVjdE1vZHVsZSIsIk1hdFNpZGVuYXZNb2R1bGUiLCJNYXRTbGlkZXJNb2R1bGUiLCJNYXRTbGlkZVRvZ2dsZU1vZHVsZSIsIk1hdFNuYWNrQmFyTW9kdWxlIiwiTWF0U29ydE1vZHVsZSIsIk1hdFN0ZXBwZXJNb2R1bGUiLCJNYXRUYWJsZU1vZHVsZSIsIk1hdFRhYnNNb2R1bGUiLCJNYXRUb29sYmFyTW9kdWxlIiwiTWF0VG9vbHRpcE1vZHVsZSIsIk1hdFRyZWVNb2R1bGUiLCJNYXRGb3JtRmllbGRNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJCcm93c2VyTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJSb3V0ZXJNb2R1bGUiLCJDb21tb25Db21wb25lbnRzTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtJQUdBLElBQU0sYUFBYSxHQUFHLGNBQWMsQ0FBQzs7UUFPbkM7WUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDNUM7Ozs7O1FB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