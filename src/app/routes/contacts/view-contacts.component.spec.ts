import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonComponentsModule } from 'ht-common-components/dist';
import { ContactAddEditModule } from 'ht-contact-add-edit/dist';
import { ContactListModule } from 'ht-contact-list/dist';
import { RouterTestingModule } from '@angular/router/testing';

import { ViewContactsComponent } from './view-contacts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ViewContactsComponent', () => {
  let component: ViewContactsComponent;
  let fixture: ComponentFixture<ViewContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ContactListModule,
        ContactAddEditModule,
        CommonComponentsModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      declarations: [ViewContactsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have data table', () => {
    component.ngOnInit();
    const hostElem = fixture.nativeElement;
    expect(hostElem.querySelector('ht-data-table') instanceof HTMLElement).toBeTruthy();
  });
});
