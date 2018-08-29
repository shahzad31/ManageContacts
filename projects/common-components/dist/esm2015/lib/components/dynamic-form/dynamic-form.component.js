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
    <button type="submit" mat-raised-button color="primary" [disabled]='!formId.form.valid'>Save</button>
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2h0LWNvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZHluYW1pYy1mb3JtL2R5bmFtaWMtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxJQUFJLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBOEN2RixNQUFNOztpQ0FHZ0IsRUFBRTs0QkFDUCxFQUFFOzBCQUd5QixJQUFJLFlBQVksRUFBRTs7Ozs7SUFFNUQsUUFBUTtRQUNOLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxXQUFXLENBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQ3BELENBQUM7WUFFRixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztnQkFDckIsR0FBRyxFQUFFLElBQUk7Z0JBQ1QsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSztnQkFDbEMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSTtnQkFDaEMsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTzthQUN2QyxDQUFDLENBQUM7U0FDSjtRQUVELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FDbkQ7Ozs7O0lBRUQsU0FBUyxDQUFDLEdBQUc7O1FBQ1gsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDN0U7Ozs7O0lBRUQsZUFBZSxDQUFDLEdBQUc7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDbEYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDbkUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3JDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7b0JBQ3JELEVBQUUsQ0FBQztLQUNWOzs7OztJQUVELFlBQVksQ0FBQyxVQUFVO1FBQ3JCLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDZixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUU7Z0JBQ2xELEVBQUUsQ0FBQyxDQUFDLGNBQWMsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUNsQyxNQUFNLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQztpQkFDakM7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGNBQWMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNwQyxNQUFNLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztpQkFDeEQ7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGNBQWMsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUN0QyxNQUFNLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQztpQkFDOUI7YUFDRixDQUFDLENBQUM7U0FDSjtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLEVBQUUsQ0FBQztTQUNYO0tBQ0Y7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN2Qzs7O1lBdEdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQXVDSjtnQkFDTixNQUFNLEVBQUUsQ0FBQyxzVkFBc1YsQ0FBQzthQUNqVzs7O3lCQU9FLEtBQUs7eUJBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgYXMgVmFsdWVWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdodC1keW5hbWljLWZvcm0nLFxuICB0ZW1wbGF0ZTogYDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCIgY2xhc3M9XCJkeW5hbWljLWZvcm0tY29tcG9uZW50XCIgI2Zvcm1JZD1cIm5nRm9ybVwiPlxuXG4gIDxkaXYgKm5nRm9yPVwibGV0IHByb3Agb2YgY29udGFjdFByb3BzXCI+XG4gICAgPGRpdiBbbmdTd2l0Y2hdPVwicHJvcC50eXBlXCI+XG5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdTd2l0Y2hDYXNlPVwiJ3RleHQnXCI+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInt7IHByb3AubGFiZWwgfX1cIiBbdHlwZV09XCJwcm9wLnR5cGVcIiBbZm9ybUNvbnRyb2xOYW1lXT1cInByb3Aua2V5XCI+XG4gICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJpc0luVmFsaWQocHJvcC5rZXkpXCI+e3tnZXRFcnJvck1lc3NhZ2UocHJvcC5rZXkpfX08L21hdC1lcnJvcj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdTd2l0Y2hDYXNlPVwiJ251bWJlcidcIj5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwie3sgcHJvcC5sYWJlbCB9fVwiIFt0eXBlXT1cInByb3AudHlwZVwiIFtmb3JtQ29udHJvbE5hbWVdPVwicHJvcC5rZXlcIj5cbiAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cImlzSW5WYWxpZChwcm9wLmtleSlcIj57e2dldEVycm9yTWVzc2FnZShwcm9wLmtleSl9fTwvbWF0LWVycm9yPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ1N3aXRjaENhc2U9XCInZW1haWwnXCI+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInt7IHByb3AubGFiZWwgfX1cIiBbdHlwZV09XCJwcm9wLnR5cGVcIiBbZm9ybUNvbnRyb2xOYW1lXT1cInByb3Aua2V5XCI+XG4gICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJpc0luVmFsaWQocHJvcC5rZXkpXCI+e3tnZXRFcnJvck1lc3NhZ2UocHJvcC5rZXkpfX08L21hdC1lcnJvcj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8ZGl2ICBjbGFzcz1cInJhZGlvLWdyb3VwXCI+XG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidyYWRpbydcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJtYXQtaW5wdXRcIj57eyBwcm9wLmxhYmVsIH19IDogPC9sYWJlbD5cbiAgICAgICAgICA8bWF0LXJhZGlvLWdyb3VwIFtmb3JtQ29udHJvbE5hbWVdPVwicHJvcC5rZXlcIj5cbiAgICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgcHJvcC5vcHRpb25zXCIgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiPnt7IG9wdGlvbi5sYWJlbCB9fTwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ1N3aXRjaENhc2U9XCInc2VsZWN0J1wiPlxuICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cInt7IHByb3AubGFiZWwgfX1cIiBbZm9ybUNvbnRyb2xOYW1lXT1cInByb3Aua2V5XCI+XG4gICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBwcm9wLm9wdGlvbnNcIiBbdmFsdWVdPVwib3B0aW9uLnZhbHVlXCI+IHt7IG9wdGlvbi5sYWJlbCB9fTwvbWF0LW9wdGlvbj5cbiAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImZvcm0tYWN0aW9uc1wiPlxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIFtkaXNhYmxlZF09JyFmb3JtSWQuZm9ybS52YWxpZCc+U2F2ZTwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvZm9ybT5gLFxuICBzdHlsZXM6IFtgLmR5bmFtaWMtZm9ybS1jb21wb25lbnQgLnJhZGlvLWdyb3Vwe3RleHQtYWxpZ246aW5pdGlhbDtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW4tYm90dG9tOjE1cHh9LmR5bmFtaWMtZm9ybS1jb21wb25lbnQgLnJhZGlvLWdyb3VwIG1hdC1yYWRpby1idXR0b257bWFyZ2luLWxlZnQ6MTBweH0uZHluYW1pYy1mb3JtLWNvbXBvbmVudCAucmFkaW8tZ3JvdXA+ZGl2e3dpZHRoOjMwMHB4fS5keW5hbWljLWZvcm0tY29tcG9uZW50IC5mb3JtLWFjdGlvbnt0ZXh0LWFsaWduOmxlZnR9LmR5bmFtaWMtZm9ybS1jb21wb25lbnQgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMwMHB4fWBdXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBmb3JtOiBGb3JtR3JvdXA7XG4gIGZvcm1GaWVsZENvbnRyb2xzID0ge307XG4gIGNvbnRhY3RQcm9wcyA9IFtdO1xuXG4gIEBJbnB1dCgpIGZvcm1TY2hlbWE7XG4gIEBPdXRwdXQoKSBzdWJtaXRGb3JtOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICBmb3IgKGNvbnN0IHByb3Agb2YgT2JqZWN0LmtleXModGhpcy5mb3JtU2NoZW1hKSkge1xuICAgICAgdGhpcy5mb3JtRmllbGRDb250cm9sc1twcm9wXSA9IG5ldyBGb3JtQ29udHJvbChcbiAgICAgICAgdGhpcy5mb3JtU2NoZW1hW3Byb3BdLnZhbHVlLFxuICAgICAgICB0aGlzLm1hcFZhbGlkYXRvcih0aGlzLmZvcm1TY2hlbWFbcHJvcF0udmFsaWRhdG9ycylcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuY29udGFjdFByb3BzLnB1c2goe1xuICAgICAgICBrZXk6IHByb3AsXG4gICAgICAgIGxhYmVsOiB0aGlzLmZvcm1TY2hlbWFbcHJvcF0ubGFiZWwsXG4gICAgICAgIHR5cGU6IHRoaXMuZm9ybVNjaGVtYVtwcm9wXS50eXBlLFxuICAgICAgICBvcHRpb25zOiB0aGlzLmZvcm1TY2hlbWFbcHJvcF0ub3B0aW9uc1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cCh0aGlzLmZvcm1GaWVsZENvbnRyb2xzKTtcbiAgfVxuXG4gIGlzSW5WYWxpZChrZXkpIHtcbiAgICBjb25zdCBmaWVsZENvbnRyb2wgPSB0aGlzLmZvcm1GaWVsZENvbnRyb2xzW2tleV07XG4gICAgcmV0dXJuIGZpZWxkQ29udHJvbC5pbnZhbGlkICYmIChmaWVsZENvbnRyb2wuZGlydHkgfHwgZmllbGRDb250cm9sLnRvdWNoZWQpO1xuICB9XG5cbiAgZ2V0RXJyb3JNZXNzYWdlKGtleSkge1xuICAgIHJldHVybiB0aGlzLmZvcm1GaWVsZENvbnRyb2xzW2tleV0uaGFzRXJyb3IoJ3JlcXVpcmVkJykgPyAnWW91IG11c3QgZW50ZXIgYSB2YWx1ZScgOlxuICAgICAgdGhpcy5mb3JtRmllbGRDb250cm9sc1trZXldLmhhc0Vycm9yKCdlbWFpbCcpID8gJ05vdCBhIHZhbGlkIGVtYWlsJyA6XG4gICAgICAgIHRoaXMuZm9ybUZpZWxkQ29udHJvbHNba2V5XS5oYXNFcnJvcignbWluJykgPyBgWW91IGhhdmUgdG8gcHJvdmlkZSBhIHZhbHVlIGdyZWF0ZXIgb3JcbiAgICAgIGVxdWFsIHRvICR7dGhpcy5mb3JtRmllbGRDb250cm9sc1trZXldLmVycm9ycy5taW4ubWlufWAgOlxuICAgICAgICAgICcnO1xuICB9XG5cbiAgbWFwVmFsaWRhdG9yKHZhbGlkYXRvcnMpOiBhbnkge1xuICAgIGlmICh2YWxpZGF0b3JzKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModmFsaWRhdG9ycykubWFwKHZhbGlkYXRpb25UeXBlID0+IHtcbiAgICAgICAgaWYgKHZhbGlkYXRpb25UeXBlID09PSAncmVxdWlyZWQnKSB7XG4gICAgICAgICAgcmV0dXJuIFZhbHVlVmFsaWRhdG9ycy5yZXF1aXJlZDtcbiAgICAgICAgfSBlbHNlIGlmICh2YWxpZGF0aW9uVHlwZSA9PT0gJ21pbicpIHtcbiAgICAgICAgICByZXR1cm4gVmFsdWVWYWxpZGF0b3JzLm1pbih2YWxpZGF0b3JzW3ZhbGlkYXRpb25UeXBlXSk7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsaWRhdGlvblR5cGUgPT09ICdlbWFpbCcpIHtcbiAgICAgICAgICByZXR1cm4gVmFsdWVWYWxpZGF0b3JzLmVtYWlsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxuXG4gIG9uU3VibWl0KCkge1xuICAgIHRoaXMuc3VibWl0Rm9ybS5lbWl0KHRoaXMuZm9ybS52YWx1ZSk7XG4gIH1cbn1cbiJdfQ==