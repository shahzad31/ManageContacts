import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ContactListService } from '../service/contact-list.service';
import { Contact } from '../model/contact.model';

@Component({
  selector: 'ht-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  providers: [ContactListService]
})
export class ContactListComponent implements OnInit {

  @Output() addAction: EventEmitter<any> = new EventEmitter();
  @Output() editAction: EventEmitter<any> = new EventEmitter();
  @Output() deleteAction: EventEmitter<any> = new EventEmitter();

  displayedColumns: string[] = ['select', 'id', 'name', 'age', 'email', 'city'];
  loading = true;
  selected = [];

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
    this.contactsService.store.then((result) => {
      this.loading = false;
      this.dataSource = new MatTableDataSource(result.contacts || []);
    });
  }

  onSelectionChange(changes) {
    this.selected = changes.source.selected;
  }

  onAdd(event) {
    this.addAction.emit(event);
  }

  onEdit(event) {
    this.editAction.emit(event);
  }

  onDelete(event) {
    this.deleteAction.emit(event);
  }
}
