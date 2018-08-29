/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ContactListService } from '../service/contact-list.service';
export class ContactListComponent {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2h0LWNvbnRhY3QtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9jb250YWN0LWxpc3QtY29tcG9uZW50L2NvbnRhY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQW9CckUsTUFBTTs7OztJQXdCSixZQUFvQixlQUFtQztRQUFuQyxvQkFBZSxHQUFmLGVBQWUsQ0FBb0I7eUJBdEJkLElBQUksWUFBWSxFQUFFOzBCQUNqQixJQUFJLFlBQVksRUFBRTs0QkFDaEIsSUFBSSxZQUFZLEVBQUU7Z0NBRWpDLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUM7dUJBQ25FLElBQUk7d0JBQ0gsRUFBRTt1QkFFSDtZQUNSLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQ3pCLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO1lBQzdCLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO1lBQzNCLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO1lBQ2pDLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO1lBQ25DLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO1lBQzdCLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO1lBQ25DLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO1NBQ2hDO1FBTUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQzlDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ2pFLENBQUMsQ0FBQztLQUNKOzs7OztJQUVELGlCQUFpQixDQUFDLE9BQU87UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztLQUN6Qzs7Ozs7SUFFRCxLQUFLLENBQUMsS0FBSztRQUNULElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzVCOzs7OztJQUVELE1BQU0sQ0FBQyxLQUFLO1FBQ1YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDN0I7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQUs7UUFDWixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMvQjs7O1lBbEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7O09BV0w7Z0JBQ0wsTUFBTSxFQUFFLENBQUMsbUlBQW1JLENBQUM7Z0JBQzdJLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixDQUFDO2FBQ2hDOzs7O1lBbkJRLGtCQUFrQjs7O3dCQXNCeEIsTUFBTTt5QkFDTixNQUFNOzJCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IENvbnRhY3RMaXN0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvY29udGFjdC1saXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29udGFjdCB9IGZyb20gJy4uL21vZGVsL2NvbnRhY3QubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdodC1jb250YWN0LWxpc3QnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJjb250YWN0LWxpc3RcIj5cbiAgPGh0LWRhdGEtdGFibGUgW2xvYWRpbmddPSdsb2FkaW5nJyBbY29sdW1uc109XCJjb2x1bW5zXCIgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIFtkaXNwbGF5ZWRDb2x1bW5zXT0nZGlzcGxheWVkQ29sdW1ucycgKHNlbGVjdGlvbkNoYW5nZSk9XCJvblNlbGVjdGlvbkNoYW5nZSgkZXZlbnQpXCI+PC9odC1kYXRhLXRhYmxlPlxuICA8YnV0dG9uIGNsYXNzPVwibmV3LWJ0blwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwid2FyblwiIChjbGljayk9XCJvbkRlbGV0ZSgkZXZlbnQpXCIgW2Rpc2FibGVkXT1cInNlbGVjdGVkLmxlbmd0aCA9PT0gMFwiPkRlbGV0ZSBDb250YWN0c1xuICAgIDxtYXQtaWNvbj5kZWxldGU8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvbiBjbGFzcz1cIm5ldy1idG5cIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cImFjY2VudFwiIChjbGljayk9XCJvbkVkaXQoJGV2ZW50KVwiIFtkaXNhYmxlZF09XCJzZWxlY3RlZC5sZW5ndGggIT09IDFcIj5FZGl0IENvbnRhY3RcbiAgICA8bWF0LWljb24+ZWRpdDwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIGNsYXNzPVwibmV3LWJ0blwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJvbkFkZCgkZXZlbnQpXCI+TmV3IENvbnRhY3RcbiAgICA8bWF0LWljb24+Y3JlYXRlX25ld19mb2xkZXI8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2B0YWJsZXt3aWR0aDoxMDAlfS5tYXQtZm9ybS1maWVsZHtmb250LXNpemU6MTRweDt3aWR0aDoxMDAlfXRkLHRoe3dpZHRoOjI1JX0ubmV3LWJ0bnttYXJnaW4tdG9wOjE1cHg7bWFyZ2luLWxlZnQ6MTVweDtmbG9hdDpyaWdodH1gXSxcbiAgcHJvdmlkZXJzOiBbQ29udGFjdExpc3RTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBDb250YWN0TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQE91dHB1dCgpIGFkZEFjdGlvbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBlZGl0QWN0aW9uOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGRlbGV0ZUFjdGlvbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ3NlbGVjdCcsICdpZCcsICduYW1lJywgJ2FnZScsICdlbWFpbCcsICdjaXR5J107XG4gIGxvYWRpbmcgPSB0cnVlO1xuICBzZWxlY3RlZCA9IFtdO1xuXG4gIGNvbHVtbnMgPSBbXG4gICAgeyBpZDogJ2lkJywgbGFiZWw6ICdJRCcgfSxcbiAgICB7IGlkOiAnbmFtZScsIGxhYmVsOiAnTmFtZScgfSxcbiAgICB7IGlkOiAnYWdlJywgbGFiZWw6ICdBZ2UnIH0sXG4gICAgeyBpZDogJ2dlbmRlcicsIGxhYmVsOiAnR2VuZGVyJyB9LFxuICAgIHsgaWQ6ICdhZGRyZXNzJywgbGFiZWw6ICdBZGRyZXNzJyB9LFxuICAgIHsgaWQ6ICdjaXR5JywgbGFiZWw6ICdDaXR5JyB9LFxuICAgIHsgaWQ6ICdjb3VudHJ5JywgbGFiZWw6ICdDb3VudHJ5JyB9LFxuICAgIHsgaWQ6ICdlbWFpbCcsIGxhYmVsOiAnRW1haWwnIH1cbiAgXTtcblxuICBkYXRhU291cmNlOiBNYXRUYWJsZURhdGFTb3VyY2U8Q29udGFjdD47XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRhY3RzU2VydmljZTogQ29udGFjdExpc3RTZXJ2aWNlKSB7XG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShbXSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNvbnRhY3RzU2VydmljZS5zdG9yZS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShyZXN1bHQuY29udGFjdHMgfHwgW10pO1xuICAgIH0pO1xuICB9XG5cbiAgb25TZWxlY3Rpb25DaGFuZ2UoY2hhbmdlcykge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBjaGFuZ2VzLnNvdXJjZS5zZWxlY3RlZDtcbiAgfVxuXG4gIG9uQWRkKGV2ZW50KSB7XG4gICAgdGhpcy5hZGRBY3Rpb24uZW1pdChldmVudCk7XG4gIH1cblxuICBvbkVkaXQoZXZlbnQpIHtcbiAgICB0aGlzLmVkaXRBY3Rpb24uZW1pdChldmVudCk7XG4gIH1cblxuICBvbkRlbGV0ZShldmVudCkge1xuICAgIHRoaXMuZGVsZXRlQWN0aW9uLmVtaXQoZXZlbnQpO1xuICB9XG59XG4iXX0=