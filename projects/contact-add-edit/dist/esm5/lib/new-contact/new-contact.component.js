/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter } from '@angular/core';
import { ContactAddEditService } from '../service/contact-list.service';
var NewContactComponent = /** @class */ (function () {
    function NewContactComponent(contactsService) {
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
        this.contactsService.add(data).then(function (result) {
            if (result) {
                _this.saveContact.emit(result);
            }
        });
    };
    NewContactComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ht-new-contact',
                    template: "<div class=\"dynamic-form\">\n  <ht-dynamic-form [formSchema]=\"contact\" (submitForm)=\"onContactSave($event)\"></ht-dynamic-form>\n</div>\n<button class=\"go-back-btn\" mat-raised-button>\n  <mat-icon aria-label=\"Example icon-button with a heart icon\">arrow_back</mat-icon>\n  Go Back\n</button>",
                    styles: [".go-back-btn{position:absolute;bottom:25px}:host{text-align:center}.dynamic-form{width:600px}"],
                    providers: [ContactAddEditService]
                },] },
    ];
    /** @nocollapse */
    NewContactComponent.ctorParameters = function () { return [
        { type: ContactAddEditService }
    ]; };
    NewContactComponent.propDecorators = {
        saveContact: [{ type: Output }]
    };
    return NewContactComponent;
}());
export { NewContactComponent };
if (false) {
    /** @type {?} */
    NewContactComponent.prototype.saveContact;
    /** @type {?} */
    NewContactComponent.prototype.contact;
    /** @type {?} */
    NewContactComponent.prototype.contactsService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LWNvbnRhY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaHQtY29udGFjdC1hZGQtZWRpdC8iLCJzb3VyY2VzIjpbImxpYi9uZXctY29udGFjdC9uZXctY29udGFjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7SUF3RXRFLDZCQUFvQixlQUFzQztRQUF0QyxvQkFBZSxHQUFmLGVBQWUsQ0FBdUI7MkJBeERmLElBQUksWUFBWSxFQUFFO3VCQUNuRDtZQUNSLElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUUsTUFBTTtnQkFDYixLQUFLLEVBQUUsRUFBRTtnQkFDVCxJQUFJLEVBQUUsTUFBTTtnQkFDWixVQUFVLEVBQUU7b0JBQ1YsUUFBUSxFQUFFLElBQUk7aUJBQ2Y7YUFDRjtZQUNELE1BQU0sRUFBRTtnQkFDTixLQUFLLEVBQUUsUUFBUTtnQkFDZixLQUFLLEVBQUUsR0FBRztnQkFDVixJQUFJLEVBQUUsT0FBTztnQkFDYixPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUM7YUFDMUU7WUFDRCxHQUFHLEVBQUU7Z0JBQ0gsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsVUFBVSxFQUFFO29CQUNWLEdBQUcsRUFBRSxFQUFFO2lCQUNSO2FBQ0Y7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsVUFBVSxFQUFFO29CQUNWLFFBQVEsRUFBRSxJQUFJO29CQUNkLEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osS0FBSyxFQUFFLE1BQU07Z0JBQ2IsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsT0FBTyxFQUFFO29CQUNQLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO29CQUNsQyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtvQkFDcEMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7b0JBQ2pDLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO2lCQUN0QzthQUNGO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLEtBQUssRUFBRSxTQUFTO2dCQUNoQixLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxPQUFPLEVBQUU7b0JBQ1AsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7b0JBQ2xDLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO29CQUNsQyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtvQkFDeEMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7aUJBQ25DO2FBQ0Y7U0FDRjtLQUM4RDs7OztJQUUvRCxzQ0FBUTs7O0lBQVI7S0FDQzs7Ozs7SUFFRCwyQ0FBYTs7OztJQUFiLFVBQWMsSUFBSTtRQUFsQixpQkFRQzs7UUFMQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ3hDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDL0I7U0FDRixDQUFDLENBQUM7S0FDSjs7Z0JBbEZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsNlNBTUY7b0JBQ1IsTUFBTSxFQUFFLENBQUMsK0ZBQStGLENBQUM7b0JBQ3pHLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO2lCQUNuQzs7OztnQkFkUSxxQkFBcUI7Ozs4QkFnQjNCLE1BQU07OzhCQWpCVDs7U0FnQmEsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250YWN0QWRkRWRpdFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2NvbnRhY3QtbGlzdC5zZXJ2aWNlJztcbi8vIGltcG9ydCB7IG5ld0NvbnRhY3QgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2NvbnRhY3RzLmFjdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdodC1uZXctY29udGFjdCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImR5bmFtaWMtZm9ybVwiPlxuICA8aHQtZHluYW1pYy1mb3JtIFtmb3JtU2NoZW1hXT1cImNvbnRhY3RcIiAoc3VibWl0Rm9ybSk9XCJvbkNvbnRhY3RTYXZlKCRldmVudClcIj48L2h0LWR5bmFtaWMtZm9ybT5cbjwvZGl2PlxuPGJ1dHRvbiBjbGFzcz1cImdvLWJhY2stYnRuXCIgbWF0LXJhaXNlZC1idXR0b24+XG4gIDxtYXQtaWNvbiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIGEgaGVhcnQgaWNvblwiPmFycm93X2JhY2s8L21hdC1pY29uPlxuICBHbyBCYWNrXG48L2J1dHRvbj5gLFxuICBzdHlsZXM6IFtgLmdvLWJhY2stYnRue3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbToyNXB4fTpob3N0e3RleHQtYWxpZ246Y2VudGVyfS5keW5hbWljLWZvcm17d2lkdGg6NjAwcHh9YF0sXG4gIHByb3ZpZGVyczogW0NvbnRhY3RBZGRFZGl0U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTmV3Q29udGFjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBPdXRwdXQoKSBzYXZlQ29udGFjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNvbnRhY3QgPSB7XG4gICAgbmFtZToge1xuICAgICAgbGFiZWw6ICdOYW1lJyxcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHZhbGlkYXRvcnM6IHtcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgIH1cbiAgICB9LFxuICAgIGdlbmRlcjoge1xuICAgICAgbGFiZWw6ICdHZW5kZXInLFxuICAgICAgdmFsdWU6ICdNJyxcbiAgICAgIHR5cGU6ICdyYWRpbycsXG4gICAgICBvcHRpb25zOiBbeyBsYWJlbDogJ01hbGUnLCB2YWx1ZTogJ00nIH0sIHsgbGFiZWw6ICdGZW1hbGUnLCB2YWx1ZTogJ0YnIH1dXG4gICAgfSxcbiAgICBhZ2U6IHtcbiAgICAgIGxhYmVsOiAnQWdlJyxcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgdmFsaWRhdG9yczoge1xuICAgICAgICBtaW46IDE4XG4gICAgICB9XG4gICAgfSxcbiAgICBlbWFpbDoge1xuICAgICAgbGFiZWw6ICdFbWFpbCcsXG4gICAgICB2YWx1ZTogJycsXG4gICAgICB0eXBlOiAnZW1haWwnLFxuICAgICAgdmFsaWRhdG9yczoge1xuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgZW1haWw6IHRydWVcbiAgICAgIH1cbiAgICB9LFxuICAgIGNpdHk6IHtcbiAgICAgIGxhYmVsOiAnQ2l0eScsXG4gICAgICB2YWx1ZTogJ0lTTCcsXG4gICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgeyBsYWJlbDogJy0tc2VsZWN0LS0nLCB2YWx1ZTogJycgfSxcbiAgICAgICAgeyBsYWJlbDogJ0lzbGFtYWJhZCcsIHZhbHVlOiAnSVNMJyB9LFxuICAgICAgICB7IGxhYmVsOiAnTGFob3JlJywgdmFsdWU6ICdMSFInIH0sXG4gICAgICAgIHsgbGFiZWw6ICdSYXdhbHBpbmRpJywgdmFsdWU6ICdSV1AnIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIGNvdW50cnk6IHtcbiAgICAgIGxhYmVsOiAnQ291bnRyeScsXG4gICAgICB2YWx1ZTogJ1BLJyxcbiAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICB7IGxhYmVsOiAnLS1zZWxlY3QtLScsIHZhbHVlOiAnJyB9LFxuICAgICAgICB7IGxhYmVsOiAnUGFraXN0YW4nLCB2YWx1ZTogJ1BLJyB9LFxuICAgICAgICB7IGxhYmVsOiAnVW5pdGVkIFN0YXRlcycsIHZhbHVlOiAnVVNBJyB9LFxuICAgICAgICB7IGxhYmVsOiAnR2VybWFueScsIHZhbHVlOiAnR0VSJyB9XG4gICAgICBdXG4gICAgfVxuICB9O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRhY3RzU2VydmljZTogQ29udGFjdEFkZEVkaXRTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9uQ29udGFjdFNhdmUoZGF0YSkge1xuICAgIC8vIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3Q29udGFjdChkYXRhKSk7XG5cbiAgICB0aGlzLmNvbnRhY3RzU2VydmljZS5hZGQoZGF0YSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB0aGlzLnNhdmVDb250YWN0LmVtaXQocmVzdWx0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=