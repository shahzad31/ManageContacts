import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onContactSave(event) {
    this.router.navigate(['/contacts']);
  }

}
