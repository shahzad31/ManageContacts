/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ContactAddEditService } from '../service/contact-list.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
var NewContactComponent = /** @class */ (function () {
    function NewContactComponent(contactsService, router, store) {
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
        { type: Component, args: [{
                    selector: 'ht-new-contact',
                    template: "<div class=\"dynamic-form\">\n  <ht-dynamic-form [formSchema]=\"contact\" (submitForm)=\"onContactSave($event)\"></ht-dynamic-form>\n</div>\n<button class=\"go-back-btn\" mat-raised-button routerLink=\"\">\n  <mat-icon aria-label=\"Example icon-button with a heart icon\">arrow_back</mat-icon>\n  Go Back\n</button>",
                    styles: [".go-back-btn{position:absolute;bottom:25px}:host{text-align:center}.dynamic-form{width:600px}"],
                    providers: [ContactAddEditService]
                },] },
    ];
    /** @nocollapse */
    NewContactComponent.ctorParameters = function () { return [
        { type: ContactAddEditService },
        { type: Router },
        { type: Store }
    ]; };
    return NewContactComponent;
}());
export { NewContactComponent };
if (false) {
    /** @type {?} */
    NewContactComponent.prototype.contact;
    /** @type {?} */
    NewContactComponent.prototype.contactsService;
    /** @type {?} */
    NewContactComponent.prototype.router;
    /** @type {?} */
    NewContactComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LWNvbnRhY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29udGFjdC1hZGQtZWRpdC8iLCJzb3VyY2VzIjpbImxpYi9uZXctY29udGFjdC9uZXctY29udGFjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxLQUFLLEVBQVUsTUFBTSxhQUFhLENBQUM7O0lBdUUxQyw2QkFBb0IsZUFBc0MsRUFBVSxNQUFjLEVBQVUsS0FBaUI7UUFBekYsb0JBQWUsR0FBZixlQUFlLENBQXVCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQVk7dUJBdkRuRztZQUNSLElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUUsTUFBTTtnQkFDYixLQUFLLEVBQUUsRUFBRTtnQkFDVCxJQUFJLEVBQUUsTUFBTTtnQkFDWixVQUFVLEVBQUU7b0JBQ1YsUUFBUSxFQUFFLElBQUk7aUJBQ2Y7YUFDRjtZQUNELE1BQU0sRUFBRTtnQkFDTixLQUFLLEVBQUUsUUFBUTtnQkFDZixLQUFLLEVBQUUsR0FBRztnQkFDVixJQUFJLEVBQUUsT0FBTztnQkFDYixPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUM7YUFDMUU7WUFDRCxHQUFHLEVBQUU7Z0JBQ0gsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsVUFBVSxFQUFFO29CQUNWLEdBQUcsRUFBRSxFQUFFO2lCQUNSO2FBQ0Y7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsVUFBVSxFQUFFO29CQUNWLFFBQVEsRUFBRSxJQUFJO29CQUNkLEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osS0FBSyxFQUFFLE1BQU07Z0JBQ2IsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsT0FBTyxFQUFFO29CQUNQLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO29CQUNsQyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtvQkFDcEMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7b0JBQ2pDLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO2lCQUN0QzthQUNGO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLEtBQUssRUFBRSxTQUFTO2dCQUNoQixLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxPQUFPLEVBQUU7b0JBQ1AsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7b0JBQ2xDLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO29CQUNsQyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtvQkFDeEMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7aUJBQ25DO2FBQ0Y7U0FDRjtLQUNpSDs7OztJQUVsSCxzQ0FBUTs7O0lBQVI7S0FDQzs7Ozs7SUFFRCwyQ0FBYTs7OztJQUFiLFVBQWMsSUFBSTtRQUFsQixpQkFTQzs7O1FBTEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUN4QyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNYLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzthQUNyQztTQUNGLENBQUMsQ0FBQztLQUNKOztnQkFsRkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSw2VEFNRjtvQkFDUixNQUFNLEVBQUUsQ0FBQywrRkFBK0YsQ0FBQztvQkFDekcsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7aUJBQ25DOzs7O2dCQWhCUSxxQkFBcUI7Z0JBQ3JCLE1BQU07Z0JBQ04sS0FBSzs7OEJBSGQ7O1NBa0JhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250YWN0QWRkRWRpdFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2NvbnRhY3QtbGlzdC5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdG9yZSwgc2VsZWN0IH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuLy8gaW1wb3J0IHsgbmV3Q29udGFjdCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY29udGFjdHMuYWN0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2h0LW5ldy1jb250YWN0JyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZHluYW1pYy1mb3JtXCI+XG4gIDxodC1keW5hbWljLWZvcm0gW2Zvcm1TY2hlbWFdPVwiY29udGFjdFwiIChzdWJtaXRGb3JtKT1cIm9uQ29udGFjdFNhdmUoJGV2ZW50KVwiPjwvaHQtZHluYW1pYy1mb3JtPlxuPC9kaXY+XG48YnV0dG9uIGNsYXNzPVwiZ28tYmFjay1idG5cIiBtYXQtcmFpc2VkLWJ1dHRvbiByb3V0ZXJMaW5rPVwiXCI+XG4gIDxtYXQtaWNvbiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIGEgaGVhcnQgaWNvblwiPmFycm93X2JhY2s8L21hdC1pY29uPlxuICBHbyBCYWNrXG48L2J1dHRvbj5gLFxuICBzdHlsZXM6IFtgLmdvLWJhY2stYnRue3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbToyNXB4fTpob3N0e3RleHQtYWxpZ246Y2VudGVyfS5keW5hbWljLWZvcm17d2lkdGg6NjAwcHh9YF0sXG4gIHByb3ZpZGVyczogW0NvbnRhY3RBZGRFZGl0U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTmV3Q29udGFjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnRhY3QgPSB7XG4gICAgbmFtZToge1xuICAgICAgbGFiZWw6ICdOYW1lJyxcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHZhbGlkYXRvcnM6IHtcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgIH1cbiAgICB9LFxuICAgIGdlbmRlcjoge1xuICAgICAgbGFiZWw6ICdHZW5kZXInLFxuICAgICAgdmFsdWU6ICdNJyxcbiAgICAgIHR5cGU6ICdyYWRpbycsXG4gICAgICBvcHRpb25zOiBbeyBsYWJlbDogJ01hbGUnLCB2YWx1ZTogJ00nIH0sIHsgbGFiZWw6ICdGZW1hbGUnLCB2YWx1ZTogJ0YnIH1dXG4gICAgfSxcbiAgICBhZ2U6IHtcbiAgICAgIGxhYmVsOiAnQWdlJyxcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgdmFsaWRhdG9yczoge1xuICAgICAgICBtaW46IDE4XG4gICAgICB9XG4gICAgfSxcbiAgICBlbWFpbDoge1xuICAgICAgbGFiZWw6ICdFbWFpbCcsXG4gICAgICB2YWx1ZTogJycsXG4gICAgICB0eXBlOiAnZW1haWwnLFxuICAgICAgdmFsaWRhdG9yczoge1xuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgZW1haWw6IHRydWVcbiAgICAgIH1cbiAgICB9LFxuICAgIGNpdHk6IHtcbiAgICAgIGxhYmVsOiAnQ2l0eScsXG4gICAgICB2YWx1ZTogJ0lTTCcsXG4gICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgeyBsYWJlbDogJy0tc2VsZWN0LS0nLCB2YWx1ZTogJycgfSxcbiAgICAgICAgeyBsYWJlbDogJ0lzbGFtYWJhZCcsIHZhbHVlOiAnSVNMJyB9LFxuICAgICAgICB7IGxhYmVsOiAnTGFob3JlJywgdmFsdWU6ICdMSFInIH0sXG4gICAgICAgIHsgbGFiZWw6ICdSYXdhbHBpbmRpJywgdmFsdWU6ICdSV1AnIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIGNvdW50cnk6IHtcbiAgICAgIGxhYmVsOiAnQ291bnRyeScsXG4gICAgICB2YWx1ZTogJ1BLJyxcbiAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICB7IGxhYmVsOiAnLS1zZWxlY3QtLScsIHZhbHVlOiAnJyB9LFxuICAgICAgICB7IGxhYmVsOiAnUGFraXN0YW4nLCB2YWx1ZTogJ1BLJyB9LFxuICAgICAgICB7IGxhYmVsOiAnVW5pdGVkIFN0YXRlcycsIHZhbHVlOiAnVVNBJyB9LFxuICAgICAgICB7IGxhYmVsOiAnR2VybWFueScsIHZhbHVlOiAnR0VSJyB9XG4gICAgICBdXG4gICAgfVxuICB9O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRhY3RzU2VydmljZTogQ29udGFjdEFkZEVkaXRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9uQ29udGFjdFNhdmUoZGF0YSkge1xuICAgIC8vIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3Q29udGFjdChkYXRhKSk7XG4gICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvY29udGFjdHMnXSk7XG5cbiAgICB0aGlzLmNvbnRhY3RzU2VydmljZS5hZGQoZGF0YSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9jb250YWN0cyddKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=