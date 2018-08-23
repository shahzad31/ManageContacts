import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router'
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ContactsService } from "../../services/contacts.service";
import { Contact } from "../../models/contact.model";

@Component({
  selector: 'app-view-contacts',
  templateUrl: './view-contacts.component.html',
  styleUrls: ['./view-contacts.component.scss'],
  providers: [ContactsService]
})
export class ViewContactsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'age', 'email', 'city'];

  columns = [
    { id: 'id', label: 'ID' },
    { id: 'name', label: 'Name' },
    { id: 'age', label: 'Age' },
    { id: 'gender', label: 'Gender' },
    { id: 'address', label: 'Address' },
    { id: 'city', label: 'City' },
    { id: 'country', label: 'Country' },
    { id: 'email', label: 'Email' }
  ]

  dataSource: MatTableDataSource<Contact>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private contactsService: ContactsService) {
    this.dataSource = new MatTableDataSource([]);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // TODO: show and hide loader on contacts loading
    this.contactsService.store.then((result) => {
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
