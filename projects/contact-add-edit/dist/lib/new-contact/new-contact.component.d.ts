import { OnInit, EventEmitter } from '@angular/core';
import { ContactAddEditService } from '../service/contact-list.service';
export declare class NewContactComponent implements OnInit {
    private contactsService;
    saveContact: EventEmitter<any>;
    contact: {
        name: {
            label: string;
            value: string;
            type: string;
            validators: {
                required: boolean;
            };
        };
        gender: {
            label: string;
            value: string;
            type: string;
            options: {
                label: string;
                value: string;
            }[];
        };
        age: {
            label: string;
            value: string;
            type: string;
            validators: {
                min: number;
            };
        };
        email: {
            label: string;
            value: string;
            type: string;
            validators: {
                required: boolean;
                email: boolean;
            };
        };
        city: {
            label: string;
            value: string;
            type: string;
            options: {
                label: string;
                value: string;
            }[];
        };
        country: {
            label: string;
            value: string;
            type: string;
            options: {
                label: string;
                value: string;
            }[];
        };
    };
    constructor(contactsService: ContactAddEditService);
    ngOnInit(): void;
    onContactSave(data: any): void;
}
