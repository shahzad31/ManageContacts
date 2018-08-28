/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ContactAddEditService } from '../service/contact-list.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
export class NewContactComponent {
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
                providers: [ContactAddEditService]
            },] },
];
/** @nocollapse */
NewContactComponent.ctorParameters = () => [
    { type: ContactAddEditService },
    { type: Router },
    { type: Store }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LWNvbnRhY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29udGFjdC1hZGQtZWRpdC8iLCJzb3VyY2VzIjpbImxpYi9uZXctY29udGFjdC9uZXctY29udGFjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxLQUFLLEVBQVUsTUFBTSxhQUFhLENBQUM7QUFlNUMsTUFBTTs7Ozs7O0lBd0RKLFlBQW9CLGVBQXNDLEVBQVUsTUFBYyxFQUFVLEtBQWlCO1FBQXpGLG9CQUFlLEdBQWYsZUFBZSxDQUF1QjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFZO3VCQXZEbkc7WUFDUixJQUFJLEVBQUU7Z0JBQ0osS0FBSyxFQUFFLE1BQU07Z0JBQ2IsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLE1BQU07Z0JBQ1osVUFBVSxFQUFFO29CQUNWLFFBQVEsRUFBRSxJQUFJO2lCQUNmO2FBQ0Y7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsT0FBTyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDO2FBQzFFO1lBQ0QsR0FBRyxFQUFFO2dCQUNILEtBQUssRUFBRSxLQUFLO2dCQUNaLEtBQUssRUFBRSxFQUFFO2dCQUNULElBQUksRUFBRSxRQUFRO2dCQUNkLFVBQVUsRUFBRTtvQkFDVixHQUFHLEVBQUUsRUFBRTtpQkFDUjthQUNGO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLEtBQUssRUFBRSxPQUFPO2dCQUNkLEtBQUssRUFBRSxFQUFFO2dCQUNULElBQUksRUFBRSxPQUFPO2dCQUNiLFVBQVUsRUFBRTtvQkFDVixRQUFRLEVBQUUsSUFBSTtvQkFDZCxLQUFLLEVBQUUsSUFBSTtpQkFDWjthQUNGO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLEtBQUssRUFBRSxNQUFNO2dCQUNiLEtBQUssRUFBRSxLQUFLO2dCQUNaLElBQUksRUFBRSxRQUFRO2dCQUNkLE9BQU8sRUFBRTtvQkFDUCxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtvQkFDbEMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7b0JBQ3BDLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO29CQUNqQyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtpQkFDdEM7YUFDRjtZQUNELE9BQU8sRUFBRTtnQkFDUCxLQUFLLEVBQUUsU0FBUztnQkFDaEIsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsT0FBTyxFQUFFO29CQUNQLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO29CQUNsQyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtvQkFDbEMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7b0JBQ3hDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO2lCQUNuQzthQUNGO1NBQ0Y7S0FDaUg7Ozs7SUFFbEgsUUFBUTtLQUNQOzs7OztJQUVELGFBQWEsQ0FBQyxJQUFJOzs7UUFJaEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzNDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2FBQ3JDO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7OztZQWxGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOzs7Ozs7VUFNRjtnQkFDUixNQUFNLEVBQUUsQ0FBQywrRkFBK0YsQ0FBQztnQkFDekcsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7YUFDbkM7Ozs7WUFoQlEscUJBQXFCO1lBQ3JCLE1BQU07WUFDTixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRhY3RBZGRFZGl0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvY29udGFjdC1saXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN0b3JlLCBzZWxlY3QgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG4vLyBpbXBvcnQgeyBuZXdDb250YWN0IH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jb250YWN0cy5hY3Rpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaHQtbmV3LWNvbnRhY3QnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJkeW5hbWljLWZvcm1cIj5cbiAgPGh0LWR5bmFtaWMtZm9ybSBbZm9ybVNjaGVtYV09XCJjb250YWN0XCIgKHN1Ym1pdEZvcm0pPVwib25Db250YWN0U2F2ZSgkZXZlbnQpXCI+PC9odC1keW5hbWljLWZvcm0+XG48L2Rpdj5cbjxidXR0b24gY2xhc3M9XCJnby1iYWNrLWJ0blwiIG1hdC1yYWlzZWQtYnV0dG9uIHJvdXRlckxpbms9XCJcIj5cbiAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggYSBoZWFydCBpY29uXCI+YXJyb3dfYmFjazwvbWF0LWljb24+XG4gIEdvIEJhY2tcbjwvYnV0dG9uPmAsXG4gIHN0eWxlczogW2AuZ28tYmFjay1idG57cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjI1cHh9Omhvc3R7dGV4dC1hbGlnbjpjZW50ZXJ9LmR5bmFtaWMtZm9ybXt3aWR0aDo2MDBweH1gXSxcbiAgcHJvdmlkZXJzOiBbQ29udGFjdEFkZEVkaXRTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBOZXdDb250YWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29udGFjdCA9IHtcbiAgICBuYW1lOiB7XG4gICAgICBsYWJlbDogJ05hbWUnLFxuICAgICAgdmFsdWU6ICcnLFxuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgdmFsaWRhdG9yczoge1xuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgfVxuICAgIH0sXG4gICAgZ2VuZGVyOiB7XG4gICAgICBsYWJlbDogJ0dlbmRlcicsXG4gICAgICB2YWx1ZTogJ00nLFxuICAgICAgdHlwZTogJ3JhZGlvJyxcbiAgICAgIG9wdGlvbnM6IFt7IGxhYmVsOiAnTWFsZScsIHZhbHVlOiAnTScgfSwgeyBsYWJlbDogJ0ZlbWFsZScsIHZhbHVlOiAnRicgfV1cbiAgICB9LFxuICAgIGFnZToge1xuICAgICAgbGFiZWw6ICdBZ2UnLFxuICAgICAgdmFsdWU6ICcnLFxuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICB2YWxpZGF0b3JzOiB7XG4gICAgICAgIG1pbjogMThcbiAgICAgIH1cbiAgICB9LFxuICAgIGVtYWlsOiB7XG4gICAgICBsYWJlbDogJ0VtYWlsJyxcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIHR5cGU6ICdlbWFpbCcsXG4gICAgICB2YWxpZGF0b3JzOiB7XG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBlbWFpbDogdHJ1ZVxuICAgICAgfVxuICAgIH0sXG4gICAgY2l0eToge1xuICAgICAgbGFiZWw6ICdDaXR5JyxcbiAgICAgIHZhbHVlOiAnSVNMJyxcbiAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICB7IGxhYmVsOiAnLS1zZWxlY3QtLScsIHZhbHVlOiAnJyB9LFxuICAgICAgICB7IGxhYmVsOiAnSXNsYW1hYmFkJywgdmFsdWU6ICdJU0wnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdMYWhvcmUnLCB2YWx1ZTogJ0xIUicgfSxcbiAgICAgICAgeyBsYWJlbDogJ1Jhd2FscGluZGknLCB2YWx1ZTogJ1JXUCcgfVxuICAgICAgXVxuICAgIH0sXG4gICAgY291bnRyeToge1xuICAgICAgbGFiZWw6ICdDb3VudHJ5JyxcbiAgICAgIHZhbHVlOiAnUEsnLFxuICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIHsgbGFiZWw6ICctLXNlbGVjdC0tJywgdmFsdWU6ICcnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdQYWtpc3RhbicsIHZhbHVlOiAnUEsnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdVbml0ZWQgU3RhdGVzJywgdmFsdWU6ICdVU0EnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdHZXJtYW55JywgdmFsdWU6ICdHRVInIH1cbiAgICAgIF1cbiAgICB9XG4gIH07XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGFjdHNTZXJ2aWNlOiBDb250YWN0QWRkRWRpdFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgb25Db250YWN0U2F2ZShkYXRhKSB7XG4gICAgLy8gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXdDb250YWN0KGRhdGEpKTtcbiAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9jb250YWN0cyddKTtcblxuICAgIHRoaXMuY29udGFjdHNTZXJ2aWNlLmFkZChkYXRhKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2NvbnRhY3RzJ10pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==