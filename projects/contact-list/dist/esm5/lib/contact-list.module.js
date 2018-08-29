/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { ContactListComponent } from './contact-list-component/contact-list.component';
import { CommonComponentsModule } from 'ht-common-components/dist';
var ContactListModule = /** @class */ (function () {
    function ContactListModule() {
    }
    ContactListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        BrowserModule,
                        FormsModule,
                        RouterModule,
                        MaterialModule,
                        CommonComponentsModule
                    ],
                    declarations: [ContactListComponent],
                    exports: [ContactListComponent]
                },] },
    ];
    return ContactListModule;
}());
export { ContactListModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC1saXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2h0LWNvbnRhY3QtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9jb250YWN0LWxpc3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdkYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7O2dCQUlsRSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixXQUFXO3dCQUNYLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCxzQkFBc0I7cUJBQ3ZCO29CQUNELFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUNwQyxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztpQkFDaEM7OzRCQXhCRDs7U0F5QmEsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNYXRlcmlhbE1vZHVsZSB9IGZyb20gJy4vbWF0ZXJpYWwubW9kdWxlJztcblxuXG5pbXBvcnQgeyBDb250YWN0TGlzdENvbXBvbmVudCB9IGZyb20gJy4vY29udGFjdC1saXN0LWNvbXBvbmVudC9jb250YWN0LWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudHNNb2R1bGUgfSBmcm9tICdodC1jb21tb24tY29tcG9uZW50cy9kaXN0JztcblxuLy8gaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50c01vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi1jb21wb25lbnRzL3NyYy9wdWJsaWNfYXBpJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBNYXRlcmlhbE1vZHVsZSxcbiAgICBDb21tb25Db21wb25lbnRzTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0NvbnRhY3RMaXN0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NvbnRhY3RMaXN0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBDb250YWN0TGlzdE1vZHVsZSB7IH1cbiJdfQ==