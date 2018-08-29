import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-contacts',
  templateUrl: './view-contacts.component.html',
  styleUrls: ['./view-contacts.component.scss'],
  providers: []
})
export class ViewContactsComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onAdd() {
    this.router.navigate(['/new-contact']);
  }

  onEdit() {
    this.router.navigate(['/new-contact']);
  }

  onDelete() {

  }
}
