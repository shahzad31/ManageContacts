/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ContactListService } from '../service/contact-list.service';
var ContactListComponent = /** @class */ (function () {
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
        // TODO: show and hide loader on contacts loading
        this.contactsService.store.then(function (result) {
            _this.loading = false;
            _this.dataSource = new MatTableDataSource(result.contacts || []);
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
        { type: Component, args: [{
                    selector: 'ht-contact-list',
                    template: "<div class=\"contact-list\">\n  <ht-data-table [loading]='loading' [columns]=\"columns\" [dataSource]=\"dataSource\" [displayedColumns]='displayedColumns'></ht-data-table>\n  <button class=\"new-btn\" mat-raised-button color=\"warn\">Delete Contacts\n    <mat-icon>delete</mat-icon>\n  </button>\n  <button class=\"new-btn\" mat-raised-button color=\"accent\" [routerLink]=\"['/new-contact']\">Edit Contact\n    <mat-icon>edit</mat-icon>\n  </button>\n  <button class=\"new-btn\" mat-raised-button color=\"primary\" [routerLink]=\"['/new-contact']\">New Contact\n    <mat-icon>create_new_folder</mat-icon>\n  </button>\n</div>",
                    styles: ["table{width:100%}.mat-form-field{font-size:14px;width:100%}td,th{width:25%}.new-btn{margin-top:15px;margin-left:15px;float:right}"],
                    providers: [ContactListService]
                },] },
    ];
    /** @nocollapse */
    ContactListComponent.ctorParameters = function () { return [
        { type: ContactListService }
    ]; };
    return ContactListComponent;
}());
export { ContactListComponent };
if (false) {
    /** @type {?} */
    ContactListComponent.prototype.displayedColumns;
    /** @type {?} */
    ContactListComponent.prototype.loading;
    /** @type {?} */
    ContactListComponent.prototype.columns;
    /** @type {?} */
    ContactListComponent.prototype.dataSource;
    /** @type {?} */
    ContactListComponent.prototype.contactsService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbnRhY3QtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9jb250YWN0LWxpc3QtY29tcG9uZW50L2NvbnRhY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFHLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7O0lBdUNuRSw4QkFBb0IsZUFBbUM7UUFBbkMsb0JBQWUsR0FBZixlQUFlLENBQW9CO2dDQWpCMUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQzt1QkFDbkUsSUFBSTt1QkFFSjtZQUNSLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQ3pCLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO1lBQzdCLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO1lBQzNCLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO1lBQ2pDLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO1lBQ25DLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO1lBQzdCLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO1lBQ25DLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO1NBQ2hDO1FBTUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQzlDOzs7O0lBRUQsdUNBQVE7OztJQUFSO1FBQUEsaUJBTUM7O1FBSkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUNyQyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksa0JBQWtCLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUNqRSxDQUFDLENBQUM7S0FDSjs7Ozs7SUFFRCwwQ0FBVzs7OztJQUFYLFVBQVksV0FBbUI7UUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRTFELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUN2QztLQUNGOztnQkF0REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxvbkJBV0w7b0JBQ0wsTUFBTSxFQUFFLENBQUMsbUlBQW1JLENBQUM7b0JBQzdJLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixDQUFDO2lCQUNoQzs7OztnQkFuQlEsa0JBQWtCOzsrQkFGM0I7O1NBc0JhLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyAgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgQ29udGFjdExpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9jb250YWN0LWxpc3Quc2VydmljZSc7XG5pbXBvcnQgeyBDb250YWN0IH0gZnJvbSAnLi4vbW9kZWwvY29udGFjdC5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2h0LWNvbnRhY3QtbGlzdCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImNvbnRhY3QtbGlzdFwiPlxuICA8aHQtZGF0YS10YWJsZSBbbG9hZGluZ109J2xvYWRpbmcnIFtjb2x1bW5zXT1cImNvbHVtbnNcIiBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgW2Rpc3BsYXllZENvbHVtbnNdPSdkaXNwbGF5ZWRDb2x1bW5zJz48L2h0LWRhdGEtdGFibGU+XG4gIDxidXR0b24gY2xhc3M9XCJuZXctYnRuXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJ3YXJuXCI+RGVsZXRlIENvbnRhY3RzXG4gICAgPG1hdC1pY29uPmRlbGV0ZTwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIGNsYXNzPVwibmV3LWJ0blwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwiYWNjZW50XCIgW3JvdXRlckxpbmtdPVwiWycvbmV3LWNvbnRhY3QnXVwiPkVkaXQgQ29udGFjdFxuICAgIDxtYXQtaWNvbj5lZGl0PC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG4gIDxidXR0b24gY2xhc3M9XCJuZXctYnRuXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgW3JvdXRlckxpbmtdPVwiWycvbmV3LWNvbnRhY3QnXVwiPk5ldyBDb250YWN0XG4gICAgPG1hdC1pY29uPmNyZWF0ZV9uZXdfZm9sZGVyPC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgdGFibGV7d2lkdGg6MTAwJX0ubWF0LWZvcm0tZmllbGR7Zm9udC1zaXplOjE0cHg7d2lkdGg6MTAwJX10ZCx0aHt3aWR0aDoyNSV9Lm5ldy1idG57bWFyZ2luLXRvcDoxNXB4O21hcmdpbi1sZWZ0OjE1cHg7ZmxvYXQ6cmlnaHR9YF0sXG4gIHByb3ZpZGVyczogW0NvbnRhY3RMaXN0U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgQ29udGFjdExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gWydzZWxlY3QnLCAnaWQnLCAnbmFtZScsICdhZ2UnLCAnZW1haWwnLCAnY2l0eSddO1xuICBsb2FkaW5nID0gdHJ1ZTtcblxuICBjb2x1bW5zID0gW1xuICAgIHsgaWQ6ICdpZCcsIGxhYmVsOiAnSUQnIH0sXG4gICAgeyBpZDogJ25hbWUnLCBsYWJlbDogJ05hbWUnIH0sXG4gICAgeyBpZDogJ2FnZScsIGxhYmVsOiAnQWdlJyB9LFxuICAgIHsgaWQ6ICdnZW5kZXInLCBsYWJlbDogJ0dlbmRlcicgfSxcbiAgICB7IGlkOiAnYWRkcmVzcycsIGxhYmVsOiAnQWRkcmVzcycgfSxcbiAgICB7IGlkOiAnY2l0eScsIGxhYmVsOiAnQ2l0eScgfSxcbiAgICB7IGlkOiAnY291bnRyeScsIGxhYmVsOiAnQ291bnRyeScgfSxcbiAgICB7IGlkOiAnZW1haWwnLCBsYWJlbDogJ0VtYWlsJyB9XG4gIF07XG5cbiAgZGF0YVNvdXJjZTogTWF0VGFibGVEYXRhU291cmNlPENvbnRhY3Q+O1xuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250YWN0c1NlcnZpY2U6IENvbnRhY3RMaXN0U2VydmljZSkge1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UoW10pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gVE9ETzogc2hvdyBhbmQgaGlkZSBsb2FkZXIgb24gY29udGFjdHMgbG9hZGluZ1xuICAgIHRoaXMuY29udGFjdHNTZXJ2aWNlLnN0b3JlLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHJlc3VsdC5jb250YWN0cyB8fCBbXSk7XG4gICAgfSk7XG4gIH1cblxuICBhcHBseUZpbHRlcihmaWx0ZXJWYWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5kYXRhU291cmNlLmZpbHRlciA9IGZpbHRlclZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IpIHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IuZmlyc3RQYWdlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=