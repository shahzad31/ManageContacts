import { OnInit } from '@angular/core';
import { ContactAddEditService } from '../service/contact-list.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
export declare class NewContactComponent implements OnInit {
    private contactsService;
    private router;
    private store;
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
    constructor(contactsService: ContactAddEditService, router: Router, store: Store<any>);
    ngOnInit(): void;
    onContactSave(data: any): void;
}
