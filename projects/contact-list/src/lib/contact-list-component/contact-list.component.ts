import { Component, OnInit } from '@angular/core';
import {  MatTableDataSource } from '@angular/material';
import { ContactListService } from '../service/contact-list.service';
import { Contact } from '../model/contact.model';

@Component({
  selector: 'ht-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  providers: [ContactListService]
})
export class ContactListComponent implements OnInit {

  displayedColumns: string[] = ['select', 'id', 'name', 'age', 'email', 'city'];
  loading = true;

  columns = [
    { id: 'id', label: 'ID' },
    { id: 'name', label: 'Name' },
    { id: 'age', label: 'Age' },
    { id: 'gender', label: 'Gender' },
    { id: 'address', label: 'Address' },
    { id: 'city', label: 'City' },
    { id: 'country', label: 'Country' },
    { id: 'email', label: 'Email' }
  ];

  dataSource: MatTableDataSource<Contact>;


  constructor(private contactsService: ContactListService) {
    this.dataSource = new MatTableDataSource([]);
  }

  ngOnInit() {
    // TODO: show and hide loader on contacts loading
    this.contactsService.store.then((result) => {
      this.loading = false;
      this.dataSource = new MatTableDataSource(result.contacts || []);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
