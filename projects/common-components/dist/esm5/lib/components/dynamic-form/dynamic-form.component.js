/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators as ValueValidators } from '@angular/forms';
var DynamicFormComponent = /** @class */ (function () {
    function DynamicFormComponent() {
        this.formFieldControls = {};
        this.contactProps = [];
        this.submitForm = new EventEmitter();
    }
    /**
     * @return {?}
     */
    DynamicFormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        try {
            for (var _a = tslib_1.__values(Object.keys(this.formSchema)), _b = _a.next(); !_b.done; _b = _a.next()) {
                var prop = _b.value;
                this.formFieldControls[prop] = new FormControl(this.formSchema[prop].value, this.mapValidator(this.formSchema[prop].validators));
                this.contactProps.push({
                    key: prop,
                    label: this.formSchema[prop].label,
                    type: this.formSchema[prop].type,
                    options: this.formSchema[prop].options
                });
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.form = new FormGroup(this.formFieldControls);
        var e_1, _c;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    DynamicFormComponent.prototype.isInValid = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var fieldControl = this.formFieldControls[key];
        return fieldControl.invalid && (fieldControl.dirty || fieldControl.touched);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    DynamicFormComponent.prototype.getErrorMessage = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.formFieldControls[key].hasError('required') ? 'You must enter a value' :
            this.formFieldControls[key].hasError('email') ? 'Not a valid email' :
                this.formFieldControls[key].hasError('min') ? "You have to provide a value greater or\n      equal to " + this.formFieldControls[key].errors.min.min :
                    '';
    };
    /**
     * @param {?} validators
     * @return {?}
     */
    DynamicFormComponent.prototype.mapValidator = /**
     * @param {?} validators
     * @return {?}
     */
    function (validators) {
        if (validators) {
            return Object.keys(validators).map(function (validationType) {
                if (validationType === 'required') {
                    return ValueValidators.required;
                }
                else if (validationType === 'min') {
                    return ValueValidators.min(validators[validationType]);
                }
                else if (validationType === 'email') {
                    return ValueValidators.email;
                }
            });
        }
        else {
            return [];
        }
    };
    /**
     * @return {?}
     */
    DynamicFormComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () {
        this.submitForm.emit(this.form.value);
    };
    DynamicFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ht-dynamic-form',
                    template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" class=\"dynamic-form-component\" #formId=\"ngForm\">\n\n  <div *ngFor=\"let prop of contactProps\">\n    <div [ngSwitch]=\"prop.type\">\n\n      <mat-form-field *ngSwitchCase=\"'text'\">\n        <input matInput placeholder=\"{{ prop.label }}\" [type]=\"prop.type\" [formControlName]=\"prop.key\">\n        <mat-error *ngIf=\"isInValid(prop.key)\">{{getErrorMessage(prop.key)}}</mat-error>\n      </mat-form-field>\n\n      <mat-form-field *ngSwitchCase=\"'number'\">\n        <input matInput placeholder=\"{{ prop.label }}\" [type]=\"prop.type\" [formControlName]=\"prop.key\">\n        <mat-error *ngIf=\"isInValid(prop.key)\">{{getErrorMessage(prop.key)}}</mat-error>\n      </mat-form-field>\n\n      <mat-form-field *ngSwitchCase=\"'email'\">\n        <input matInput placeholder=\"{{ prop.label }}\" [type]=\"prop.type\" [formControlName]=\"prop.key\">\n        <mat-error *ngIf=\"isInValid(prop.key)\">{{getErrorMessage(prop.key)}}</mat-error>\n      </mat-form-field>\n      <div  class=\"radio-group\">\n        <div *ngSwitchCase=\"'radio'\">\n          <label class=\"mat-input\">{{ prop.label }} : </label>\n          <mat-radio-group [formControlName]=\"prop.key\">\n            <mat-radio-button *ngFor=\"let option of prop.options\" [value]=\"option.value\">{{ option.label }}</mat-radio-button>\n          </mat-radio-group>\n        </div>\n      </div>\n\n      <mat-form-field *ngSwitchCase=\"'select'\">\n        <mat-select placeholder=\"{{ prop.label }}\" [formControlName]=\"prop.key\">\n          <mat-option *ngFor=\"let option of prop.options\" [value]=\"option.value\"> {{ option.label }}</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n  </div>\n\n  <div class=\"form-actions\">\n    <button type=\"submit\" mat-raised-button routerLink=\".\" color=\"primary\" [disabled]='!formId.form.valid'>Save</button>\n  </div>\n</form>",
                    styles: [".dynamic-form-component .radio-group{text-align:initial;display:flex;justify-content:center;margin-bottom:15px}.dynamic-form-component .radio-group mat-radio-button{margin-left:10px}.dynamic-form-component .radio-group>div{width:300px}.dynamic-form-component .form-action{text-align:left}.dynamic-form-component .mat-form-field{width:300px}"]
                },] },
    ];
    DynamicFormComponent.propDecorators = {
        formSchema: [{ type: Input }],
        submitForm: [{ type: Output }]
    };
    return DynamicFormComponent;
}());
export { DynamicFormComponent };
if (false) {
    /** @type {?} */
    DynamicFormComponent.prototype.form;
    /** @type {?} */
    DynamicFormComponent.prototype.formFieldControls;
    /** @type {?} */
    DynamicFormComponent.prototype.contactProps;
    /** @type {?} */
    DynamicFormComponent.prototype.formSchema;
    /** @type {?} */
    DynamicFormComponent.prototype.submitForm;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2h0LWNvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZHluYW1pYy1mb3JtL2R5bmFtaWMtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsSUFBSSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O2lDQWlEakUsRUFBRTs0QkFDUCxFQUFFOzBCQUd5QixJQUFJLFlBQVksRUFBRTs7Ozs7SUFFNUQsdUNBQVE7OztJQUFSOztZQUNFLEdBQUcsQ0FBQyxDQUFlLElBQUEsS0FBQSxpQkFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQSxnQkFBQTtnQkFBMUMsSUFBTSxJQUFJLFdBQUE7Z0JBQ2IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksV0FBVyxDQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUNwRCxDQUFDO2dCQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO29CQUNyQixHQUFHLEVBQUUsSUFBSTtvQkFDVCxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLO29CQUNsQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJO29CQUNoQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPO2lCQUN2QyxDQUFDLENBQUM7YUFDSjs7Ozs7Ozs7O1FBRUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs7S0FDbkQ7Ozs7O0lBRUQsd0NBQVM7Ozs7SUFBVCxVQUFVLEdBQUc7O1FBQ1gsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDN0U7Ozs7O0lBRUQsOENBQWU7Ozs7SUFBZixVQUFnQixHQUFHO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQ2xGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUM7Z0JBQ25FLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLDREQUNyQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFLLENBQUMsQ0FBQztvQkFDckQsRUFBRSxDQUFDO0tBQ1Y7Ozs7O0lBRUQsMkNBQVk7Ozs7SUFBWixVQUFhLFVBQVU7UUFDckIsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNmLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLGNBQWM7Z0JBQy9DLEVBQUUsQ0FBQyxDQUFDLGNBQWMsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUNsQyxNQUFNLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQztpQkFDakM7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGNBQWMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNwQyxNQUFNLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztpQkFDeEQ7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGNBQWMsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUN0QyxNQUFNLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQztpQkFDOUI7YUFDRixDQUFDLENBQUM7U0FDSjtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLEVBQUUsQ0FBQztTQUNYO0tBQ0Y7Ozs7SUFFRCx1Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3ZDOztnQkF0R0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSw4NERBdUNKO29CQUNOLE1BQU0sRUFBRSxDQUFDLHNWQUFzVixDQUFDO2lCQUNqVzs7OzZCQU9FLEtBQUs7NkJBQ0wsTUFBTTs7K0JBdERUOztTQStDYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIGFzIFZhbHVlVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaHQtZHluYW1pYy1mb3JtJyxcbiAgdGVtcGxhdGU6IGA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiIGNsYXNzPVwiZHluYW1pYy1mb3JtLWNvbXBvbmVudFwiICNmb3JtSWQ9XCJuZ0Zvcm1cIj5cblxuICA8ZGl2ICpuZ0Zvcj1cImxldCBwcm9wIG9mIGNvbnRhY3RQcm9wc1wiPlxuICAgIDxkaXYgW25nU3dpdGNoXT1cInByb3AudHlwZVwiPlxuXG4gICAgICA8bWF0LWZvcm0tZmllbGQgKm5nU3dpdGNoQ2FzZT1cIid0ZXh0J1wiPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJ7eyBwcm9wLmxhYmVsIH19XCIgW3R5cGVdPVwicHJvcC50eXBlXCIgW2Zvcm1Db250cm9sTmFtZV09XCJwcm9wLmtleVwiPlxuICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwiaXNJblZhbGlkKHByb3Aua2V5KVwiPnt7Z2V0RXJyb3JNZXNzYWdlKHByb3Aua2V5KX19PC9tYXQtZXJyb3I+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgICA8bWF0LWZvcm0tZmllbGQgKm5nU3dpdGNoQ2FzZT1cIidudW1iZXInXCI+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInt7IHByb3AubGFiZWwgfX1cIiBbdHlwZV09XCJwcm9wLnR5cGVcIiBbZm9ybUNvbnRyb2xOYW1lXT1cInByb3Aua2V5XCI+XG4gICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJpc0luVmFsaWQocHJvcC5rZXkpXCI+e3tnZXRFcnJvck1lc3NhZ2UocHJvcC5rZXkpfX08L21hdC1lcnJvcj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdTd2l0Y2hDYXNlPVwiJ2VtYWlsJ1wiPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJ7eyBwcm9wLmxhYmVsIH19XCIgW3R5cGVdPVwicHJvcC50eXBlXCIgW2Zvcm1Db250cm9sTmFtZV09XCJwcm9wLmtleVwiPlxuICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwiaXNJblZhbGlkKHByb3Aua2V5KVwiPnt7Z2V0RXJyb3JNZXNzYWdlKHByb3Aua2V5KX19PC9tYXQtZXJyb3I+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgPGRpdiAgY2xhc3M9XCJyYWRpby1ncm91cFwiPlxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCIncmFkaW8nXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwibWF0LWlucHV0XCI+e3sgcHJvcC5sYWJlbCB9fSA6IDwvbGFiZWw+XG4gICAgICAgICAgPG1hdC1yYWRpby1ncm91cCBbZm9ybUNvbnRyb2xOYW1lXT1cInByb3Aua2V5XCI+XG4gICAgICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIHByb3Aub3B0aW9uc1wiIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIj57eyBvcHRpb24ubGFiZWwgfX08L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdTd2l0Y2hDYXNlPVwiJ3NlbGVjdCdcIj5cbiAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJ7eyBwcm9wLmxhYmVsIH19XCIgW2Zvcm1Db250cm9sTmFtZV09XCJwcm9wLmtleVwiPlxuICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgcHJvcC5vcHRpb25zXCIgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiPiB7eyBvcHRpb24ubGFiZWwgfX08L21hdC1vcHRpb24+XG4gICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJmb3JtLWFjdGlvbnNcIj5cbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBtYXQtcmFpc2VkLWJ1dHRvbiByb3V0ZXJMaW5rPVwiLlwiIGNvbG9yPVwicHJpbWFyeVwiIFtkaXNhYmxlZF09JyFmb3JtSWQuZm9ybS52YWxpZCc+U2F2ZTwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvZm9ybT5gLFxuICBzdHlsZXM6IFtgLmR5bmFtaWMtZm9ybS1jb21wb25lbnQgLnJhZGlvLWdyb3Vwe3RleHQtYWxpZ246aW5pdGlhbDtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW4tYm90dG9tOjE1cHh9LmR5bmFtaWMtZm9ybS1jb21wb25lbnQgLnJhZGlvLWdyb3VwIG1hdC1yYWRpby1idXR0b257bWFyZ2luLWxlZnQ6MTBweH0uZHluYW1pYy1mb3JtLWNvbXBvbmVudCAucmFkaW8tZ3JvdXA+ZGl2e3dpZHRoOjMwMHB4fS5keW5hbWljLWZvcm0tY29tcG9uZW50IC5mb3JtLWFjdGlvbnt0ZXh0LWFsaWduOmxlZnR9LmR5bmFtaWMtZm9ybS1jb21wb25lbnQgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMwMHB4fWBdXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBmb3JtOiBGb3JtR3JvdXA7XG4gIGZvcm1GaWVsZENvbnRyb2xzID0ge307XG4gIGNvbnRhY3RQcm9wcyA9IFtdO1xuXG4gIEBJbnB1dCgpIGZvcm1TY2hlbWE7XG4gIEBPdXRwdXQoKSBzdWJtaXRGb3JtOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICBmb3IgKGNvbnN0IHByb3Agb2YgT2JqZWN0LmtleXModGhpcy5mb3JtU2NoZW1hKSkge1xuICAgICAgdGhpcy5mb3JtRmllbGRDb250cm9sc1twcm9wXSA9IG5ldyBGb3JtQ29udHJvbChcbiAgICAgICAgdGhpcy5mb3JtU2NoZW1hW3Byb3BdLnZhbHVlLFxuICAgICAgICB0aGlzLm1hcFZhbGlkYXRvcih0aGlzLmZvcm1TY2hlbWFbcHJvcF0udmFsaWRhdG9ycylcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuY29udGFjdFByb3BzLnB1c2goe1xuICAgICAgICBrZXk6IHByb3AsXG4gICAgICAgIGxhYmVsOiB0aGlzLmZvcm1TY2hlbWFbcHJvcF0ubGFiZWwsXG4gICAgICAgIHR5cGU6IHRoaXMuZm9ybVNjaGVtYVtwcm9wXS50eXBlLFxuICAgICAgICBvcHRpb25zOiB0aGlzLmZvcm1TY2hlbWFbcHJvcF0ub3B0aW9uc1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cCh0aGlzLmZvcm1GaWVsZENvbnRyb2xzKTtcbiAgfVxuXG4gIGlzSW5WYWxpZChrZXkpIHtcbiAgICBjb25zdCBmaWVsZENvbnRyb2wgPSB0aGlzLmZvcm1GaWVsZENvbnRyb2xzW2tleV07XG4gICAgcmV0dXJuIGZpZWxkQ29udHJvbC5pbnZhbGlkICYmIChmaWVsZENvbnRyb2wuZGlydHkgfHwgZmllbGRDb250cm9sLnRvdWNoZWQpO1xuICB9XG5cbiAgZ2V0RXJyb3JNZXNzYWdlKGtleSkge1xuICAgIHJldHVybiB0aGlzLmZvcm1GaWVsZENvbnRyb2xzW2tleV0uaGFzRXJyb3IoJ3JlcXVpcmVkJykgPyAnWW91IG11c3QgZW50ZXIgYSB2YWx1ZScgOlxuICAgICAgdGhpcy5mb3JtRmllbGRDb250cm9sc1trZXldLmhhc0Vycm9yKCdlbWFpbCcpID8gJ05vdCBhIHZhbGlkIGVtYWlsJyA6XG4gICAgICAgIHRoaXMuZm9ybUZpZWxkQ29udHJvbHNba2V5XS5oYXNFcnJvcignbWluJykgPyBgWW91IGhhdmUgdG8gcHJvdmlkZSBhIHZhbHVlIGdyZWF0ZXIgb3JcbiAgICAgIGVxdWFsIHRvICR7dGhpcy5mb3JtRmllbGRDb250cm9sc1trZXldLmVycm9ycy5taW4ubWlufWAgOlxuICAgICAgICAgICcnO1xuICB9XG5cbiAgbWFwVmFsaWRhdG9yKHZhbGlkYXRvcnMpOiBhbnkge1xuICAgIGlmICh2YWxpZGF0b3JzKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModmFsaWRhdG9ycykubWFwKHZhbGlkYXRpb25UeXBlID0+IHtcbiAgICAgICAgaWYgKHZhbGlkYXRpb25UeXBlID09PSAncmVxdWlyZWQnKSB7XG4gICAgICAgICAgcmV0dXJuIFZhbHVlVmFsaWRhdG9ycy5yZXF1aXJlZDtcbiAgICAgICAgfSBlbHNlIGlmICh2YWxpZGF0aW9uVHlwZSA9PT0gJ21pbicpIHtcbiAgICAgICAgICByZXR1cm4gVmFsdWVWYWxpZGF0b3JzLm1pbih2YWxpZGF0b3JzW3ZhbGlkYXRpb25UeXBlXSk7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsaWRhdGlvblR5cGUgPT09ICdlbWFpbCcpIHtcbiAgICAgICAgICByZXR1cm4gVmFsdWVWYWxpZGF0b3JzLmVtYWlsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxuXG4gIG9uU3VibWl0KCkge1xuICAgIHRoaXMuc3VibWl0Rm9ybS5lbWl0KHRoaXMuZm9ybS52YWx1ZSk7XG4gIH1cbn1cbiJdfQ==