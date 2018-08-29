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
                    template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" class=\"dynamic-form-component\" #formId=\"ngForm\">\n\n  <div *ngFor=\"let prop of contactProps\">\n    <div [ngSwitch]=\"prop.type\">\n\n      <mat-form-field *ngSwitchCase=\"'text'\">\n        <input matInput placeholder=\"{{ prop.label }}\" [type]=\"prop.type\" [formControlName]=\"prop.key\">\n        <mat-error *ngIf=\"isInValid(prop.key)\">{{getErrorMessage(prop.key)}}</mat-error>\n      </mat-form-field>\n\n      <mat-form-field *ngSwitchCase=\"'number'\">\n        <input matInput placeholder=\"{{ prop.label }}\" [type]=\"prop.type\" [formControlName]=\"prop.key\">\n        <mat-error *ngIf=\"isInValid(prop.key)\">{{getErrorMessage(prop.key)}}</mat-error>\n      </mat-form-field>\n\n      <mat-form-field *ngSwitchCase=\"'email'\">\n        <input matInput placeholder=\"{{ prop.label }}\" [type]=\"prop.type\" [formControlName]=\"prop.key\">\n        <mat-error *ngIf=\"isInValid(prop.key)\">{{getErrorMessage(prop.key)}}</mat-error>\n      </mat-form-field>\n      <div  class=\"radio-group\">\n        <div *ngSwitchCase=\"'radio'\">\n          <label class=\"mat-input\">{{ prop.label }} : </label>\n          <mat-radio-group [formControlName]=\"prop.key\">\n            <mat-radio-button *ngFor=\"let option of prop.options\" [value]=\"option.value\">{{ option.label }}</mat-radio-button>\n          </mat-radio-group>\n        </div>\n      </div>\n\n      <mat-form-field *ngSwitchCase=\"'select'\">\n        <mat-select placeholder=\"{{ prop.label }}\" [formControlName]=\"prop.key\">\n          <mat-option *ngFor=\"let option of prop.options\" [value]=\"option.value\"> {{ option.label }}</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n  </div>\n\n  <div class=\"form-actions\">\n    <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]='!formId.form.valid'>Save</button>\n  </div>\n</form>",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2h0LWNvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZHluYW1pYy1mb3JtL2R5bmFtaWMtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsSUFBSSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O2lDQWlEakUsRUFBRTs0QkFDUCxFQUFFOzBCQUd5QixJQUFJLFlBQVksRUFBRTs7Ozs7SUFFNUQsdUNBQVE7OztJQUFSOztZQUNFLEdBQUcsQ0FBQyxDQUFlLElBQUEsS0FBQSxpQkFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQSxnQkFBQTtnQkFBMUMsSUFBTSxJQUFJLFdBQUE7Z0JBQ2IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksV0FBVyxDQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUNwRCxDQUFDO2dCQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO29CQUNyQixHQUFHLEVBQUUsSUFBSTtvQkFDVCxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLO29CQUNsQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJO29CQUNoQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPO2lCQUN2QyxDQUFDLENBQUM7YUFDSjs7Ozs7Ozs7O1FBRUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs7S0FDbkQ7Ozs7O0lBRUQsd0NBQVM7Ozs7SUFBVCxVQUFVLEdBQUc7O1FBQ1gsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDN0U7Ozs7O0lBRUQsOENBQWU7Ozs7SUFBZixVQUFnQixHQUFHO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQ2xGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUM7Z0JBQ25FLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLDREQUNyQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFLLENBQUMsQ0FBQztvQkFDckQsRUFBRSxDQUFDO0tBQ1Y7Ozs7O0lBRUQsMkNBQVk7Ozs7SUFBWixVQUFhLFVBQVU7UUFDckIsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNmLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLGNBQWM7Z0JBQy9DLEVBQUUsQ0FBQyxDQUFDLGNBQWMsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUNsQyxNQUFNLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQztpQkFDakM7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGNBQWMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNwQyxNQUFNLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztpQkFDeEQ7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGNBQWMsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUN0QyxNQUFNLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQztpQkFDOUI7YUFDRixDQUFDLENBQUM7U0FDSjtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLEVBQUUsQ0FBQztTQUNYO0tBQ0Y7Ozs7SUFFRCx1Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3ZDOztnQkF0R0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSw2M0RBdUNKO29CQUNOLE1BQU0sRUFBRSxDQUFDLHNWQUFzVixDQUFDO2lCQUNqVzs7OzZCQU9FLEtBQUs7NkJBQ0wsTUFBTTs7K0JBdERUOztTQStDYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIGFzIFZhbHVlVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaHQtZHluYW1pYy1mb3JtJyxcbiAgdGVtcGxhdGU6IGA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiIGNsYXNzPVwiZHluYW1pYy1mb3JtLWNvbXBvbmVudFwiICNmb3JtSWQ9XCJuZ0Zvcm1cIj5cblxuICA8ZGl2ICpuZ0Zvcj1cImxldCBwcm9wIG9mIGNvbnRhY3RQcm9wc1wiPlxuICAgIDxkaXYgW25nU3dpdGNoXT1cInByb3AudHlwZVwiPlxuXG4gICAgICA8bWF0LWZvcm0tZmllbGQgKm5nU3dpdGNoQ2FzZT1cIid0ZXh0J1wiPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJ7eyBwcm9wLmxhYmVsIH19XCIgW3R5cGVdPVwicHJvcC50eXBlXCIgW2Zvcm1Db250cm9sTmFtZV09XCJwcm9wLmtleVwiPlxuICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwiaXNJblZhbGlkKHByb3Aua2V5KVwiPnt7Z2V0RXJyb3JNZXNzYWdlKHByb3Aua2V5KX19PC9tYXQtZXJyb3I+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgICA8bWF0LWZvcm0tZmllbGQgKm5nU3dpdGNoQ2FzZT1cIidudW1iZXInXCI+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInt7IHByb3AubGFiZWwgfX1cIiBbdHlwZV09XCJwcm9wLnR5cGVcIiBbZm9ybUNvbnRyb2xOYW1lXT1cInByb3Aua2V5XCI+XG4gICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJpc0luVmFsaWQocHJvcC5rZXkpXCI+e3tnZXRFcnJvck1lc3NhZ2UocHJvcC5rZXkpfX08L21hdC1lcnJvcj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdTd2l0Y2hDYXNlPVwiJ2VtYWlsJ1wiPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJ7eyBwcm9wLmxhYmVsIH19XCIgW3R5cGVdPVwicHJvcC50eXBlXCIgW2Zvcm1Db250cm9sTmFtZV09XCJwcm9wLmtleVwiPlxuICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwiaXNJblZhbGlkKHByb3Aua2V5KVwiPnt7Z2V0RXJyb3JNZXNzYWdlKHByb3Aua2V5KX19PC9tYXQtZXJyb3I+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgPGRpdiAgY2xhc3M9XCJyYWRpby1ncm91cFwiPlxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCIncmFkaW8nXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwibWF0LWlucHV0XCI+e3sgcHJvcC5sYWJlbCB9fSA6IDwvbGFiZWw+XG4gICAgICAgICAgPG1hdC1yYWRpby1ncm91cCBbZm9ybUNvbnRyb2xOYW1lXT1cInByb3Aua2V5XCI+XG4gICAgICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIHByb3Aub3B0aW9uc1wiIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIj57eyBvcHRpb24ubGFiZWwgfX08L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdTd2l0Y2hDYXNlPVwiJ3NlbGVjdCdcIj5cbiAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJ7eyBwcm9wLmxhYmVsIH19XCIgW2Zvcm1Db250cm9sTmFtZV09XCJwcm9wLmtleVwiPlxuICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgcHJvcC5vcHRpb25zXCIgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiPiB7eyBvcHRpb24ubGFiZWwgfX08L21hdC1vcHRpb24+XG4gICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJmb3JtLWFjdGlvbnNcIj5cbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBbZGlzYWJsZWRdPSchZm9ybUlkLmZvcm0udmFsaWQnPlNhdmU8L2J1dHRvbj5cbiAgPC9kaXY+XG48L2Zvcm0+YCxcbiAgc3R5bGVzOiBbYC5keW5hbWljLWZvcm0tY29tcG9uZW50IC5yYWRpby1ncm91cHt0ZXh0LWFsaWduOmluaXRpYWw7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7bWFyZ2luLWJvdHRvbToxNXB4fS5keW5hbWljLWZvcm0tY29tcG9uZW50IC5yYWRpby1ncm91cCBtYXQtcmFkaW8tYnV0dG9ue21hcmdpbi1sZWZ0OjEwcHh9LmR5bmFtaWMtZm9ybS1jb21wb25lbnQgLnJhZGlvLWdyb3VwPmRpdnt3aWR0aDozMDBweH0uZHluYW1pYy1mb3JtLWNvbXBvbmVudCAuZm9ybS1hY3Rpb257dGV4dC1hbGlnbjpsZWZ0fS5keW5hbWljLWZvcm0tY29tcG9uZW50IC5tYXQtZm9ybS1maWVsZHt3aWR0aDozMDBweH1gXVxufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgZm9ybTogRm9ybUdyb3VwO1xuICBmb3JtRmllbGRDb250cm9scyA9IHt9O1xuICBjb250YWN0UHJvcHMgPSBbXTtcblxuICBASW5wdXQoKSBmb3JtU2NoZW1hO1xuICBAT3V0cHV0KCkgc3VibWl0Rm9ybTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgZm9yIChjb25zdCBwcm9wIG9mIE9iamVjdC5rZXlzKHRoaXMuZm9ybVNjaGVtYSkpIHtcbiAgICAgIHRoaXMuZm9ybUZpZWxkQ29udHJvbHNbcHJvcF0gPSBuZXcgRm9ybUNvbnRyb2woXG4gICAgICAgIHRoaXMuZm9ybVNjaGVtYVtwcm9wXS52YWx1ZSxcbiAgICAgICAgdGhpcy5tYXBWYWxpZGF0b3IodGhpcy5mb3JtU2NoZW1hW3Byb3BdLnZhbGlkYXRvcnMpXG4gICAgICApO1xuXG4gICAgICB0aGlzLmNvbnRhY3RQcm9wcy5wdXNoKHtcbiAgICAgICAga2V5OiBwcm9wLFxuICAgICAgICBsYWJlbDogdGhpcy5mb3JtU2NoZW1hW3Byb3BdLmxhYmVsLFxuICAgICAgICB0eXBlOiB0aGlzLmZvcm1TY2hlbWFbcHJvcF0udHlwZSxcbiAgICAgICAgb3B0aW9uczogdGhpcy5mb3JtU2NoZW1hW3Byb3BdLm9wdGlvbnNcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAodGhpcy5mb3JtRmllbGRDb250cm9scyk7XG4gIH1cblxuICBpc0luVmFsaWQoa2V5KSB7XG4gICAgY29uc3QgZmllbGRDb250cm9sID0gdGhpcy5mb3JtRmllbGRDb250cm9sc1trZXldO1xuICAgIHJldHVybiBmaWVsZENvbnRyb2wuaW52YWxpZCAmJiAoZmllbGRDb250cm9sLmRpcnR5IHx8IGZpZWxkQ29udHJvbC50b3VjaGVkKTtcbiAgfVxuXG4gIGdldEVycm9yTWVzc2FnZShrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtRmllbGRDb250cm9sc1trZXldLmhhc0Vycm9yKCdyZXF1aXJlZCcpID8gJ1lvdSBtdXN0IGVudGVyIGEgdmFsdWUnIDpcbiAgICAgIHRoaXMuZm9ybUZpZWxkQ29udHJvbHNba2V5XS5oYXNFcnJvcignZW1haWwnKSA/ICdOb3QgYSB2YWxpZCBlbWFpbCcgOlxuICAgICAgICB0aGlzLmZvcm1GaWVsZENvbnRyb2xzW2tleV0uaGFzRXJyb3IoJ21pbicpID8gYFlvdSBoYXZlIHRvIHByb3ZpZGUgYSB2YWx1ZSBncmVhdGVyIG9yXG4gICAgICBlcXVhbCB0byAke3RoaXMuZm9ybUZpZWxkQ29udHJvbHNba2V5XS5lcnJvcnMubWluLm1pbn1gIDpcbiAgICAgICAgICAnJztcbiAgfVxuXG4gIG1hcFZhbGlkYXRvcih2YWxpZGF0b3JzKTogYW55IHtcbiAgICBpZiAodmFsaWRhdG9ycykge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbGlkYXRvcnMpLm1hcCh2YWxpZGF0aW9uVHlwZSA9PiB7XG4gICAgICAgIGlmICh2YWxpZGF0aW9uVHlwZSA9PT0gJ3JlcXVpcmVkJykge1xuICAgICAgICAgIHJldHVybiBWYWx1ZVZhbGlkYXRvcnMucmVxdWlyZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsaWRhdGlvblR5cGUgPT09ICdtaW4nKSB7XG4gICAgICAgICAgcmV0dXJuIFZhbHVlVmFsaWRhdG9ycy5taW4odmFsaWRhdG9yc1t2YWxpZGF0aW9uVHlwZV0pO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbGlkYXRpb25UeXBlID09PSAnZW1haWwnKSB7XG4gICAgICAgICAgcmV0dXJuIFZhbHVlVmFsaWRhdG9ycy5lbWFpbDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICBvblN1Ym1pdCgpIHtcbiAgICB0aGlzLnN1Ym1pdEZvcm0uZW1pdCh0aGlzLmZvcm0udmFsdWUpO1xuICB9XG59XG4iXX0=