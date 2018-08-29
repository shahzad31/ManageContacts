import { OnInit, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ContactListService } from '../service/contact-list.service';
import { Contact } from '../model/contact.model';
export declare class ContactListComponent implements OnInit {
    private contactsService;
    addAction: EventEmitter<any>;
    editAction: EventEmitter<any>;
    deleteAction: EventEmitter<any>;
    displayedColumns: string[];
    loading: boolean;
    selected: any[];
    columns: {
        id: string;
        label: string;
    }[];
    dataSource: MatTableDataSource<Contact>;
    constructor(contactsService: ContactListService);
    ngOnInit(): void;
    onSelectionChange(changes: any): void;
    onAdd(event: any): void;
    onEdit(event: any): void;
    onDelete(event: any): void;
}
