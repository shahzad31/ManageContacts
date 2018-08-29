/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
export class NavbarComponent {
    /**
     * @param {?} breakpointObserver
     */
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
            .pipe(map(result => result.matches));
    }
    /**
     * @param {?} link
     * @return {?}
     */
    getPath(link) {
        return link.replace(/\s+/g, '-').toLowerCase();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NavbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'ht-nav-bar',
                template: `<div class="nav-bar">
  <mat-toolbar color="primary" class="app-bar-container">
    <img src="assets/logo.png" class="app-logo" />
    <nav mat-tab-nav-bar class="app-tabs">
      <a mat-tab-link *ngFor="let link of ['Contacts', 'New Contact']" [routerLink]="getPath(link)" routerLinkActive #rla="routerLinkActive"
        [active]="rla.isActive">
        {{link}}
      </a>
    </nav>
    <div class="user-buttons">
      <a mat-raised-button color="accent" href="https://github.com/shahzad31/ManageContacts" target="_blank">
        Github
        <mat-icon aria-label="Example icon-button with a heart icon">face</mat-icon>
      </a>
      <a mat-raised-button color="accent" href="https://www.linkedin.com/in/shahzad31/" target="_blank">
        LinkedIn
        <mat-icon aria-label="Example icon-button with a heart icon">notifications</mat-icon>
      </a>
    </div>
  </mat-toolbar>
</div>`,
                styles: [`.nav-bar .app-bar-container{background:#6f6e6e;display:flex;flex-direction:row;justify-content:center}.nav-bar .app-bar-container .app-tabs{margin:0 130px;flex:2;border-bottom-width:0}.nav-bar .app-bar-container .app-tabs ::ng-deep .mat-tab-link{padding:0;min-width:116px}.nav-bar .app-bar-container .user-buttons a{margin-left:16px}`]
            },] },
];
/** @nocollapse */
NavbarComponent.ctorParameters = () => [
    { type: BreakpointObserver }
];
if (false) {
    /** @type {?} */
    NavbarComponent.prototype.isHandset$;
    /** @type {?} */
    NavbarComponent.prototype.breakpointObserver;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2h0LWNvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXRFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQTJCckMsTUFBTTs7OztJQU9KLFlBQW9CLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9COzBCQUx4QixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7YUFDbkYsSUFBSSxDQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDOUI7S0FHRjs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBSTtRQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNoRDs7OztJQUVELFFBQVE7S0FFUDs7O1lBekNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQW9CTDtnQkFDTCxNQUFNLEVBQUUsQ0FBQywrVUFBK1UsQ0FBQzthQUMxVjs7OztZQTVCUSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJlYWtwb2ludE9ic2VydmVyLCBCcmVha3BvaW50cyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdodC1uYXYtYmFyJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibmF2LWJhclwiPlxuICA8bWF0LXRvb2xiYXIgY29sb3I9XCJwcmltYXJ5XCIgY2xhc3M9XCJhcHAtYmFyLWNvbnRhaW5lclwiPlxuICAgIDxpbWcgc3JjPVwiYXNzZXRzL2xvZ28ucG5nXCIgY2xhc3M9XCJhcHAtbG9nb1wiIC8+XG4gICAgPG5hdiBtYXQtdGFiLW5hdi1iYXIgY2xhc3M9XCJhcHAtdGFic1wiPlxuICAgICAgPGEgbWF0LXRhYi1saW5rICpuZ0Zvcj1cImxldCBsaW5rIG9mIFsnQ29udGFjdHMnLCAnTmV3IENvbnRhY3QnXVwiIFtyb3V0ZXJMaW5rXT1cImdldFBhdGgobGluaylcIiByb3V0ZXJMaW5rQWN0aXZlICNybGE9XCJyb3V0ZXJMaW5rQWN0aXZlXCJcbiAgICAgICAgW2FjdGl2ZV09XCJybGEuaXNBY3RpdmVcIj5cbiAgICAgICAge3tsaW5rfX1cbiAgICAgIDwvYT5cbiAgICA8L25hdj5cbiAgICA8ZGl2IGNsYXNzPVwidXNlci1idXR0b25zXCI+XG4gICAgICA8YSBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cImFjY2VudFwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc2hhaHphZDMxL01hbmFnZUNvbnRhY3RzXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgIEdpdGh1YlxuICAgICAgICA8bWF0LWljb24gYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBhIGhlYXJ0IGljb25cIj5mYWNlPC9tYXQtaWNvbj5cbiAgICAgIDwvYT5cbiAgICAgIDxhIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwiYWNjZW50XCIgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9zaGFoemFkMzEvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgIExpbmtlZEluXG4gICAgICAgIDxtYXQtaWNvbiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIGEgaGVhcnQgaWNvblwiPm5vdGlmaWNhdGlvbnM8L21hdC1pY29uPlxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICA8L21hdC10b29sYmFyPlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYC5uYXYtYmFyIC5hcHAtYmFyLWNvbnRhaW5lcntiYWNrZ3JvdW5kOiM2ZjZlNmU7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5uYXYtYmFyIC5hcHAtYmFyLWNvbnRhaW5lciAuYXBwLXRhYnN7bWFyZ2luOjAgMTMwcHg7ZmxleDoyO2JvcmRlci1ib3R0b20td2lkdGg6MH0ubmF2LWJhciAuYXBwLWJhci1jb250YWluZXIgLmFwcC10YWJzIDo6bmctZGVlcCAubWF0LXRhYi1saW5re3BhZGRpbmc6MDttaW4td2lkdGg6MTE2cHh9Lm5hdi1iYXIgLmFwcC1iYXItY29udGFpbmVyIC51c2VyLWJ1dHRvbnMgYXttYXJnaW4tbGVmdDoxNnB4fWBdXG59KVxuZXhwb3J0IGNsYXNzIE5hdmJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgaXNIYW5kc2V0JDogT2JzZXJ2YWJsZTxCb29sZWFuPiA9IHRoaXMuYnJlYWtwb2ludE9ic2VydmVyLm9ic2VydmUoQnJlYWtwb2ludHMuSGFuZHNldClcbiAgICAucGlwZShcbiAgICAgIG1hcChyZXN1bHQgPT4gcmVzdWx0Lm1hdGNoZXMpXG4gICAgKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJyZWFrcG9pbnRPYnNlcnZlcjogQnJlYWtwb2ludE9ic2VydmVyKSB7XG4gIH1cblxuICBnZXRQYXRoKGxpbmspIHtcbiAgICByZXR1cm4gbGluay5yZXBsYWNlKC9cXHMrL2csICctJykudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxufVxuIl19