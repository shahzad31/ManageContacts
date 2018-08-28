/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ContactListService } from '../service/contact-list.service';
export class ContactListComponent {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbnRhY3QtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9jb250YWN0LWxpc3QtY29tcG9uZW50L2NvbnRhY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFHLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFvQnJFLE1BQU07Ozs7SUFtQkosWUFBb0IsZUFBbUM7UUFBbkMsb0JBQWUsR0FBZixlQUFlLENBQW9CO2dDQWpCMUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQzt1QkFDbkUsSUFBSTt1QkFFSjtZQUNSLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQ3pCLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO1lBQzdCLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO1lBQzNCLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO1lBQ2pDLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO1lBQ25DLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO1lBQzdCLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO1lBQ25DLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO1NBQ2hDO1FBTUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQzlDOzs7O0lBRUQsUUFBUTs7UUFFTixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUN6QyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksa0JBQWtCLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUNqRSxDQUFDLENBQUM7S0FDSjs7Ozs7SUFFRCxXQUFXLENBQUMsV0FBbUI7UUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRTFELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUN2QztLQUNGOzs7WUF0REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7T0FXTDtnQkFDTCxNQUFNLEVBQUUsQ0FBQyxtSUFBbUksQ0FBQztnQkFDN0ksU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUM7YUFDaEM7Ozs7WUFuQlEsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7ICBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBDb250YWN0TGlzdFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2NvbnRhY3QtbGlzdC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnRhY3QgfSBmcm9tICcuLi9tb2RlbC9jb250YWN0Lm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaHQtY29udGFjdC1saXN0JyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiY29udGFjdC1saXN0XCI+XG4gIDxodC1kYXRhLXRhYmxlIFtsb2FkaW5nXT0nbG9hZGluZycgW2NvbHVtbnNdPVwiY29sdW1uc1wiIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBbZGlzcGxheWVkQ29sdW1uc109J2Rpc3BsYXllZENvbHVtbnMnPjwvaHQtZGF0YS10YWJsZT5cbiAgPGJ1dHRvbiBjbGFzcz1cIm5ldy1idG5cIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cIndhcm5cIj5EZWxldGUgQ29udGFjdHNcbiAgICA8bWF0LWljb24+ZGVsZXRlPC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG4gIDxidXR0b24gY2xhc3M9XCJuZXctYnRuXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJhY2NlbnRcIiBbcm91dGVyTGlua109XCJbJy9uZXctY29udGFjdCddXCI+RWRpdCBDb250YWN0XG4gICAgPG1hdC1pY29uPmVkaXQ8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvbiBjbGFzcz1cIm5ldy1idG5cIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBbcm91dGVyTGlua109XCJbJy9uZXctY29udGFjdCddXCI+TmV3IENvbnRhY3RcbiAgICA8bWF0LWljb24+Y3JlYXRlX25ld19mb2xkZXI8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2B0YWJsZXt3aWR0aDoxMDAlfS5tYXQtZm9ybS1maWVsZHtmb250LXNpemU6MTRweDt3aWR0aDoxMDAlfXRkLHRoe3dpZHRoOjI1JX0ubmV3LWJ0bnttYXJnaW4tdG9wOjE1cHg7bWFyZ2luLWxlZnQ6MTVweDtmbG9hdDpyaWdodH1gXSxcbiAgcHJvdmlkZXJzOiBbQ29udGFjdExpc3RTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBDb250YWN0TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ3NlbGVjdCcsICdpZCcsICduYW1lJywgJ2FnZScsICdlbWFpbCcsICdjaXR5J107XG4gIGxvYWRpbmcgPSB0cnVlO1xuXG4gIGNvbHVtbnMgPSBbXG4gICAgeyBpZDogJ2lkJywgbGFiZWw6ICdJRCcgfSxcbiAgICB7IGlkOiAnbmFtZScsIGxhYmVsOiAnTmFtZScgfSxcbiAgICB7IGlkOiAnYWdlJywgbGFiZWw6ICdBZ2UnIH0sXG4gICAgeyBpZDogJ2dlbmRlcicsIGxhYmVsOiAnR2VuZGVyJyB9LFxuICAgIHsgaWQ6ICdhZGRyZXNzJywgbGFiZWw6ICdBZGRyZXNzJyB9LFxuICAgIHsgaWQ6ICdjaXR5JywgbGFiZWw6ICdDaXR5JyB9LFxuICAgIHsgaWQ6ICdjb3VudHJ5JywgbGFiZWw6ICdDb3VudHJ5JyB9LFxuICAgIHsgaWQ6ICdlbWFpbCcsIGxhYmVsOiAnRW1haWwnIH1cbiAgXTtcblxuICBkYXRhU291cmNlOiBNYXRUYWJsZURhdGFTb3VyY2U8Q29udGFjdD47XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRhY3RzU2VydmljZTogQ29udGFjdExpc3RTZXJ2aWNlKSB7XG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShbXSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBUT0RPOiBzaG93IGFuZCBoaWRlIGxvYWRlciBvbiBjb250YWN0cyBsb2FkaW5nXG4gICAgdGhpcy5jb250YWN0c1NlcnZpY2Uuc3RvcmUudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UocmVzdWx0LmNvbnRhY3RzIHx8IFtdKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGx5RmlsdGVyKGZpbHRlclZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyID0gZmlsdGVyVmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAodGhpcy5kYXRhU291cmNlLnBhZ2luYXRvcikge1xuICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvci5maXJzdFBhZ2UoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==