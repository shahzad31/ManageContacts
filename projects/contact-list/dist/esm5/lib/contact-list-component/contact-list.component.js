/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ContactListService } from '../service/contact-list.service';
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
export { ContactListComponent };
if (false) {
    /** @type {?} */
    ContactListComponent.prototype.addAction;
    /** @type {?} */
    ContactListComponent.prototype.editAction;
    /** @type {?} */
    ContactListComponent.prototype.deleteAction;
    /** @type {?} */
    ContactListComponent.prototype.displayedColumns;
    /** @type {?} */
    ContactListComponent.prototype.loading;
    /** @type {?} */
    ContactListComponent.prototype.selected;
    /** @type {?} */
    ContactListComponent.prototype.columns;
    /** @type {?} */
    ContactListComponent.prototype.dataSource;
    /** @type {?} */
    ContactListComponent.prototype.contactsService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2h0LWNvbnRhY3QtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9jb250YWN0LWxpc3QtY29tcG9uZW50L2NvbnRhY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7SUE0Q25FLDhCQUFvQixlQUFtQztRQUFuQyxvQkFBZSxHQUFmLGVBQWUsQ0FBb0I7eUJBdEJkLElBQUksWUFBWSxFQUFFOzBCQUNqQixJQUFJLFlBQVksRUFBRTs0QkFDaEIsSUFBSSxZQUFZLEVBQUU7Z0NBRWpDLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUM7dUJBQ25FLElBQUk7d0JBQ0gsRUFBRTt1QkFFSDtZQUNSLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQ3pCLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO1lBQzdCLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO1lBQzNCLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO1lBQ2pDLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO1lBQ25DLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO1lBQzdCLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO1lBQ25DLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO1NBQ2hDO1FBTUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQzlDOzs7O0lBRUQsdUNBQVE7OztJQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQ3JDLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ2pFLENBQUMsQ0FBQztLQUNKOzs7OztJQUVELGdEQUFpQjs7OztJQUFqQixVQUFrQixPQUFPO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7S0FDekM7Ozs7O0lBRUQsb0NBQUs7Ozs7SUFBTCxVQUFNLEtBQUs7UUFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUM1Qjs7Ozs7SUFFRCxxQ0FBTTs7OztJQUFOLFVBQU8sS0FBSztRQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzdCOzs7OztJQUVELHVDQUFROzs7O0lBQVIsVUFBUyxLQUFLO1FBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDL0I7O2dCQWxFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLDR2QkFXTDtvQkFDTCxNQUFNLEVBQUUsQ0FBQyxtSUFBbUksQ0FBQztvQkFDN0ksU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUM7aUJBQ2hDOzs7O2dCQW5CUSxrQkFBa0I7Ozs0QkFzQnhCLE1BQU07NkJBQ04sTUFBTTsrQkFDTixNQUFNOzsrQkExQlQ7O1NBc0JhLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgQ29udGFjdExpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9jb250YWN0LWxpc3Quc2VydmljZSc7XG5pbXBvcnQgeyBDb250YWN0IH0gZnJvbSAnLi4vbW9kZWwvY29udGFjdC5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2h0LWNvbnRhY3QtbGlzdCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImNvbnRhY3QtbGlzdFwiPlxuICA8aHQtZGF0YS10YWJsZSBbbG9hZGluZ109J2xvYWRpbmcnIFtjb2x1bW5zXT1cImNvbHVtbnNcIiBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgW2Rpc3BsYXllZENvbHVtbnNdPSdkaXNwbGF5ZWRDb2x1bW5zJyAoc2VsZWN0aW9uQ2hhbmdlKT1cIm9uU2VsZWN0aW9uQ2hhbmdlKCRldmVudClcIj48L2h0LWRhdGEtdGFibGU+XG4gIDxidXR0b24gY2xhc3M9XCJuZXctYnRuXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJ3YXJuXCIgKGNsaWNrKT1cIm9uRGVsZXRlKCRldmVudClcIiBbZGlzYWJsZWRdPVwic2VsZWN0ZWQubGVuZ3RoID09PSAwXCI+RGVsZXRlIENvbnRhY3RzXG4gICAgPG1hdC1pY29uPmRlbGV0ZTwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIGNsYXNzPVwibmV3LWJ0blwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwiYWNjZW50XCIgKGNsaWNrKT1cIm9uRWRpdCgkZXZlbnQpXCIgW2Rpc2FibGVkXT1cInNlbGVjdGVkLmxlbmd0aCAhPT0gMVwiPkVkaXQgQ29udGFjdFxuICAgIDxtYXQtaWNvbj5lZGl0PC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG4gIDxidXR0b24gY2xhc3M9XCJuZXctYnRuXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cIm9uQWRkKCRldmVudClcIj5OZXcgQ29udGFjdFxuICAgIDxtYXQtaWNvbj5jcmVhdGVfbmV3X2ZvbGRlcjwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYHRhYmxle3dpZHRoOjEwMCV9Lm1hdC1mb3JtLWZpZWxke2ZvbnQtc2l6ZToxNHB4O3dpZHRoOjEwMCV9dGQsdGh7d2lkdGg6MjUlfS5uZXctYnRue21hcmdpbi10b3A6MTVweDttYXJnaW4tbGVmdDoxNXB4O2Zsb2F0OnJpZ2h0fWBdLFxuICBwcm92aWRlcnM6IFtDb250YWN0TGlzdFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIENvbnRhY3RMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAT3V0cHV0KCkgYWRkQWN0aW9uOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGVkaXRBY3Rpb246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZGVsZXRlQWN0aW9uOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsnc2VsZWN0JywgJ2lkJywgJ25hbWUnLCAnYWdlJywgJ2VtYWlsJywgJ2NpdHknXTtcbiAgbG9hZGluZyA9IHRydWU7XG4gIHNlbGVjdGVkID0gW107XG5cbiAgY29sdW1ucyA9IFtcbiAgICB7IGlkOiAnaWQnLCBsYWJlbDogJ0lEJyB9LFxuICAgIHsgaWQ6ICduYW1lJywgbGFiZWw6ICdOYW1lJyB9LFxuICAgIHsgaWQ6ICdhZ2UnLCBsYWJlbDogJ0FnZScgfSxcbiAgICB7IGlkOiAnZ2VuZGVyJywgbGFiZWw6ICdHZW5kZXInIH0sXG4gICAgeyBpZDogJ2FkZHJlc3MnLCBsYWJlbDogJ0FkZHJlc3MnIH0sXG4gICAgeyBpZDogJ2NpdHknLCBsYWJlbDogJ0NpdHknIH0sXG4gICAgeyBpZDogJ2NvdW50cnknLCBsYWJlbDogJ0NvdW50cnknIH0sXG4gICAgeyBpZDogJ2VtYWlsJywgbGFiZWw6ICdFbWFpbCcgfVxuICBdO1xuXG4gIGRhdGFTb3VyY2U6IE1hdFRhYmxlRGF0YVNvdXJjZTxDb250YWN0PjtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGFjdHNTZXJ2aWNlOiBDb250YWN0TGlzdFNlcnZpY2UpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKFtdKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY29udGFjdHNTZXJ2aWNlLnN0b3JlLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHJlc3VsdC5jb250YWN0cyB8fCBbXSk7XG4gICAgfSk7XG4gIH1cblxuICBvblNlbGVjdGlvbkNoYW5nZShjaGFuZ2VzKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGNoYW5nZXMuc291cmNlLnNlbGVjdGVkO1xuICB9XG5cbiAgb25BZGQoZXZlbnQpIHtcbiAgICB0aGlzLmFkZEFjdGlvbi5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIG9uRWRpdChldmVudCkge1xuICAgIHRoaXMuZWRpdEFjdGlvbi5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIG9uRGVsZXRlKGV2ZW50KSB7XG4gICAgdGhpcy5kZWxldGVBY3Rpb24uZW1pdChldmVudCk7XG4gIH1cbn1cbiJdfQ==