import { OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class DynamicFormComponent implements OnInit {
    form: FormGroup;
    formFieldControls: {};
    contactProps: any[];
    formSchema: any;
    submitForm: EventEmitter<any>;
    ngOnInit(): void;
    isInValid(key: any): any;
    getErrorMessage(key: any): string;
    mapValidator(validators: any): any;
    onSubmit(): void;
}
