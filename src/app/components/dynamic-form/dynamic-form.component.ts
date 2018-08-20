import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  form: FormGroup;
  formFieldControls = {};
  @Input() formSchema;
  contactProps = [];

  ngOnInit() {
    for (const prop of Object.keys(this.formSchema)) {
      this.formFieldControls[prop] = new FormControl(
        this.formSchema[prop].value,
        this.mapValidator(this.formSchema[prop].validators)
      );

      this.contactProps.push({
        key: prop,
        label: this.formSchema[prop].label,
        type: this.formSchema[prop].type,
        options: this.formSchema[prop].options
      });
    }

    this.form = new FormGroup(this.formFieldControls);
  }

  isInValid(key) {
    const fieldControl = this.formFieldControls[key];
    return fieldControl.invalid && (fieldControl.dirty || fieldControl.touched);
  }

  getErrorMessage(key) {
    return this.formFieldControls[key].hasError('required') ? 'You must enter a value' :
      this.formFieldControls[key].hasError('email') ? 'Not a valid email' :
      this.formFieldControls[key].hasError('min') ? `You have to provide a value greater or
      equal to ${this.formFieldControls[key].errors.min.min}` :
        '';
  }

  mapValidator(validators) {
    if (validators) {
      return Object.keys(validators).map(validationType => {
        if (validationType === 'required') {
          return Validators.required;
        } else if (validationType === 'min') {
          return Validators.min(validators[validationType]);
        } else if (validationType === 'email') {
          return Validators.email;
        }
      });
    } else {
      return [];
    }
  }
}
