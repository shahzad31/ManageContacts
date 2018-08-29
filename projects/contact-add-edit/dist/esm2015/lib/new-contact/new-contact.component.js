/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter } from '@angular/core';
import { ContactAddEditService } from '../service/contact-list.service';
export class NewContactComponent {
    /**
     * @param {?} contactsService
     */
    constructor(contactsService) {
        this.contactsService = contactsService;
        this.saveContact = new EventEmitter();
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
        this.contactsService.add(data).then(result => {
            if (result) {
                this.saveContact.emit(result);
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
<button class="go-back-btn" mat-raised-button>
  <mat-icon aria-label="Example icon-button with a heart icon">arrow_back</mat-icon>
  Go Back
</button>`,
                styles: [`.go-back-btn{position:absolute;bottom:25px}:host{text-align:center}.dynamic-form{width:600px}`],
                providers: [ContactAddEditService]
            },] },
];
/** @nocollapse */
NewContactComponent.ctorParameters = () => [
    { type: ContactAddEditService }
];
NewContactComponent.propDecorators = {
    saveContact: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NewContactComponent.prototype.saveContact;
    /** @type {?} */
    NewContactComponent.prototype.contact;
    /** @type {?} */
    NewContactComponent.prototype.contactsService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LWNvbnRhY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaHQtY29udGFjdC1hZGQtZWRpdC8iLCJzb3VyY2VzIjpbImxpYi9uZXctY29udGFjdC9uZXctY29udGFjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQWV4RSxNQUFNOzs7O0lBeURKLFlBQW9CLGVBQXNDO1FBQXRDLG9CQUFlLEdBQWYsZUFBZSxDQUF1QjsyQkF4RGYsSUFBSSxZQUFZLEVBQUU7dUJBQ25EO1lBQ1IsSUFBSSxFQUFFO2dCQUNKLEtBQUssRUFBRSxNQUFNO2dCQUNiLEtBQUssRUFBRSxFQUFFO2dCQUNULElBQUksRUFBRSxNQUFNO2dCQUNaLFVBQVUsRUFBRTtvQkFDVixRQUFRLEVBQUUsSUFBSTtpQkFDZjthQUNGO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLEtBQUssRUFBRSxRQUFRO2dCQUNmLEtBQUssRUFBRSxHQUFHO2dCQUNWLElBQUksRUFBRSxPQUFPO2dCQUNiLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQzthQUMxRTtZQUNELEdBQUcsRUFBRTtnQkFDSCxLQUFLLEVBQUUsS0FBSztnQkFDWixLQUFLLEVBQUUsRUFBRTtnQkFDVCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxVQUFVLEVBQUU7b0JBQ1YsR0FBRyxFQUFFLEVBQUU7aUJBQ1I7YUFDRjtZQUNELEtBQUssRUFBRTtnQkFDTCxLQUFLLEVBQUUsT0FBTztnQkFDZCxLQUFLLEVBQUUsRUFBRTtnQkFDVCxJQUFJLEVBQUUsT0FBTztnQkFDYixVQUFVLEVBQUU7b0JBQ1YsUUFBUSxFQUFFLElBQUk7b0JBQ2QsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtZQUNELElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUUsTUFBTTtnQkFDYixLQUFLLEVBQUUsS0FBSztnQkFDWixJQUFJLEVBQUUsUUFBUTtnQkFDZCxPQUFPLEVBQUU7b0JBQ1AsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7b0JBQ2xDLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO29CQUNwQyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtvQkFDakMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7aUJBQ3RDO2FBQ0Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxRQUFRO2dCQUNkLE9BQU8sRUFBRTtvQkFDUCxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtvQkFDbEMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7b0JBQ2xDLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO29CQUN4QyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtpQkFDbkM7YUFDRjtTQUNGO0tBQzhEOzs7O0lBRS9ELFFBQVE7S0FDUDs7Ozs7SUFFRCxhQUFhLENBQUMsSUFBSTs7UUFHaEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzNDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDL0I7U0FDRixDQUFDLENBQUM7S0FDSjs7O1lBbEZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUU7Ozs7OztVQU1GO2dCQUNSLE1BQU0sRUFBRSxDQUFDLCtGQUErRixDQUFDO2dCQUN6RyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzthQUNuQzs7OztZQWRRLHFCQUFxQjs7OzBCQWdCM0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udGFjdEFkZEVkaXRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9jb250YWN0LWxpc3Quc2VydmljZSc7XG4vLyBpbXBvcnQgeyBuZXdDb250YWN0IH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jb250YWN0cy5hY3Rpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaHQtbmV3LWNvbnRhY3QnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJkeW5hbWljLWZvcm1cIj5cbiAgPGh0LWR5bmFtaWMtZm9ybSBbZm9ybVNjaGVtYV09XCJjb250YWN0XCIgKHN1Ym1pdEZvcm0pPVwib25Db250YWN0U2F2ZSgkZXZlbnQpXCI+PC9odC1keW5hbWljLWZvcm0+XG48L2Rpdj5cbjxidXR0b24gY2xhc3M9XCJnby1iYWNrLWJ0blwiIG1hdC1yYWlzZWQtYnV0dG9uPlxuICA8bWF0LWljb24gYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBhIGhlYXJ0IGljb25cIj5hcnJvd19iYWNrPC9tYXQtaWNvbj5cbiAgR28gQmFja1xuPC9idXR0b24+YCxcbiAgc3R5bGVzOiBbYC5nby1iYWNrLWJ0bntwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MjVweH06aG9zdHt0ZXh0LWFsaWduOmNlbnRlcn0uZHluYW1pYy1mb3Jte3dpZHRoOjYwMHB4fWBdLFxuICBwcm92aWRlcnM6IFtDb250YWN0QWRkRWRpdFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIE5ld0NvbnRhY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAT3V0cHV0KCkgc2F2ZUNvbnRhY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjb250YWN0ID0ge1xuICAgIG5hbWU6IHtcbiAgICAgIGxhYmVsOiAnTmFtZScsXG4gICAgICB2YWx1ZTogJycsXG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICB2YWxpZGF0b3JzOiB7XG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICB9XG4gICAgfSxcbiAgICBnZW5kZXI6IHtcbiAgICAgIGxhYmVsOiAnR2VuZGVyJyxcbiAgICAgIHZhbHVlOiAnTScsXG4gICAgICB0eXBlOiAncmFkaW8nLFxuICAgICAgb3B0aW9uczogW3sgbGFiZWw6ICdNYWxlJywgdmFsdWU6ICdNJyB9LCB7IGxhYmVsOiAnRmVtYWxlJywgdmFsdWU6ICdGJyB9XVxuICAgIH0sXG4gICAgYWdlOiB7XG4gICAgICBsYWJlbDogJ0FnZScsXG4gICAgICB2YWx1ZTogJycsXG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIHZhbGlkYXRvcnM6IHtcbiAgICAgICAgbWluOiAxOFxuICAgICAgfVxuICAgIH0sXG4gICAgZW1haWw6IHtcbiAgICAgIGxhYmVsOiAnRW1haWwnLFxuICAgICAgdmFsdWU6ICcnLFxuICAgICAgdHlwZTogJ2VtYWlsJyxcbiAgICAgIHZhbGlkYXRvcnM6IHtcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIGVtYWlsOiB0cnVlXG4gICAgICB9XG4gICAgfSxcbiAgICBjaXR5OiB7XG4gICAgICBsYWJlbDogJ0NpdHknLFxuICAgICAgdmFsdWU6ICdJU0wnLFxuICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIHsgbGFiZWw6ICctLXNlbGVjdC0tJywgdmFsdWU6ICcnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdJc2xhbWFiYWQnLCB2YWx1ZTogJ0lTTCcgfSxcbiAgICAgICAgeyBsYWJlbDogJ0xhaG9yZScsIHZhbHVlOiAnTEhSJyB9LFxuICAgICAgICB7IGxhYmVsOiAnUmF3YWxwaW5kaScsIHZhbHVlOiAnUldQJyB9XG4gICAgICBdXG4gICAgfSxcbiAgICBjb3VudHJ5OiB7XG4gICAgICBsYWJlbDogJ0NvdW50cnknLFxuICAgICAgdmFsdWU6ICdQSycsXG4gICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgeyBsYWJlbDogJy0tc2VsZWN0LS0nLCB2YWx1ZTogJycgfSxcbiAgICAgICAgeyBsYWJlbDogJ1Bha2lzdGFuJywgdmFsdWU6ICdQSycgfSxcbiAgICAgICAgeyBsYWJlbDogJ1VuaXRlZCBTdGF0ZXMnLCB2YWx1ZTogJ1VTQScgfSxcbiAgICAgICAgeyBsYWJlbDogJ0dlcm1hbnknLCB2YWx1ZTogJ0dFUicgfVxuICAgICAgXVxuICAgIH1cbiAgfTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250YWN0c1NlcnZpY2U6IENvbnRhY3RBZGRFZGl0U2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvbkNvbnRhY3RTYXZlKGRhdGEpIHtcbiAgICAvLyB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ld0NvbnRhY3QoZGF0YSkpO1xuXG4gICAgdGhpcy5jb250YWN0c1NlcnZpY2UuYWRkKGRhdGEpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgdGhpcy5zYXZlQ29udGFjdC5lbWl0KHJlc3VsdCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxufVxuIl19