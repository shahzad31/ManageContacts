/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators as ValueValidators } from '@angular/forms';
export class DynamicFormComponent {
    constructor() {
        this.formFieldControls = {};
        this.contactProps = [];
        this.submitForm = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        for (const prop of Object.keys(this.formSchema)) {
            this.formFieldControls[prop] = new FormControl(this.formSchema[prop].value, this.mapValidator(this.formSchema[prop].validators));
            this.contactProps.push({
                key: prop,
                label: this.formSchema[prop].label,
                type: this.formSchema[prop].type,
                options: this.formSchema[prop].options
            });
        }
        this.form = new FormGroup(this.formFieldControls);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    isInValid(key) {
        /** @type {?} */
        const fieldControl = this.formFieldControls[key];
        return fieldControl.invalid && (fieldControl.dirty || fieldControl.touched);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getErrorMessage(key) {
        return this.formFieldControls[key].hasError('required') ? 'You must enter a value' :
            this.formFieldControls[key].hasError('email') ? 'Not a valid email' :
                this.formFieldControls[key].hasError('min') ? `You have to provide a value greater or
      equal to ${this.formFieldControls[key].errors.min.min}` :
                    '';
    }
    /**
     * @param {?} validators
     * @return {?}
     */
    mapValidator(validators) {
        if (validators) {
            return Object.keys(validators).map(validationType => {
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
    }
    /**
     * @return {?}
     */
    onSubmit() {
        this.submitForm.emit(this.form.value);
    }
}
DynamicFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'ht-dynamic-form',
                template: `<form [formGroup]="form" (ngSubmit)="onSubmit()" class="dynamic-form-component" #formId="ngForm">

  <div *ngFor="let prop of contactProps">
    <div [ngSwitch]="prop.type">

      <mat-form-field *ngSwitchCase="'text'">
        <input matInput placeholder="{{ prop.label }}" [type]="prop.type" [formControlName]="prop.key">
        <mat-error *ngIf="isInValid(prop.key)">{{getErrorMessage(prop.key)}}</mat-error>
      </mat-form-field>

      <mat-form-field *ngSwitchCase="'number'">
        <input matInput placeholder="{{ prop.label }}" [type]="prop.type" [formControlName]="prop.key">
        <mat-error *ngIf="isInValid(prop.key)">{{getErrorMessage(prop.key)}}</mat-error>
      </mat-form-field>

      <mat-form-field *ngSwitchCase="'email'">
        <input matInput placeholder="{{ prop.label }}" [type]="prop.type" [formControlName]="prop.key">
        <mat-error *ngIf="isInValid(prop.key)">{{getErrorMessage(prop.key)}}</mat-error>
      </mat-form-field>
      <div  class="radio-group">
        <div *ngSwitchCase="'radio'">
          <label class="mat-input">{{ prop.label }} : </label>
          <mat-radio-group [formControlName]="prop.key">
            <mat-radio-button *ngFor="let option of prop.options" [value]="option.value">{{ option.label }}</mat-radio-button>
          </mat-radio-group>
        </div>
      </div>

      <mat-form-field *ngSwitchCase="'select'">
        <mat-select placeholder="{{ prop.label }}" [formControlName]="prop.key">
          <mat-option *ngFor="let option of prop.options" [value]="option.value"> {{ option.label }}</mat-option>
        </mat-select>
      </mat-form-field>
    </div>
  </div>

  <div class="form-actions">
    <button type="submit" mat-raised-button routerLink="." color="primary" [disabled]='!formId.form.valid'>Save</button>
  </div>
</form>`,
                styles: [`.dynamic-form-component .radio-group{text-align:initial;display:flex;justify-content:center;margin-bottom:15px}.dynamic-form-component .radio-group mat-radio-button{margin-left:10px}.dynamic-form-component .radio-group>div{width:300px}.dynamic-form-component .form-action{text-align:left}.dynamic-form-component .mat-form-field{width:300px}`]
            },] },
];
DynamicFormComponent.propDecorators = {
    formSchema: [{ type: Input }],
    submitForm: [{ type: Output }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2h0LWNvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZHluYW1pYy1mb3JtL2R5bmFtaWMtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxJQUFJLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBOEN2RixNQUFNOztpQ0FHZ0IsRUFBRTs0QkFDUCxFQUFFOzBCQUd5QixJQUFJLFlBQVksRUFBRTs7Ozs7SUFFNUQsUUFBUTtRQUNOLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxXQUFXLENBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQ3BELENBQUM7WUFFRixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztnQkFDckIsR0FBRyxFQUFFLElBQUk7Z0JBQ1QsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSztnQkFDbEMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSTtnQkFDaEMsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTzthQUN2QyxDQUFDLENBQUM7U0FDSjtRQUVELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FDbkQ7Ozs7O0lBRUQsU0FBUyxDQUFDLEdBQUc7O1FBQ1gsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDN0U7Ozs7O0lBRUQsZUFBZSxDQUFDLEdBQUc7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDbEYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDbkUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3JDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7b0JBQ3JELEVBQUUsQ0FBQztLQUNWOzs7OztJQUVELFlBQVksQ0FBQyxVQUFVO1FBQ3JCLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDZixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUU7Z0JBQ2xELEVBQUUsQ0FBQyxDQUFDLGNBQWMsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUNsQyxNQUFNLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQztpQkFDakM7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGNBQWMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNwQyxNQUFNLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztpQkFDeEQ7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGNBQWMsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUN0QyxNQUFNLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQztpQkFDOUI7YUFDRixDQUFDLENBQUM7U0FDSjtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLEVBQUUsQ0FBQztTQUNYO0tBQ0Y7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN2Qzs7O1lBdEdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQXVDSjtnQkFDTixNQUFNLEVBQUUsQ0FBQyxzVkFBc1YsQ0FBQzthQUNqVzs7O3lCQU9FLEtBQUs7eUJBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgYXMgVmFsdWVWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdodC1keW5hbWljLWZvcm0nLFxuICB0ZW1wbGF0ZTogYDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCIgY2xhc3M9XCJkeW5hbWljLWZvcm0tY29tcG9uZW50XCIgI2Zvcm1JZD1cIm5nRm9ybVwiPlxuXG4gIDxkaXYgKm5nRm9yPVwibGV0IHByb3Agb2YgY29udGFjdFByb3BzXCI+XG4gICAgPGRpdiBbbmdTd2l0Y2hdPVwicHJvcC50eXBlXCI+XG5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdTd2l0Y2hDYXNlPVwiJ3RleHQnXCI+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInt7IHByb3AubGFiZWwgfX1cIiBbdHlwZV09XCJwcm9wLnR5cGVcIiBbZm9ybUNvbnRyb2xOYW1lXT1cInByb3Aua2V5XCI+XG4gICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJpc0luVmFsaWQocHJvcC5rZXkpXCI+e3tnZXRFcnJvck1lc3NhZ2UocHJvcC5rZXkpfX08L21hdC1lcnJvcj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdTd2l0Y2hDYXNlPVwiJ251bWJlcidcIj5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwie3sgcHJvcC5sYWJlbCB9fVwiIFt0eXBlXT1cInByb3AudHlwZVwiIFtmb3JtQ29udHJvbE5hbWVdPVwicHJvcC5rZXlcIj5cbiAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cImlzSW5WYWxpZChwcm9wLmtleSlcIj57e2dldEVycm9yTWVzc2FnZShwcm9wLmtleSl9fTwvbWF0LWVycm9yPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ1N3aXRjaENhc2U9XCInZW1haWwnXCI+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInt7IHByb3AubGFiZWwgfX1cIiBbdHlwZV09XCJwcm9wLnR5cGVcIiBbZm9ybUNvbnRyb2xOYW1lXT1cInByb3Aua2V5XCI+XG4gICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJpc0luVmFsaWQocHJvcC5rZXkpXCI+e3tnZXRFcnJvck1lc3NhZ2UocHJvcC5rZXkpfX08L21hdC1lcnJvcj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8ZGl2ICBjbGFzcz1cInJhZGlvLWdyb3VwXCI+XG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidyYWRpbydcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJtYXQtaW5wdXRcIj57eyBwcm9wLmxhYmVsIH19IDogPC9sYWJlbD5cbiAgICAgICAgICA8bWF0LXJhZGlvLWdyb3VwIFtmb3JtQ29udHJvbE5hbWVdPVwicHJvcC5rZXlcIj5cbiAgICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgcHJvcC5vcHRpb25zXCIgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiPnt7IG9wdGlvbi5sYWJlbCB9fTwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ1N3aXRjaENhc2U9XCInc2VsZWN0J1wiPlxuICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cInt7IHByb3AubGFiZWwgfX1cIiBbZm9ybUNvbnRyb2xOYW1lXT1cInByb3Aua2V5XCI+XG4gICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBwcm9wLm9wdGlvbnNcIiBbdmFsdWVdPVwib3B0aW9uLnZhbHVlXCI+IHt7IG9wdGlvbi5sYWJlbCB9fTwvbWF0LW9wdGlvbj5cbiAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImZvcm0tYWN0aW9uc1wiPlxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG1hdC1yYWlzZWQtYnV0dG9uIHJvdXRlckxpbms9XCIuXCIgY29sb3I9XCJwcmltYXJ5XCIgW2Rpc2FibGVkXT0nIWZvcm1JZC5mb3JtLnZhbGlkJz5TYXZlPC9idXR0b24+XG4gIDwvZGl2PlxuPC9mb3JtPmAsXG4gIHN0eWxlczogW2AuZHluYW1pYy1mb3JtLWNvbXBvbmVudCAucmFkaW8tZ3JvdXB7dGV4dC1hbGlnbjppbml0aWFsO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbi1ib3R0b206MTVweH0uZHluYW1pYy1mb3JtLWNvbXBvbmVudCAucmFkaW8tZ3JvdXAgbWF0LXJhZGlvLWJ1dHRvbnttYXJnaW4tbGVmdDoxMHB4fS5keW5hbWljLWZvcm0tY29tcG9uZW50IC5yYWRpby1ncm91cD5kaXZ7d2lkdGg6MzAwcHh9LmR5bmFtaWMtZm9ybS1jb21wb25lbnQgLmZvcm0tYWN0aW9ue3RleHQtYWxpZ246bGVmdH0uZHluYW1pYy1mb3JtLWNvbXBvbmVudCAubWF0LWZvcm0tZmllbGR7d2lkdGg6MzAwcHh9YF1cbn0pXG5leHBvcnQgY2xhc3MgRHluYW1pY0Zvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGZvcm06IEZvcm1Hcm91cDtcbiAgZm9ybUZpZWxkQ29udHJvbHMgPSB7fTtcbiAgY29udGFjdFByb3BzID0gW107XG5cbiAgQElucHV0KCkgZm9ybVNjaGVtYTtcbiAgQE91dHB1dCgpIHN1Ym1pdEZvcm06IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIGZvciAoY29uc3QgcHJvcCBvZiBPYmplY3Qua2V5cyh0aGlzLmZvcm1TY2hlbWEpKSB7XG4gICAgICB0aGlzLmZvcm1GaWVsZENvbnRyb2xzW3Byb3BdID0gbmV3IEZvcm1Db250cm9sKFxuICAgICAgICB0aGlzLmZvcm1TY2hlbWFbcHJvcF0udmFsdWUsXG4gICAgICAgIHRoaXMubWFwVmFsaWRhdG9yKHRoaXMuZm9ybVNjaGVtYVtwcm9wXS52YWxpZGF0b3JzKVxuICAgICAgKTtcblxuICAgICAgdGhpcy5jb250YWN0UHJvcHMucHVzaCh7XG4gICAgICAgIGtleTogcHJvcCxcbiAgICAgICAgbGFiZWw6IHRoaXMuZm9ybVNjaGVtYVtwcm9wXS5sYWJlbCxcbiAgICAgICAgdHlwZTogdGhpcy5mb3JtU2NoZW1hW3Byb3BdLnR5cGUsXG4gICAgICAgIG9wdGlvbnM6IHRoaXMuZm9ybVNjaGVtYVtwcm9wXS5vcHRpb25zXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKHRoaXMuZm9ybUZpZWxkQ29udHJvbHMpO1xuICB9XG5cbiAgaXNJblZhbGlkKGtleSkge1xuICAgIGNvbnN0IGZpZWxkQ29udHJvbCA9IHRoaXMuZm9ybUZpZWxkQ29udHJvbHNba2V5XTtcbiAgICByZXR1cm4gZmllbGRDb250cm9sLmludmFsaWQgJiYgKGZpZWxkQ29udHJvbC5kaXJ0eSB8fCBmaWVsZENvbnRyb2wudG91Y2hlZCk7XG4gIH1cblxuICBnZXRFcnJvck1lc3NhZ2Uoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybUZpZWxkQ29udHJvbHNba2V5XS5oYXNFcnJvcigncmVxdWlyZWQnKSA/ICdZb3UgbXVzdCBlbnRlciBhIHZhbHVlJyA6XG4gICAgICB0aGlzLmZvcm1GaWVsZENvbnRyb2xzW2tleV0uaGFzRXJyb3IoJ2VtYWlsJykgPyAnTm90IGEgdmFsaWQgZW1haWwnIDpcbiAgICAgICAgdGhpcy5mb3JtRmllbGRDb250cm9sc1trZXldLmhhc0Vycm9yKCdtaW4nKSA/IGBZb3UgaGF2ZSB0byBwcm92aWRlIGEgdmFsdWUgZ3JlYXRlciBvclxuICAgICAgZXF1YWwgdG8gJHt0aGlzLmZvcm1GaWVsZENvbnRyb2xzW2tleV0uZXJyb3JzLm1pbi5taW59YCA6XG4gICAgICAgICAgJyc7XG4gIH1cblxuICBtYXBWYWxpZGF0b3IodmFsaWRhdG9ycyk6IGFueSB7XG4gICAgaWYgKHZhbGlkYXRvcnMpIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWxpZGF0b3JzKS5tYXAodmFsaWRhdGlvblR5cGUgPT4ge1xuICAgICAgICBpZiAodmFsaWRhdGlvblR5cGUgPT09ICdyZXF1aXJlZCcpIHtcbiAgICAgICAgICByZXR1cm4gVmFsdWVWYWxpZGF0b3JzLnJlcXVpcmVkO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbGlkYXRpb25UeXBlID09PSAnbWluJykge1xuICAgICAgICAgIHJldHVybiBWYWx1ZVZhbGlkYXRvcnMubWluKHZhbGlkYXRvcnNbdmFsaWRhdGlvblR5cGVdKTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWxpZGF0aW9uVHlwZSA9PT0gJ2VtYWlsJykge1xuICAgICAgICAgIHJldHVybiBWYWx1ZVZhbGlkYXRvcnMuZW1haWw7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgdGhpcy5zdWJtaXRGb3JtLmVtaXQodGhpcy5mb3JtLnZhbHVlKTtcbiAgfVxufVxuIl19