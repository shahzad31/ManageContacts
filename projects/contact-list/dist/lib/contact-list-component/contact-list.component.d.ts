import { OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ContactListService } from '../service/contact-list.service';
import { Contact } from '../model/contact.model';
export declare class ContactListComponent implements OnInit {
    private contactsService;
    displayedColumns: string[];
    loading: boolean;
    columns: {
        id: string;
        label: string;
    }[];
    dataSource: MatTableDataSource<Contact>;
    constructor(contactsService: ContactListService);
    ngOnInit(): void;
    applyFilter(filterValue: string): void;
}
